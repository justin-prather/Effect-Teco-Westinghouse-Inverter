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
import { Effect } from "effect";
import { SerialTransportService, type SlaveDeviceDefinition } from "effect-modbus-rs";
import * as S from "./schemas";
import { ParamKind } from "modbus-schema";
import type { GroupParamOps } from "./parameters/operations";
declare const TecoInverterService_base: Effect.Service.Class<TecoInverterService, "TecoInverterService", {
    readonly scoped: (safeShutdown?: boolean | undefined) => Effect.Effect<{
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
        operationCommand: (deviceId: number) => {
            read: () => Effect.Effect<S.CommandWordFlags, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (patch: Readonly<Record<string, boolean | undefined>>) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Set the target output frequency in Hz.
         * Register 0x2502. Range 0.00–599.00 Hz (wire: 0–59900, 0.01 Hz/count).
         *
         * @example
         * yield* inverter.frequencyCommand(1).update(50.0); // 50 Hz
         * const freq = yield* inverter.frequencyCommand(1).read(); // FrequencyHz
         */
        frequencyCommand: (deviceId: number) => {
            read: () => Effect.Effect<S.FrequencyHz, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (value: S.FrequencyHz) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Set the torque limit / torque command as a percentage of rated torque.
         * Register 0x2503. Range –100.0–100.0% (wire: UInt16 two's complement, ÷81.92).
         *
         * @example
         * yield* inverter.torqueCommand(1).update(75.0); // 75% torque
         * const torque = yield* inverter.torqueCommand(1).read(); // TorquePercent
         */
        torqueCommand: (deviceId: number) => {
            read: () => Effect.Effect<S.TorquePercent, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (value: S.TorquePercent) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Set the speed limit as a percentage of nominal speed.
         * Register 0x2504. Range –120–120% (wire: UInt16 two's complement, 1:1 mapping).
         *
         * @example
         * yield* inverter.speedLimitCommand(1).update(100); // 100% speed limit
         */
        speedLimitCommand: (deviceId: number) => {
            read: () => Effect.Effect<S.SpeedLimitPercent, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (value: S.SpeedLimitPercent) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Set analog output 1 target voltage.
         * Register 0x2505. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * yield* inverter.analogOut1Command(1).update(5.0); // 5.00 V
         */
        analogOut1Command: (deviceId: number) => {
            read: () => Effect.Effect<S.Voltage, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (value: S.Voltage) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Set analog output 2 target voltage.
         * Register 0x2506. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * yield* inverter.analogOut2Command(1).update(7.5); // 7.50 V
         */
        analogOut2Command: (deviceId: number) => {
            read: () => Effect.Effect<S.Voltage, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (value: S.Voltage) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
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
        digitalOutCommand: (deviceId: number) => {
            read: () => Effect.Effect<S.DigitalOutCommandFlags, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
            update: (patch: Readonly<Record<string, boolean | undefined>>) => Effect.Effect<void, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
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
        stateMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.StateMonitorFlags, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the current fault/error code and get a human-readable description.
         * Register 0x2521. Returns a string such as `"OC (Over-current)"` or `"UV (Under-voltage)"`.
         *
         * @example
         * const err = yield* inverter.errorDescriptionMonitor(1).read(); // "OC (Over-current)"
         */
        errorDescriptionMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.ErrorDescriptionMonitor, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the state of the eight digital input terminals S1–S8.
         * Register 0x2522. Each bit reflects the live logic level of one terminal.
         *
         * @example
         * const inputs = yield* inverter.digitalInStateMonitor(1).read();
         * if (inputs.s1) { /* S1 is active *\/ }
         */
        digitalInStateMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.DigitalInStateMonitorFlags, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the frequency command currently in effect (after ramps, limits, etc.).
         * Register 0x2523. Returns a FrequencyHz value.
         *
         * @example
         * const freq = yield* inverter.frequencyCommandMonitor(1).read(); // FrequencyHz
         */
        frequencyCommandMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.FrequencyHz, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the actual inverter output frequency.
         * Register 0x2524. Returns a FrequencyHz value.
         *
         * @example
         * const outFreq = yield* inverter.outputFrequencyMonitor(1).read(); // FrequencyHz
         */
        outputFrequencyMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.FrequencyHz, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the DC bus voltage in volts.
         * Register 0x2526. Range 0.0–1000.0 V (wire: 0–10000, 0.1 V/count).
         *
         * @example
         * const dcBus = yield* inverter.dcBusVoltageCommandMonitor(1).read(); // DCBusVoltage
         */
        dcBusVoltageCommandMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.DCBusVoltage, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the inverter output current in amps.
         * Register 0x2527. Range 0.0–6553.5 A (wire: 0–65535, 0.1 A/count).
         *
         * @example
         * const current = yield* inverter.outputCurrentMonitor(1).read(); // CurrentAmps
         */
        outputCurrentMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.CurrentAmps, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the current warning/alarm code and get a human-readable description.
         * Register 0x2528. Returns a string such as `"OV (Overvoltage)"` or `"No alarm"`.
         *
         * @example
         * const warn = yield* inverter.warningDescriptionMonitor(1).read(); // "No alarm"
         */
        warningDescriptionMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.WarningDescriptionMonitor, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the state of the digital output terminals (RY1, RY2, pulse).
         * Register 0x2529. Each bit reflects the live logic level of one output.
         *
         * @example
         * const outputs = yield* inverter.digitalOutStateMonitor(1).read();
         * if (outputs.ry1) { /* RY1 relay is energized *\/ }
         */
        digitalOutStateMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.DigitalOutStateMonitorFlags, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the actual voltage on analog output 1.
         * Register 0x252A. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * const voltage = yield* inverter.analogOut1Monitor(1).read(); // Voltage
         */
        analogOut1Monitor: (deviceId: number) => {
            read: () => Effect.Effect<S.Voltage, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the actual voltage on analog output 2.
         * Register 0x252B. Range 0.00–10.00 V (wire: 0–1000, 0.01 V/count).
         *
         * @example
         * const voltage = yield* inverter.analogOut2Monitor(1).read(); // Voltage
         */
        analogOut2Monitor: (deviceId: number) => {
            read: () => Effect.Effect<S.Voltage, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read analog input 1 as a percentage of full scale.
         * Register 0x252C. Range 0.0–100.0% (wire: 0–1000, 0.1%/count).
         *
         * @example
         * const ai1 = yield* inverter.analogIn1Monitor(1).read(); // AnalogInputPercent
         */
        analogIn1Monitor: (deviceId: number) => {
            read: () => Effect.Effect<S.AnalogInputPercent, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read analog input 2 as a percentage of full scale.
         * Register 0x252D. Range 0.0–100.0% (wire: 0–1000, 0.1%/count).
         *
         * @example
         * const ai2 = yield* inverter.analogIn2Monitor(1).read(); // AnalogInputPercent
         */
        analogIn2Monitor: (deviceId: number) => {
            read: () => Effect.Effect<S.AnalogInputPercent, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
        /**
         * Read the drive series/model identification.
         * Register 0x252F. Returns a string such as `"A510(s)"`, `"E510(s)"`, `"L510(s)"`, or `"F510"`.
         *
         * @example
         * const model = yield* inverter.a510CheckMonitor(1).read(); // "A510(s)"
         */
        a510CheckMonitor: (deviceId: number) => {
            read: () => Effect.Effect<S.A510CheckMonitor, import("effect-modbus-rs").ModbusError | import("effect/ParseResult").ParseError, never>;
        };
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
            group00: GroupParamOps<{
                readonly "00-00": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-00"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "V/F";
                        readonly 1: "V/F+PG";
                        readonly 2: "SLV";
                        readonly 3: "SV";
                        readonly 4: "PMSV";
                        readonly 5: "PMSLV";
                        readonly 6: "SLV2";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-00";
                        readonly name: "Control Mode Selection";
                        readonly range: "0-6";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-01": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-01"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Forward";
                        readonly 1: "Reverse";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-01";
                        readonly name: "Motor's Rotation Direction";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-02": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-02"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Keypad";
                        readonly 1: "External Terminal";
                        readonly 2: "Communication (RS-485)";
                        readonly 3: "PLC";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-02";
                        readonly name: "Main Run Command Source Selection";
                        readonly range: "0-3";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-03": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-03"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Keypad";
                        readonly 1: "External Terminal";
                        readonly 2: "Communication (RS-485)";
                        readonly 3: "PLC";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-03";
                        readonly name: "Alternative Run Command Selection";
                        readonly range: "0-3";
                        readonly default: "2 (Note4)";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-04": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-04"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "English";
                        readonly 1: "Simplified Chinese";
                        readonly 2: "Traditional Chinese";
                        readonly 3: "Turkish";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-04";
                        readonly name: "Language";
                        readonly range: "0-3";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-05": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-05"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Keypad";
                        readonly 1: "External Terminal (Analog1)";
                        readonly 2: "Terminal Command UP/DOWN";
                        readonly 3: "Communication (RS-485)";
                        readonly 4: "Pulse Input";
                        readonly 7: "AI2 Auxiliary Frequency";
                        readonly 8: "Manual Pulse Generator (MPG)";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-05";
                        readonly name: "Main Frequency Command Source Selection";
                        readonly range: "0-8";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-06": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-06"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Keypad";
                        readonly 1: "External Terminal (Analog1)";
                        readonly 2: "Terminal Command UP/DOWN";
                        readonly 3: "Communication (RS-485)";
                        readonly 4: "Pulse Input";
                        readonly 7: "AI2 Auxiliary Frequency";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-06";
                        readonly name: "Alternative Frequency Source Selection";
                        readonly range: "0-7";
                        readonly default: "3 (Note4)";
                        readonly unit: "-";
                        readonly page: 419;
                    };
                };
                readonly "00-07": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-07"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Main Frequency";
                        readonly 1: "Main frequency + Alternative Frequency";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-07";
                        readonly name: "Main and Alternative Frequency Command Modes";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-09": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-09"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Don't save when power supply is off (00-08)";
                        readonly 1: "Save when power is off (00-08)";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-09";
                        readonly name: "Communication Frequency Command Memory Selection";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-10": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-10"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Show warning if lower than minimum frequency";
                        readonly 1: "Run as minimum frequency if lower than minimum frequency";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-10";
                        readonly name: "Minimum Frequency Detection";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-11": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-11"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "PID Sleep Limit is Lower Limit of Frequency";
                        readonly 1: "PID Sleep Limit is 0Hz";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-11";
                        readonly name: "PID Lower Limit of Frequency Selection";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-27": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-27"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "HD (Heavy Duty Mode)";
                        readonly 1: "ND (Normal Duty Mode)";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-27";
                        readonly name: "HD/ND Mode Selection";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-28": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-28"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Positive Characteristic (0~10V/4~20mA → 0~100%)";
                        readonly 1: "Negative Characteristic (0~10V/4~20mA → 100~0%)";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-28";
                        readonly name: "Command Characteristic Selection of Master Frequency";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-29": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-29"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Operation Based on Frequency Command";
                        readonly 1: "Stop";
                        readonly 2: "Operation Based on the Lowest Frequency";
                        readonly 3: "Zero-Speed Operation";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-29";
                        readonly name: "Zero-Speed Operation Selection";
                        readonly range: "0-3";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-32": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-32"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "General";
                        readonly 2: "Conveyor";
                        readonly 3: "Exhaust Fan";
                        readonly 5: "Compressor";
                        readonly 6: "Hoist";
                        readonly 7: "Crane";
                        readonly 8: "Manual Pulse Generator (MPG)";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-32";
                        readonly name: "Application Selection Presets";
                        readonly range: "0-8";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 420;
                    };
                };
                readonly "00-33": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-33"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Disable";
                        readonly 1: "Enable";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-33";
                        readonly name: "Modified Parameters (LCD keypad)";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-57": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-57"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "SV High Speed Mode 1";
                        readonly 1: "SV High Speed Mode 2";
                    };
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-57";
                        readonly name: "SV High Speed Mode";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-08": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-08";
                        readonly name: "Communication Frequency Command Range";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 420;
                    };
                };
                readonly "00-18": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-18";
                        readonly name: "Jog Frequency";
                        readonly range: "0.00~599.00";
                        readonly default: "6.00";
                        readonly unit: "Hz";
                        readonly page: 420;
                    };
                };
                readonly "00-25": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-25";
                        readonly name: "Switch-Over Frequency of Acc/Dec Time 1 and Time 4";
                        readonly range: "0.00~599.00";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 420;
                    };
                };
                readonly "00-12": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-12";
                        readonly name: "Upper Limit Frequency";
                        readonly range: "0.1~109.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 420;
                    };
                };
                readonly "00-13": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-13";
                        readonly name: "Lower Limit Frequency";
                        readonly range: "0.0~109.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 420;
                    };
                };
                readonly "00-14": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-14";
                        readonly name: "Acceleration Time 1";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-15": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-15";
                        readonly name: "Deceleration Time 1";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-16": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-16";
                        readonly name: "Acceleration Time 2";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-17": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-17";
                        readonly name: "Deceleration Time 2";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-19": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-19"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-19";
                        readonly name: "Jog Acceleration Time";
                        readonly range: "0.1~600.0";
                        readonly default: "-";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-20": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-20";
                        readonly name: "Jog Deceleration Time";
                        readonly range: "0.1~600.0";
                        readonly default: "-";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-21": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-21";
                        readonly name: "Acceleration Time 3";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-22": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-22";
                        readonly name: "Deceleration Time 3";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-23": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-23";
                        readonly name: "Acceleration Time 4";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-24": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-24";
                        readonly name: "Deceleration Time 4";
                        readonly range: "0.1~6000.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-26": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-26"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-26";
                        readonly name: "Emergency Stop Time";
                        readonly range: "0.1~6000.0";
                        readonly default: "5.0";
                        readonly unit: "s";
                        readonly page: 420;
                    };
                };
                readonly "00-41": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-41";
                        readonly name: "User Parameter 0";
                        readonly range: "00-01~22-31 (except 00-41~00-56, group 17)";
                        readonly default: "00-41";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-42": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-42";
                        readonly name: "User Parameter 1";
                        readonly range: "00-01~22-31";
                        readonly default: "00-42";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-43": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-43";
                        readonly name: "User Parameter 2";
                        readonly range: "00-01~22-31";
                        readonly default: "00-43";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-44": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-44"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-44";
                        readonly name: "User Parameter 3";
                        readonly range: "00-01~22-31";
                        readonly default: "00-44";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-45": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-45";
                        readonly name: "User Parameter 4";
                        readonly range: "00-01~22-31";
                        readonly default: "00-45";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-46": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-46";
                        readonly name: "User Parameter 5";
                        readonly range: "00-01~22-31";
                        readonly default: "00-46";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-47": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-47";
                        readonly name: "User Parameter 6";
                        readonly range: "00-01~22-31";
                        readonly default: "00-47";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-48": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-48"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-48";
                        readonly name: "User Parameter 7";
                        readonly range: "00-01~22-31";
                        readonly default: "00-48";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-49": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-49"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-49";
                        readonly name: "User Parameter 8";
                        readonly range: "00-01~22-31";
                        readonly default: "00-49";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-50": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-50"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-50";
                        readonly name: "User Parameter 9";
                        readonly range: "00-01~22-31";
                        readonly default: "00-50";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-51": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-51"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-51";
                        readonly name: "User Parameter 10";
                        readonly range: "00-01~22-31";
                        readonly default: "00-51";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-52": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-52"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-52";
                        readonly name: "User Parameter 11";
                        readonly range: "00-01~22-31";
                        readonly default: "00-52";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-53": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-53"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-53";
                        readonly name: "User Parameter 12";
                        readonly range: "00-01~22-31";
                        readonly default: "00-53";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-54": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-54"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-54";
                        readonly name: "User Parameter 13";
                        readonly range: "00-01~22-31";
                        readonly default: "00-54";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-55": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-55"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-55";
                        readonly name: "User Parameter 14";
                        readonly range: "00-01~22-31";
                        readonly default: "00-55";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
                readonly "00-56": {
                    readonly register: typeof import("./Registers").GROUP_00_Basic_Parameters["00-56"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 0;
                        readonly code: "00-56";
                        readonly name: "User Parameter 15";
                        readonly range: "00-01~22-31";
                        readonly default: "00-56";
                        readonly unit: "-";
                        readonly page: 421;
                    };
                };
            }>;
            group01: GroupParamOps<{
                readonly "01-00": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-00";
                        readonly name: "V/F Curve Selection";
                        readonly range: "0~FF (hex)";
                        readonly default: "F (hex)";
                        readonly unit: "-";
                        readonly page: 422;
                    };
                };
                readonly "01-02": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-02";
                        readonly name: "Maximum Output Frequency of Motor 1";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 422;
                    };
                };
                readonly "01-03": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-03";
                        readonly name: "Maximum Output Voltage of Motor 1";
                        readonly range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 422;
                    };
                };
                readonly "01-04": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-04";
                        readonly name: "Middle Output Frequency 2 of Motor 1";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 422;
                    };
                };
                readonly "01-05": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-05";
                        readonly name: "Middle Output Voltage 2 of Motor 1";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "0.0";
                        readonly unit: "V";
                        readonly page: 422;
                    };
                };
                readonly "01-06": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-06";
                        readonly name: "Middle Output Frequency 1 of Motor 1";
                        readonly range: "0.0~599.0";
                        readonly default: "3.0";
                        readonly unit: "Hz";
                        readonly page: 422;
                    };
                };
                readonly "01-07": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-07";
                        readonly name: "Middle Output Voltage 1 of Motor 1";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "***** (KVA dependent)";
                        readonly unit: "V";
                        readonly page: 422;
                    };
                };
                readonly "01-08": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-08";
                        readonly name: "Minimum Output Frequency of Motor 1";
                        readonly range: "0.0~599.0";
                        readonly default: "VF:1.5 / VF+PG:1.5 / SLV:0.6 / SV:0.1 / PMSV:0.1 / PMSLV:9.0 / SLV2:1.0";
                        readonly unit: "Hz";
                        readonly page: 422;
                    };
                };
                readonly "01-09": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-09";
                        readonly name: "Minimum Output Voltage of Motor 1";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "8.3 (230V) / 15.0 (460V)";
                        readonly unit: "V";
                        readonly page: 422;
                    };
                };
                readonly "01-10": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-10";
                        readonly name: "Torque Compensation Gain";
                        readonly range: "0.0~2.0";
                        readonly default: "0.5";
                        readonly unit: "-";
                        readonly page: 422;
                    };
                };
                readonly "01-11": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-11"];
                    readonly kind: ParamKind.Enum;
                    readonly labels: {
                        readonly 0: "Torque Compensation Mode 0";
                        readonly 1: "Torque Compensation Mode 1";
                    };
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-11";
                        readonly name: "Selection of Torque Compensation Mode";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 423;
                    };
                };
                readonly "01-12": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-12";
                        readonly name: "Base Frequency of Motor 1";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-13": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-13";
                        readonly name: "Base Output Voltage of Motor 1";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-14": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-14";
                        readonly name: "Input Voltage Setting";
                        readonly range: "155.0~255.0 (230V) / 310.0~510.0 (460V) / 540.0~670.0 (575V) / 648.0~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-15": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-15";
                        readonly name: "Torque Compensation Time";
                        readonly range: "0~10000";
                        readonly default: "200";
                        readonly unit: "ms";
                        readonly page: 423;
                    };
                };
                readonly "01-16": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-16";
                        readonly name: "Maximum Output Frequency of Motor 2";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-17": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-17";
                        readonly name: "Maximum Output Voltage of Motor 2";
                        readonly range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-18": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-18";
                        readonly name: "Middle Output Frequency 2 of Motor 2";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-19": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-19"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-19";
                        readonly name: "Middle Output Voltage 2 of Motor 2";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "0.0";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-20": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-20";
                        readonly name: "Middle Output Frequency 1 of Motor 2";
                        readonly range: "0.0~599.0";
                        readonly default: "3.0";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-21": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-21";
                        readonly name: "Middle Output Voltage 1 of Motor 2";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "KVA (inverter capacity dependent)";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-22": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-22";
                        readonly name: "Minimum Output Frequency of Motor 2";
                        readonly range: "0.0~599.0";
                        readonly default: "1.5";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-23": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-23";
                        readonly name: "Minimum Output Voltage of Motor 2";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "KVA (inverter capacity dependent)";
                        readonly unit: "V";
                        readonly page: 423;
                    };
                };
                readonly "01-24": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-24";
                        readonly name: "Base Frequency of Motor 2";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 423;
                    };
                };
                readonly "01-25": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-25";
                        readonly name: "Base Output Voltage of Motor 2";
                        readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 424;
                    };
                };
                readonly "01-26": {
                    readonly register: typeof import("./Registers").GROUP_01_VF_Control_Parameters["01-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 1;
                        readonly code: "01-26";
                        readonly name: "V/F Curve Selection of Motor 2";
                        readonly range: "0~FF (hex)";
                        readonly default: "F (hex)";
                        readonly unit: "-";
                        readonly page: 424;
                    };
                };
            }>;
            group02: GroupParamOps<{
                readonly "02-00": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-00"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-00";
                        readonly name: "No-Load Current of Motor 1";
                        readonly range: "0.01~600.00";
                        readonly default: "-";
                        readonly unit: "A";
                        readonly page: 425;
                    };
                };
                readonly "02-01": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-01";
                        readonly name: "Rated Current of Motor 1";
                        readonly range: "10%~200% of inverter's rated current";
                        readonly default: "- (inverter dependent)";
                        readonly unit: "A";
                        readonly page: 425;
                    };
                };
                readonly "02-03": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-03";
                        readonly name: "Rated Rotation Speed of Motor 1";
                        readonly range: "0~60000";
                        readonly default: "-";
                        readonly unit: "Rpm";
                        readonly page: 425;
                    };
                };
                readonly "02-04": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-04";
                        readonly name: "Rated Voltage of Motor 1";
                        readonly range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 425;
                    };
                };
                readonly "02-05": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-05";
                        readonly name: "Rated Power of Motor 1";
                        readonly range: "0.01~600.00";
                        readonly default: "-";
                        readonly unit: "kW";
                        readonly page: 425;
                    };
                };
                readonly "02-06": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-06";
                        readonly name: "Rated Frequency of Motor 1";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 425;
                    };
                };
                readonly "02-07": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-07";
                        readonly name: "Poles of Motor 1";
                        readonly range: "2~16 (Even)";
                        readonly default: "4";
                        readonly unit: "-";
                        readonly page: 425;
                    };
                };
                readonly "02-09": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-09";
                        readonly name: "Excitation Current of Motor 1";
                        readonly range: "15%~70% of Motor Rated Current";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-10": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-10";
                        readonly name: "Core Saturation Coefficient 1 of Motor 1";
                        readonly range: "1~100";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-11": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-11";
                        readonly name: "Core Saturation Coefficient 2 of Motor 1";
                        readonly range: "1~100";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-12": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-12";
                        readonly name: "Core Saturation Coefficient 3 of Motor 1";
                        readonly range: "80~300";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-13": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-13";
                        readonly name: "Core Loss of Motor 1";
                        readonly range: "0.0~15.0";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-15": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-15";
                        readonly name: "Resistance between Wires of Motor 1";
                        readonly range: "0.001~60.000";
                        readonly default: "-";
                        readonly unit: "Ω";
                        readonly page: 425;
                    };
                };
                readonly "02-19": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-19";
                        readonly name: "No-Load Voltage of Motor 1";
                        readonly range: "50~240 (230V) / 100~480 (460V) / 420~600 (575V) / 504~720 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 425;
                    };
                };
                readonly "02-20": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-20";
                        readonly name: "No-Load Current of Motor 2";
                        readonly range: "0.01~600.00";
                        readonly default: "-";
                        readonly unit: "A";
                        readonly page: 425;
                    };
                };
                readonly "02-21": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-21";
                        readonly name: "Rated Current of Motor 2";
                        readonly range: "10%~200% of inverter's rated current";
                        readonly default: "- (inverter dependent)";
                        readonly unit: "A";
                        readonly page: 425;
                    };
                };
                readonly "02-22": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-22";
                        readonly name: "Rated Rotation Speed of Motor 2";
                        readonly range: "0~60000";
                        readonly default: "-";
                        readonly unit: "Rpm";
                        readonly page: 425;
                    };
                };
                readonly "02-23": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-23";
                        readonly name: "Rated Voltage of Motor 2";
                        readonly range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 425;
                    };
                };
                readonly "02-24": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-24";
                        readonly name: "Rated Power of Motor 2";
                        readonly range: "0.01~600.00";
                        readonly default: "-";
                        readonly unit: "kW";
                        readonly page: 425;
                    };
                };
                readonly "02-25": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-25";
                        readonly name: "Rated Frequency of Motor 2";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0/60.0";
                        readonly unit: "Hz";
                        readonly page: 425;
                    };
                };
                readonly "02-26": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-26";
                        readonly name: "Poles of Motor 2";
                        readonly range: "2~16 (Even)";
                        readonly default: "4";
                        readonly unit: "-";
                        readonly page: 425;
                    };
                };
                readonly "02-32": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-32"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-32";
                        readonly name: "Resistance between Wires of Motor 2";
                        readonly range: "0.001~60.000";
                        readonly default: "-";
                        readonly unit: "Ω";
                        readonly page: 425;
                    };
                };
                readonly "02-33": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-33"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-33";
                        readonly name: "Proportion of Motor 1 Leakage Inductance";
                        readonly range: "0.1~15.0";
                        readonly default: "3.7";
                        readonly unit: "%";
                        readonly page: 425;
                    };
                };
                readonly "02-34": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-34";
                        readonly name: "Motor 1 Slip Frequency";
                        readonly range: "0.10~20.00";
                        readonly default: "2.48";
                        readonly unit: "Hz";
                        readonly page: 425;
                    };
                };
                readonly "02-37": {
                    readonly register: typeof import("./Registers").GROUP_02_IM_Motor_Parameters["02-37"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 2;
                        readonly code: "02-37";
                        readonly name: "Motor Mechanical Loss";
                        readonly range: "0.0~10.0";
                        readonly default: "4.0";
                        readonly unit: "%";
                        readonly page: 426;
                    };
                };
            }>;
            group03: GroupParamOps<{
                readonly "03-00": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-00";
                        readonly name: "Multi-Function Terminal Function Setting-S1";
                        readonly range: "0~69";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-01": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-01";
                        readonly name: "Multi-Function Terminal Function Setting-S2";
                        readonly range: "0~69";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-02": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-02";
                        readonly name: "Multi-Function Terminal Function Setting-S3";
                        readonly range: "0~69";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-03": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-03";
                        readonly name: "Multi-Function Terminal Function Setting-S4";
                        readonly range: "0~69";
                        readonly default: "3";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-04": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-04";
                        readonly name: "Multi-Function Terminal Function Setting-S5";
                        readonly range: "0~69";
                        readonly default: "4";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-05": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-05";
                        readonly name: "Multi-Function Terminal Function Setting-S6";
                        readonly range: "0~69";
                        readonly default: "17";
                        readonly unit: "-";
                        readonly page: 427;
                    };
                };
                readonly "03-06": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-06";
                        readonly name: "Multi-Function Terminal Function Setting-S7";
                        readonly range: "0~69";
                        readonly default: "29";
                        readonly unit: "-";
                        readonly page: 428;
                    };
                };
                readonly "03-07": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-07";
                        readonly name: "Multi-Function Terminal Function Setting-S8";
                        readonly range: "0~69";
                        readonly default: "15";
                        readonly unit: "-";
                        readonly page: 428;
                    };
                };
                readonly "03-08": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-08";
                        readonly name: "(S1~S8) DI Scan Time";
                        readonly range: "0-1 (0:4ms / 1:8ms)";
                        readonly default: "1 (8ms)";
                        readonly unit: "-";
                        readonly page: 428;
                    };
                };
                readonly "03-09": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-09";
                        readonly name: "Multi-Function Terminal S1-S4 Type Selection";
                        readonly range: "0000b~1111b (bit0:S1 A/B ... bit3:S4 A/B)";
                        readonly default: "0000b";
                        readonly unit: "-";
                        readonly page: 428;
                    };
                };
                readonly "03-10": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-10";
                        readonly name: "Multi-Function Terminal S5-S8 Type Selection";
                        readonly range: "0000b~1111b (bit0:S5 A/B ... bit3:S8 A/B)";
                        readonly default: "0000b";
                        readonly unit: "-";
                        readonly page: 428;
                    };
                };
                readonly "03-11": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-11";
                        readonly name: "Relay (R1A-R1C) Output";
                        readonly range: "0~59 (see 03-11/03-12 function table)";
                        readonly default: "0 (During Running)";
                        readonly unit: "-";
                        readonly page: 429;
                    };
                };
                readonly "03-12": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-12";
                        readonly name: "Relay (R2A-R2C) Output";
                        readonly range: "0~59 (see 03-11/03-12 function table)";
                        readonly default: "1 (Fault Contact Output)";
                        readonly unit: "-";
                        readonly page: 429;
                    };
                };
                readonly "03-13": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-13";
                        readonly name: "Frequency Detection Level";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 429;
                    };
                };
                readonly "03-14": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-14";
                        readonly name: "Frequency Detection Width";
                        readonly range: "0.1~25.5";
                        readonly default: "2.0";
                        readonly unit: "Hz";
                        readonly page: 429;
                    };
                };
                readonly "03-15": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-15";
                        readonly name: "Current Agree Level";
                        readonly range: "0.1~999.9";
                        readonly default: "0.1";
                        readonly unit: "A";
                        readonly page: 429;
                    };
                };
                readonly "03-16": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-16";
                        readonly name: "Delay Time of Current Agree Detection";
                        readonly range: "0.1~10.0";
                        readonly default: "0.1";
                        readonly unit: "s";
                        readonly page: 429;
                    };
                };
                readonly "03-17": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-17";
                        readonly name: "Mechanical Braking Release Level";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 429;
                    };
                };
                readonly "03-18": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-18";
                        readonly name: "Mechanical Braking Level Set";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 429;
                    };
                };
                readonly "03-19": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-19";
                        readonly name: "Relay (R1A-R2A) Type";
                        readonly range: "0000b~1111b (bit0:R1 A/B, bit1:R2 A/B, bit3:R4 A/B)";
                        readonly default: "0000b";
                        readonly unit: "-";
                        readonly page: 429;
                    };
                };
                readonly "03-20": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-20";
                        readonly name: "Relay (R4A-R4C) Output";
                        readonly range: "0~59 (see 03-11/03-12 function table)";
                        readonly default: "2 (Frequency Agree)";
                        readonly unit: "-";
                        readonly page: 430;
                    };
                };
                readonly "03-21": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-21";
                        readonly name: "Photo-coupler Output Selection (DO2-DOG)";
                        readonly range: "0~59 (see 03-11/03-12 function table)";
                        readonly default: "3";
                        readonly unit: "-";
                        readonly page: 430;
                    };
                };
                readonly "03-27": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-27";
                        readonly name: "UP/DOWN Frequency Hold/Adjust Selection";
                        readonly range: "0-3";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 431;
                    };
                };
                readonly "03-28": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-28";
                        readonly name: "Photo-coupler Output (DO1-DOG)";
                        readonly range: "0~59 (see 03-11/03-12 function table)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 431;
                    };
                };
                readonly "03-29": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-29";
                        readonly name: "Photo-coupler Output Selection (DO1-DOG)(DO2-DOG)";
                        readonly range: "0000b~1111b (bit0:PC1 A/B, bit1:PC2 A/B)";
                        readonly default: "0000b";
                        readonly unit: "-";
                        readonly page: 431;
                    };
                };
                readonly "03-30": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-30";
                        readonly name: "Selection of Pulse Input";
                        readonly range: "0-1 (0:General Pulse Input / 1:PWM)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 431;
                    };
                };
                readonly "03-31": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-31";
                        readonly name: "Scale of Pulse Input";
                        readonly range: "50~32000 (03-30=0) / 10~1000 (03-30=1)";
                        readonly default: "1000";
                        readonly unit: "Hz";
                        readonly page: 431;
                    };
                };
                readonly "03-32": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-32"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-32";
                        readonly name: "Pulse Input Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 431;
                    };
                };
                readonly "03-33": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-33"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-33";
                        readonly name: "Pulse Input Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 431;
                    };
                };
                readonly "03-34": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-34";
                        readonly name: "Filter Time of Pulse Input";
                        readonly range: "0.00~2.00";
                        readonly default: "0.10";
                        readonly unit: "Sec";
                        readonly page: 431;
                    };
                };
                readonly "03-35": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-35";
                        readonly name: "Function Setting of Pulse Output";
                        readonly range: "1-7 (1:Freq Cmd / 2:Output Freq / 3:After Soft-Start / 4:Motor Speed / 5:PID Fdbk / 6:PID Input / 7:PG Output)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 432;
                    };
                };
                readonly "03-36": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-36";
                        readonly name: "Scale of Pulse Output";
                        readonly range: "1~32000";
                        readonly default: "1000";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-37": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-37"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-37";
                        readonly name: "Timer ON Delay (DIO)";
                        readonly range: "0.0~6000.0";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 432;
                    };
                };
                readonly "03-38": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-38"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-38";
                        readonly name: "Timer OFF Delay (DIO)";
                        readonly range: "0.0~6000.0";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 432;
                    };
                };
                readonly "03-40": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-40"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-40";
                        readonly name: "Up/Down Frequency Width Setting";
                        readonly range: "0.00~5.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-41": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-41";
                        readonly name: "Torque Detection Level";
                        readonly range: "0~150";
                        readonly default: "10";
                        readonly unit: "%";
                        readonly page: 432;
                    };
                };
                readonly "03-42": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-42"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-42";
                        readonly name: "Brake Release Delay Time";
                        readonly range: "0.00~65.00";
                        readonly default: "0.00";
                        readonly unit: "s";
                        readonly page: 432;
                    };
                };
                readonly "03-43": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-43";
                        readonly name: "UP/DOWN Acceleration/Deceleration Selection";
                        readonly range: "0-1 (0:Accel/Decel Time 1 / 1:Accel/Decel Time 2)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 432;
                    };
                };
                readonly "03-44": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-44";
                        readonly name: "Frequency Detection Level 2";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-45": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-45"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-45";
                        readonly name: "Frequency Detection Width 2";
                        readonly range: "0.1~25.5";
                        readonly default: "2.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-46": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-46"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-46";
                        readonly name: "Frequency Detection Level 3";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-47": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-47"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-47";
                        readonly name: "Frequency Detection Width 3";
                        readonly range: "0.1~25.5";
                        readonly default: "2.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-48": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-48"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-48";
                        readonly name: "Low Current Detection Level";
                        readonly range: "0.0~999.9";
                        readonly default: "0.1";
                        readonly unit: "A";
                        readonly page: 432;
                    };
                };
                readonly "03-49": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-49"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-49";
                        readonly name: "Low Current Detection Delay Time";
                        readonly range: "0.00~655.34";
                        readonly default: "0.01";
                        readonly unit: "Sec";
                        readonly page: 432;
                    };
                };
                readonly "03-50": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-50"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-50";
                        readonly name: "Frequency Detection Level 4";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-51": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-51"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-51";
                        readonly name: "Frequency Detection Level 5";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 432;
                    };
                };
                readonly "03-52": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-52"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-52";
                        readonly name: "Frequency Detection Level 6";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 433;
                    };
                };
                readonly "03-53": {
                    readonly register: typeof import("./Registers").GROUP_03_External_Digital_Input_and_Output_Parameters["03-53"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 3;
                        readonly code: "03-53";
                        readonly name: "Current Agree Level 2";
                        readonly range: "0.0~999.9";
                        readonly default: "0.1";
                        readonly unit: "A";
                        readonly page: 433;
                    };
                };
            }>;
            group04: GroupParamOps<{
                readonly "04-00": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-00";
                        readonly name: "AI Input Signal Type";
                        readonly range: "0-5 (0:AI1 0-10V/AI2 0-10V … 5:AI1 4-20mA/AI2 4-20mA)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 434;
                    };
                };
                readonly "04-01": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-01";
                        readonly name: "AI1 Signal Scanning and Filtering Time";
                        readonly range: "0.00~2.00";
                        readonly default: "0.03";
                        readonly unit: "s";
                        readonly page: 434;
                    };
                };
                readonly "04-02": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-02";
                        readonly name: "AI1 Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 434;
                    };
                };
                readonly "04-03": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-03"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-03";
                        readonly name: "AI1 Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 434;
                    };
                };
                readonly "04-04": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-04";
                        readonly name: "Negative AI";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 434;
                    };
                };
                readonly "04-05": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-05";
                        readonly name: "AI2 Function Setting";
                        readonly range: "0-17 (0:Aux Freq / 1:Freq Ref Gain / 2:Freq Ref Bias / … / 17:PTC)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 434;
                    };
                };
                readonly "04-06": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-06";
                        readonly name: "AI2 Signal Scanning and Filtering Time";
                        readonly range: "0.00~2.00";
                        readonly default: "0.03";
                        readonly unit: "s";
                        readonly page: 435;
                    };
                };
                readonly "04-07": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-07";
                        readonly name: "AI2 Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 435;
                    };
                };
                readonly "04-08": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-08"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-08";
                        readonly name: "AI2 Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 435;
                    };
                };
                readonly "04-09": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-09";
                        readonly name: "AI Input Signal Type of I/O card";
                        readonly range: "0-2 (0:AI3 0-10V / 1:AI3 -10-10V / 2:AI3 4-20mA)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 435;
                    };
                };
                readonly "04-10": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-10";
                        readonly name: "AI3 Function Setting";
                        readonly range: "0-17 (same as 04-05)";
                        readonly default: "10";
                        readonly unit: "-";
                        readonly page: 435;
                    };
                };
                readonly "04-11": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-11";
                        readonly name: "AO1 Function Setting";
                        readonly range: "0-28 (0:Output Freq / 1:Freq Cmd / 2:Output V / … / 28:Comm control)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 435;
                    };
                };
                readonly "04-12": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-12";
                        readonly name: "AO1 Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 435;
                    };
                };
                readonly "04-13": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-13"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-13";
                        readonly name: "AO1 Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 435;
                    };
                };
                readonly "04-16": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-16";
                        readonly name: "AO2 Function Setting";
                        readonly range: "0-28 (same as 04-11)";
                        readonly default: "3";
                        readonly unit: "-";
                        readonly page: 436;
                    };
                };
                readonly "04-17": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-17";
                        readonly name: "AO2 Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 436;
                    };
                };
                readonly "04-18": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-18"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-18";
                        readonly name: "AO2 Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 436;
                    };
                };
                readonly "04-19": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-19";
                        readonly name: "AO Output Signal Type";
                        readonly range: "0-3 (0:AO1 0-10V/AO2 0-10V … 3:AO1 4-20mA/AO2 4-20mA)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 436;
                    };
                };
                readonly "04-20": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-20";
                        readonly name: "Filter Time of AO Signal Scan";
                        readonly range: "0.00~0.50";
                        readonly default: "0.00";
                        readonly unit: "s";
                        readonly page: 436;
                    };
                };
                readonly "04-21": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-21";
                        readonly name: "AI3 Signal Scanning and Filtering Time";
                        readonly range: "0.00~2.00";
                        readonly default: "0.03";
                        readonly unit: "s";
                        readonly page: 436;
                    };
                };
                readonly "04-22": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-22";
                        readonly name: "AI3 Gain";
                        readonly range: "0.0~1000.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 436;
                    };
                };
                readonly "04-23": {
                    readonly register: typeof import("./Registers").GROUP_04_External_Analog_Input_and_Output_Parameters["04-23"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 4;
                        readonly code: "04-23";
                        readonly name: "AI3 Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 436;
                    };
                };
            }>;
            group05: GroupParamOps<{
                readonly "05-00": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-00";
                        readonly name: "Acceleration/Deceleration Selection of Multi-Speed";
                        readonly range: "0-1 (0:by 00-14~00-24 / 1:by 05-17~05-48)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 437;
                    };
                };
                readonly "05-01": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-01";
                        readonly name: "Frequency Setting of Speed-Stage 0";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-02": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-02";
                        readonly name: "Frequency Setting of Speed-Stage 1";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-03": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-03";
                        readonly name: "Frequency Setting of Speed-Stage 2";
                        readonly range: "0.00~599.00";
                        readonly default: "10.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-04": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-04";
                        readonly name: "Frequency Setting of Speed-Stage 3";
                        readonly range: "0.00~599.00";
                        readonly default: "20.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-05": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-05";
                        readonly name: "Frequency Setting of Speed-Stage 4";
                        readonly range: "0.00~599.00";
                        readonly default: "30.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-06": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-06";
                        readonly name: "Frequency Setting of Speed-Stage 5";
                        readonly range: "0.00~599.00";
                        readonly default: "40.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-07": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-07";
                        readonly name: "Frequency Setting of Speed-Stage 6";
                        readonly range: "0.00~599.00";
                        readonly default: "50.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-08": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-08";
                        readonly name: "Frequency Setting of Speed-Stage 7";
                        readonly range: "0.00~599.00";
                        readonly default: "50.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-09": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-09";
                        readonly name: "Frequency Setting of Speed-Stage 8";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-10": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-10";
                        readonly name: "Frequency Setting of Speed-Stage 9";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-11": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-11"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-11";
                        readonly name: "Frequency Setting of Speed-Stage 10";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-12": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-12";
                        readonly name: "Frequency Setting of Speed-Stage 11";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-13": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-13";
                        readonly name: "Frequency Setting of Speed-Stage 12";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-14": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-14";
                        readonly name: "Frequency Setting of Speed-Stage 13";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-15": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-15";
                        readonly name: "Frequency Setting of Speed-Stage 14";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-16": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-16";
                        readonly name: "Frequency Setting of Speed-Stage 15";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 437;
                    };
                };
                readonly "05-17": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-17";
                        readonly name: "Acceleration Time of Multi Speed 0";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-18": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-18";
                        readonly name: "Deceleration Time of Multi Speed 0";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-19": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-19"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-19";
                        readonly name: "Acceleration Time of Multi Speed 1";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-20": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-20";
                        readonly name: "Deceleration Time of Multi Speed 1";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-21": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-21";
                        readonly name: "Acceleration Time of Multi Speed 2";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-22": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-22";
                        readonly name: "Deceleration Time of Multi Speed 2";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-23": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-23";
                        readonly name: "Acceleration Time of Multi Speed 3";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-24": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-24";
                        readonly name: "Deceleration Time of Multi Speed 3";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-25": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-25";
                        readonly name: "Acceleration Time of Multi Speed 4";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-26": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-26"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-26";
                        readonly name: "Deceleration Time of Multi Speed 4";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 437;
                    };
                };
                readonly "05-27": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-27"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-27";
                        readonly name: "Acceleration Time of Multi Speed 5";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-28": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-28"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-28";
                        readonly name: "Deceleration Time of Multi Speed 5";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-29": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-29"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-29";
                        readonly name: "Acceleration Time of Multi Speed 6";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-30": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-30"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-30";
                        readonly name: "Deceleration Time of Multi Speed 6";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-31": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-31"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-31";
                        readonly name: "Acceleration Time of Multi Speed 7";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-32": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-32"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-32";
                        readonly name: "Deceleration Time of Multi Speed 7";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-33": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-33"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-33";
                        readonly name: "Acceleration Time of Multi Speed 8";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-34": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-34";
                        readonly name: "Deceleration Time of Multi Speed 8";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-35": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-35"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-35";
                        readonly name: "Acceleration Time of Multi Speed 9";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-36": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-36"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-36";
                        readonly name: "Deceleration Time of Multi Speed 9";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-37": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-37"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-37";
                        readonly name: "Acceleration Time of Multi Speed 10";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-38": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-38"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-38";
                        readonly name: "Deceleration Time of Multi Speed 10";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-39": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-39"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-39";
                        readonly name: "Acceleration Time of Multi Speed 11";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-40": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-40"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-40";
                        readonly name: "Deceleration Time of Multi Speed 11";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-41": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-41"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-41";
                        readonly name: "Acceleration Time of Multi Speed 12";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-42": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-42"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-42";
                        readonly name: "Deceleration Time of Multi Speed 12";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-43": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-43"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-43";
                        readonly name: "Acceleration Time of Multi Speed 13";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 438;
                    };
                };
                readonly "05-44": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-44";
                        readonly name: "Deceleration Time of Multi Speed 13";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 439;
                    };
                };
                readonly "05-45": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-45"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-45";
                        readonly name: "Acceleration Time of Multi Speed 14";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 439;
                    };
                };
                readonly "05-46": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-46"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-46";
                        readonly name: "Deceleration Time of Multi Speed 14";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 439;
                    };
                };
                readonly "05-47": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-47"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-47";
                        readonly name: "Acceleration Time of Multi Speed 15";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 439;
                    };
                };
                readonly "05-48": {
                    readonly register: typeof import("./Registers").GROUP_05_Multi_Speed_Parameters["05-48"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 5;
                        readonly code: "05-48";
                        readonly name: "Deceleration Time of Multi Speed 15";
                        readonly range: "0.1~6000.0";
                        readonly default: "10.0";
                        readonly unit: "s";
                        readonly page: 439;
                    };
                };
            }>;
            group06: GroupParamOps<{
                readonly "06-00": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 6;
                        readonly code: "06-00";
                        readonly name: "Automatic Operation Mode Selection";
                        readonly range: "0-6";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 440;
                    };
                };
                readonly "06-32": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-33": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-34": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-35": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-36": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-37": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-38": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-39": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-40": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-41": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-42": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-43": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-44": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-44"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-45": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-46": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-47": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-01": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-02": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-03": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-04": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-05": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-06": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-07": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-08": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-09": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-10": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-11": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-11"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-12": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-13": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-14": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-15": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-16": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-17": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-18": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-19": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-19"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-20": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-21": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-22": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-23": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-24": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-25": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-26": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-26"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-27": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-27"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-28": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-28"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-29": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-29"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-30": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-30"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
                readonly "06-31": {
                    readonly register: typeof import("./Registers").GROUP_06_Automatic_Program_Operation_Parameters["06-31"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        group: 6;
                        code: string;
                        name: string;
                        range: string;
                        default: string;
                        unit: string;
                        page: number;
                    };
                };
            }>;
            group07: GroupParamOps<{
                readonly "07-00": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-00";
                        readonly name: "Momentary Power Loss/Fault Restart Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 444;
                    };
                };
                readonly "07-01": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-01";
                        readonly name: "Fault Auto-Restart Time";
                        readonly range: "0~7200";
                        readonly default: "0";
                        readonly unit: "s";
                        readonly page: 444;
                    };
                };
                readonly "07-02": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-02";
                        readonly name: "Number of Fault Auto-Restart Attempts";
                        readonly range: "0~10";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 444;
                    };
                };
                readonly "07-04": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-04";
                        readonly name: "Direct Start at Power On";
                        readonly range: "0-1 (0:Direct start / 1:Unable to direct start)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 444;
                    };
                };
                readonly "07-05": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-05";
                        readonly name: "Delay of Direct Start at Power On";
                        readonly range: "1.0~300.0";
                        readonly default: "3.5";
                        readonly unit: "s";
                        readonly page: 444;
                    };
                };
                readonly "07-06": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-06";
                        readonly name: "DC Injection Braking Starting Frequency";
                        readonly range: "0.0~10.0";
                        readonly default: "0.5";
                        readonly unit: "Hz";
                        readonly page: 444;
                    };
                };
                readonly "07-07": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-07";
                        readonly name: "DC Injection Braking Current";
                        readonly range: "0~100";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 444;
                    };
                };
                readonly "07-08": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-08";
                        readonly name: "DC Injection Braking Time at Stop";
                        readonly range: "0.00~100.00";
                        readonly default: "0.50";
                        readonly unit: "s";
                        readonly page: 444;
                    };
                };
                readonly "07-09": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-09";
                        readonly name: "Stop Mode Selection";
                        readonly range: "0-3 (0:Decel to Stop / 1:Coast to Stop / 2:DC Braking / 3:Coast to Stop w/ Timer)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 444;
                    };
                };
                readonly "07-13": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-13";
                        readonly name: "Low Voltage Detection Level";
                        readonly range: "150~300 (230V) / 250~600 (460V) / 500~600 (575V/690V)";
                        readonly default: "190 (230V) / 380 (460V) / 546 (575V/690V)";
                        readonly unit: "V";
                        readonly page: 444;
                    };
                };
                readonly "07-14": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-14";
                        readonly name: "Pre-excitation Time";
                        readonly range: "0.00~10.00";
                        readonly default: "2.00";
                        readonly unit: "s";
                        readonly page: 444;
                    };
                };
                readonly "07-15": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-15";
                        readonly name: "Pre-excitation Level";
                        readonly range: "50~200";
                        readonly default: "100";
                        readonly unit: "%";
                        readonly page: 444;
                    };
                };
                readonly "07-16": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-16";
                        readonly name: "DC Injection Braking Time at Start";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "s";
                        readonly page: 444;
                    };
                };
                readonly "07-18": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-18";
                        readonly name: "Minimum Base block Time";
                        readonly range: "0.1~5.0";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "Sec";
                        readonly page: 444;
                    };
                };
                readonly "07-19": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-19";
                        readonly name: "Direction-Detection Speed Search";
                        readonly range: "0~100";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 444;
                    };
                };
                readonly "07-20": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-20";
                        readonly name: "Speed Search Operating Current";
                        readonly range: "0~100";
                        readonly default: "20";
                        readonly unit: "%";
                        readonly page: 445;
                    };
                };
                readonly "07-21": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-21";
                        readonly name: "Integral Time of Speed Searching";
                        readonly range: "0.1~10.0";
                        readonly default: "2.0";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-22": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-22"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-22";
                        readonly name: "Delay Time of Speed Searching";
                        readonly range: "0.0~20.0";
                        readonly default: "0.2";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-23": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-23";
                        readonly name: "Voltage Recovery Time";
                        readonly range: "0.1~5.0";
                        readonly default: "2.0";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-24": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-24";
                        readonly name: "Direction-Detection Speed Search Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-25": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-25"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-25";
                        readonly name: "Low Voltage Detection Time";
                        readonly range: "0.00~1.00";
                        readonly default: "0.02";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-26": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-26";
                        readonly name: "Start-up Mode Selection of SLV Coast to Stop";
                        readonly range: "0-1 (0:Speed search / 1:Normal start)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-27": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-27";
                        readonly name: "Start Selection after Fault during SLV Mode";
                        readonly range: "0-1 (0:Speed search / 1:Normal start)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-28": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-28";
                        readonly name: "Start after External Base Block";
                        readonly range: "0-1 (0:Speed search / 1:Normal start)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-29": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-29";
                        readonly name: "Run Command Selection at DC Braking";
                        readonly range: "0-1 (0:Not Allowable / 1:Allowable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-30": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-30";
                        readonly name: "Low Voltage Level Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-31": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-31"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-31";
                        readonly name: "Low Voltage Run Frequency";
                        readonly range: "0.00~599.00";
                        readonly default: "10.00";
                        readonly unit: "Hz";
                        readonly page: 445;
                    };
                };
                readonly "07-32": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-32";
                        readonly name: "Speed Search Mode Selection";
                        readonly range: "0-2 (0:Disable / 1:Mode 1 / 2:Execute each time)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-33": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-33";
                        readonly name: "Start Frequency of Speed Search Selection";
                        readonly range: "0-1 (0:Max Output Freq / 1:Freq Cmd)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 445;
                    };
                };
                readonly "07-34": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-34";
                        readonly name: "Short-circuit Braking Time at Start";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-35": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-35"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-35";
                        readonly name: "Short-circuit Braking Time at Stop";
                        readonly range: "0.00~100.00";
                        readonly default: "0.50";
                        readonly unit: "Sec";
                        readonly page: 445;
                    };
                };
                readonly "07-36": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-36"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-36";
                        readonly name: "Short-circuit Braking Current";
                        readonly range: "0.0~200.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 445;
                    };
                };
                readonly "07-42": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-42"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-42";
                        readonly name: "Voltage Limit Gain";
                        readonly range: "0.0~50.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 446;
                    };
                };
                readonly "07-43": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-43"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-43";
                        readonly name: "Short-circuit Braking Time of PM Speed Search";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "Sec";
                        readonly page: 446;
                    };
                };
                readonly "07-44": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-44";
                        readonly name: "DC Braking Time of PM Speed Search";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "Sec";
                        readonly page: 446;
                    };
                };
                readonly "07-45": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-45";
                        readonly name: "STP2 Function Selection";
                        readonly range: "0-1 (0:STP2 Enable / 1:STP2 Disable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 446;
                    };
                };
                readonly "07-46": {
                    readonly register: typeof import("./Registers").GROUP_07_Start_Stop_Parameters["07-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 7;
                        readonly code: "07-46";
                        readonly name: "DC Injection Current Limit";
                        readonly range: "0~150";
                        readonly default: "100";
                        readonly unit: "%";
                        readonly page: 446;
                    };
                };
            }>;
            group08: GroupParamOps<{
                readonly "08-00": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-00";
                        readonly name: "Stall Prevention Function";
                        readonly range: "bit0:Acc/bit1:Dec/bit2:Op/bit3:DecTimeBase";
                        readonly default: "0000b (0)";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-01": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-01";
                        readonly name: "Stall Prevention Level in Acceleration";
                        readonly range: "20~200";
                        readonly default: "HD:150 / ND:120";
                        readonly unit: "%";
                        readonly page: 447;
                    };
                };
                readonly "08-02": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-02";
                        readonly name: "Stall Prevention Level in Deceleration";
                        readonly range: "330~410 (230V) / 660~820 (460V) / 900~1000 (575V) / 1080~1200 (690V)";
                        readonly default: "385 (230V) / 770 (460V) / 950 (575V) / 1140 (690V)";
                        readonly unit: "V";
                        readonly page: 447;
                    };
                };
                readonly "08-03": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-03";
                        readonly name: "Stall Prevention Level in Operation";
                        readonly range: "30~200";
                        readonly default: "HD:160 / ND:120";
                        readonly unit: "%";
                        readonly page: 447;
                    };
                };
                readonly "08-05": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-05";
                        readonly name: "Selection for Motor Overload Protection (OL1)";
                        readonly range: "bit0:Enable/bit1:ColdHot/bit2:MotorType/bit3:Reserved";
                        readonly default: "0101b (5)";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-06": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-06";
                        readonly name: "Start-up Mode of Overload Protection Operation (OL1)";
                        readonly range: "0-1 (0:Stop output / 1:Continuous operation)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-07": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-07";
                        readonly name: "Motor Overload (OL1) Protection Level";
                        readonly range: "0-2 (0:Protection 0 / 1:Protection 1 / 2:Protection 2)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-08": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-08";
                        readonly name: "Automatic Voltage Regulation (AVR)";
                        readonly range: "0-1 (0:Enable / 1:Disable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-09": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-09";
                        readonly name: "Selection of Input Phase Loss Protection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 447;
                    };
                };
                readonly "08-10": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-10";
                        readonly name: "Selection of Output Phase Loss Protection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 448;
                    };
                };
                readonly "08-13": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-13";
                        readonly name: "Selection of Over-Torque Detection";
                        readonly range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 448;
                    };
                };
                readonly "08-14": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-14";
                        readonly name: "Selection of Over-Torque Operation";
                        readonly range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 448;
                    };
                };
                readonly "08-15": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-15";
                        readonly name: "Level of Over-Torque Detection";
                        readonly range: "0~300";
                        readonly default: "150";
                        readonly unit: "%";
                        readonly page: 448;
                    };
                };
                readonly "08-16": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-16";
                        readonly name: "Time of Over-Torque Detection";
                        readonly range: "0.0~10.0";
                        readonly default: "0.1";
                        readonly unit: "Sec";
                        readonly page: 448;
                    };
                };
                readonly "08-17": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-17";
                        readonly name: "Selection of Low-Torque Detection";
                        readonly range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 448;
                    };
                };
                readonly "08-18": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-18";
                        readonly name: "Selection of Low-Torque Operation";
                        readonly range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 448;
                    };
                };
                readonly "08-19": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-19";
                        readonly name: "Level of Low-Torque Detection";
                        readonly range: "0~300";
                        readonly default: "30";
                        readonly unit: "%";
                        readonly page: 448;
                    };
                };
                readonly "08-20": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-20";
                        readonly name: "Time of Low-Torque Detection";
                        readonly range: "0.0~10.0";
                        readonly default: "0.1";
                        readonly unit: "Sec";
                        readonly page: 449;
                    };
                };
                readonly "08-21": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-21";
                        readonly name: "Limit of Stall Prevention in Acc over Base Speed";
                        readonly range: "1~100";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 449;
                    };
                };
                readonly "08-22": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-22";
                        readonly name: "Stall Prevention Detection Time in Operation";
                        readonly range: "2~100";
                        readonly default: "100";
                        readonly unit: "ms";
                        readonly page: 449;
                    };
                };
                readonly "08-23": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-23";
                        readonly name: "Ground Fault (GF) Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-24": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-24";
                        readonly name: "External Fault Operation Selection";
                        readonly range: "0-2 (0:Decel to stop / 1:Coast to stop / 2:Continuous operation)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-25": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-25";
                        readonly name: "Detection Selection of External Fault";
                        readonly range: "0-1 (0:Immediately / 1:When operation started)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-30": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-30";
                        readonly name: "Run Permissive Function Selection";
                        readonly range: "0-1 (0:Decel to stop / 1:Coast to stop)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-35": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-35";
                        readonly name: "Motor Overheating Fault Selection";
                        readonly range: "0-3 (0:Disable / 1:Decel to stop / 2:Coast to stop / 3:Continue running)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-36": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-36"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-36";
                        readonly name: "PTC Input Filter Time Constant";
                        readonly range: "0.00~5.00";
                        readonly default: "2.00";
                        readonly unit: "Sec";
                        readonly page: 449;
                    };
                };
                readonly "08-37": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-37";
                        readonly name: "Fan Control Function";
                        readonly range: "0-2 (0:Start in operation / 1:Permanent start / 2:Start in high temp)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 449;
                    };
                };
                readonly "08-38": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-38";
                        readonly name: "Delay Time of Fan Off";
                        readonly range: "0~600";
                        readonly default: "60";
                        readonly unit: "s";
                        readonly page: 449;
                    };
                };
                readonly "08-39": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-39";
                        readonly name: "Delay Time of Motor Overheat Protection";
                        readonly range: "1~300";
                        readonly default: "60";
                        readonly unit: "sec";
                        readonly page: 449;
                    };
                };
                readonly "08-40": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-40";
                        readonly name: "Motor2 Acceleration Stall Prevention Level";
                        readonly range: "20~200";
                        readonly default: "HD:150 / ND:120";
                        readonly unit: "%";
                        readonly page: 449;
                    };
                };
                readonly "08-41": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-41";
                        readonly name: "Motor2 Acceleration Stall Prevention Limit";
                        readonly range: "1~100";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 450;
                    };
                };
                readonly "08-42": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-42"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-42";
                        readonly name: "PTC Protection Level";
                        readonly range: "0.1~10.0";
                        readonly default: "0.7";
                        readonly unit: "V";
                        readonly page: 450;
                    };
                };
                readonly "08-43": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-43"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-43";
                        readonly name: "PTC Restart Level";
                        readonly range: "0.1~10.0";
                        readonly default: "0.3";
                        readonly unit: "V";
                        readonly page: 450;
                    };
                };
                readonly "08-44": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-44";
                        readonly name: "PTC Warning Level";
                        readonly range: "0.1~10.0";
                        readonly default: "0.5";
                        readonly unit: "V";
                        readonly page: 450;
                    };
                };
                readonly "08-46": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-46";
                        readonly name: "Temperature Agree Level";
                        readonly range: "0~254";
                        readonly default: "0";
                        readonly unit: "degree C";
                        readonly page: 450;
                    };
                };
                readonly "08-47": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-47";
                        readonly name: "Temperature Reset Level";
                        readonly range: "0~254";
                        readonly default: "0";
                        readonly unit: "degree C";
                        readonly page: 450;
                    };
                };
                readonly "08-48": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-48"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-48";
                        readonly name: "Selection of Fire Mode";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 450;
                    };
                };
                readonly "08-49": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-49"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-49";
                        readonly name: "Multi-Function Input Terminal Status of Fire Mode";
                        readonly range: "0-1 (0:Reset after power off / 1:Reset after terminal removed)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 450;
                    };
                };
                readonly "08-50": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-50"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-50";
                        readonly name: "Multi-Function Terminal Status of Fire Mode";
                        readonly range: "bit0:S6 A/B contact (0:A / 1:B)";
                        readonly default: "0000b (0)";
                        readonly unit: "-";
                        readonly page: 450;
                    };
                };
                readonly "08-51": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-51"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-51";
                        readonly name: "Motor Speed Setting Source of Fire Mode";
                        readonly range: "0-2 (0:Fire speed / 1:PID / 2:AI2)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 450;
                    };
                };
                readonly "08-52": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-52"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-52";
                        readonly name: "Motor Speed of Fire Mode";
                        readonly range: "0.00~100.00";
                        readonly default: "100.00";
                        readonly unit: "%";
                        readonly page: 450;
                    };
                };
                readonly "08-53": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-53"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-53";
                        readonly name: "PID Detection Level of Fire Mode";
                        readonly range: "0~100";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 450;
                    };
                };
                readonly "08-54": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-54"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-54";
                        readonly name: "Delay Time of Fire Mode PID Loss";
                        readonly range: "0.0~10.0";
                        readonly default: "1.0";
                        readonly unit: "s";
                        readonly page: 450;
                    };
                };
                readonly "08-55": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-55"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-55";
                        readonly name: "PID Feedback Loss Detection Selection of Fire Mode";
                        readonly range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 450;
                    };
                };
                readonly "08-56": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-56"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-56";
                        readonly name: "Detection Level of Fire Mode AI2 Signal";
                        readonly range: "0.0~100.0";
                        readonly default: "80.0";
                        readonly unit: "%";
                        readonly page: 450;
                    };
                };
                readonly "08-57": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-57"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-57";
                        readonly name: "Delay Time of Fire Mode AI2 Signal Loss";
                        readonly range: "0.0~10.0";
                        readonly default: "1.0";
                        readonly unit: "s";
                        readonly page: 450;
                    };
                };
                readonly "08-58": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-58"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-58";
                        readonly name: "Selection of Fire Mode AI2 Signal Loss";
                        readonly range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 451;
                    };
                };
                readonly "08-59": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-59"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-59";
                        readonly name: "Fire Mode Motor Direction";
                        readonly range: "0-1 (0:Forward / 1:Reverse)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 451;
                    };
                };
                readonly "08-60": {
                    readonly register: typeof import("./Registers").GROUP_08_Protection_Parameters["08-60"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 8;
                        readonly code: "08-60";
                        readonly name: "Fire Mode Password";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 451;
                    };
                };
            }>;
            group09: GroupParamOps<{
                readonly "09-00": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-00";
                        readonly name: "INV Communication Station Address";
                        readonly range: "1~31";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-01": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-01";
                        readonly name: "Communication Mode Selection";
                        readonly range: "0 (MODBUS)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-02": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-02";
                        readonly name: "Baud Rate Setting (bps)";
                        readonly range: "0-5 (0:1200 / 1:2400 / 2:4800 / 3:9600 / 4:19200 / 5:38400)";
                        readonly default: "4";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-03": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-03";
                        readonly name: "Stop Bit Selection";
                        readonly range: "0-1 (0:1 StopBit / 1:2 StopBit)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-04": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-04";
                        readonly name: "Parity Selection";
                        readonly range: "0-2 (0:No Parity / 1:Even Bit / 2:Odd Bit)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-05": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-05";
                        readonly name: "Communication DataBit Selection";
                        readonly range: "0-1 (0:8 Bit Data / 1:7 Bit Data)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-06": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-06";
                        readonly name: "Communication Error Detection Time";
                        readonly range: "0.0~25.5";
                        readonly default: "0.0";
                        readonly unit: "S";
                        readonly page: 452;
                    };
                };
                readonly "09-07": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-07";
                        readonly name: "Fault Stop Selection";
                        readonly range: "0-3 (0:Decel stop DT1 / 1:Coast stop / 2:Decel stop DT2 / 3:Keep operating)";
                        readonly default: "3";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-08": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-08";
                        readonly name: "Comm. Fault Tolerance Count";
                        readonly range: "1~20";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 452;
                    };
                };
                readonly "09-09": {
                    readonly register: typeof import("./Registers").GROUP_09_Communication_Parameters["09-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 9;
                        readonly code: "09-09";
                        readonly name: "Waiting Time";
                        readonly range: "5~65";
                        readonly default: "5";
                        readonly unit: "ms";
                        readonly page: 452;
                    };
                };
            }>;
            group10: GroupParamOps<{
                readonly "10-00": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-00";
                        readonly name: "PID Target Value Source Setting";
                        readonly range: "1-4 (1:AI1 / 2:AI2 / 3:PI / 4:10-02)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-01": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-01";
                        readonly name: "PID Feedback Value Source Setting";
                        readonly range: "1-3 (1:AI1 / 2:AI2 / 3:PI)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-02": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-02";
                        readonly name: "PID Target Value";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "%";
                        readonly page: 453;
                    };
                };
                readonly "10-03": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-03";
                        readonly name: "PID Control Mode";
                        readonly range: "bit0:Enable/bit1:Char/bit2:D input/bit3:Output mode";
                        readonly default: "0000b (0)";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-04": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-04";
                        readonly name: "Feedback Gain";
                        readonly range: "0.01~10.00";
                        readonly default: "1.00";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-05": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-05";
                        readonly name: "Proportional Gain (P)";
                        readonly range: "0.00~10.00";
                        readonly default: "1.00";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-06": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-06";
                        readonly name: "Integral Time (I)";
                        readonly range: "0.00~100.00";
                        readonly default: "1.00";
                        readonly unit: "s";
                        readonly page: 453;
                    };
                };
                readonly "10-07": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-07";
                        readonly name: "Differential Time (D)";
                        readonly range: "0.00~10.00";
                        readonly default: "0.00";
                        readonly unit: "s";
                        readonly page: 453;
                    };
                };
                readonly "10-08": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-08";
                        readonly name: "AI1 Frequency Limit";
                        readonly range: "0.00~599.00";
                        readonly default: "0";
                        readonly unit: "Hz";
                        readonly page: 453;
                    };
                };
                readonly "10-09": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-09"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-09";
                        readonly name: "PID Bias";
                        readonly range: "-100.0~100.0";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 453;
                    };
                };
                readonly "10-10": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-10";
                        readonly name: "PID Output Delay Time";
                        readonly range: "0.00~10.00";
                        readonly default: "0.00";
                        readonly unit: "s";
                        readonly page: 453;
                    };
                };
                readonly "10-11": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-11";
                        readonly name: "PID Feedback Loss Detection Selection";
                        readonly range: "0-2 (0:Disable / 1:Warning / 2:Fault)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-12": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-12";
                        readonly name: "PID Feedback Loss Detection Level";
                        readonly range: "0~100";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 453;
                    };
                };
                readonly "10-13": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-13";
                        readonly name: "PID Feedback Loss Detection Time";
                        readonly range: "0.0~10.0";
                        readonly default: "1.0";
                        readonly unit: "s";
                        readonly page: 453;
                    };
                };
                readonly "10-14": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-14";
                        readonly name: "PID Integral Limit";
                        readonly range: "0.0~100.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 453;
                    };
                };
                readonly "10-15": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-15";
                        readonly name: "PID Trim Mode";
                        readonly range: "0-2";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 453;
                    };
                };
                readonly "10-16": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-16";
                        readonly name: "PID Trim Scale";
                        readonly range: "0~100";
                        readonly default: "100";
                        readonly unit: "%";
                        readonly page: 453;
                    };
                };
                readonly "10-17": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-17";
                        readonly name: "Start Frequency of PID Sleep";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 454;
                    };
                };
                readonly "10-18": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-18";
                        readonly name: "Delay Time of PID Sleep";
                        readonly range: "0.0~255.5";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 454;
                    };
                };
                readonly "10-19": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-19"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-19";
                        readonly name: "Frequency of PID Waking up";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 454;
                    };
                };
                readonly "10-20": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-20"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-20";
                        readonly name: "Delay Time of PID Waking up";
                        readonly range: "0.0~255.5";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 454;
                    };
                };
                readonly "10-23": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-23"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-23";
                        readonly name: "PID Output Limit";
                        readonly range: "0.0~100.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 454;
                    };
                };
                readonly "10-24": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-24";
                        readonly name: "PID Output Gain";
                        readonly range: "0.0~25.0";
                        readonly default: "1.0";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-25": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-25";
                        readonly name: "PID Reversal Output Selection";
                        readonly range: "0-1 (0:No reversal / 1:Allow reversal)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-26": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-26"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-26";
                        readonly name: "PID Target Acceleration/Deceleration Time";
                        readonly range: "0.0~25.5";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 454;
                    };
                };
                readonly "10-27": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-27";
                        readonly name: "PID Feedback Display Bias";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-29": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-29";
                        readonly name: "PID Sleep Selection";
                        readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-30": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-30"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-30";
                        readonly name: "Upper Limit of PID Target";
                        readonly range: "0.0~100.0";
                        readonly default: "100.0";
                        readonly unit: "%";
                        readonly page: 454;
                    };
                };
                readonly "10-31": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-31"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-31";
                        readonly name: "Lower Limit of PID Target";
                        readonly range: "0.0~100.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 454;
                    };
                };
                readonly "10-33": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-33";
                        readonly name: "Maximum Value of PID Feedback";
                        readonly range: "1~10000";
                        readonly default: "999";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-34": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-34";
                        readonly name: "PID Decimal Width";
                        readonly range: "0~4";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-35": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-35";
                        readonly name: "PID Unit";
                        readonly range: "0~24 (0:% / 1:FPM / 2:CFM / 3:SPI ...)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 454;
                    };
                };
                readonly "10-36": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-36"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-36";
                        readonly name: "Proportional Gain 2 (P)";
                        readonly range: "0.00~10.00";
                        readonly default: "3.00";
                        readonly unit: "-";
                        readonly page: 455;
                    };
                };
                readonly "10-37": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-37"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-37";
                        readonly name: "Integral Time 2 (I)";
                        readonly range: "0.00~100.00";
                        readonly default: "0.50";
                        readonly unit: "Sec";
                        readonly page: 455;
                    };
                };
                readonly "10-38": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-38"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-38";
                        readonly name: "Differential Time 2 (D)";
                        readonly range: "0.00~10.00";
                        readonly default: "0.00";
                        readonly unit: "Sec";
                        readonly page: 455;
                    };
                };
                readonly "10-39": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-39"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-39";
                        readonly name: "Output Frequency Setting of PID Disconnection";
                        readonly range: "0.00~599.00";
                        readonly default: "30.00";
                        readonly unit: "Hz";
                        readonly page: 455;
                    };
                };
                readonly "10-40": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-40";
                        readonly name: "Selection of PID Sleep Compensation Frequency";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 455;
                    };
                };
                readonly "10-41": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-41";
                        readonly name: "PID Mode Switch";
                        readonly range: "0-1 (0:General PID / 1:D Type PID)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 455;
                    };
                };
                readonly "10-47": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-47"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-47";
                        readonly name: "Proportional Gain 3 (P)";
                        readonly range: "0.00~10.00";
                        readonly default: "1.00";
                        readonly unit: "-";
                        readonly page: 456;
                    };
                };
                readonly "10-48": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-48"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-48";
                        readonly name: "Integral Time 3 (I)";
                        readonly range: "0.00~100.00";
                        readonly default: "1.00";
                        readonly unit: "Sec";
                        readonly page: 456;
                    };
                };
                readonly "10-49": {
                    readonly register: typeof import("./Registers").GROUP_10_PID_Parameters["10-49"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 10;
                        readonly code: "10-49";
                        readonly name: "Differential Time 3 (D)";
                        readonly range: "0.00~10.00";
                        readonly default: "0.00";
                        readonly unit: "Sec";
                        readonly page: 456;
                    };
                };
            }>;
            group11: GroupParamOps<{
                readonly "11-00": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-00";
                        readonly name: "Direction Lock Selection";
                        readonly range: "0-2 (0:Fwd+Rev / 1:Fwd only / 2:Rev only)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 456;
                    };
                };
                readonly "11-01": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-01";
                        readonly name: "Carrier frequency";
                        readonly range: "0~16 (0:Tuning / 1~16:1~16KHz)";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "-";
                        readonly page: 456;
                    };
                };
                readonly "11-02": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-02";
                        readonly name: "Soft PWM Function Selection";
                        readonly range: "0-2 (0:Disable / 1:Soft PWM 1 / 2:Soft PWM 2)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 456;
                    };
                };
                readonly "11-03": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-03";
                        readonly name: "Automatic carrier lowering selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 456;
                    };
                };
                readonly "11-04": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-04";
                        readonly name: "S-curve Time Setting at Start of Accel";
                        readonly range: "0.00~2.50";
                        readonly default: "0.20";
                        readonly unit: "s";
                        readonly page: 456;
                    };
                };
                readonly "11-05": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-05";
                        readonly name: "S-curve Time Setting at Stop of Accel";
                        readonly range: "0.00~2.50";
                        readonly default: "0.20";
                        readonly unit: "s";
                        readonly page: 456;
                    };
                };
                readonly "11-06": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-06";
                        readonly name: "S-curve Time Setting at Start of Decel";
                        readonly range: "0.00~2.50";
                        readonly default: "0.20";
                        readonly unit: "s";
                        readonly page: 456;
                    };
                };
                readonly "11-07": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-07";
                        readonly name: "S-curve Time Setting at Stop of Decel";
                        readonly range: "0.00~2.50";
                        readonly default: "0.20";
                        readonly unit: "s";
                        readonly page: 456;
                    };
                };
                readonly "11-08": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-08";
                        readonly name: "Jump Frequency 1";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 456;
                    };
                };
                readonly "11-09": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-09";
                        readonly name: "Jump Frequency 2";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 456;
                    };
                };
                readonly "11-10": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-10";
                        readonly name: "Jump Frequency 3";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 456;
                    };
                };
                readonly "11-11": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-11"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-11";
                        readonly name: "Jump Frequency Width";
                        readonly range: "0.0~25.5";
                        readonly default: "1.0";
                        readonly unit: "Hz";
                        readonly page: 456;
                    };
                };
                readonly "11-12": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-12";
                        readonly name: "Manual Energy Saving Gain";
                        readonly range: "0~100";
                        readonly default: "80";
                        readonly unit: "%";
                        readonly page: 456;
                    };
                };
                readonly "11-13": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-13";
                        readonly name: "Automatic Return Time";
                        readonly range: "0~120";
                        readonly default: "60";
                        readonly unit: "Sec";
                        readonly page: 456;
                    };
                };
                readonly "11-18": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-18"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-18";
                        readonly name: "Manual Energy Saving Frequency";
                        readonly range: "0.0~599.0";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 456;
                    };
                };
                readonly "11-19": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-19";
                        readonly name: "Automatic Energy Saving Function";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-20": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-20";
                        readonly name: "Filter Time of Automatic Energy Saving";
                        readonly range: "0~200";
                        readonly default: "140";
                        readonly unit: "ms";
                        readonly page: 457;
                    };
                };
                readonly "11-21": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-21";
                        readonly name: "Voltage Upper Limit of Energy Saving";
                        readonly range: "0~100";
                        readonly default: "100";
                        readonly unit: "%";
                        readonly page: 457;
                    };
                };
                readonly "11-22": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-22";
                        readonly name: "Adjustment Time of Auto Energy Saving";
                        readonly range: "0~5000";
                        readonly default: "20";
                        readonly unit: "ms";
                        readonly page: 457;
                    };
                };
                readonly "11-23": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-23";
                        readonly name: "Detection Level of Auto Energy Saving";
                        readonly range: "0~100";
                        readonly default: "10";
                        readonly unit: "%";
                        readonly page: 457;
                    };
                };
                readonly "11-24": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-24";
                        readonly name: "Coefficient of Auto Energy Saving";
                        readonly range: "0.00~655.34";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-28": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-28";
                        readonly name: "Frequency Gain of OV Prevention 2";
                        readonly range: "1~200";
                        readonly default: "100";
                        readonly unit: "%";
                        readonly page: 457;
                    };
                };
                readonly "11-29": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-29";
                        readonly name: "Auto De-rating Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-30": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-30";
                        readonly name: "Variable Carrier Freq Max Limit";
                        readonly range: "2~16";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "KHz";
                        readonly page: 457;
                    };
                };
                readonly "11-31": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-31";
                        readonly name: "Variable Carrier Freq Min Limit";
                        readonly range: "1~16";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "KHz";
                        readonly page: 457;
                    };
                };
                readonly "11-32": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-32";
                        readonly name: "Variable Carrier Freq Prop Gain";
                        readonly range: "0~99";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-33": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-33"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-33";
                        readonly name: "DC Voltage Filter Rise Amount";
                        readonly range: "0.1~10.0";
                        readonly default: "0.1";
                        readonly unit: "Vdc";
                        readonly page: 457;
                    };
                };
                readonly "11-34": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-34";
                        readonly name: "DC Voltage Filter Fall Amount";
                        readonly range: "0.1~10.0";
                        readonly default: "5.0";
                        readonly unit: "Vdc";
                        readonly page: 457;
                    };
                };
                readonly "11-35": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-35"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-35";
                        readonly name: "DC Voltage Filter Dead band Level";
                        readonly range: "0.0~99.0";
                        readonly default: "10.0";
                        readonly unit: "Vdc";
                        readonly page: 457;
                    };
                };
                readonly "11-36": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-36"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-36";
                        readonly name: "Frequency Gain of OV Prevention";
                        readonly range: "0.000~1.000";
                        readonly default: "0.050";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-37": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-37"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-37";
                        readonly name: "Frequency Limit of OV Prevention";
                        readonly range: "0.00~599.00";
                        readonly default: "5.00";
                        readonly unit: "Hz";
                        readonly page: 457;
                    };
                };
                readonly "11-38": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-38";
                        readonly name: "Deceleration Start Voltage of OV Prevention";
                        readonly range: "200~400(230V)/400~800(460V)/500~1000(575V)/600~1200(690V)";
                        readonly default: "300/700/900/1080";
                        readonly unit: "V";
                        readonly page: 457;
                    };
                };
                readonly "11-39": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-39";
                        readonly name: "Deceleration Stop Voltage of OV Prevention";
                        readonly range: "300~400(230V)/600~800(460V)/500~1000(575V)/600~1200(690V)";
                        readonly default: "350/750/950/1140";
                        readonly unit: "V";
                        readonly page: 457;
                    };
                };
                readonly "11-40": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-40";
                        readonly name: "OV Prevention Selection";
                        readonly range: "0-3 (0:Disable / 1:Mode1 / 2:Mode2 / 3:Mode3)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 457;
                    };
                };
                readonly "11-41": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-41";
                        readonly name: "Selection of Ref Freq Disappearance Detection";
                        readonly range: "0-1 (0:Decel stop / 1:Use 11-42 level)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-42": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-42"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-42";
                        readonly name: "Disappearance Level of Reference Frequency";
                        readonly range: "0.0~100.0";
                        readonly default: "80.0";
                        readonly unit: "%";
                        readonly page: 458;
                    };
                };
                readonly "11-43": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-43"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-43";
                        readonly name: "Hold Frequency at Start";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 458;
                    };
                };
                readonly "11-44": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-44";
                        readonly name: "Frequency Hold Time at Start";
                        readonly range: "0.0~10.0";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 458;
                    };
                };
                readonly "11-45": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-45"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-45";
                        readonly name: "Hold Frequency at Stop";
                        readonly range: "0.0~599.0";
                        readonly default: "0.0";
                        readonly unit: "Hz";
                        readonly page: 458;
                    };
                };
                readonly "11-46": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-46"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-46";
                        readonly name: "Frequency Hold Time at Stop";
                        readonly range: "0.0~10.0";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 458;
                    };
                };
                readonly "11-47": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-47"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-47";
                        readonly name: "KEB Deceleration Time";
                        readonly range: "0.0~25.5";
                        readonly default: "0.0";
                        readonly unit: "s";
                        readonly page: 458;
                    };
                };
                readonly "11-48": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-48"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-48";
                        readonly name: "KEB Detection Level";
                        readonly range: "190~210(230V)/380~420(460V)/540~570(575V)/540~684(690V)";
                        readonly default: "200/400/555/555";
                        readonly unit: "V";
                        readonly page: 458;
                    };
                };
                readonly "11-49": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-49"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-49";
                        readonly name: "Zero-servo Gain";
                        readonly range: "0.01~5.00";
                        readonly default: "1.00";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-50": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-50"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-50";
                        readonly name: "Zero-servo Count";
                        readonly range: "0~4096";
                        readonly default: "12";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-51": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-51"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-51";
                        readonly name: "Braking Selection of Zero Speed";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-52": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-52"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-52";
                        readonly name: "Droop Control Level";
                        readonly range: "0.0~100.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 458;
                    };
                };
                readonly "11-53": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-53"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-53";
                        readonly name: "Droop Control Delay";
                        readonly range: "0.01~2.00";
                        readonly default: "0.2";
                        readonly unit: "s";
                        readonly page: 458;
                    };
                };
                readonly "11-54": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-54"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-54";
                        readonly name: "Initialization of Cumulative Energy";
                        readonly range: "0-1 (0:Do not clear / 1:Clear)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-55": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-55"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-55";
                        readonly name: "STOP Key Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 458;
                    };
                };
                readonly "11-56": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-56"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-56";
                        readonly name: "UP/DOWN Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-58": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-58"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-58";
                        readonly name: "Record Reference Frequency";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-59": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-59"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-59";
                        readonly name: "Gain of Preventing Oscillation";
                        readonly range: "0.00~2.50";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-60": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-60"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-60";
                        readonly name: "Upper Limit of Preventing Oscillation";
                        readonly range: "0~100";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "%";
                        readonly page: 459;
                    };
                };
                readonly "11-61": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-61"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-61";
                        readonly name: "Time Parameter of Preventing Oscillation";
                        readonly range: "0~100";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-62": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-62"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-62";
                        readonly name: "Selection of Preventing Oscillation";
                        readonly range: "0-2 (0:Mode1 / 1:Mode2 / 2:Mode3)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-63": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-63"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-63";
                        readonly name: "Strong Magnetic Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-64": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-64"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-64";
                        readonly name: "Acceleration Speed Gain Adjustment";
                        readonly range: "0.1~10.0";
                        readonly default: "1.0";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-65": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-65"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-65";
                        readonly name: "Target Main Circuit Voltage";
                        readonly range: "200~400(230V)/400~800(460V)/520~1040(575V)/624~1248(690V)";
                        readonly default: "370/740/962/1154";
                        readonly unit: "-";
                        readonly page: 459;
                    };
                };
                readonly "11-66": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-66"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-66";
                        readonly name: "2 Phase/ 3 Phase PWM Switch Frequency";
                        readonly range: "6.00~60.00";
                        readonly default: "20";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-67": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-67"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-67";
                        readonly name: "Soft PWM 2 Frequency Range";
                        readonly range: "0~12000";
                        readonly default: "0";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-68": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-68"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-68";
                        readonly name: "Soft PWM 2 Switch Frequency";
                        readonly range: "6.00~60.00";
                        readonly default: "20";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-69": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-69"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-69";
                        readonly name: "Gain of Preventing Oscillation 3";
                        readonly range: "0.00~200.00";
                        readonly default: "5.00";
                        readonly unit: "%";
                        readonly page: 459;
                    };
                };
                readonly "11-70": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-70"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-70";
                        readonly name: "Upper Limit of Preventing Oscillation 3";
                        readonly range: "0.01~100.00";
                        readonly default: "5.00";
                        readonly unit: "%";
                        readonly page: 459;
                    };
                };
                readonly "11-71": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-71"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-71";
                        readonly name: "Time Parameter of Preventing Oscillation 3";
                        readonly range: "0~30000";
                        readonly default: "100";
                        readonly unit: "ms";
                        readonly page: 459;
                    };
                };
                readonly "11-72": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-72"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-72";
                        readonly name: "Gain of Preventing Oscillation for Switch Frequency 1";
                        readonly range: "0.01~300.00";
                        readonly default: "30.00";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-73": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-73"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-73";
                        readonly name: "Gain of Preventing Oscillation for Switch Frequency 2";
                        readonly range: "0.01~300.00";
                        readonly default: "50.00";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-76": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-76"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-76";
                        readonly name: "Droop Frequency Level 1";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-77": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-77"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-77";
                        readonly name: "Droop Frequency Level 2";
                        readonly range: "0.00~599.00";
                        readonly default: "0.00";
                        readonly unit: "Hz";
                        readonly page: 459;
                    };
                };
                readonly "11-78": {
                    readonly register: typeof import("./Registers").GROUP_11_Auxiliary_Parameters["11-78"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 11;
                        readonly code: "11-78";
                        readonly name: "Droop Torque Offset Value";
                        readonly range: "0.00~100.00";
                        readonly default: "0.00";
                        readonly unit: "%";
                        readonly page: 459;
                    };
                };
            }>;
            group12: GroupParamOps<{
                readonly "12-00": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-00";
                        readonly name: "Display Screen Selection (LED)";
                        readonly range: "00000~77777";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 462;
                    };
                };
                readonly "12-01": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-01";
                        readonly name: "PID Feedback Display Mode (LED)";
                        readonly range: "0-2 (0:Integer / 1:1 decimal / 2:2 decimals)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 462;
                    };
                };
                readonly "12-02": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-02";
                        readonly name: "PID Feedback Display Unit Setting (LED)";
                        readonly range: "0-2 (0:xxxxx / 1:xxxPb / 2:xxxFL)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 462;
                    };
                };
                readonly "12-03": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-03";
                        readonly name: "Line Speed Display (LED)";
                        readonly range: "0~60000";
                        readonly default: "1500";
                        readonly unit: "RPM";
                        readonly page: 462;
                    };
                };
                readonly "12-04": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-04";
                        readonly name: "Modes of Line Speed Display (LED)";
                        readonly range: "0-4 (0:Output Freq / 1:Integer / 2:1 dec / 3:2 dec / 4:3 dec)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 462;
                    };
                };
                readonly "12-05": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-05";
                        readonly name: "Status Display of Digital Input & Output Terminal";
                        readonly range: "bit-field (see manual)";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 462;
                    };
                };
                readonly "12-11": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-11";
                        readonly name: "Output Current of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "A";
                        readonly page: 463;
                    };
                };
                readonly "12-12": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-12";
                        readonly name: "Output Voltage of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 463;
                    };
                };
                readonly "12-13": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-13";
                        readonly name: "Output Frequency of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 463;
                    };
                };
                readonly "12-14": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-14";
                        readonly name: "DC Voltage of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 463;
                    };
                };
                readonly "12-15": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-15";
                        readonly name: "Frequency Command of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 463;
                    };
                };
                readonly "12-16": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-16";
                        readonly name: "Frequency Command";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 463;
                    };
                };
                readonly "12-17": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-17";
                        readonly name: "Output Frequency";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 463;
                    };
                };
                readonly "12-18": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-18";
                        readonly name: "Output Current";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "A";
                        readonly page: 463;
                    };
                };
                readonly "12-19": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-19";
                        readonly name: "Output Voltage";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 463;
                    };
                };
                readonly "12-20": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-20";
                        readonly name: "DC Voltage (Vdc)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 463;
                    };
                };
                readonly "12-21": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-21";
                        readonly name: "Output Power (kW)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "kW";
                        readonly page: 463;
                    };
                };
                readonly "12-22": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-22";
                        readonly name: "Motor's Rotation Speed (rpm)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "rpm";
                        readonly page: 463;
                    };
                };
                readonly "12-23": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-23";
                        readonly name: "Output Power Factor (Pfo)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 463;
                    };
                };
                readonly "12-24": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-24";
                        readonly name: "Control Mode";
                        readonly range: "Display only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 463;
                    };
                };
                readonly "12-25": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-25";
                        readonly name: "AI1 Input";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-26": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-26";
                        readonly name: "AI2 Input";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-27": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-27";
                        readonly name: "Motor Torque";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-28": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-28";
                        readonly name: "Motor Torque Current (Iq)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-29": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-29";
                        readonly name: "Motor Excitation Current (Id)";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-30": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-30";
                        readonly name: "ASR Deviation";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 463;
                    };
                };
                readonly "12-32": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-32";
                        readonly name: "ASR Output";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-33": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-33";
                        readonly name: "PG Feedback";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-34": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-34";
                        readonly name: "PG Pulse Number";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Pulse";
                        readonly page: 464;
                    };
                };
                readonly "12-35": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-35";
                        readonly name: "Zero-servo Pulse Number";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Pulse";
                        readonly page: 464;
                    };
                };
                readonly "12-36": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-36";
                        readonly name: "PID Input";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-37": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-37";
                        readonly name: "PID Output";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-38": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-38";
                        readonly name: "PID Setting";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-39": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-39";
                        readonly name: "PID Feedback";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 464;
                    };
                };
                readonly "12-41": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-41";
                        readonly name: "Heatsink Temperature";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "℃";
                        readonly page: 464;
                    };
                };
                readonly "12-42": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-42";
                        readonly name: "RS-485 Error Code";
                        readonly range: "bit-field (CRC/Data len/Function/Parity/Overrun/Framing/Timeout)";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 464;
                    };
                };
                readonly "12-43": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-43";
                        readonly name: "Inverter Status";
                        readonly range: "bit-field (Ready/Running/Zero speed/Speed agree/Fault minor/Fault major)";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 464;
                    };
                };
                readonly "12-44": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-44"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-44";
                        readonly name: "Pulse Input Frequency";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 464;
                    };
                };
                readonly "12-45": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-45";
                        readonly name: "Recent Fault Message";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-46": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-46";
                        readonly name: "Previous Fault Message";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-47": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-47";
                        readonly name: "Previous Two Fault Messages";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-48": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-48"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-48";
                        readonly name: "Previous Three Fault Messages";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-49": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-49"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-49";
                        readonly name: "Previous Four Fault Messages";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-50": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-50"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-50";
                        readonly name: "DIO Status of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-51": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-51"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-51";
                        readonly name: "Inverter Status of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-52": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-52"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-52";
                        readonly name: "Trip Time 1 of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hr";
                        readonly page: 465;
                    };
                };
                readonly "12-53": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-53"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-53";
                        readonly name: "Trip Time 2 of Current Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "day";
                        readonly page: 465;
                    };
                };
                readonly "12-54": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-54"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-54";
                        readonly name: "Frequency Command of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 465;
                    };
                };
                readonly "12-55": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-55"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-55";
                        readonly name: "Output Frequency of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hz";
                        readonly page: 465;
                    };
                };
                readonly "12-56": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-56"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-56";
                        readonly name: "Output Current of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "A";
                        readonly page: 465;
                    };
                };
                readonly "12-57": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-57"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-57";
                        readonly name: "Output Voltage of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 465;
                    };
                };
                readonly "12-58": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-58"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-58";
                        readonly name: "DC Voltage of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 465;
                    };
                };
                readonly "12-59": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-59"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-59";
                        readonly name: "DIO Status of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-60": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-60"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-60";
                        readonly name: "Inverter Status of Previous Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-61": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-61"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-61";
                        readonly name: "Trip Time 1 of Last Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "Hr";
                        readonly page: 465;
                    };
                };
                readonly "12-62": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-62"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-62";
                        readonly name: "Trip Time 2 of Last Fault";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "day";
                        readonly page: 465;
                    };
                };
                readonly "12-63": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-63"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-63";
                        readonly name: "Recent Warning Messages";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-64": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-64"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-64";
                        readonly name: "Previous Warning Message";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 465;
                    };
                };
                readonly "12-65": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-65"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-65";
                        readonly name: "Motor Start Angle";
                        readonly range: "0~360";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 466;
                    };
                };
                readonly "12-66": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-66"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-66";
                        readonly name: "Encoder Angle";
                        readonly range: "0~360";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 466;
                    };
                };
                readonly "12-67": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-67"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-67";
                        readonly name: "Cumulative Energy (kWHr)";
                        readonly range: "0.0~999.9";
                        readonly default: "-";
                        readonly unit: "kWHr";
                        readonly page: 466;
                    };
                };
                readonly "12-68": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-68"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-68";
                        readonly name: "Cumulative Energy (MWHr)";
                        readonly range: "0~60000";
                        readonly default: "-";
                        readonly unit: "MWHr";
                        readonly page: 466;
                    };
                };
                readonly "12-76": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-76"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-76";
                        readonly name: "No-Load Voltage Output";
                        readonly range: "0.0~600.0";
                        readonly default: "-";
                        readonly unit: "V";
                        readonly page: 467;
                    };
                };
                readonly "12-78": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-78"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-78";
                        readonly name: "Z-Phase Bias Value";
                        readonly range: "-9999~9999";
                        readonly default: "-";
                        readonly unit: "Pulse";
                        readonly page: 467;
                    };
                };
                readonly "12-79": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-79"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-79";
                        readonly name: "Pulse Input Percentage";
                        readonly range: "0.0~100.0";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 467;
                    };
                };
                readonly "12-80": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-80"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-80";
                        readonly name: "AI1 Frequency Command";
                        readonly range: "0.0~599.0";
                        readonly default: "0";
                        readonly unit: "Hz";
                        readonly page: 467;
                    };
                };
                readonly "12-82": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-82"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-82";
                        readonly name: "Motor Load";
                        readonly range: "0~200.0";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 467;
                    };
                };
                readonly "12-85": {
                    readonly register: typeof import("./Registers").GROUP_12_Monitoring_Parameters["12-85"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 12;
                        readonly code: "12-85";
                        readonly name: "AI3 Input";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "%";
                        readonly page: 467;
                    };
                };
            }>;
            group13: GroupParamOps<{
                readonly "13-00": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-00";
                        readonly name: "Inverter Capacity Selection";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-01": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-01";
                        readonly name: "Software Version";
                        readonly range: "0.00~9.99";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-02": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-02";
                        readonly name: "Clear Cumulative Operation Hours";
                        readonly range: "0-1 (0:Disable / 1:Clear)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-03": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-03";
                        readonly name: "Cumulative Operation Hours 1";
                        readonly range: "0~23";
                        readonly default: "-";
                        readonly unit: "hr";
                        readonly page: 468;
                    };
                };
                readonly "13-04": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-04";
                        readonly name: "Cumulative Operation Hours 2";
                        readonly range: "0~65534";
                        readonly default: "-";
                        readonly unit: "day";
                        readonly page: 468;
                    };
                };
                readonly "13-05": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-05";
                        readonly name: "Selection of Cumulative Operation Time";
                        readonly range: "0-1 (0:Power on / 1:Operation)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-06": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-06";
                        readonly name: "Parameters Locked";
                        readonly range: "0-2 (0:Read-only / 1:User defined / 2:All writable)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-07": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-07";
                        readonly name: "Parameter Password Function";
                        readonly range: "00000~65534";
                        readonly default: "00000";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-08": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-08";
                        readonly name: "Restore Factory Setting";
                        readonly range: "0-16 (0:No init / 2:2-wire 60Hz 230/460/690V / 4:2-wire 50Hz 220/380V / 6:3-wire 60Hz 230/460/690V / 8:3-wire 50Hz 220/380V / 10:Customized / 12:2-wire 50Hz 200/400V / 14:3-wire 50Hz 200/400V / 16:3-wire 50Hz 220/380V)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 468;
                    };
                };
                readonly "13-09": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-09";
                        readonly name: "Fault History Clearance Function";
                        readonly range: "0-1 (0:No clearing / 1:Clear)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-10": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-10";
                        readonly name: "Parameter Password Function 2";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-11": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-11";
                        readonly name: "C/B CPLD Ver.";
                        readonly range: "0.00~9.99";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-12": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-12";
                        readonly name: "PG Card Id";
                        readonly range: "0~255";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-13": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-13";
                        readonly name: "PG Card Ver.";
                        readonly range: "0.00~9.99";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-14": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-14";
                        readonly name: "Fault Storage Selections";
                        readonly range: "0-1 (0:Auto restart not saved / 1:Auto restart saved)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-21": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-21";
                        readonly name: "Last time Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-22": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-22";
                        readonly name: "Previous two Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-23": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-23";
                        readonly name: "Previous three Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-24": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-24";
                        readonly name: "Previous four Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-25": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-25";
                        readonly name: "Previous five Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-26": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-26";
                        readonly name: "Previous six Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 469;
                    };
                };
                readonly "13-27": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-27";
                        readonly name: "Previous seven Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-28": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-28";
                        readonly name: "Previous eight Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-29": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-29";
                        readonly name: "Previous nine Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-30": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-30";
                        readonly name: "Previous ten Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-31": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-31";
                        readonly name: "Previous eleven Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-32": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-32";
                        readonly name: "Previous twelve Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-33": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-33";
                        readonly name: "Previous thirteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-34": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-34";
                        readonly name: "Previous fourteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-35": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-35";
                        readonly name: "Previous fifteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-36": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-36";
                        readonly name: "Previous sixteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-37": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-37";
                        readonly name: "Previous seventeen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-38": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-38";
                        readonly name: "Previous eighteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-39": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-39";
                        readonly name: "Previous nineteen Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-40": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-40";
                        readonly name: "Previous twenty Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-41": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-41";
                        readonly name: "Previous twenty one Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-42": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-42";
                        readonly name: "Previous twenty two Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-43": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-43";
                        readonly name: "Previous twenty three Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-44": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-44"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-44";
                        readonly name: "Previous twenty four Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-45": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-45";
                        readonly name: "Previous twenty five Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-46": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-46";
                        readonly name: "Previous twenty six Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-47": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-47";
                        readonly name: "Previous twenty seven Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-48": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-48"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-48";
                        readonly name: "Previous twenty eight Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-49": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-49"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-49";
                        readonly name: "Previous twenty nine Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
                readonly "13-50": {
                    readonly register: typeof import("./Registers").GROUP_13_Maintenance_Parameters["13-50"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 13;
                        readonly code: "13-50";
                        readonly name: "Previous thirty Fault History";
                        readonly range: "read-only";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 470;
                    };
                };
            }>;
            group14: GroupParamOps<{
                readonly "14-00": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-00";
                        readonly name: "T1 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-01": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-01";
                        readonly name: "T1 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-02": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-02";
                        readonly name: "T2 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-03": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-03";
                        readonly name: "T2 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-04": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-04";
                        readonly name: "T3 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-05": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-05";
                        readonly name: "T3 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-06": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-06";
                        readonly name: "T4 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-07": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-07";
                        readonly name: "T4 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-08": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-08";
                        readonly name: "T5 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-09": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-09";
                        readonly name: "T5 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-10": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-10";
                        readonly name: "T6 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-11": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-11";
                        readonly name: "T6 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-12": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-12";
                        readonly name: "T7 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-13": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-13";
                        readonly name: "T7 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-14": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-14";
                        readonly name: "T8 Set Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-15": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-15";
                        readonly name: "T8 Set Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-16": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-16";
                        readonly name: "C1 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-17": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-17";
                        readonly name: "C2 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-18": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-18";
                        readonly name: "C3 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-19": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-19";
                        readonly name: "C4 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-20": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-20";
                        readonly name: "C5 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-21": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-21";
                        readonly name: "C6 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-22": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-22";
                        readonly name: "C7 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-23": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-23";
                        readonly name: "C8 Set Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-24": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-24";
                        readonly name: "AS1 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-25": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-25";
                        readonly name: "AS1 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-26": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-26";
                        readonly name: "AS1 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-27": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-27";
                        readonly name: "AS2 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-28": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-28";
                        readonly name: "AS2 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-29": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-29";
                        readonly name: "AS2 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-30": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-30";
                        readonly name: "AS3 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-31": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-31";
                        readonly name: "AS3 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-32": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-32";
                        readonly name: "AS3 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-33": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-33";
                        readonly name: "AS4 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-34": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-34";
                        readonly name: "AS4 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-35": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-35";
                        readonly name: "AS4 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-36": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-36";
                        readonly name: "MD1 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-37": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-37";
                        readonly name: "MD1 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-38": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-38";
                        readonly name: "MD1 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-39": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-39";
                        readonly name: "MD2 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-40": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-40";
                        readonly name: "MD2 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-41": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-41";
                        readonly name: "MD2 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-42": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-42";
                        readonly name: "MD3 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-43": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-43";
                        readonly name: "MD3 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-44": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-44"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-44";
                        readonly name: "MD3 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-45": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-45"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-45";
                        readonly name: "MD4 Set Value 1";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-46": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-46"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-46";
                        readonly name: "MD4 Set Value 2";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
                readonly "14-47": {
                    readonly register: typeof import("./Registers").GROUP_14_PLC_Parameters["14-47"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 14;
                        readonly code: "14-47";
                        readonly name: "MD4 Set Value 3";
                        readonly range: "0~65534";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 472;
                    };
                };
            }>;
            group15: GroupParamOps<{
                readonly "15-00": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-00";
                        readonly name: "T1 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-01": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-01";
                        readonly name: "T1 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-02": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-02";
                        readonly name: "T2 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-03": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-03";
                        readonly name: "T2 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-04": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-04";
                        readonly name: "T3 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-05": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-05";
                        readonly name: "T3 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-06": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-06";
                        readonly name: "T4 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-07": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-07";
                        readonly name: "T4 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-08": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-08";
                        readonly name: "T5 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-09": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-09";
                        readonly name: "T5 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-10": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-10";
                        readonly name: "T6 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-11": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-11";
                        readonly name: "T6 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-12": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-12";
                        readonly name: "T7 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-13": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-13";
                        readonly name: "T7 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-14": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-14";
                        readonly name: "T8 Current Value 1";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-15": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-15";
                        readonly name: "T8 Current Value 2 (Mode 7)";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-16": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-16";
                        readonly name: "C1 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-17": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-17";
                        readonly name: "C2 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-18": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-18";
                        readonly name: "C3 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-19": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-19";
                        readonly name: "C4 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-20": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-20";
                        readonly name: "C5 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-21": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-21";
                        readonly name: "C6 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-22": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-22";
                        readonly name: "C7 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-23": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-23";
                        readonly name: "C8 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-24": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-24";
                        readonly name: "AS1 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-25": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-25";
                        readonly name: "AS2 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-26": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-26";
                        readonly name: "AS3 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-27": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-27";
                        readonly name: "AS4 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-28": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-28";
                        readonly name: "MD1 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-29": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-29";
                        readonly name: "MD2 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-30": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-30";
                        readonly name: "MD3 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-31": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-31";
                        readonly name: "MD4 Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
                readonly "15-32": {
                    readonly register: typeof import("./Registers").GROUP_15_PLC_Monitoring_Parameters["15-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 15;
                        readonly code: "15-32";
                        readonly name: "TD Current Value";
                        readonly range: "0~65534";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 473;
                    };
                };
            }>;
            group16: GroupParamOps<{
                readonly "16-00": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-00";
                        readonly name: "Main Screen Monitoring";
                        readonly range: "5~82";
                        readonly default: "16";
                        readonly unit: "-";
                        readonly page: 474;
                    };
                };
                readonly "16-01": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-01";
                        readonly name: "Sub-Screen Monitoring 1";
                        readonly range: "5~82";
                        readonly default: "17";
                        readonly unit: "-";
                        readonly page: 474;
                    };
                };
                readonly "16-02": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-02";
                        readonly name: "Sub-Screen Monitoring 2";
                        readonly range: "5~82";
                        readonly default: "18";
                        readonly unit: "-";
                        readonly page: 474;
                    };
                };
                readonly "16-03": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-03";
                        readonly name: "Display Unit";
                        readonly range: "0~39999 (0:0.01Hz / 1:0.01% / 2:rpm / 40~9999:XXXX at 100% / 10001~19999:XXX.X / 20001~29999:XX.XX / 30001~39999:X.XXX)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 474;
                    };
                };
                readonly "16-04": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-04";
                        readonly name: "Engineering Unit";
                        readonly range: "0~24 (0:none / 1:FPM / 2:CFM / 3:PSI / 4:GPH / 5:GPM / 6:IN / 7:FT / 8:/s / 9:/m / 10:/h / 11:°F / 12:inW / 13:HP / 14:m/s / 15:MPM / 16:CMM / 17:W / 18:KW / 19:m / 20:°C / 21:RPM / 22:Bar / 23:Pa / 24:KPa)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 474;
                    };
                };
                readonly "16-05": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-05";
                        readonly name: "LCD Backlight";
                        readonly range: "0~7";
                        readonly default: "5";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-07": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-07";
                        readonly name: "Copy Function Selection";
                        readonly range: "0-3 (0:Do not copy / 1:Read to operator / 2:Write to inverter / 3:Compare)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-08": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-08";
                        readonly name: "Selection of Allowing Reading";
                        readonly range: "0-1 (0:Not allow / 1:Allow)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-09": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-09"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-09";
                        readonly name: "Selection of Operator Removed (LCD)";
                        readonly range: "0-1 (0:Keep operating / 1:Display fault)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-10": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-10";
                        readonly name: "RTC Time Display Setting";
                        readonly range: "0-1 (0:Hide / 1:Display)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-11": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-11";
                        readonly name: "RTC Date Setting";
                        readonly range: "12.01.01~99.12.31";
                        readonly default: "12.01.01";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-12": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-12";
                        readonly name: "RTC Time Setting";
                        readonly range: "00:00~23:59";
                        readonly default: "00:00";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-13": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-13";
                        readonly name: "RTC Timer Function";
                        readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-14": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-14";
                        readonly name: "P1 Start Time";
                        readonly range: "00:00~23:59";
                        readonly default: "08:00";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-15": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-15";
                        readonly name: "P1 Stop Time";
                        readonly range: "00:00~23:59";
                        readonly default: "18:00";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-16": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-16";
                        readonly name: "P1 Start Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-17": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-17";
                        readonly name: "P1 Stop Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "5";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-18": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-18";
                        readonly name: "P2 Start Time";
                        readonly range: "00:00~23:59";
                        readonly default: "08:00";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-19": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-19";
                        readonly name: "P2 Stop Time";
                        readonly range: "00:00~23:59";
                        readonly default: "18:00";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-20": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-20";
                        readonly name: "P2 Start Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 475;
                    };
                };
                readonly "16-21": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-21";
                        readonly name: "P2 Stop Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "5";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-22": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-22";
                        readonly name: "P3 Start Time";
                        readonly range: "00:00~23:59";
                        readonly default: "08:00";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-23": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-23";
                        readonly name: "P3 Stop Time";
                        readonly range: "00:00~23:59";
                        readonly default: "18:00";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-24": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-24";
                        readonly name: "P3 Start Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-25": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-25";
                        readonly name: "P3 Stop Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "5";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-26": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-26";
                        readonly name: "P4 Start Time";
                        readonly range: "00:00~23:59";
                        readonly default: "08:00";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-27": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-27";
                        readonly name: "P4 Stop Time";
                        readonly range: "00:00~23:59";
                        readonly default: "18:00";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-28": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-28";
                        readonly name: "P4 Start Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-29": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-29";
                        readonly name: "P4 Stop Date";
                        readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
                        readonly default: "5";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-30": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-30";
                        readonly name: "Selection of RTC Offset";
                        readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-31": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-31";
                        readonly name: "RTC Offset Time Setting";
                        readonly range: "00:00~23:59";
                        readonly default: "00:00";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-32": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-32";
                        readonly name: "Source of Timer 1";
                        readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-33": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-33";
                        readonly name: "Source of Timer 2";
                        readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-34": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-34";
                        readonly name: "Source of Timer 3";
                        readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
                        readonly default: "4";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-35": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-35";
                        readonly name: "Source of Timer 4";
                        readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
                        readonly default: "8";
                        readonly unit: "-";
                        readonly page: 476;
                    };
                };
                readonly "16-36": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-36";
                        readonly name: "Selection of RTC Speed";
                        readonly range: "0-5 (0:Off / 1:Timer1 / 2:Timer2 / 3:Timer3 / 4:Timer4 / 5:Timer1+2)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 477;
                    };
                };
                readonly "16-37": {
                    readonly register: typeof import("./Registers").GROUP_16_LCD_Parameters["16-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 16;
                        readonly code: "16-37";
                        readonly name: "Selection of RTC Rotation Direction";
                        readonly range: "0~15 (bit-field for direction)";
                        readonly default: "0000b";
                        readonly unit: "-";
                        readonly page: 477;
                    };
                };
            }>;
            group17: GroupParamOps<{
                readonly "17-00": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-00";
                        readonly name: "Mode Selection of Automatic Tuning";
                        readonly range: "0-6 (0:Rotation / 1:Static / 2:Stator R / 3:Reserved / 4:Loop / 5:Rot comb(4+2+0) / 6:Static comb(4+2+1))";
                        readonly default: "2 / 6";
                        readonly unit: "-";
                        readonly page: 478;
                    };
                };
                readonly "17-01": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-01";
                        readonly name: "Motor Rated Output Power";
                        readonly range: "0.00~600.00";
                        readonly default: "*";
                        readonly unit: "kW";
                        readonly page: 478;
                    };
                };
                readonly "17-02": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-02";
                        readonly name: "Motor Rated Current";
                        readonly range: "0.1~1200.0";
                        readonly default: "*";
                        readonly unit: "A";
                        readonly page: 478;
                    };
                };
                readonly "17-03": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-03";
                        readonly name: "Motor Rated Voltage";
                        readonly range: "200V:50.0~240.0 / 400V:100.0~480.0 / 575V:150.0~670.0 / 690V:180.0~804.0";
                        readonly default: "220.0 / 440.0 / 575.0 / 690.0";
                        readonly unit: "V";
                        readonly page: 478;
                    };
                };
                readonly "17-04": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-04";
                        readonly name: "Motor Rated Frequency";
                        readonly range: "4.8~599.0";
                        readonly default: "50.0 / 60.0";
                        readonly unit: "Hz";
                        readonly page: 478;
                    };
                };
                readonly "17-05": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-05";
                        readonly name: "Motor Rated Speed";
                        readonly range: "0~24000";
                        readonly default: "*";
                        readonly unit: "rpm";
                        readonly page: 478;
                    };
                };
                readonly "17-06": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-06";
                        readonly name: "Pole Number of Motor";
                        readonly range: "2~16 (Even)";
                        readonly default: "4";
                        readonly unit: "Pole";
                        readonly page: 478;
                    };
                };
                readonly "17-07": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-07";
                        readonly name: "PG Pulse Number";
                        readonly range: "0~60000";
                        readonly default: "1024";
                        readonly unit: "ppr";
                        readonly page: 478;
                    };
                };
                readonly "17-08": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-08";
                        readonly name: "Motor No-load Voltage";
                        readonly range: "200V:50~240 / 400V:100~480 / 575V:420~600 / 690V:504~720";
                        readonly default: "150 / 300 / 575 / 690";
                        readonly unit: "V";
                        readonly page: 478;
                    };
                };
                readonly "17-09": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-09";
                        readonly name: "Motor Excitation Current";
                        readonly range: "0.01~600.00";
                        readonly default: "*";
                        readonly unit: "A";
                        readonly page: 478;
                    };
                };
                readonly "17-10": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-10";
                        readonly name: "Automatic Tuning Start";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "17-11": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-11";
                        readonly name: "Error History of Automatic Tuning";
                        readonly range: "0-9 (0:No error / 1:Motor data / 2:Stator R / 3:Leakage L / 4:Rotor R / 5:Mutual L / 6:Encoder / 7:DT / 8:Accel / 9:Warning)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "17-12": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-12";
                        readonly name: "Proportion of Motor Leakage Inductance";
                        readonly range: "0.1~15.0";
                        readonly default: "3.4";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "17-13": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-13"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-13";
                        readonly name: "Motor Slip Frequency";
                        readonly range: "0.10~20.00";
                        readonly default: "1.00";
                        readonly unit: "Hz";
                        readonly page: 479;
                    };
                };
                readonly "17-14": {
                    readonly register: typeof import("./Registers").GROUP_17_Automatic_Tuning_Parameters["17-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 17;
                        readonly code: "17-14";
                        readonly name: "Selection of Rotation Auto-tuning";
                        readonly range: "0-1 (0:VF Rotation / 1:Vector Rotation)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
            }>;
            group18: GroupParamOps<{
                readonly "18-00": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-00"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-00";
                        readonly name: "Slip Compensation Gain at Low Speed";
                        readonly range: "0.00~2.50";
                        readonly default: "0.00 / *";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "18-01": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-01"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-01";
                        readonly name: "Slip Compensation Gain at High Speed";
                        readonly range: "-1.00~1.00";
                        readonly default: "0.0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "18-02": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-02";
                        readonly name: "Slip Compensation Limit";
                        readonly range: "0~250";
                        readonly default: "200";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "18-03": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-03";
                        readonly name: "Slip Compensation Filter Time";
                        readonly range: "0.0~10.0";
                        readonly default: "1.0";
                        readonly unit: "Sec";
                        readonly page: 479;
                    };
                };
                readonly "18-04": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-04";
                        readonly name: "Regenerative Slip Compensation Selection";
                        readonly range: "0-1 (0:Disable / 1:Enable)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "18-05": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-05";
                        readonly name: "FOC Delay Time";
                        readonly range: "1~1000";
                        readonly default: "100";
                        readonly unit: "ms";
                        readonly page: 479;
                    };
                };
                readonly "18-06": {
                    readonly register: typeof import("./Registers").GROUP_18_Slip_Compensation_Parameters["18-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 18;
                        readonly code: "18-06";
                        readonly name: "FOC Gain";
                        readonly range: "0.00~2.00";
                        readonly default: "0.1";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
            }>;
            group19: GroupParamOps<{
                readonly "19-00": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-00"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-00";
                        readonly name: "Center Frequency of Wobble Frequency";
                        readonly range: "5.00~100.00";
                        readonly default: "20.00";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "19-01": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-01";
                        readonly name: "Amplitude of Wobble Frequency";
                        readonly range: "0.1~20.0";
                        readonly default: "10.0";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "19-02": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-02";
                        readonly name: "Jump Frequency of Wobble Frequency";
                        readonly range: "0.0~50.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "19-03": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-03";
                        readonly name: "Jump Time of Wobble Frequency";
                        readonly range: "0~50";
                        readonly default: "0";
                        readonly unit: "ms";
                        readonly page: 479;
                    };
                };
                readonly "19-04": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-04"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-04";
                        readonly name: "Wobble Frequency Cycle";
                        readonly range: "0.0~1000.0";
                        readonly default: "10.0";
                        readonly unit: "Sec";
                        readonly page: 479;
                    };
                };
                readonly "19-05": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-05";
                        readonly name: "Wobble Frequency Ratio";
                        readonly range: "0.1~10.0";
                        readonly default: "1.0";
                        readonly unit: "-";
                        readonly page: 479;
                    };
                };
                readonly "19-06": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-06";
                        readonly name: "Upper Offset Amplitude of Wobble Frequency";
                        readonly range: "0.0~20.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 479;
                    };
                };
                readonly "19-07": {
                    readonly register: typeof import("./Registers").GROUP_19_Wobble_Frequency_Parameters["19-07"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 19;
                        readonly code: "19-07";
                        readonly name: "Lower Offset Amplitude of Wobble Frequency";
                        readonly range: "0.0~20.0";
                        readonly default: "0.0";
                        readonly unit: "%";
                        readonly page: 480;
                    };
                };
            }>;
            group20: GroupParamOps<{
                readonly "20-00": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-00"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-00";
                        readonly name: "ASR Gain 1";
                        readonly range: "0.00~250.00";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 480;
                    };
                };
                readonly "20-01": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-01";
                        readonly name: "ASR Integral Time 1";
                        readonly range: "0.001~10.000";
                        readonly default: "-";
                        readonly unit: "Sec";
                        readonly page: 480;
                    };
                };
                readonly "20-02": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-02"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-02";
                        readonly name: "ASR Gain 2";
                        readonly range: "0.00~250.00";
                        readonly default: "-";
                        readonly unit: "-";
                        readonly page: 480;
                    };
                };
                readonly "20-03": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-03"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-03";
                        readonly name: "ASR Integral Time 2";
                        readonly range: "0.001~10.000";
                        readonly default: "-";
                        readonly unit: "Sec";
                        readonly page: 480;
                    };
                };
                readonly "20-04": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-04";
                        readonly name: "ASR Integral Time Limit";
                        readonly range: "0~300";
                        readonly default: "200";
                        readonly unit: "%";
                        readonly page: 480;
                    };
                };
                readonly "20-05": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-05"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-05";
                        readonly name: "ASR Positive Limit";
                        readonly range: "0.1~10.0";
                        readonly default: "5.0";
                        readonly unit: "%";
                        readonly page: 480;
                    };
                };
                readonly "20-06": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-06";
                        readonly name: "ASR Negative Limit";
                        readonly range: "0.1~10.0";
                        readonly default: "1.0";
                        readonly unit: "%";
                        readonly page: 480;
                    };
                };
                readonly "20-07": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-07";
                        readonly name: "Selection of Accel/Decel P/PI";
                        readonly range: "0-1 (0:PI only constant speed / 1:P during accel/decel)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 480;
                    };
                };
                readonly "20-08": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-08"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-08";
                        readonly name: "ASR Delay Time";
                        readonly range: "0.000~0.500";
                        readonly default: "0.004";
                        readonly unit: "Sec";
                        readonly page: 480;
                    };
                };
                readonly "20-09": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-09";
                        readonly name: "Speed Observer P Gain 1";
                        readonly range: "0.00~2.55";
                        readonly default: "0.61";
                        readonly unit: "-";
                        readonly page: 480;
                    };
                };
                readonly "20-10": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-10"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-10";
                        readonly name: "Speed Observer I Time 1";
                        readonly range: "0.01~10.00";
                        readonly default: "0.05";
                        readonly unit: "Sec";
                        readonly page: 480;
                    };
                };
                readonly "20-11": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-11"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-11";
                        readonly name: "Speed Observer P Gain 2";
                        readonly range: "0.00~2.55";
                        readonly default: "0.61";
                        readonly unit: "-";
                        readonly page: 480;
                    };
                };
                readonly "20-12": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-12"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-12";
                        readonly name: "Speed Observer I Time 2";
                        readonly range: "0.01~10.00";
                        readonly default: "0.06";
                        readonly unit: "Sec";
                        readonly page: 480;
                    };
                };
                readonly "20-13": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-13";
                        readonly name: "Low-pass Filter Time of Speed Feedback 1";
                        readonly range: "1~1000";
                        readonly default: "4";
                        readonly unit: "ms";
                        readonly page: 480;
                    };
                };
                readonly "20-14": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-14";
                        readonly name: "Low-pass Filter Time of Speed Feedback 2";
                        readonly range: "1~1000";
                        readonly default: "30";
                        readonly unit: "ms";
                        readonly page: 480;
                    };
                };
                readonly "20-15": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-15";
                        readonly name: "ASR Gain Change Frequency 1";
                        readonly range: "0.0~599.0";
                        readonly default: "4.0";
                        readonly unit: "Hz";
                        readonly page: 481;
                    };
                };
                readonly "20-16": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-16";
                        readonly name: "ASR Gain Change Frequency 2";
                        readonly range: "0.0~599.0";
                        readonly default: "8.0";
                        readonly unit: "Hz";
                        readonly page: 481;
                    };
                };
                readonly "20-17": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-17"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-17";
                        readonly name: "Torque Compensation Gain at Low Speed";
                        readonly range: "0.00~2.50";
                        readonly default: "1.00";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-18": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-18";
                        readonly name: "Torque Compensation Gain at High Speed";
                        readonly range: "-10~10";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 481;
                    };
                };
                readonly "20-19": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-19";
                        readonly name: "Over Speed (OS) Selection";
                        readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-20": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-20";
                        readonly name: "Over Speed (OS) Detection Level";
                        readonly range: "0~120";
                        readonly default: "115";
                        readonly unit: "%";
                        readonly page: 481;
                    };
                };
                readonly "20-21": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-21"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-21";
                        readonly name: "Over Speed (OS) Detection Time";
                        readonly range: "0.0~2.0";
                        readonly default: "0.5";
                        readonly unit: "Sec";
                        readonly page: 481;
                    };
                };
                readonly "20-22": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-22";
                        readonly name: "Speed Deviation (DEV) Selection";
                        readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-23": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-23";
                        readonly name: "Speed Deviation (DEV) Detection Level";
                        readonly range: "0~50";
                        readonly default: "10";
                        readonly unit: "%";
                        readonly page: 481;
                    };
                };
                readonly "20-24": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-24"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-24";
                        readonly name: "Speed Deviation (DEV) Detection Time";
                        readonly range: "0.0~10.0";
                        readonly default: "0.5";
                        readonly unit: "Sec";
                        readonly page: 481;
                    };
                };
                readonly "20-25": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-25";
                        readonly name: "Selection of PG Open";
                        readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-26": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-26"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-26";
                        readonly name: "Detection Time of PG Open";
                        readonly range: "0.0~10.0";
                        readonly default: "2.0";
                        readonly unit: "Sec";
                        readonly page: 481;
                    };
                };
                readonly "20-27": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-27";
                        readonly name: "PG Pulse Number";
                        readonly range: "0~9999";
                        readonly default: "1024";
                        readonly unit: "ppr";
                        readonly page: 481;
                    };
                };
                readonly "20-28": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-28";
                        readonly name: "Selection of PG Rotation Direction";
                        readonly range: "0-1 (0:CCW / 1:CW)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-29": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-29";
                        readonly name: "PG Pulse Dividing Ratio";
                        readonly range: "001~132";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 481;
                    };
                };
                readonly "20-30": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-30";
                        readonly name: "PG Gear Ratio 1";
                        readonly range: "1~1000";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-31": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-31";
                        readonly name: "PG Gear Ratio 2";
                        readonly range: "1~1000";
                        readonly default: "1";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-32": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-32";
                        readonly name: "Selection of Specific Encoder";
                        readonly range: "0-1 (0:None / 1:Resolver)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-33": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-33"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-33";
                        readonly name: "Detection Level at Constant Speed";
                        readonly range: "0.1~5.0";
                        readonly default: "1.0";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-34": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-34";
                        readonly name: "Compensation Gain of Derating";
                        readonly range: "0~25600";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-35": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-35";
                        readonly name: "Compensation Time of Derating";
                        readonly range: "0~30000";
                        readonly default: "100";
                        readonly unit: "ms";
                        readonly page: 482;
                    };
                };
                readonly "20-43": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-43";
                        readonly name: "MPG Speed Magnification Calculation";
                        readonly range: "1~500";
                        readonly default: "20";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "20-44": {
                    readonly register: typeof import("./Registers").GROUP_20_Speed_Control_Parameters["20-44"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 20;
                        readonly code: "20-44";
                        readonly name: "MPG Speed Command Limit";
                        readonly range: "0.1~30.0";
                        readonly default: "6.0";
                        readonly unit: "Hz";
                        readonly page: 482;
                    };
                };
            }>;
            group21: GroupParamOps<{
                readonly "21-00": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-00"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-00";
                        readonly name: "Torque Control Selection";
                        readonly range: "0-1 (0:Speed Control / 1:Torque Control)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "21-01": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-01"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-01";
                        readonly name: "Filter Time of Torque Reference";
                        readonly range: "0~1000";
                        readonly default: "0";
                        readonly unit: "ms";
                        readonly page: 482;
                    };
                };
                readonly "21-02": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-02";
                        readonly name: "Speed Limit Selection";
                        readonly range: "0-2 (0:AI input / 1:21-03 value / 2:Comm 2502H)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 482;
                    };
                };
                readonly "21-03": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-03"];
                    readonly kind: ParamKind.SignedScaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-03";
                        readonly name: "Speed Limit Value";
                        readonly range: "-120~120";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-04": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-04";
                        readonly name: "Speed Limit Bias";
                        readonly range: "0~120";
                        readonly default: "10";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-05": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-05";
                        readonly name: "Positive Torque Limit";
                        readonly range: "0~300";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-06": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-06"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-06";
                        readonly name: "Negative Torque Limit";
                        readonly range: "0~300";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-07": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-07";
                        readonly name: "Forward Regenerative Torque Limit";
                        readonly range: "0~300";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-08": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-08";
                        readonly name: "Reversal Regenerative Torque Limit";
                        readonly range: "0~300";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "%";
                        readonly page: 482;
                    };
                };
                readonly "21-09": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-09"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-09";
                        readonly name: "Maximum Frequency of Position Control";
                        readonly range: "0.1~100.0";
                        readonly default: "20.0";
                        readonly unit: "Hz";
                        readonly page: 482;
                    };
                };
                readonly "21-10": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-10";
                        readonly name: "Command of Rotation Cycle Number of Section 0";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-11": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-11";
                        readonly name: "Command of the Pulse Number of Section 0";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-12": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-12"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-12";
                        readonly name: "Command of Rotation Cycle Number of Section 1";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-13": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-13"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-13";
                        readonly name: "Command of the Pulse Number of Section 1";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-14": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-14"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-14";
                        readonly name: "Command of Rotation Cycle Number of Section 2";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-15": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-15"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-15";
                        readonly name: "Command of the Pulse Number of Section 2";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-16": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-16"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-16";
                        readonly name: "Command of Rotation Cycle Number of Section 3";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-17": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-17";
                        readonly name: "Command of the Pulse Number of Section 3";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-18": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-18";
                        readonly name: "Command of Rotation Cycle Number of Section 4";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-19": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-19"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-19";
                        readonly name: "Command of the Pulse Number of Section 4";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-20": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-20";
                        readonly name: "Command of Rotation Cycle Number of Section 5";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-21": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-21";
                        readonly name: "Command of the Pulse Number of Section 5";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-22": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-22";
                        readonly name: "Command of Rotation Cycle Number of Section 6";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-23": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-23"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-23";
                        readonly name: "Command of the Pulse Number of Section 6";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-24": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-24"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-24";
                        readonly name: "Command of Rotation Cycle Number of Section 7";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-25": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-25";
                        readonly name: "Command of the Pulse Number of Section 7";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 483;
                    };
                };
                readonly "21-26": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-26";
                        readonly name: "Command of the Pulse Number of Section 8";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-27": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-27";
                        readonly name: "Command of Rotation Cycle Number of Section 8";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-28": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-28";
                        readonly name: "Command of the Pulse Number of Section 9";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-29": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-29";
                        readonly name: "Command of Rotation Cycle Number of Section 9";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-30": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-30";
                        readonly name: "Command of Rotation Cycle Number of Section 10";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-31": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-31";
                        readonly name: "Command of the Pulse Number of Section 10";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-32": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-32";
                        readonly name: "Command of Rotation Cycle Number of Section 11";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-33": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-33";
                        readonly name: "Command of the Pulse Number of Section 11";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-34": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-34"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-34";
                        readonly name: "Command of Rotation Cycle Number of Section 12";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-35": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-35";
                        readonly name: "Command of the Pulse Number of Section 12";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-36": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-36"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-36";
                        readonly name: "Command of Rotation Cycle Number of Section 13";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-37": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-37"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-37";
                        readonly name: "Command of the Pulse Number of Section 13";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-38": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-38"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-38";
                        readonly name: "Command of Rotation Cycle Number of Section 14";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-39": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-39"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-39";
                        readonly name: "Command of the Pulse Number of Section 14";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-40": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-40"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-40";
                        readonly name: "Command of Rotation Cycle Number of Section 15";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-41": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-41"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-41";
                        readonly name: "Command of the Pulse Number of Section 15";
                        readonly range: "-9999~9999";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 484;
                    };
                };
                readonly "21-42": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-42"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-42";
                        readonly name: "Pos. Mode Sel";
                        readonly range: "0-1 (0:Switch to pos mode when freq<01-08 / 1:Z Phase Locked)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 485;
                    };
                };
                readonly "21-43": {
                    readonly register: typeof import("./Registers").GROUP_21_Torque_And_Position_Control_Parameters["21-43"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 21;
                        readonly code: "21-43";
                        readonly name: "Offset Angle";
                        readonly range: "0~9999";
                        readonly default: "0";
                        readonly unit: "Pulse";
                        readonly page: 485;
                    };
                };
            }>;
            group22: GroupParamOps<{
                readonly "22-00": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-00"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-00";
                        readonly name: "PM Motor Rated Power";
                        readonly range: "0.00~600.00";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "kW";
                        readonly page: 485;
                    };
                };
                readonly "22-01": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-01"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-01";
                        readonly name: "PM Motor Rated Voltage";
                        readonly range: "230V:50.0~240.0 / 460V:100.0~480.0";
                        readonly default: "220.0 / 440.0";
                        readonly unit: "V";
                        readonly page: 485;
                    };
                };
                readonly "22-02": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-02"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-02";
                        readonly name: "PM Motor Rated Current";
                        readonly range: "25%~200% inverter rated";
                        readonly default: "* (see Attachment 1 p.170)";
                        readonly unit: "A";
                        readonly page: 485;
                    };
                };
                readonly "22-03": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-03"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-03";
                        readonly name: "PM Motor's Pole Number";
                        readonly range: "2~96";
                        readonly default: "6";
                        readonly unit: "poles";
                        readonly page: 485;
                    };
                };
                readonly "22-04": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-04"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-04";
                        readonly name: "PM Motor's Rotation Speed";
                        readonly range: "6~60000";
                        readonly default: "1500";
                        readonly unit: "rpm";
                        readonly page: 485;
                    };
                };
                readonly "22-05": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-05"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-05";
                        readonly name: "PM Motor's Max Rotation Speed";
                        readonly range: "6~60000";
                        readonly default: "1500";
                        readonly unit: "rpm";
                        readonly page: 485;
                    };
                };
                readonly "22-06": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-06"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-06";
                        readonly name: "PM Motor Rated Frequency";
                        readonly range: "4.8~599.0";
                        readonly default: "75.0";
                        readonly unit: "Hz";
                        readonly page: 485;
                    };
                };
                readonly "22-07": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-07"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-07";
                        readonly name: "PM Type Selection";
                        readonly range: "0-1 (0:SPM / 1:IPM)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 485;
                    };
                };
                readonly "22-08": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-08"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-08";
                        readonly name: "PM Encoder Type";
                        readonly range: "0-4 (0:Tamagawa Non-WireSaving / 1:Tamagawa WireSaving / 2:Sumtak WireSaving / 3:General Incremental / 4:Sine Wave)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 485;
                    };
                };
                readonly "22-10": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-10"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-10";
                        readonly name: "PM SLV Start Current";
                        readonly range: "20~200% Motor Rated Current";
                        readonly default: "80";
                        readonly unit: "%";
                        readonly page: 486;
                    };
                };
                readonly "22-11": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-11"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-11";
                        readonly name: "I/F Mode Start Freq Switching Point";
                        readonly range: "10~100";
                        readonly default: "10";
                        readonly unit: "%";
                        readonly page: 486;
                    };
                };
                readonly "22-14": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-14"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.001;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-14";
                        readonly name: "Armature Resistance of PM Motor";
                        readonly range: "0.001~30.000";
                        readonly default: "1.000";
                        readonly unit: "Ω";
                        readonly page: 486;
                    };
                };
                readonly "22-15": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-15"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-15";
                        readonly name: "D-axis Inductance of PM Motor";
                        readonly range: "0.01~300.00";
                        readonly default: "10.00";
                        readonly unit: "mH";
                        readonly page: 486;
                    };
                };
                readonly "22-16": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-16"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.01;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-16";
                        readonly name: "Q-axis Inductance of PM Motor";
                        readonly range: "0.01~300.00";
                        readonly default: "10.00";
                        readonly unit: "mH";
                        readonly page: 486;
                    };
                };
                readonly "22-17": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-17"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-17";
                        readonly name: "PM No-Load Voltage";
                        readonly range: "200V:0~200 / 400V:0~400";
                        readonly default: "150 / 300";
                        readonly unit: "V";
                        readonly page: 486;
                    };
                };
                readonly "22-18": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-18"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-18";
                        readonly name: "Flux-Weakening Limit";
                        readonly range: "0~100";
                        readonly default: "0";
                        readonly unit: "%";
                        readonly page: 486;
                    };
                };
                readonly "22-20": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-20"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-20";
                        readonly name: "Offset Angle of Magnetic Pole and PG Origin";
                        readonly range: "0~360";
                        readonly default: "0";
                        readonly unit: "deg";
                        readonly page: 487;
                    };
                };
                readonly "22-21": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-21"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-21";
                        readonly name: "PM Motor Tuning";
                        readonly range: "0-3 (0:Not active / 1:Param auto-tune / 2:Mag pole align+loop adjust / 3:Mag pole alignment)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 487;
                    };
                };
                readonly "22-22": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-22"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-22";
                        readonly name: "Fault History of PM Motor Tuning";
                        readonly range: "0-11 (0:No Error / 1:Static Mag Alignment / 2:No PG / 3:Rot Pole forced stop / 4:Encoder feedback dir / 5:Loop timeout / 6:Encoder error / 7:Other / 8:Current abn during align / 9:Current abn during loop / 10:Reserved / 11:Stator R timeout)";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 487;
                    };
                };
                readonly "22-25": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-25"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-25";
                        readonly name: "Detection Mode Selection of Initial Magnetic Pole";
                        readonly range: "0-2 (0:Angle before stopping / 1:Mode1 / 2:Mode2)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 487;
                    };
                };
                readonly "22-26": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-26"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-26";
                        readonly name: "Estimator Mode";
                        readonly range: "0-1";
                        readonly default: "0";
                        readonly unit: "-";
                        readonly page: 487;
                    };
                };
                readonly "22-27": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-27"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-27";
                        readonly name: "Voltage Command of Mode 2";
                        readonly range: "5~120";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 487;
                    };
                };
                readonly "22-28": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-28"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-28";
                        readonly name: "Divider Ratio of Mode 2";
                        readonly range: "0~8";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 487;
                    };
                };
                readonly "22-29": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-29"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-29";
                        readonly name: "Flux-weakening Voltage Command Restriction";
                        readonly range: "80~110";
                        readonly default: "95";
                        readonly unit: "%";
                        readonly page: 488;
                    };
                };
                readonly "22-30": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-30"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-30";
                        readonly name: "SPM Speed Estimation Gain";
                        readonly range: "1~100";
                        readonly default: "85";
                        readonly unit: "%";
                        readonly page: 488;
                    };
                };
                readonly "22-31": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-31"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-31";
                        readonly name: "SPM Speed Estimation Filter Value";
                        readonly range: "1~2000";
                        readonly default: "60";
                        readonly unit: "Hz";
                        readonly page: 488;
                    };
                };
                readonly "22-32": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-32"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-32";
                        readonly name: "MTPA Selection";
                        readonly range: "0-3 (0:Disabled / 1:Mode1 / 2:Mode2 / 3:Mode3)";
                        readonly default: "2";
                        readonly unit: "-";
                        readonly page: 488;
                    };
                };
                readonly "22-33": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-33"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-33";
                        readonly name: "MTPA Gain";
                        readonly range: "0~400";
                        readonly default: "200";
                        readonly unit: "%";
                        readonly page: 488;
                    };
                };
                readonly "22-34": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-34"];
                    readonly kind: ParamKind.Scaled;
                    readonly factor: 0.1;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-34";
                        readonly name: "IPM Estimator Gain";
                        readonly range: "0.1~500.0";
                        readonly default: "30.0";
                        readonly unit: "-";
                        readonly page: 488;
                    };
                };
                readonly "22-35": {
                    readonly register: typeof import("./Registers").GROUP_22_PM_Motor_Parameters["22-35"];
                    readonly kind: ParamKind.UInt16;
                    readonly meta: {
                        readonly group: 22;
                        readonly code: "22-35";
                        readonly name: "IPM Estimator Compensation";
                        readonly range: "0~300";
                        readonly default: "50";
                        readonly unit: "%";
                        readonly page: 488;
                    };
                };
            }>;
        };
    }, never, SerialTransportService | import("effect/Scope").Scope>;
}>;
/**
 * Effect service for interacting with a Teco/Westinghouse A510 inverter over Modbus.
 *
 * Instantiate with {@link TecoInverterService.Default} and provide the appropriate
 * transport layer ({@link RtuTransportService} or {@link AsciiTransportService}).
 *
 * @see TecoInverterService.Default
 */
export declare class TecoInverterService extends TecoInverterService_base {
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
    static mockDevice(deviceId: number): SlaveDeviceDefinition;
}
export {};
