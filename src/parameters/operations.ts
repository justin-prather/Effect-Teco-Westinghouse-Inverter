/**
 * @fileoverview Inverter-specific operation types that couple the generic
 * `modbus-schema` engine with the `effect-modbus-rs` transport layer.
 *
 * These types belong in the inverter package because they reference
 * {@link ModbusError} from the transport library. They are used by
 * {@link TecoInverterService} to type the read/write operations exposed on each
 * parameter callable.
 *
 * @module
 */

import type { Effect } from "effect";
import type { ModbusError } from "effect-modbus-rs";
import type {
  ParamConfig,
  ParamEntry,
  ParamEntryOfConfig,
  ParamValueOfEntry,
  RegisterMeta,
} from "modbus-schema";

type EffectErrorOf<F> = F extends Effect.Effect<any, infer E, any> ? E : never;
type EffectRequirementsOf<F> =
  F extends Effect.Effect<any, any, infer R> ? R : never;

/**
 * Read/update operations for a single parameter entry. The error union includes
 * the transport's {@link ModbusError} because `read()` performs a Modbus read
 * and `update()` performs a Modbus write after encoding.
 */
export type ParamOperationOfEntry<E extends ParamEntry<any>> = {
  readonly read: () => Effect.Effect<
    ParamValueOfEntry<E>,
    EffectErrorOf<ReturnType<E["decode"]>> | ModbusError,
    EffectRequirementsOf<ReturnType<E["decode"]>>
  >;
  readonly update: (
    value: ParamValueOfEntry<E>,
  ) => Effect.Effect<
    void,
    EffectErrorOf<ReturnType<E["encode"]>> | ModbusError,
    EffectRequirementsOf<ReturnType<E["encode"]>>
  >;
};

/**
 * A callable parameter: invoke with a `deviceId` to get read/update operations,
 * or read its metadata via `.meta`.
 */
export type ParamCallableOfEntry<E extends ParamEntry<any>> = ((
  deviceId: number,
) => ParamOperationOfEntry<E>) & {
  readonly meta: RegisterMeta;
};

/**
 * Maps a record of parameter configs to a record of parameter callables.
 */
export type GroupParamOps<C extends Record<string, ParamConfig>> = {
  readonly [K in keyof C]: ParamCallableOfEntry<ParamEntryOfConfig<C[K]>>;
};
