/**
 * @fileoverview Parameter schema factories and type definitions for Groups 00–22.
 *
 * Provides four schema factories ({@link makeParam}, {@link makeScaledParam},
 * {@link makeSignedScaledParam}, {@link makeEnumParam}) that produce decode/encode/format
 * bundles from a register address and metadata. The {@link fromConfig} overload selects
 * the correct factory based on the {@link ParamConfig} discriminant.
 *
 * Group files (group-00.ts … group-22.ts) store {@link ParamConfig} objects and use
 * {@link fromConfig} to build the final {@link ParamEntry} bundles exposed via
 * {@link TecoInverterService.parameters}.
 *
 * @module
 */
import { Effect, ParseResult, Schema } from "effect";
import type { ModbusError } from "effect-modbus-rs";
/**
 * Structured metadata for a parameter extracted from the A510 instruction manual.
 */
export interface ParamMeta {
    readonly group: number;
    readonly code: string;
    readonly name: string;
    readonly range: string;
    readonly default: string;
    readonly unit: string;
    readonly page: number;
}
declare const makeDecode: <S extends Schema.Schema<any, any>>(schema: S) => (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<any, ParseResult.ParseError, never>;
declare const makeEncode: <S extends Schema.Schema<any, any>>(schema: S) => (a: any, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<any, ParseResult.ParseError, never>;
declare const makeFormatted: <S extends Schema.Schema<any, any>>(schema: S) => (a: any) => string;
export declare enum ParamKind {
    UInt16 = "UInt16",
    Scaled = "Scaled",
    SignedScaled = "SignedScaled",
    Enum = "Enum"
}
export interface ParamConfigBase {
    readonly register: number;
    readonly kind: ParamKind;
    readonly meta: ParamMeta;
}
export interface UInt16ParamConfig extends ParamConfigBase {
    readonly kind: ParamKind.UInt16;
}
export interface ScaledParamConfig extends ParamConfigBase {
    readonly kind: ParamKind.Scaled;
    readonly factor: number;
}
export interface SignedScaledParamConfig extends ParamConfigBase {
    readonly kind: ParamKind.SignedScaled;
    readonly factor: number;
}
export interface EnumParamConfig<Domain extends string = string> extends ParamConfigBase {
    readonly kind: ParamKind.Enum;
    readonly labels: Record<number, Domain>;
}
export type ParamConfig = UInt16ParamConfig | ScaledParamConfig | SignedScaledParamConfig | EnumParamConfig;
export type ParamEntry<S extends Schema.Schema<any, any>> = {
    readonly schema: S;
    readonly decode: ReturnType<typeof makeDecode<S>>;
    readonly encode: ReturnType<typeof makeEncode<S>>;
    readonly formatted: ReturnType<typeof makeFormatted<S>>;
};
export type ParamEntryOfConfig<C extends ParamConfig> = C extends EnumParamConfig<infer Domain> ? ParamEntry<Schema.Schema<Domain, number>> : ParamEntry<Schema.Schema<number, number>>;
export type ParamValueOfEntry<E extends ParamEntry<any>> = E extends ParamEntry<Schema.Schema<infer A, any>> ? A : never;
type EffectErrorOf<F> = F extends Effect.Effect<any, infer E, any> ? E : never;
type EffectRequirementsOf<F> = F extends Effect.Effect<any, any, infer R> ? R : never;
export type ParamOperationOfEntry<E extends ParamEntry<any>> = {
    readonly read: () => Effect.Effect<ParamValueOfEntry<E>, EffectErrorOf<ReturnType<E["decode"]>> | ModbusError, EffectRequirementsOf<ReturnType<E["decode"]>>>;
    readonly update: (value: ParamValueOfEntry<E>) => Effect.Effect<void, EffectErrorOf<ReturnType<E["encode"]>> | ModbusError, EffectRequirementsOf<ReturnType<E["encode"]>>>;
};
export type ParamCallableOfEntry<E extends ParamEntry<any>> = ((deviceId: number) => ParamOperationOfEntry<E>) & {
    readonly meta: ParamMeta;
};
export type GroupParamOps<C extends Record<string, ParamConfig>> = {
    readonly [K in keyof C]: ParamCallableOfEntry<ParamEntryOfConfig<C[K]>>;
};
export declare function fromConfig<C extends ParamConfig>(config: C): ParamEntryOfConfig<C>;
export {};
