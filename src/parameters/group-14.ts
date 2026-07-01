/**
 * Group 14: PLC Setting Parameters
 * Manual page 4-72
 */

import * as P from "./param-utils";
import { GROUP_14_PLC_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 14 as const;
const p472 = 472 as const;

const p = <A extends number, I extends number>(addr: number, meta: P.ParamMeta) => {
  const schema = P.makeParam<A, I>(addr, meta);
  return {
    schema,
    decode: P.makeDecode(schema),
    encode: P.makeEncode(schema),
    formatted: P.makeFormatted(schema),
  };
};

const all = {
  "14-00": p(GROUP_14_PLC_Parameters["14-00"], { group, code: "14-00", name: "T1 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-01": p(GROUP_14_PLC_Parameters["14-01"], { group, code: "14-01", name: "T1 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-02": p(GROUP_14_PLC_Parameters["14-02"], { group, code: "14-02", name: "T2 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-03": p(GROUP_14_PLC_Parameters["14-03"], { group, code: "14-03", name: "T2 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-04": p(GROUP_14_PLC_Parameters["14-04"], { group, code: "14-04", name: "T3 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-05": p(GROUP_14_PLC_Parameters["14-05"], { group, code: "14-05", name: "T3 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-06": p(GROUP_14_PLC_Parameters["14-06"], { group, code: "14-06", name: "T4 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-07": p(GROUP_14_PLC_Parameters["14-07"], { group, code: "14-07", name: "T4 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-08": p(GROUP_14_PLC_Parameters["14-08"], { group, code: "14-08", name: "T5 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-09": p(GROUP_14_PLC_Parameters["14-09"], { group, code: "14-09", name: "T5 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-10": p(GROUP_14_PLC_Parameters["14-10"], { group, code: "14-10", name: "T6 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-11": p(GROUP_14_PLC_Parameters["14-11"], { group, code: "14-11", name: "T6 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-12": p(GROUP_14_PLC_Parameters["14-12"], { group, code: "14-12", name: "T7 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-13": p(GROUP_14_PLC_Parameters["14-13"], { group, code: "14-13", name: "T7 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-14": p(GROUP_14_PLC_Parameters["14-14"], { group, code: "14-14", name: "T8 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-15": p(GROUP_14_PLC_Parameters["14-15"], { group, code: "14-15", name: "T8 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-16": p(GROUP_14_PLC_Parameters["14-16"], { group, code: "14-16", name: "C1 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-17": p(GROUP_14_PLC_Parameters["14-17"], { group, code: "14-17", name: "C2 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-18": p(GROUP_14_PLC_Parameters["14-18"], { group, code: "14-18", name: "C3 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-19": p(GROUP_14_PLC_Parameters["14-19"], { group, code: "14-19", name: "C4 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-20": p(GROUP_14_PLC_Parameters["14-20"], { group, code: "14-20", name: "C5 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-21": p(GROUP_14_PLC_Parameters["14-21"], { group, code: "14-21", name: "C6 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-22": p(GROUP_14_PLC_Parameters["14-22"], { group, code: "14-22", name: "C7 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-23": p(GROUP_14_PLC_Parameters["14-23"], { group, code: "14-23", name: "C8 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-24": p(GROUP_14_PLC_Parameters["14-24"], { group, code: "14-24", name: "AS1 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-25": p(GROUP_14_PLC_Parameters["14-25"], { group, code: "14-25", name: "AS1 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-26": p(GROUP_14_PLC_Parameters["14-26"], { group, code: "14-26", name: "AS1 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-27": p(GROUP_14_PLC_Parameters["14-27"], { group, code: "14-27", name: "AS2 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-28": p(GROUP_14_PLC_Parameters["14-28"], { group, code: "14-28", name: "AS2 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-29": p(GROUP_14_PLC_Parameters["14-29"], { group, code: "14-29", name: "AS2 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-30": p(GROUP_14_PLC_Parameters["14-30"], { group, code: "14-30", name: "AS3 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-31": p(GROUP_14_PLC_Parameters["14-31"], { group, code: "14-31", name: "AS3 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-32": p(GROUP_14_PLC_Parameters["14-32"], { group, code: "14-32", name: "AS3 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-33": p(GROUP_14_PLC_Parameters["14-33"], { group, code: "14-33", name: "AS4 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-34": p(GROUP_14_PLC_Parameters["14-34"], { group, code: "14-34", name: "AS4 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-35": p(GROUP_14_PLC_Parameters["14-35"], { group, code: "14-35", name: "AS4 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-36": p(GROUP_14_PLC_Parameters["14-36"], { group, code: "14-36", name: "MD1 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-37": p(GROUP_14_PLC_Parameters["14-37"], { group, code: "14-37", name: "MD1 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-38": p(GROUP_14_PLC_Parameters["14-38"], { group, code: "14-38", name: "MD1 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-39": p(GROUP_14_PLC_Parameters["14-39"], { group, code: "14-39", name: "MD2 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-40": p(GROUP_14_PLC_Parameters["14-40"], { group, code: "14-40", name: "MD2 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-41": p(GROUP_14_PLC_Parameters["14-41"], { group, code: "14-41", name: "MD2 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-42": p(GROUP_14_PLC_Parameters["14-42"], { group, code: "14-42", name: "MD3 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-43": p(GROUP_14_PLC_Parameters["14-43"], { group, code: "14-43", name: "MD3 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-44": p(GROUP_14_PLC_Parameters["14-44"], { group, code: "14-44", name: "MD3 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-45": p(GROUP_14_PLC_Parameters["14-45"], { group, code: "14-45", name: "MD4 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-46": p(GROUP_14_PLC_Parameters["14-46"], { group, code: "14-46", name: "MD4 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-47": p(GROUP_14_PLC_Parameters["14-47"], { group, code: "14-47", name: "MD4 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
}

// ── Static named exports ───────────────────────────────────

const e = (code: keyof typeof all) => all[code]
const em = (code: keyof typeof all) => e(code)

export const Param_14_00 = em("14-00").schema
export const decode14_00 = em("14-00").decode
export const encode14_00 = em("14-00").encode
export const formatted14_00 = em("14-00").formatted

export const Param_14_01 = em("14-01").schema
export const decode14_01 = em("14-01").decode
export const encode14_01 = em("14-01").encode
export const formatted14_01 = em("14-01").formatted

export const Param_14_02 = em("14-02").schema
export const decode14_02 = em("14-02").decode
export const encode14_02 = em("14-02").encode
export const formatted14_02 = em("14-02").formatted

export const Param_14_03 = em("14-03").schema
export const decode14_03 = em("14-03").decode
export const encode14_03 = em("14-03").encode
export const formatted14_03 = em("14-03").formatted

export const Param_14_04 = em("14-04").schema
export const decode14_04 = em("14-04").decode
export const encode14_04 = em("14-04").encode
export const formatted14_04 = em("14-04").formatted

export const Param_14_05 = em("14-05").schema
export const decode14_05 = em("14-05").decode
export const encode14_05 = em("14-05").encode
export const formatted14_05 = em("14-05").formatted

export const Param_14_06 = em("14-06").schema
export const decode14_06 = em("14-06").decode
export const encode14_06 = em("14-06").encode
export const formatted14_06 = em("14-06").formatted

export const Param_14_07 = em("14-07").schema
export const decode14_07 = em("14-07").decode
export const encode14_07 = em("14-07").encode
export const formatted14_07 = em("14-07").formatted

export const Param_14_08 = em("14-08").schema
export const decode14_08 = em("14-08").decode
export const encode14_08 = em("14-08").encode
export const formatted14_08 = em("14-08").formatted

export const Param_14_09 = em("14-09").schema
export const decode14_09 = em("14-09").decode
export const encode14_09 = em("14-09").encode
export const formatted14_09 = em("14-09").formatted

export const Param_14_10 = em("14-10").schema
export const decode14_10 = em("14-10").decode
export const encode14_10 = em("14-10").encode
export const formatted14_10 = em("14-10").formatted

export const Param_14_11 = em("14-11").schema
export const decode14_11 = em("14-11").decode
export const encode14_11 = em("14-11").encode
export const formatted14_11 = em("14-11").formatted

export const Param_14_12 = em("14-12").schema
export const decode14_12 = em("14-12").decode
export const encode14_12 = em("14-12").encode
export const formatted14_12 = em("14-12").formatted

export const Param_14_13 = em("14-13").schema
export const decode14_13 = em("14-13").decode
export const encode14_13 = em("14-13").encode
export const formatted14_13 = em("14-13").formatted

export const Param_14_14 = em("14-14").schema
export const decode14_14 = em("14-14").decode
export const encode14_14 = em("14-14").encode
export const formatted14_14 = em("14-14").formatted

export const Param_14_15 = em("14-15").schema
export const decode14_15 = em("14-15").decode
export const encode14_15 = em("14-15").encode
export const formatted14_15 = em("14-15").formatted

export const Param_14_16 = em("14-16").schema
export const decode14_16 = em("14-16").decode
export const encode14_16 = em("14-16").encode
export const formatted14_16 = em("14-16").formatted

export const Param_14_17 = em("14-17").schema
export const decode14_17 = em("14-17").decode
export const encode14_17 = em("14-17").encode
export const formatted14_17 = em("14-17").formatted

export const Param_14_18 = em("14-18").schema
export const decode14_18 = em("14-18").decode
export const encode14_18 = em("14-18").encode
export const formatted14_18 = em("14-18").formatted

export const Param_14_19 = em("14-19").schema
export const decode14_19 = em("14-19").decode
export const encode14_19 = em("14-19").encode
export const formatted14_19 = em("14-19").formatted

export const Param_14_20 = em("14-20").schema
export const decode14_20 = em("14-20").decode
export const encode14_20 = em("14-20").encode
export const formatted14_20 = em("14-20").formatted

export const Param_14_21 = em("14-21").schema
export const decode14_21 = em("14-21").decode
export const encode14_21 = em("14-21").encode
export const formatted14_21 = em("14-21").formatted

export const Param_14_22 = em("14-22").schema
export const decode14_22 = em("14-22").decode
export const encode14_22 = em("14-22").encode
export const formatted14_22 = em("14-22").formatted

export const Param_14_23 = em("14-23").schema
export const decode14_23 = em("14-23").decode
export const encode14_23 = em("14-23").encode
export const formatted14_23 = em("14-23").formatted

export const Param_14_24 = em("14-24").schema
export const decode14_24 = em("14-24").decode
export const encode14_24 = em("14-24").encode
export const formatted14_24 = em("14-24").formatted

export const Param_14_25 = em("14-25").schema
export const decode14_25 = em("14-25").decode
export const encode14_25 = em("14-25").encode
export const formatted14_25 = em("14-25").formatted

export const Param_14_26 = em("14-26").schema
export const decode14_26 = em("14-26").decode
export const encode14_26 = em("14-26").encode
export const formatted14_26 = em("14-26").formatted

export const Param_14_27 = em("14-27").schema
export const decode14_27 = em("14-27").decode
export const encode14_27 = em("14-27").encode
export const formatted14_27 = em("14-27").formatted

export const Param_14_28 = em("14-28").schema
export const decode14_28 = em("14-28").decode
export const encode14_28 = em("14-28").encode
export const formatted14_28 = em("14-28").formatted

export const Param_14_29 = em("14-29").schema
export const decode14_29 = em("14-29").decode
export const encode14_29 = em("14-29").encode
export const formatted14_29 = em("14-29").formatted

export const Param_14_30 = em("14-30").schema
export const decode14_30 = em("14-30").decode
export const encode14_30 = em("14-30").encode
export const formatted14_30 = em("14-30").formatted

export const Param_14_31 = em("14-31").schema
export const decode14_31 = em("14-31").decode
export const encode14_31 = em("14-31").encode
export const formatted14_31 = em("14-31").formatted

export const Param_14_32 = em("14-32").schema
export const decode14_32 = em("14-32").decode
export const encode14_32 = em("14-32").encode
export const formatted14_32 = em("14-32").formatted

export const Param_14_33 = em("14-33").schema
export const decode14_33 = em("14-33").decode
export const encode14_33 = em("14-33").encode
export const formatted14_33 = em("14-33").formatted

export const Param_14_34 = em("14-34").schema
export const decode14_34 = em("14-34").decode
export const encode14_34 = em("14-34").encode
export const formatted14_34 = em("14-34").formatted

export const Param_14_35 = em("14-35").schema
export const decode14_35 = em("14-35").decode
export const encode14_35 = em("14-35").encode
export const formatted14_35 = em("14-35").formatted

export const Param_14_36 = em("14-36").schema
export const decode14_36 = em("14-36").decode
export const encode14_36 = em("14-36").encode
export const formatted14_36 = em("14-36").formatted

export const Param_14_37 = em("14-37").schema
export const decode14_37 = em("14-37").decode
export const encode14_37 = em("14-37").encode
export const formatted14_37 = em("14-37").formatted

export const Param_14_38 = em("14-38").schema
export const decode14_38 = em("14-38").decode
export const encode14_38 = em("14-38").encode
export const formatted14_38 = em("14-38").formatted

export const Param_14_39 = em("14-39").schema
export const decode14_39 = em("14-39").decode
export const encode14_39 = em("14-39").encode
export const formatted14_39 = em("14-39").formatted

export const Param_14_40 = em("14-40").schema
export const decode14_40 = em("14-40").decode
export const encode14_40 = em("14-40").encode
export const formatted14_40 = em("14-40").formatted

export const Param_14_41 = em("14-41").schema
export const decode14_41 = em("14-41").decode
export const encode14_41 = em("14-41").encode
export const formatted14_41 = em("14-41").formatted

export const Param_14_42 = em("14-42").schema
export const decode14_42 = em("14-42").decode
export const encode14_42 = em("14-42").encode
export const formatted14_42 = em("14-42").formatted

export const Param_14_43 = em("14-43").schema
export const decode14_43 = em("14-43").decode
export const encode14_43 = em("14-43").encode
export const formatted14_43 = em("14-43").formatted

export const Param_14_44 = em("14-44").schema
export const decode14_44 = em("14-44").decode
export const encode14_44 = em("14-44").encode
export const formatted14_44 = em("14-44").formatted

export const Param_14_45 = em("14-45").schema
export const decode14_45 = em("14-45").decode
export const encode14_45 = em("14-45").encode
export const formatted14_45 = em("14-45").formatted

export const Param_14_46 = em("14-46").schema
export const decode14_46 = em("14-46").decode
export const encode14_46 = em("14-46").encode
export const formatted14_46 = em("14-46").formatted

export const Param_14_47 = em("14-47").schema
export const decode14_47 = em("14-47").decode
export const encode14_47 = em("14-47").encode
export const formatted14_47 = em("14-47").formatted

// ── Group-level lookup ─────────────────────────────────────

export const group14Params = all;
