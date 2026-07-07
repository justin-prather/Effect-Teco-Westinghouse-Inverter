/**
 * @fileoverview Bidirectional Effect schemas for A510 command and monitor register values.
 *
 * Provides {@link Schema} transformations between wire-format Modbus register values
 * (UInt16/Int16) and domain types (FrequencyHz, TorquePercent, etc.) with proper
 * scaling factors. Monitor registers are decode-only; command registers support
 * both encode and decode.
 *
 * Schema factories from {@link modbus-schema} are reused:
 * - **Scaled commands/monitors** → {@link makeScaledParam} / {@link makeSignedScaledParam}
 * - **Bitfield commands/monitors** → {@link makeBitfieldParam} (generated Patch + merge)
 * - **Lookup monitors** → {@link makeLookupParam} (with fallback for unknown codes)
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
import { Brand, Schema } from "effect";
export { Int16, UInt16 } from "modbus-schema";
export type FrequencyHz = number & Brand.Brand<"FrequencyHz">;
export declare const FrequencyHz: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "FrequencyHz">;
export type TorquePercent = number & Brand.Brand<"TorquePercent">;
export declare const TorquePercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "TorquePercent">;
export type SpeedLimitPercent = number & Brand.Brand<"SpeedLimitPercent">;
export declare const SpeedLimitPercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "SpeedLimitPercent">;
export type Voltage = number & Brand.Brand<"Voltage">;
export declare const Voltage: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "Voltage">;
export type DCBusVoltage = number & Brand.Brand<"DCBusVoltage">;
export declare const DCBusVoltage: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "DCBusVoltage">;
export type CurrentAmps = number & Brand.Brand<"CurrentAmps">;
export declare const CurrentAmps: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "CurrentAmps">;
export type AnalogInputPercent = number & Brand.Brand<"AnalogInputPercent">;
export declare const AnalogInputPercent: Schema.brand<Schema.filter<Schema.filter<typeof Schema.Number>>, "AnalogInputPercent">;
export type ErrorDescriptionMonitor = string & Brand.Brand<"ErrorDescriptionMonitor">;
export declare const ErrorDescriptionMonitor: Schema.brand<typeof Schema.String, "ErrorDescriptionMonitor">;
export type WarningDescriptionMonitor = string & Brand.Brand<"WarningDescriptionMonitor">;
export declare const WarningDescriptionMonitor: Schema.brand<typeof Schema.String, "WarningDescriptionMonitor">;
export type A510CheckMonitor = string & Brand.Brand<"A510CheckMonitor">;
export declare const A510CheckMonitor: Schema.brand<typeof Schema.String, "A510CheckMonitor">;
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
export declare class CommandWordFlags extends CommandWordFlags_base {
    static get empty(): CommandWordFlags;
    static get runForward(): CommandWordFlags;
    static get runReverse(): CommandWordFlags;
    static get stop(): CommandWordFlags;
    static get resetFaultPulse(): CommandWordFlags;
}
export declare const CommandWordSchema: Schema.Schema<CommandWordFlags, number, never>;
export declare const decodeCommandWord: (raw: unknown) => import("effect/Effect").Effect<CommandWordFlags, import("effect/ParseResult").ParseError, never>;
export declare const encodeCommandWord: (value: CommandWordFlags) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedCommandWord: (value: CommandWordFlags) => string;
export declare const CommandWordPatch: import("modbus-schema").AnyPatchClass;
export type CommandWordPatch = InstanceType<typeof CommandWordPatch>;
export declare const mergeCommandWordPatch: (base: CommandWordFlags, patch: Readonly<Record<string, boolean | undefined>>) => CommandWordFlags;
/**
 * Intent-level constructors for the operation command word.
 */
export declare const commandWord: {
    stop: () => CommandWordFlags;
    runForward: () => CommandWordFlags;
    runReverse: () => CommandWordFlags;
    resetFaultPulse: () => CommandWordFlags;
    withInverterMode: (base: CommandWordFlags) => CommandWordFlags;
};
export declare const decodeFrequencyCommand: (raw: unknown) => import("effect/Effect").Effect<FrequencyHz, import("effect/ParseResult").ParseError, never>;
export declare const encodeFrequencyCommand: (value: FrequencyHz) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedFrequencyCommand: (value: FrequencyHz) => string;
export declare const FrequencyCommandSchema: Schema.Schema<FrequencyHz, number, never>;
export declare const decodeTorqueCommand: (raw: unknown) => import("effect/Effect").Effect<TorquePercent, import("effect/ParseResult").ParseError, never>;
export declare const encodeTorqueCommand: (value: TorquePercent) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedTorqueCommand: (value: TorquePercent) => string;
export declare const TorqueCommandSchema: Schema.Schema<TorquePercent, number, never>;
export declare const decodeSpeedLimitCommand: (raw: unknown) => import("effect/Effect").Effect<SpeedLimitPercent, import("effect/ParseResult").ParseError, never>;
export declare const encodeSpeedLimitCommand: (value: SpeedLimitPercent) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedSpeedLimitCommand: (value: SpeedLimitPercent) => string;
export declare const SpeedLimitCommandSchema: Schema.Schema<SpeedLimitPercent, number, never>;
export declare const decodeAnalogOut1Command: (raw: unknown) => import("effect/Effect").Effect<Voltage, import("effect/ParseResult").ParseError, never>;
export declare const encodeAnalogOut1Command: (value: Voltage) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogOut1Command: (value: Voltage) => string;
export declare const AnalogOut1CommandSchema: Schema.Schema<Voltage, number, never>;
export declare const decodeAnalogOut2Command: (raw: unknown) => import("effect/Effect").Effect<Voltage, import("effect/ParseResult").ParseError, never>;
export declare const encodeAnalogOut2Command: (value: Voltage) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogOut2Command: (value: Voltage) => string;
export declare const AnalogOut2CommandSchema: Schema.Schema<Voltage, number, never>;
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
export declare class DigitalOutCommandFlags extends DigitalOutCommandFlags_base {
    static get empty(): DigitalOutCommandFlags;
}
export declare const DigitalOutCommandSchema: Schema.Schema<DigitalOutCommandFlags, number, never>;
export declare const decodeDigitalOutCommand: (raw: unknown) => import("effect/Effect").Effect<DigitalOutCommandFlags, import("effect/ParseResult").ParseError, never>;
export declare const encodeDigitalOutCommand: (value: DigitalOutCommandFlags) => import("effect/Effect").Effect<number, import("effect/ParseResult").ParseError, never>;
export declare const formattedDigitalOutCommand: (value: DigitalOutCommandFlags) => string;
export declare const DigitalOutCommandPatch: import("modbus-schema").AnyPatchClass;
export type DigitalOutCommandPatch = InstanceType<typeof DigitalOutCommandPatch>;
export declare const mergeDigitalOutCommandPatch: (base: DigitalOutCommandFlags, patch: Readonly<Record<string, boolean | undefined>>) => DigitalOutCommandFlags;
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
export declare class StateMonitorFlags extends StateMonitorFlags_base {
    static get empty(): StateMonitorFlags;
}
export declare const StateMonitorSchema: Schema.Schema<StateMonitorFlags, number, never>;
export declare const decodeStateMonitor: (raw: unknown) => import("effect/Effect").Effect<StateMonitorFlags, import("effect/ParseResult").ParseError, never>;
export declare const formattedStateMonitor: (value: StateMonitorFlags) => string;
export declare const decodeErrorDescriptionMonitor: (raw: unknown) => import("effect/Effect").Effect<ErrorDescriptionMonitor, import("effect/ParseResult").ParseError, never>;
export declare const formattedErrorDescriptionMonitor: (value: ErrorDescriptionMonitor) => string;
export declare const ErrorDescriptionMonitorSchema: Schema.Schema<ErrorDescriptionMonitor, number, never>;
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
export declare class DigitalInStateMonitorFlags extends DigitalInStateMonitorFlags_base {
    static get empty(): DigitalInStateMonitorFlags;
}
export declare const DigitalInStateMonitorSchema: Schema.Schema<DigitalInStateMonitorFlags, number, never>;
export declare const decodeDigitalInStateMonitor: (raw: unknown) => import("effect/Effect").Effect<DigitalInStateMonitorFlags, import("effect/ParseResult").ParseError, never>;
export declare const formattedDigitalInStateMonitor: (value: DigitalInStateMonitorFlags) => string;
export declare const decodeFrequencyCommandMonitor: (raw: unknown) => import("effect/Effect").Effect<FrequencyHz, import("effect/ParseResult").ParseError, never>;
export declare const formattedFrequencyCommandMonitor: (value: FrequencyHz) => string;
export declare const FrequencyCommandMonitorSchema: Schema.Schema<FrequencyHz, number, never>;
export declare const decodeOutputFrequencyMonitor: (raw: unknown) => import("effect/Effect").Effect<FrequencyHz, import("effect/ParseResult").ParseError, never>;
export declare const formattedOutputFrequencyMonitor: (value: FrequencyHz) => string;
export declare const OutputFrequencyMonitorSchema: Schema.Schema<FrequencyHz, number, never>;
export declare const decodeDCBusVoltageCommandMonitor: (raw: unknown) => import("effect/Effect").Effect<DCBusVoltage, import("effect/ParseResult").ParseError, never>;
export declare const formattedDCBusVoltageCommandMonitor: (value: DCBusVoltage) => string;
export declare const DCBusVoltageCommandMonitorSchema: Schema.Schema<DCBusVoltage, number, never>;
export declare const decodeOutputCurrentMonitor: (raw: unknown) => import("effect/Effect").Effect<CurrentAmps, import("effect/ParseResult").ParseError, never>;
export declare const formattedOutputCurrentMonitor: (value: CurrentAmps) => string;
export declare const OutputCurrentMonitorSchema: Schema.Schema<CurrentAmps, number, never>;
export declare const decodeWarningDescriptionMonitor: (raw: unknown) => import("effect/Effect").Effect<WarningDescriptionMonitor, import("effect/ParseResult").ParseError, never>;
export declare const formattedWarningDescriptionMonitor: (value: WarningDescriptionMonitor) => string;
export declare const WarningDescriptionMonitorSchema: Schema.Schema<WarningDescriptionMonitor, number, never>;
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
export declare class DigitalOutStateMonitorFlags extends DigitalOutStateMonitorFlags_base {
    static get empty(): DigitalOutStateMonitorFlags;
}
export declare const DigitalOutStateMonitorSchema: Schema.Schema<DigitalOutStateMonitorFlags, number, never>;
export declare const decodeDigitalOutStateMonitor: (raw: unknown) => import("effect/Effect").Effect<DigitalOutStateMonitorFlags, import("effect/ParseResult").ParseError, never>;
export declare const formattedDigitalOutStateMonitor: (value: DigitalOutStateMonitorFlags) => string;
export declare const decodeAnalogOut1Monitor: (raw: unknown) => import("effect/Effect").Effect<Voltage, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogOut1Monitor: (value: Voltage) => string;
export declare const AnalogOut1MonitorSchema: Schema.Schema<Voltage, number, never>;
export declare const decodeAnalogOut2Monitor: (raw: unknown) => import("effect/Effect").Effect<Voltage, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogOut2Monitor: (value: Voltage) => string;
export declare const AnalogOut2MonitorSchema: Schema.Schema<Voltage, number, never>;
export declare const decodeAnalogIn1Monitor: (raw: unknown) => import("effect/Effect").Effect<AnalogInputPercent, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogIn1Monitor: (value: AnalogInputPercent) => string;
export declare const AnalogIn1MonitorSchema: Schema.Schema<AnalogInputPercent, number, never>;
export declare const decodeAnalogIn2Monitor: (raw: unknown) => import("effect/Effect").Effect<AnalogInputPercent, import("effect/ParseResult").ParseError, never>;
export declare const formattedAnalogIn2Monitor: (value: AnalogInputPercent) => string;
export declare const AnalogIn2MonitorSchema: Schema.Schema<AnalogInputPercent, number, never>;
export declare const decodeA510CheckMonitor: (raw: unknown) => import("effect/Effect").Effect<A510CheckMonitor, import("effect/ParseResult").ParseError, never>;
export declare const formattedA510CheckMonitor: (value: A510CheckMonitor) => string;
export declare const A510CheckMonitorSchema: Schema.Schema<A510CheckMonitor, number, never>;
