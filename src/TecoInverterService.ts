import { Effect } from "effect";
import { AsciiTransportService, RtuTransportService } from "effect-modbus-rs";
import { COMMAND_REGISTERS, MONITOR_REGISTERS } from "./Registers";
import * as S from "./schemas";

export class TecoInverterService extends Effect.Service<TecoInverterService>()(
  "TecoInverterService",
  {
    scoped: Effect.fnUntraced(function* (transportVariant: "Rtu" | "Ascii") {
      let transport: RtuTransportService | AsciiTransportService;

      if (transportVariant === "Rtu") {
        transport = yield* RtuTransportService;
      } else if (transportVariant === "Ascii") {
        transport = yield* AsciiTransportService;
      }

      const deviceCache = new Set<number>();
      const cacheDevice = (device: number) => deviceCache.add(device);

      const readHolding = <T>(
        address: number,
        decode: (raw: unknown) => Effect.Effect<T, any, any>,
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
        <T, P>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, any, any>,
          encode: (value: T) => Effect.Effect<number, any, any>,
          merge: (base: T, patch: P) => T,
        ) =>
        (deviceId: number) => {
          const read = readHolding(address, decode)(deviceId);
          const update = Effect.fnUntraced(function* (patch: P) {
            const current = yield* readHolding(address, decode)(deviceId);
            const merged = merge(current, patch);
            const encoded = yield* encode(merged);
            cacheDevice(deviceId);
            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({ address, value: encoded });
          });
          return { read, update };
        };

      const makeReadWrite =
        <T>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, any, any>,
          encode: (value: T) => Effect.Effect<number, any, any>,
        ) =>
        (deviceId: number) => {
          const read = readHolding(address, decode)(deviceId);
          const update = Effect.fnUntraced(function* (value: T) {
            const client = yield* transport.withClient(deviceId);
            const encoded = yield* encode(value);
            yield* client.writeSingleRegister({ address, value: encoded });
          });
          return { read, update };
        };

      const makeMonitor =
        <T>(
          address: number,
          decode: (raw: unknown) => Effect.Effect<T, any, any>,
        ) =>
        (deviceId: number) => ({
          read: readHolding(address, decode)(deviceId),
        });

      return {
        operationCommand: makeReadModifyWrite(
          COMMAND_REGISTERS.OPERATION_COMMAND,
          S.decodeCommandWord,
          S.encodeCommandWord,
          S.mergeCommandWordPatch,
        ),
        frequencyCommand: makeReadWrite(
          COMMAND_REGISTERS.FREQUENCY_COMMAND,
          S.decodeFrequencyCommand,
          S.encodeFrequencyCommand,
        ),
        torqueCommand: makeReadWrite(
          COMMAND_REGISTERS.TORQUE_COMMAND,
          S.decodeTorqueCommand,
          S.encodeTorqueCommand,
        ),
        speedLimitCommand: makeReadWrite(
          COMMAND_REGISTERS.SPEED_LIMIT_COMMAND,
          S.decodeSpeedLimitCommand,
          S.encodeSpeedLimitCommand,
        ),
        analogOut1Command: makeReadWrite(
          COMMAND_REGISTERS.ANALOG_OUT_1_COMMAND,
          S.decodeAnalogOut1Command,
          S.encodeAnalogOut1Command,
        ),
        analogOut2Command: makeReadWrite(
          COMMAND_REGISTERS.ANALOG_OUT_2_COMMAND,
          S.decodeAnalogOut2Command,
          S.encodeAnalogOut2Command,
        ),
        digitalOutCommand: makeReadModifyWrite(
          COMMAND_REGISTERS.DIGITAL_OUT_COMMAND,
          S.decodeDigitalOutCommand,
          S.encodeDigitalOutCommand,
          S.mergeDigitalOutCommandPatch,
        ),
        stateMonitor: makeMonitor(
          MONITOR_REGISTERS.STATE_MONITOR,
          S.decodeStateMonitor,
        ),
        errorDescriptionMonitor: makeMonitor(
          MONITOR_REGISTERS.ERROR_DESCRIPTION_MONITOR,
          S.decodeErrorDescriptionMonitor,
        ),
        digitalInStateMonitor: makeMonitor(
          MONITOR_REGISTERS.DIGITAL_IN_STATE_MONITOR,
          S.decodeDigitalInStateMonitor,
        ),
        frequencyCommandMonitor: makeMonitor(
          MONITOR_REGISTERS.FREQUENCY_COMMAND_MONITOR,
          S.decodeFrequencyCommandMonitor,
        ),
        outputFrequencyMonitor: makeMonitor(
          MONITOR_REGISTERS.OUTPUT_FREQUENCY_MONITOR,
          S.decodeOutputFrequencyMonitor,
        ),
        dcBusVoltageCommandMonitor: makeMonitor(
          MONITOR_REGISTERS.DC_VOLTAGE_COMMAND_MONITOR,
          S.decodeDCBusVoltageCommandMonitor,
        ),
        outputCurrentMonitor: makeMonitor(
          MONITOR_REGISTERS.OUTPUT_CURRENT_MONITOR,
          S.decodeOutputCurrentMonitor,
        ),
        warningDescriptionMonitor: makeMonitor(
          MONITOR_REGISTERS.WARNING_DESCRIPTION_MONITOR,
          S.decodeWarningDescriptionMonitor,
        ),
        digitalOutStateMonitor: makeMonitor(
          MONITOR_REGISTERS.DIGITAL_OUTPUT_STATE_MONITOR,
          S.decodeDigitalOutStateMonitor,
        ),
        analogOut1Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_OUT_1_MONITOR,
          S.decodeAnalogOut1Monitor,
        ),
        analogOut2Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_OUT_2_MONITOR,
          S.decodeAnalogOut2Monitor,
        ),
        analogIn1Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_IN_1_MONITOR,
          S.decodeAnalogIn1Monitor,
        ),
        analogIn2Monitor: makeMonitor(
          MONITOR_REGISTERS.ANALOG_IN_2_MONITOR,
          S.decodeAnalogIn2Monitor,
        ),
        a510CheckMonitor: makeMonitor(
          MONITOR_REGISTERS.A510_CHECK_MONITOR,
          S.decodeA510CheckMonitor,
        ),
      };
    }),
  },
) {}
