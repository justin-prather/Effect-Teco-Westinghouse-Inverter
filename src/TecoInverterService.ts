/**
 * @fileoverview Effect service for communicating with Teco/Westinghouse A510 inverters over Modbus.
 *
 * Exposes a scoped {@link TecoInverterService} that manages a Modbus client pool per device.
 * Provides typed access to:
 * - **Command registers** (write): operation, frequency, torque, speed limit, analog/digital out
 * - **Monitor registers** (read): state, errors, warnings, frequency, current, voltage
 * - **Parameter groups** (read/write): all Groups 00–22 via {@link TecoInverterService.parameters}
 *
 * Supports both RTU and ASCII transport variants. Includes an automatic safe-shutdown finalizer
 * that stops the motor on service exit.
 *
 * @example
 * import { Effect, Layer } from "effect";
 * import { TecoInverterService } from "./src/TecoInverterService";
 * import { SerialTransportService } from "effect-modbus-rs";
 *
 * const program = Effect.gen(function* () {
 *   const inverter = yield* TecoInverterService;
 *   const freq = yield* inverter.frequencyCommand(1).read();
 *   yield* inverter.frequencyCommand(1).update(50.0);
 * });
 *
 * const layer = Layer.provideMerge(
 *   TecoInverterService.Default(true),
 *   SerialTransportService.fromRtu({ portPath: "/dev/ttyUSB0", baudRate: 19200 }),
 * );
 *
 * program.pipe(Effect.provide(layer), BunRuntime.runMain);
 *
 * @module
 */

import { Effect, Record } from "effect";
import {
  SerialTransportService,
  type SlaveDeviceDefinition,
} from "effect-modbus-rs";
import { COMMAND_REGISTERS, MONITOR_REGISTERS } from "./Registers";
import * as S from "./schemas";
import * as P from "./parameters";

/**
 * Extracts the default wire-format value for a parameter config.
 *
 * For UInt16 and Enum params the default is returned as-is.
 * For Scaled and SignedScaled params the default is divided by the factor
 * and rounded, since the wire format stores domain / factor.
 */
const paramDefault = (config: P.ParamConfig): number => {
  const raw = Number(config.meta.default);
  if (Number.isNaN(raw)) return 0;
  switch (config.kind) {
    case P.ParamKind.UInt16:
    case P.ParamKind.Enum:
      return raw;
    case P.ParamKind.Scaled:
    case P.ParamKind.SignedScaled:
      return Math.round(raw / config.factor);
    case P.ParamKind.Bitfield:
    case P.ParamKind.Lookup:
      return raw;
  }
};

const allParamGroups = [
  P.group00,
  P.group01,
  P.group02,
  P.group03,
  P.group04,
  P.group05,
  P.group06,
  P.group07,
  P.group08,
  P.group09,
  P.group10,
  P.group11,
  P.group12,
  P.group13,
  P.group14,
  P.group15,
  P.group16,
  P.group17,
  P.group18,
  P.group19,
  P.group20,
  P.group21,
  P.group22,
] as const;

const paramRegisterDefs: ReadonlyArray<{
  readonly address: number;
  readonly default: number;
}> = allParamGroups.flatMap((group) =>
  Object.values(group).map((config) => ({
    address: config.register,
    default: paramDefault(config),
  })),
);

/**
 * Effect service for interacting with a Teco/Westinghouse A510 inverter over Modbus.
 *
 * Instantiate with {@link TecoInverterService.Default} and provide the appropriate
 * transport layer ({@link RtuTransportService} or {@link AsciiTransportService}).
 *
 * @see TecoInverterService.Default
 */
export class TecoInverterService extends Effect.Service<TecoInverterService>()(
  "TecoInverterService",
  {
    scoped: Effect.fnUntraced(function* (safeShutdown: boolean = true) {
      const transport = yield* SerialTransportService;

      const deviceCache = new Set<number>();
      const cacheDevice = (device: number) => deviceCache.add(device);

      const readHolding = <A, E, R>(
        address: number,
        decode: (raw: unknown) => Effect.Effect<A, E, R>,
      ) =>
        Effect.fnUntraced(function* (deviceId: number) {
          cacheDevice(deviceId);
          const client = yield* transport.withClient(deviceId);
          const [raw] = yield* client.readHoldingRegisters({
            address,
            quantity: 1,
          });
          return yield* decode(raw);
        });

      const makeReadModifyWrite =
        <T, P, E1, R1, E2, R2>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, E1, R1>,
          encode: (value: T) => Effect.Effect<number, E2, R2>,
          merge: (base: T, patch: P) => T,
        ) =>
        (deviceId: number) => {
          const read = () => readHolding(address, decode)(deviceId);
          const update = Effect.fnUntraced(function* (patch: P) {
            const current = yield* read();
            const merged = merge(current, patch);
            const encoded = yield* encode(merged);
            cacheDevice(deviceId);
            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({ address, value: encoded });
          });
          return { read, update };
        };

      const makeReadWrite =
        <T, E1, R1, E2, R2>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, E1, R1>,
          encode: (value: T) => Effect.Effect<number, E2, R2>,
        ) =>
        (deviceId: number) => {
          const read = () => readHolding(address, decode)(deviceId);
          const update = Effect.fnUntraced(function* (value: T) {
            cacheDevice(deviceId);
            const client = yield* transport.withClient(deviceId);
            const encoded = yield* encode(value);
            yield* client.writeSingleRegister({ address, value: encoded });
          });
          return { read, update };
        };

      const makeMonitor =
        <T, E, R>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, E, R>,
        ) =>
        (deviceId: number) => ({
          read: () => readHolding(address, decode)(deviceId),
        });

      const makeParamOpsFromConfig = <C extends P.ParamConfig>(config: C) => {
        const { decode, encode } = P.fromConfig(config);
        const ops = makeReadWrite(config.register, decode, encode);
        return Object.assign((deviceId: number) => ops(deviceId), {
          meta: config.meta,
        }) as P.ParamCallableOfEntry<P.ParamEntryOfConfig<C>>;
      };

      const makeGroupParamOps = <C extends Record<string, P.ParamConfig>>(
        configs: C,
      ) => {
        const entries = (
          Object.keys(configs) as Array<Extract<keyof C, string>>
        ).map((key) => [key, makeParamOpsFromConfig(configs[key]!)] as const);

        return Record.fromEntries(entries) as P.GroupParamOps<C>;
      };

      const operationCommand = makeReadModifyWrite(
        COMMAND_REGISTERS.OPERATION_COMMAND,
        S.decodeCommandWord,
        S.encodeCommandWord,
        S.mergeCommandWordPatch,
      );

      if (safeShutdown) {
        yield* Effect.addFinalizer(() =>
          Effect.forEach(deviceCache, (deviceId) => {
            return operationCommand(deviceId)
              .update(new S.CommandWordPatch({ run: false }))
              .pipe(
                Effect.catchAll((err) =>
                  Effect.logWarning(
                    "Error while stopping fan on exit: ",
                    err,
                  ).pipe(Effect.asVoid),
                ),
              );
          }),
        );
      }

      return {
        /**
         * Start/stop/reverse the inverter and signal external faults.
         * Register 0x2501.
         *
         * Uses read-modify-write semantics: only the fields present in the patch
         * are written back, preserving the current state of unchanged bits.
         *
         * @example
         * // Run forward
         * yield* inverter.operationCommand(1).update({ run: true });
         * // Fault reset pulse
         * yield* inverter.operationCommand(1).update({ faultReset: true });
         * // Stop
         * yield* inverter.operationCommand(1).update({ run: false });
         */
        operationCommand,
        /**
         * Set the target output frequency in Hz.
         * Register 0x2502. Range 0.00–599.00 Hz (wire: 0–59900, 0.01 Hz/count).
         *
         * @example
         * yield* inverter.frequencyCommand(1).update(50.0); // 50 Hz
         * const freq = yield* inverter.frequencyCommand(1).read(); // FrequencyHz
         */
        frequencyCommand: makeReadWrite(
          COMMAND_REGISTERS.FREQUENCY_COMMAND,
          S.decodeFrequencyCommand,
          S.encodeFrequencyCommand,
        ),
        /**
         * Set the torque limit / torque command as a percentage of rated torque.
         * Register 0x2503. Range –100.0–100.0% (wire: Int16, ÷81.92).
         *
         * @example
         * yield* inverter.torqueCommand(1).update(75.0); // 75% torque
         * const torque = yield* inverter.torqueCommand(1).read(); // TorquePercent
         */
        torqueCommand: makeReadWrite(
          COMMAND_REGISTERS.TORQUE_COMMAND,
          S.decodeTorqueCommand,
          S.encodeTorqueCommand,
        ),
        /**
         * Set the speed limit as a percentage of nominal speed.
         * Register 0x2504. Range –120–120% (wire: Int16, 1:1 mapping).
         *
         * @example
         * yield* inverter.speedLimitCommand(1).update(100); // 100% speed limit
         */
        speedLimitCommand: makeReadWrite(
          COMMAND_REGISTERS.SPEED_LIMIT_COMMAND,
          S.decodeSpeedLimitCommand,
          S.encodeSpeedLimitCommand,
        ),
        /**
         * Set analog output 1 target voltage.
         * Register 0x2505. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * yield* inverter.analogOut1Command(1).update(5.0); // 5.00 V
         */
        analogOut1Command: makeReadWrite(
          COMMAND_REGISTERS.ANALOG_OUT_1_COMMAND,
          S.decodeAnalogOut1Command,
          S.encodeAnalogOut1Command,
        ),
        /**
         * Set analog output 2 target voltage.
         * Register 0x2506. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * yield* inverter.analogOut2Command(1).update(7.5); // 7.50 V
         */
        analogOut2Command: makeReadWrite(
          COMMAND_REGISTERS.ANALOG_OUT_2_COMMAND,
          S.decodeAnalogOut2Command,
          S.encodeAnalogOut2Command,
        ),
        /**
         * Control digital output terminals (RY1, RY2, pulse train).
         * Register 0x2507.
         *
         * Uses read-modify-write semantics: only the fields present in the patch
         * are written back, preserving the current state of unchanged bits.
         *
         * @example
         * yield* inverter.digitalOutCommand(1).update({ ry1: true, ry2: false });
         */
        digitalOutCommand: makeReadModifyWrite(
          COMMAND_REGISTERS.DIGITAL_OUT_COMMAND,
          S.decodeDigitalOutCommand,
          S.encodeDigitalOutCommand,
          S.mergeDigitalOutCommandPatch,
        ),
        /**
         * Read the current inverter operating state as individual flag fields.
         * Register 0x2520. Flags include: run, reverse, fault, warning, zeroSpeed,
         * underVoltage, overTorque, and more.
         *
         * @example
         * const state = yield* inverter.stateMonitor(1).read();
         * if (state.fault) { /* handle fault *\/ }
         * if (state.run && !state.reverse) { /* running forward *\/ }
         */
        stateMonitor: makeMonitor(
          MONITOR_REGISTERS.STATE_MONITOR,
          S.decodeStateMonitor,
        ),
        /**
         * Read the current fault/error code and get a human-readable description.
         * Register 0x2521. Returns a string such as `"OC (Over-current)"` or `"UV (Under-voltage)"`.
         *
         * @example
         * const err = yield* inverter.errorDescriptionMonitor(1).read(); // "OC (Over-current)"
         */
        errorDescriptionMonitor: makeMonitor(
          MONITOR_REGISTERS.ERROR_DESCRIPTION_MONITOR,
          S.decodeErrorDescriptionMonitor,
        ),
        /**
         * Read the state of the eight digital input terminals S1–S8.
         * Register 0x2522. Each bit reflects the live logic level of one terminal.
         *
         * @example
         * const inputs = yield* inverter.digitalInStateMonitor(1).read();
         * if (inputs.s1) { /* S1 is active *\/ }
         */
        digitalInStateMonitor: makeMonitor(
          MONITOR_REGISTERS.DIGITAL_IN_STATE_MONITOR,
          S.decodeDigitalInStateMonitor,
        ),
        /**
         * Read the frequency command currently in effect (after ramps, limits, etc.).
         * Register 0x2523. Returns a FrequencyHz value.
         *
         * @example
         * const freq = yield* inverter.frequencyCommandMonitor(1).read(); // FrequencyHz
         */
        frequencyCommandMonitor: makeMonitor(
          MONITOR_REGISTERS.FREQUENCY_COMMAND_MONITOR,
          S.decodeFrequencyCommandMonitor,
        ),
        /**
         * Read the actual inverter output frequency.
         * Register 0x2524. Returns a FrequencyHz value.
         *
         * @example
         * const outFreq = yield* inverter.outputFrequencyMonitor(1).read(); // FrequencyHz
         */
        outputFrequencyMonitor: makeMonitor(
          MONITOR_REGISTERS.OUTPUT_FREQUENCY_MONITOR,
          S.decodeOutputFrequencyMonitor,
        ),
        /**
         * Read the DC bus voltage in volts.
         * Register 0x2526. Range 0.0–1000.0 V (wire: 0–10000, 0.1 V/count).
         *
         * @example
         * const dcBus = yield* inverter.dcBusVoltageCommandMonitor(1).read(); // DCBusVoltage
         */
        dcBusVoltageCommandMonitor: makeMonitor(
          MONITOR_REGISTERS.DC_VOLTAGE_COMMAND_MONITOR,
          S.decodeDCBusVoltageCommandMonitor,
        ),
        /**
         * Read the inverter output current in amps.
         * Register 0x2527. Range 0.0–6553.5 A (wire: 0–65535, 0.1 A/count).
         *
         * @example
         * const current = yield* inverter.outputCurrentMonitor(1).read(); // CurrentAmps
         */
        outputCurrentMonitor: makeMonitor(
          MONITOR_REGISTERS.OUTPUT_CURRENT_MONITOR,
          S.decodeOutputCurrentMonitor,
        ),
        /**
         * Read the current warning/alarm code and get a human-readable description.
         * Register 0x2528. Returns a string such as `"OV (Overvoltage)"` or `"No alarm"`.
         *
         * @example
         * const warn = yield* inverter.warningDescriptionMonitor(1).read(); // "No alarm"
         */
        warningDescriptionMonitor: makeMonitor(
          MONITOR_REGISTERS.WARNING_DESCRIPTION_MONITOR,
          S.decodeWarningDescriptionMonitor,
        ),
        /**
         * Read the state of the digital output terminals (RY1, RY2, pulse).
         * Register 0x2529. Each bit reflects the live logic level of one output.
         *
         * @example
         * const outputs = yield* inverter.digitalOutStateMonitor(1).read();
         * if (outputs.ry1) { /* RY1 relay is energized *\/ }
         */
        digitalOutStateMonitor: makeMonitor(
          MONITOR_REGISTERS.DIGITAL_OUTPUT_STATE_MONITOR,
          S.decodeDigitalOutStateMonitor,
        ),
        /**
         * Read the actual voltage on analog output 1.
         * Register 0x252A. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * const voltage = yield* inverter.analogOut1Monitor(1).read(); // Voltage
         */
        analogOut1Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_OUT_1_MONITOR,
          S.decodeAnalogOut1Monitor,
        ),
        /**
         * Read the actual voltage on analog output 2.
         * Register 0x252B. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * const voltage = yield* inverter.analogOut2Monitor(1).read(); // Voltage
         */
        analogOut2Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_OUT_2_MONITOR,
          S.decodeAnalogOut2Monitor,
        ),
        /**
         * Read analog input 1 as a percentage of full scale.
         * Register 0x252C. Range 0.0–100.0% (wire: 0–1000, 0.1%/count).
         *
         * @example
         * const ai1 = yield* inverter.analogIn1Monitor(1).read(); // AnalogInputPercent
         */
        analogIn1Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_IN_1_MONITOR,
          S.decodeAnalogIn1Monitor,
        ),
        /**
         * Read analog input 2 as a percentage of full scale.
         * Register 0x252D. Range 0.0–100.0% (wire: 0–1000, 0.1%/count).
         *
         * @example
         * const ai2 = yield* inverter.analogIn2Monitor(1).read(); // AnalogInputPercent
         */
        analogIn2Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_IN_2_MONITOR,
          S.decodeAnalogIn2Monitor,
        ),
        /**
         * Read the drive series/model identification.
         * Register 0x252F. Returns a string such as `"A510(s)"`, `"E510(s)"`, `"L510(s)"`, or `"F510"`.
         *
         * @example
         * const model = yield* inverter.a510CheckMonitor(1).read(); // "A510(s)"
         */
        a510CheckMonitor: makeMonitor(
          MONITOR_REGISTERS.A510_CHECK_MONITOR,
          S.decodeA510CheckMonitor,
        ),
        /**
         * Typed access to all parameter groups (Groups 00–22).
         *
         * Each group is a record of parameter callables keyed by parameter code
         * (e.g. `inverter.parameters.group00.p00_01`). Each callable accepts a
         * `deviceId` and returns an object with `.read()` and `.update()` operations.
         *
         * @example
         * const value = yield* inverter.parameters.group00.p00_01(1).read();
         * yield* inverter.parameters.group00.p00_01(1).update(2);
         */
        parameters: {
          group00: makeGroupParamOps(P.group00),
          group01: makeGroupParamOps(P.group01),
          group02: makeGroupParamOps(P.group02),
          group03: makeGroupParamOps(P.group03),
          group04: makeGroupParamOps(P.group04),
          group05: makeGroupParamOps(P.group05),
          group06: makeGroupParamOps(P.group06),
          group07: makeGroupParamOps(P.group07),
          group08: makeGroupParamOps(P.group08),
          group09: makeGroupParamOps(P.group09),
          group10: makeGroupParamOps(P.group10),
          group11: makeGroupParamOps(P.group11),
          group12: makeGroupParamOps(P.group12),
          group13: makeGroupParamOps(P.group13),
          group14: makeGroupParamOps(P.group14),
          group15: makeGroupParamOps(P.group15),
          group16: makeGroupParamOps(P.group16),
          group17: makeGroupParamOps(P.group17),
          group18: makeGroupParamOps(P.group18),
          group19: makeGroupParamOps(P.group19),
          group20: makeGroupParamOps(P.group20),
          group21: makeGroupParamOps(P.group21),
          group22: makeGroupParamOps(P.group22),
        },
      };
    }),
  },
) {
  /**
   * Constructs a {@link SlaveDeviceDefinition} suitable for use with a mock Modbus transport.
   *
   * Registers all command registers (0x2501–0x2507), monitor registers (0x2520–0x252F),
   * and all parameter group registers (Groups 00–22) with default value `0`.
   *
   * @param deviceId - The Modbus unit/slave ID this device should respond to
   * @returns A {@link SlaveDeviceDefinition} ready to be passed to a mock transport layer
   *
   * @example
   * import { MockTransportService } from "effect-modbus-rs";
   * const mockLayer = MockTransportService.setDevices([
   *   TecoInverterService.mockDevice(1),
   * ]);
   */
  static mockDevice(deviceId: number): SlaveDeviceDefinition {
    return {
      unitId: deviceId,
      coils: [],
      discreteInputs: [],
      holdingRegisters: [
        ...Object.values(COMMAND_REGISTERS)
          .filter((v): v is number => typeof v === "number")
          .map((address) => ({ address, default: 0 })),
        ...Object.values(MONITOR_REGISTERS)
          .filter((v): v is number => typeof v === "number")
          .map((address) => ({ address, default: 0 })),
        ...paramRegisterDefs,
      ],
      inputRegisters: [],
    };
  }
}
