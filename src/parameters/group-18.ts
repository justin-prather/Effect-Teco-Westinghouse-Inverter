/**
 * Group 18: Slip Compensation Parameters
 * Manual page 4-79
 */

import * as P from "./param-utils";
import { GROUP_18_Slip_Compensation_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 18 as const;
const p479 = 479 as const;

const p = <A extends number, I extends number>(addr: number, meta: P.ParamMeta) => {
  const schema = P.makeParam<A, I>(addr, meta);
  return {
    schema,
    decode: P.makeDecode(schema),
    encode: P.makeEncode(schema),
    formatted: P.makeFormatted(schema),
  };
};
const sp = (addr: number, factor: number, meta: P.ParamMeta) => {
  const schema = P.makeScaledParam(addr, factor, meta);
  return {
    schema,
    decode: P.makeDecode(schema),
    encode: P.makeEncode(schema),
    formatted: P.makeFormatted(schema),
  };
};
const ssp = (addr: number, factor: number, meta: P.ParamMeta) => {
  const schema = P.makeSignedScaledParam(addr, factor, meta);
  return {
    schema,
    decode: P.makeDecode(schema),
    encode: P.makeEncode(schema),
    formatted: P.makeFormatted(schema),
  };
};

const all = {
  "18-00": sp(GROUP_18_Slip_Compensation_Parameters["18-00"], 0.01, { group, code: "18-00", name: "Slip Compensation Gain at Low Speed", range: "0.00~2.50", default: "0.00 / *", unit: "-", page: p479 }),
  "18-01": ssp(GROUP_18_Slip_Compensation_Parameters["18-01"], 0.01, { group, code: "18-01", name: "Slip Compensation Gain at High Speed", range: "-1.00~1.00", default: "0.0", unit: "-", page: p479 }),
  "18-02": p(GROUP_18_Slip_Compensation_Parameters["18-02"], { group, code: "18-02", name: "Slip Compensation Limit", range: "0~250", default: "200", unit: "%", page: p479 }),
  "18-03": sp(GROUP_18_Slip_Compensation_Parameters["18-03"], 0.1, { group, code: "18-03", name: "Slip Compensation Filter Time", range: "0.0~10.0", default: "1.0", unit: "Sec", page: p479 }),
  "18-04": p(GROUP_18_Slip_Compensation_Parameters["18-04"], { group, code: "18-04", name: "Regenerative Slip Compensation Selection", range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p479 }),
  "18-05": p(GROUP_18_Slip_Compensation_Parameters["18-05"], { group, code: "18-05", name: "FOC Delay Time", range: "1~1000", default: "100", unit: "ms", page: p479 }),
  "18-06": sp(GROUP_18_Slip_Compensation_Parameters["18-06"], 0.01, { group, code: "18-06", name: "FOC Gain", range: "0.00~2.00", default: "0.1", unit: "-", page: p479 }),
}

// ── Static named exports ───────────────────────────────────

const e = (code: keyof typeof all) => all[code]
const em = (code: keyof typeof all) => e(code)

export const Param_18_00 = em("18-00").schema
export const decode18_00 = em("18-00").decode
export const encode18_00 = em("18-00").encode
export const formatted18_00 = em("18-00").formatted

export const Param_18_01 = em("18-01").schema
export const decode18_01 = em("18-01").decode
export const encode18_01 = em("18-01").encode
export const formatted18_01 = em("18-01").formatted

export const Param_18_02 = em("18-02").schema
export const decode18_02 = em("18-02").decode
export const encode18_02 = em("18-02").encode
export const formatted18_02 = em("18-02").formatted

export const Param_18_03 = em("18-03").schema
export const decode18_03 = em("18-03").decode
export const encode18_03 = em("18-03").encode
export const formatted18_03 = em("18-03").formatted

export const Param_18_04 = em("18-04").schema
export const decode18_04 = em("18-04").decode
export const encode18_04 = em("18-04").encode
export const formatted18_04 = em("18-04").formatted

export const Param_18_05 = em("18-05").schema
export const decode18_05 = em("18-05").decode
export const encode18_05 = em("18-05").encode
export const formatted18_05 = em("18-05").formatted

export const Param_18_06 = em("18-06").schema
export const decode18_06 = em("18-06").decode
export const encode18_06 = em("18-06").encode
export const formatted18_06 = em("18-06").formatted

// ── Group-level lookup ─────────────────────────────────────

export const group18Params = all;
