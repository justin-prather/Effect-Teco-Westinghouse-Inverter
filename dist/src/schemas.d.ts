/**
 * @fileoverview Bidirectional Effect schemas for A510 command and monitor register values.
 *
 * Provides {@link Schema} transformations between wire-format Modbus register values
 * (UInt16/Int16) and domain types (FrequencyHz, TorquePercent, etc.) with proper
 * scaling factors. Monitor registers are decode-only; command registers support
 * both encode and decode.
 *
 * Key types:
 * - {@link CommandWordFlags} / {@link CommandWordSchema} – Operation command word (0x2501)
 * - {@link FrequencyHz} / {@link FrequencyCommandSchema} – Frequency command in Hz (0x2502)
 * - {@link TorquePercent} / {@link TorqueCommandSchema} – Torque command as % (0x2503)
 * - {@link StateMonitorFlags} / {@link StateMonitorSchema} – Inverter status flags (0x2520)
 * - {@link ErrorDescriptionMonitor} / {@link ErrorDescriptionMonitorSchema} – Fault code (0x2521)
 * - {@link WarningDescriptionMonitor} / {@link WarningDescriptionMonitorSchema} – Alarm code (0x2528)
 *
 * @module
 */
import { Brand, Effect, ParseResult, Schema } from "effect";
/**
 * Branded 16-bit unsigned word for Modbus register values.
 */
export type UInt16 = number & Brand.Brand<"UInt16">;
export declare const UInt16: Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">;
declare const CommandWordFlags_base: Schema.Class<CommandWordFlags, {
    run: typeof Schema.Boolean;
    reverse: typeof Schema.Boolean;
    externalFault: typeof Schema.Boolean;
    faultReset: typeof Schema.Boolean;
    commS1: typeof Schema.Boolean;
    commS2: typeof Schema.Boolean;
    commS3: typeof Schema.Boolean;
    commS4: typeof Schema.Boolean;
    commS5: typeof Schema.Boolean;
    commS6: typeof Schema.Boolean;
    commS7: typeof Schema.Boolean;
    commS8: typeof Schema.Boolean;
    inverterMode: typeof Schema.Boolean;
    torqueByComm: typeof Schema.Boolean;
}, Schema.Struct.Encoded<{
    run: typeof Schema.Boolean;
    reverse: typeof Schema.Boolean;
    externalFault: typeof Schema.Boolean;
    faultReset: typeof Schema.Boolean;
    commS1: typeof Schema.Boolean;
    commS2: typeof Schema.Boolean;
    commS3: typeof Schema.Boolean;
    commS4: typeof Schema.Boolean;
    commS5: typeof Schema.Boolean;
    commS6: typeof Schema.Boolean;
    commS7: typeof Schema.Boolean;
    commS8: typeof Schema.Boolean;
    inverterMode: typeof Schema.Boolean;
    torqueByComm: typeof Schema.Boolean;
}>, never, {
    readonly reverse: boolean;
} & {
    readonly run: boolean;
} & {
    readonly externalFault: boolean;
} & {
    readonly faultReset: boolean;
} & {
    readonly commS1: boolean;
} & {
    readonly commS2: boolean;
} & {
    readonly commS3: boolean;
} & {
    readonly commS4: boolean;
} & {
    readonly commS5: boolean;
} & {
    readonly commS6: boolean;
} & {
    readonly commS7: boolean;
} & {
    readonly commS8: boolean;
} & {
    readonly inverterMode: boolean;
} & {
    readonly torqueByComm: boolean;
}, {}, {}>;
/**
 * Human-readable command word shape.
 */
export declare class CommandWordFlags extends CommandWordFlags_base {
    static get empty(): CommandWordFlags;
    static get runForward(): CommandWordFlags;
    static get runReverse(): CommandWordFlags;
    static get stop(): CommandWordFlags;
    static get resetFaultPulse(): CommandWordFlags;
}
/**
 * Bidirectional transformation:
 * wire format = UInt16
 * domain format = CommandWordFlags
 */
export declare const CommandWordSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, typeof CommandWordFlags, never>;
/**
 * Decoders / encoders
 */
export declare const decodeCommandWord: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<CommandWordFlags, ParseResult.ParseError, never>;
export declare const encodeCommandWord: (a: CommandWordFlags, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedCommandWord: (a: CommandWordFlags) => string;
declare const CommandWordPatch_base: Schema.Class<CommandWordPatch, {
    run: Schema.optional<typeof Schema.Boolean>;
    reverse: Schema.optional<typeof Schema.Boolean>;
    externalFault: Schema.optional<typeof Schema.Boolean>;
    faultReset: Schema.optional<typeof Schema.Boolean>;
    commS1: Schema.optional<typeof Schema.Boolean>;
    commS2: Schema.optional<typeof Schema.Boolean>;
    commS3: Schema.optional<typeof Schema.Boolean>;
    commS4: Schema.optional<typeof Schema.Boolean>;
    commS5: Schema.optional<typeof Schema.Boolean>;
    commS6: Schema.optional<typeof Schema.Boolean>;
    commS7: Schema.optional<typeof Schema.Boolean>;
    commS8: Schema.optional<typeof Schema.Boolean>;
    inverterMode: Schema.optional<typeof Schema.Boolean>;
    torqueByComm: Schema.optional<typeof Schema.Boolean>;
}, Schema.Struct.Encoded<{
    run: Schema.optional<typeof Schema.Boolean>;
    reverse: Schema.optional<typeof Schema.Boolean>;
    externalFault: Schema.optional<typeof Schema.Boolean>;
    faultReset: Schema.optional<typeof Schema.Boolean>;
    commS1: Schema.optional<typeof Schema.Boolean>;
    commS2: Schema.optional<typeof Schema.Boolean>;
    commS3: Schema.optional<typeof Schema.Boolean>;
    commS4: Schema.optional<typeof Schema.Boolean>;
    commS5: Schema.optional<typeof Schema.Boolean>;
    commS6: Schema.optional<typeof Schema.Boolean>;
    commS7: Schema.optional<typeof Schema.Boolean>;
    commS8: Schema.optional<typeof Schema.Boolean>;
    inverterMode: Schema.optional<typeof Schema.Boolean>;
    torqueByComm: Schema.optional<typeof Schema.Boolean>;
}>, never, {
    readonly reverse?: boolean | undefined;
} & {
    readonly run?: boolean | undefined;
} & {
    readonly externalFault?: boolean | undefined;
} & {
    readonly faultReset?: boolean | undefined;
} & {
    readonly commS1?: boolean | undefined;
} & {
    readonly commS2?: boolean | undefined;
} & {
    readonly commS3?: boolean | undefined;
} & {
    readonly commS4?: boolean | undefined;
} & {
    readonly commS5?: boolean | undefined;
} & {
    readonly commS6?: boolean | undefined;
} & {
    readonly commS7?: boolean | undefined;
} & {
    readonly commS8?: boolean | undefined;
} & {
    readonly inverterMode?: boolean | undefined;
} & {
    readonly torqueByComm?: boolean | undefined;
}, {}, {}>;
/**
 * Patch-friendly input for library ergonomics.
 */
export declare class CommandWordPatch extends CommandWordPatch_base {
}
export declare const mergeCommandWordPatch: (base: CommandWordFlags, patch: CommandWordPatch) => CommandWordFlags;
/**
 * Intent-level constructors
 */
export declare const commandWord: {
    stop: () => CommandWordFlags;
    runForward: () => CommandWordFlags;
    runReverse: () => CommandWordFlags;
    resetFaultPulse: () => CommandWordFlags;
    withInverterMode: (base: CommandWordFlags) => CommandWordFlags;
};
/**
 * Frequency in Hertz (domain representation for frequency command).
 */
export type FrequencyHz = number & Brand.Brand<"FrequencyHz">;
export declare const FrequencyHz: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "FrequencyHz">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.01 Hz per count, range 0-6000 → 0-600.00 Hz)
 * domain format = FrequencyHz
 */
export declare const FrequencyCommandSchema: Schema.transform<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "FrequencyHz">>;
export declare const decodeFrequencyCommand: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"FrequencyHz">, ParseResult.ParseError, never>;
export declare const encodeFrequencyCommand: (a: number & Brand.Brand<"FrequencyHz">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedFrequencyCommand: (a: number & Brand.Brand<"FrequencyHz">) => string;
/**
 * Branded 16-bit signed word for Modbus register values.
 */
export type Int16 = number & Brand.Brand<"Int16">;
export declare const Int16: Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "Int16">;
/**
 * Torque as a percentage of rated torque (domain representation).
 */
export type TorquePercent = number & Brand.Brand<"TorquePercent">;
export declare const TorquePercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "TorquePercent">;
/**
 * Bidirectional transformation:
 * wire format = Int16 (±8192 = ±100% rated torque)
 * domain format = TorquePercent
 */
export declare const TorqueCommandSchema: Schema.transform<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "Int16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "TorquePercent">>;
export declare const decodeTorqueCommand: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"TorquePercent">, ParseResult.ParseError, never>;
export declare const encodeTorqueCommand: (a: number & Brand.Brand<"TorquePercent">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedTorqueCommand: (a: number & Brand.Brand<"TorquePercent">) => string;
/**
 * Speed limit as a percentage of nominal speed (domain representation).
 */
export type SpeedLimitPercent = number & Brand.Brand<"SpeedLimitPercent">;
export declare const SpeedLimitPercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "SpeedLimitPercent">;
/**
 * Bidirectional transformation:
 * wire format = Int16 (±120 = ±120% of nominal speed, 1:1 mapping)
 * domain format = SpeedLimitPercent
 */
export declare const SpeedLimitCommandSchema: Schema.transform<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "Int16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "SpeedLimitPercent">>;
export declare const decodeSpeedLimitCommand: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"SpeedLimitPercent">, ParseResult.ParseError, never>;
export declare const encodeSpeedLimitCommand: (a: number & Brand.Brand<"SpeedLimitPercent">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedSpeedLimitCommand: (a: number & Brand.Brand<"SpeedLimitPercent">) => string;
/**
 * Voltage in volts (domain representation for analog output commands).
 */
export type Voltage = number & Brand.Brand<"Voltage">;
export declare const Voltage: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0-1000 → 0.00V-10.00V, 0.01V per count)
 * domain format = Voltage
 */
export declare const AnalogOut1CommandSchema: Schema.transform<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">>;
export declare const decodeAnalogOut1Command: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"Voltage">, ParseResult.ParseError, never>;
export declare const encodeAnalogOut1Command: (a: number & Brand.Brand<"Voltage">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedAnalogOut1Command: (a: number & Brand.Brand<"Voltage">) => string;
export declare const AnalogOut2CommandSchema: Schema.transform<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">>;
export declare const decodeAnalogOut2Command: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"Voltage">, ParseResult.ParseError, never>;
export declare const encodeAnalogOut2Command: (a: number & Brand.Brand<"Voltage">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedAnalogOut2Command: (a: number & Brand.Brand<"Voltage">) => string;
declare const DigitalOutCommandFlags_base: Schema.Class<DigitalOutCommandFlags, {
    ry1: typeof Schema.Boolean;
    ry2: typeof Schema.Boolean;
    pulse: typeof Schema.Boolean;
}, Schema.Struct.Encoded<{
    ry1: typeof Schema.Boolean;
    ry2: typeof Schema.Boolean;
    pulse: typeof Schema.Boolean;
}>, never, {
    readonly ry1: boolean;
} & {
    readonly ry2: boolean;
} & {
    readonly pulse: boolean;
}, {}, {}>;
/**
 * Human-readable digital output control word shape.
 */
export declare class DigitalOutCommandFlags extends DigitalOutCommandFlags_base {
    static get empty(): DigitalOutCommandFlags;
}
/**
 * Bidirectional transformation:
 * wire format = UInt16
 * domain format = DigitalOutCommandFlags
 */
export declare const DigitalOutCommandSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, typeof DigitalOutCommandFlags, never>;
export declare const decodeDigitalOutCommand: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<DigitalOutCommandFlags, ParseResult.ParseError, never>;
export declare const encodeDigitalOutCommand: (a: DigitalOutCommandFlags, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number, ParseResult.ParseError, never>;
export declare const formattedDigitalOutCommand: (a: DigitalOutCommandFlags) => string;
declare const DigitalOutCommandPatch_base: Schema.Class<DigitalOutCommandPatch, {
    ry1: Schema.optional<typeof Schema.Boolean>;
    ry2: Schema.optional<typeof Schema.Boolean>;
    pulse: Schema.optional<typeof Schema.Boolean>;
}, Schema.Struct.Encoded<{
    ry1: Schema.optional<typeof Schema.Boolean>;
    ry2: Schema.optional<typeof Schema.Boolean>;
    pulse: Schema.optional<typeof Schema.Boolean>;
}>, never, {
    readonly ry1?: boolean | undefined;
} & {
    readonly ry2?: boolean | undefined;
} & {
    readonly pulse?: boolean | undefined;
}, {}, {}>;
export declare class DigitalOutCommandPatch extends DigitalOutCommandPatch_base {
}
export declare const mergeDigitalOutCommandPatch: (base: DigitalOutCommandFlags, patch: DigitalOutCommandPatch) => DigitalOutCommandFlags;
declare const StateMonitorFlags_base: Schema.Class<StateMonitorFlags, {
    operation: typeof Schema.Boolean;
    direction: typeof Schema.Boolean;
    inverterReady: typeof Schema.Boolean;
    fault: typeof Schema.Boolean;
    warning: typeof Schema.Boolean;
    zeroSpeed: typeof Schema.Boolean;
    is440V: typeof Schema.Boolean;
    frequencyAgree: typeof Schema.Boolean;
    setFrequencyAgree: typeof Schema.Boolean;
    frequencyDetection1: typeof Schema.Boolean;
    frequencyDetection2: typeof Schema.Boolean;
    underVoltage: typeof Schema.Boolean;
    baseblock: typeof Schema.Boolean;
    freqRefNotFromComm: typeof Schema.Boolean;
    seqNotFromComm: typeof Schema.Boolean;
    overTorque: typeof Schema.Boolean;
}, Schema.Struct.Encoded<{
    operation: typeof Schema.Boolean;
    direction: typeof Schema.Boolean;
    inverterReady: typeof Schema.Boolean;
    fault: typeof Schema.Boolean;
    warning: typeof Schema.Boolean;
    zeroSpeed: typeof Schema.Boolean;
    is440V: typeof Schema.Boolean;
    frequencyAgree: typeof Schema.Boolean;
    setFrequencyAgree: typeof Schema.Boolean;
    frequencyDetection1: typeof Schema.Boolean;
    frequencyDetection2: typeof Schema.Boolean;
    underVoltage: typeof Schema.Boolean;
    baseblock: typeof Schema.Boolean;
    freqRefNotFromComm: typeof Schema.Boolean;
    seqNotFromComm: typeof Schema.Boolean;
    overTorque: typeof Schema.Boolean;
}>, never, {
    readonly operation: boolean;
} & {
    readonly direction: boolean;
} & {
    readonly inverterReady: boolean;
} & {
    readonly fault: boolean;
} & {
    readonly warning: boolean;
} & {
    readonly zeroSpeed: boolean;
} & {
    readonly is440V: boolean;
} & {
    readonly frequencyAgree: boolean;
} & {
    readonly setFrequencyAgree: boolean;
} & {
    readonly frequencyDetection1: boolean;
} & {
    readonly frequencyDetection2: boolean;
} & {
    readonly underVoltage: boolean;
} & {
    readonly baseblock: boolean;
} & {
    readonly freqRefNotFromComm: boolean;
} & {
    readonly seqNotFromComm: boolean;
} & {
    readonly overTorque: boolean;
}, {}, {}>;
/**
 * Human-readable state monitor word shape.
 * Maps to the A510 Operation Status register (0x2520).
 */
export declare class StateMonitorFlags extends StateMonitorFlags_base {
    static get empty(): StateMonitorFlags;
}
/**
 * Bidirectional transformation:
 * wire format = UInt16
 * domain format = StateMonitorFlags
 */
export declare const StateMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, typeof StateMonitorFlags, never>;
export declare const decodeStateMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<StateMonitorFlags, ParseResult.ParseError, never>;
export declare const formattedStateMonitor: (a: StateMonitorFlags) => string;
/**
 * Branded string for the resolved error description text.
 */
export type ErrorDescriptionMonitor = string & Brand.Brand<"ErrorDescriptionMonitor">;
export declare const ErrorDescriptionMonitor: Schema.brand<typeof Schema.String, "ErrorDescriptionMonitor">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (raw fault code)
 * domain format = ErrorDescriptionMonitor (resolved description text)
 */
export declare const ErrorDescriptionMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<typeof Schema.String, "ErrorDescriptionMonitor">, never>;
export declare const decodeErrorDescriptionMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<string & Brand.Brand<"ErrorDescriptionMonitor">, ParseResult.ParseError, never>;
export declare const formattedErrorDescriptionMonitor: (a: string & Brand.Brand<"ErrorDescriptionMonitor">) => string;
declare const DigitalInStateMonitorFlags_base: Schema.Class<DigitalInStateMonitorFlags, {
    s1: typeof Schema.Boolean;
    s2: typeof Schema.Boolean;
    s3: typeof Schema.Boolean;
    s4: typeof Schema.Boolean;
    s5: typeof Schema.Boolean;
    s6: typeof Schema.Boolean;
    s7: typeof Schema.Boolean;
    s8: typeof Schema.Boolean;
}, Schema.Struct.Encoded<{
    s1: typeof Schema.Boolean;
    s2: typeof Schema.Boolean;
    s3: typeof Schema.Boolean;
    s4: typeof Schema.Boolean;
    s5: typeof Schema.Boolean;
    s6: typeof Schema.Boolean;
    s7: typeof Schema.Boolean;
    s8: typeof Schema.Boolean;
}>, never, {
    readonly s1: boolean;
} & {
    readonly s2: boolean;
} & {
    readonly s3: boolean;
} & {
    readonly s4: boolean;
} & {
    readonly s5: boolean;
} & {
    readonly s6: boolean;
} & {
    readonly s7: boolean;
} & {
    readonly s8: boolean;
}, {}, {}>;
/**
 * Human-readable digital input state word shape.
 * Maps to the A510 Digital Input State register (0x2522).
 */
export declare class DigitalInStateMonitorFlags extends DigitalInStateMonitorFlags_base {
    static get empty(): DigitalInStateMonitorFlags;
}
/**
 * Bidirectional transformation:
 * wire format = UInt16
 * domain format = DigitalInStateMonitorFlags
 */
export declare const DigitalInStateMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, typeof DigitalInStateMonitorFlags, never>;
export declare const decodeDigitalInStateMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<DigitalInStateMonitorFlags, ParseResult.ParseError, never>;
export declare const formattedDigitalInStateMonitor: (a: DigitalInStateMonitorFlags) => string;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.01 Hz per count)
 * domain format = FrequencyHz
 */
export declare const FrequencyCommandMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "FrequencyHz">, never>;
export declare const decodeFrequencyCommandMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"FrequencyHz">, ParseResult.ParseError, never>;
export declare const formattedFrequencyCommandMonitor: (a: number & Brand.Brand<"FrequencyHz">) => string;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.01 Hz per count)
 * domain format = FrequencyHz
 */
export declare const OutputFrequencyMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "FrequencyHz">, never>;
export declare const decodeOutputFrequencyMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"FrequencyHz">, ParseResult.ParseError, never>;
export declare const formattedOutputFrequencyMonitor: (a: number & Brand.Brand<"FrequencyHz">) => string;
/**
 * DC bus voltage in volts (domain representation).
 */
export type DCBusVoltage = number & Brand.Brand<"DCBusVoltage">;
export declare const DCBusVoltage: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "DCBusVoltage">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.1V per count, range 0-10000 → 0.0V-1000.0V)
 * domain format = DCBusVoltage
 */
export declare const DCBusVoltageCommandMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "DCBusVoltage">, never>;
export declare const decodeDCBusVoltageCommandMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"DCBusVoltage">, ParseResult.ParseError, never>;
export declare const formattedDCBusVoltageCommandMonitor: (a: number & Brand.Brand<"DCBusVoltage">) => string;
/**
 * Current in amps (domain representation).
 */
export type CurrentAmps = number & Brand.Brand<"CurrentAmps">;
export declare const CurrentAmps: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "CurrentAmps">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.1A per count)
 * domain format = CurrentAmps
 */
export declare const OutputCurrentMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "CurrentAmps">, never>;
export declare const decodeOutputCurrentMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"CurrentAmps">, ParseResult.ParseError, never>;
export declare const formattedOutputCurrentMonitor: (a: number & Brand.Brand<"CurrentAmps">) => string;
/**
 * Branded string for the resolved warning description text.
 */
export type WarningDescriptionMonitor = string & Brand.Brand<"WarningDescriptionMonitor">;
export declare const WarningDescriptionMonitor: Schema.brand<typeof Schema.String, "WarningDescriptionMonitor">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (raw warning code)
 * domain format = WarningDescriptionMonitor (resolved description text)
 */
export declare const WarningDescriptionMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<typeof Schema.String, "WarningDescriptionMonitor">, never>;
export declare const decodeWarningDescriptionMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<string & Brand.Brand<"WarningDescriptionMonitor">, ParseResult.ParseError, never>;
export declare const formattedWarningDescriptionMonitor: (a: string & Brand.Brand<"WarningDescriptionMonitor">) => string;
declare const DigitalOutStateMonitorFlags_base: Schema.Class<DigitalOutStateMonitorFlags, {
    ry1: typeof Schema.Boolean;
    ry2: typeof Schema.Boolean;
    pulse: typeof Schema.Boolean;
}, Schema.Struct.Encoded<{
    ry1: typeof Schema.Boolean;
    ry2: typeof Schema.Boolean;
    pulse: typeof Schema.Boolean;
}>, never, {
    readonly ry1: boolean;
} & {
    readonly ry2: boolean;
} & {
    readonly pulse: boolean;
}, {}, {}>;
/**
 * Human-readable digital output state word shape.
 * Maps to the A510 Digital Output State register (0x2529).
 */
export declare class DigitalOutStateMonitorFlags extends DigitalOutStateMonitorFlags_base {
    static get empty(): DigitalOutStateMonitorFlags;
}
/**
 * Bidirectional transformation:
 * wire format = UInt16
 * domain format = DigitalOutStateMonitorFlags
 */
export declare const DigitalOutStateMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, typeof DigitalOutStateMonitorFlags, never>;
export declare const decodeDigitalOutStateMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<DigitalOutStateMonitorFlags, ParseResult.ParseError, never>;
export declare const formattedDigitalOutStateMonitor: (a: DigitalOutStateMonitorFlags) => string;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0-1000 → 0.00V-10.00V, 0.01V per count)
 * domain format = Voltage
 */
export declare const AnalogOut1MonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">, never>;
export declare const decodeAnalogOut1Monitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"Voltage">, ParseResult.ParseError, never>;
export declare const formattedAnalogOut1Monitor: (a: number & Brand.Brand<"Voltage">) => string;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0-1000 → 0.00V-10.00V, 0.01V per count)
 * domain format = Voltage
 */
export declare const AnalogOut2MonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">, never>;
export declare const decodeAnalogOut2Monitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"Voltage">, ParseResult.ParseError, never>;
export declare const formattedAnalogOut2Monitor: (a: number & Brand.Brand<"Voltage">) => string;
/**
 * Analog input as a percentage (domain representation).
 * 0.1% per count, range 0-1000 → 0.0%-100.0%.
 */
export type AnalogInputPercent = number & Brand.Brand<"AnalogInputPercent">;
export declare const AnalogInputPercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "AnalogInputPercent">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.1% per count)
 * domain format = AnalogInputPercent
 */
export declare const AnalogIn1MonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "AnalogInputPercent">, never>;
export declare const decodeAnalogIn1Monitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"AnalogInputPercent">, ParseResult.ParseError, never>;
export declare const formattedAnalogIn1Monitor: (a: number & Brand.Brand<"AnalogInputPercent">) => string;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (0.1% per count)
 * domain format = AnalogInputPercent
 */
export declare const AnalogIn2MonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "AnalogInputPercent">, never>;
export declare const decodeAnalogIn2Monitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<number & Brand.Brand<"AnalogInputPercent">, ParseResult.ParseError, never>;
export declare const formattedAnalogIn2Monitor: (a: number & Brand.Brand<"AnalogInputPercent">) => string;
/**
 * Branded string for the resolved drive series identification.
 */
export type A510CheckMonitor = string & Brand.Brand<"A510CheckMonitor">;
export declare const A510CheckMonitor: Schema.brand<typeof Schema.String, "A510CheckMonitor">;
/**
 * Bidirectional transformation:
 * wire format = UInt16 (model identification code)
 * domain format = A510CheckMonitor (resolved model name)
 */
export declare const A510CheckMonitorSchema: Schema.transformOrFail<Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.Number>>>, "UInt16">, Schema.brand<typeof Schema.String, "A510CheckMonitor">, never>;
export declare const decodeA510CheckMonitor: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<string & Brand.Brand<"A510CheckMonitor">, ParseResult.ParseError, never>;
export declare const formattedA510CheckMonitor: (a: string & Brand.Brand<"A510CheckMonitor">) => string;
export {};
