/**
 * Group 14: PLC Setting Parameters
 * Manual page 4-72
 */

import * as P from "./param-utils";
import { GROUP_14_PLC_Parameters } from "../Registers";

const group = 14 as const;
const p472 = 472 as const;

const all = {
  "14-00": P.p(GROUP_14_PLC_Parameters["14-00"], { group, code: "14-00", name: "T1 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-01": P.p(GROUP_14_PLC_Parameters["14-01"], { group, code: "14-01", name: "T1 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-02": P.p(GROUP_14_PLC_Parameters["14-02"], { group, code: "14-02", name: "T2 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-03": P.p(GROUP_14_PLC_Parameters["14-03"], { group, code: "14-03", name: "T2 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-04": P.p(GROUP_14_PLC_Parameters["14-04"], { group, code: "14-04", name: "T3 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-05": P.p(GROUP_14_PLC_Parameters["14-05"], { group, code: "14-05", name: "T3 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-06": P.p(GROUP_14_PLC_Parameters["14-06"], { group, code: "14-06", name: "T4 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-07": P.p(GROUP_14_PLC_Parameters["14-07"], { group, code: "14-07", name: "T4 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-08": P.p(GROUP_14_PLC_Parameters["14-08"], { group, code: "14-08", name: "T5 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-09": P.p(GROUP_14_PLC_Parameters["14-09"], { group, code: "14-09", name: "T5 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-10": P.p(GROUP_14_PLC_Parameters["14-10"], { group, code: "14-10", name: "T6 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-11": P.p(GROUP_14_PLC_Parameters["14-11"], { group, code: "14-11", name: "T6 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-12": P.p(GROUP_14_PLC_Parameters["14-12"], { group, code: "14-12", name: "T7 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-13": P.p(GROUP_14_PLC_Parameters["14-13"], { group, code: "14-13", name: "T7 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-14": P.p(GROUP_14_PLC_Parameters["14-14"], { group, code: "14-14", name: "T8 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-15": P.p(GROUP_14_PLC_Parameters["14-15"], { group, code: "14-15", name: "T8 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }),
  "14-16": P.p(GROUP_14_PLC_Parameters["14-16"], { group, code: "14-16", name: "C1 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-17": P.p(GROUP_14_PLC_Parameters["14-17"], { group, code: "14-17", name: "C2 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-18": P.p(GROUP_14_PLC_Parameters["14-18"], { group, code: "14-18", name: "C3 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-19": P.p(GROUP_14_PLC_Parameters["14-19"], { group, code: "14-19", name: "C4 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-20": P.p(GROUP_14_PLC_Parameters["14-20"], { group, code: "14-20", name: "C5 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-21": P.p(GROUP_14_PLC_Parameters["14-21"], { group, code: "14-21", name: "C6 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-22": P.p(GROUP_14_PLC_Parameters["14-22"], { group, code: "14-22", name: "C7 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-23": P.p(GROUP_14_PLC_Parameters["14-23"], { group, code: "14-23", name: "C8 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-24": P.p(GROUP_14_PLC_Parameters["14-24"], { group, code: "14-24", name: "AS1 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-25": P.p(GROUP_14_PLC_Parameters["14-25"], { group, code: "14-25", name: "AS1 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-26": P.p(GROUP_14_PLC_Parameters["14-26"], { group, code: "14-26", name: "AS1 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-27": P.p(GROUP_14_PLC_Parameters["14-27"], { group, code: "14-27", name: "AS2 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-28": P.p(GROUP_14_PLC_Parameters["14-28"], { group, code: "14-28", name: "AS2 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-29": P.p(GROUP_14_PLC_Parameters["14-29"], { group, code: "14-29", name: "AS2 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-30": P.p(GROUP_14_PLC_Parameters["14-30"], { group, code: "14-30", name: "AS3 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-31": P.p(GROUP_14_PLC_Parameters["14-31"], { group, code: "14-31", name: "AS3 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-32": P.p(GROUP_14_PLC_Parameters["14-32"], { group, code: "14-32", name: "AS3 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-33": P.p(GROUP_14_PLC_Parameters["14-33"], { group, code: "14-33", name: "AS4 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-34": P.p(GROUP_14_PLC_Parameters["14-34"], { group, code: "14-34", name: "AS4 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-35": P.p(GROUP_14_PLC_Parameters["14-35"], { group, code: "14-35", name: "AS4 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }),
  "14-36": P.p(GROUP_14_PLC_Parameters["14-36"], { group, code: "14-36", name: "MD1 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-37": P.p(GROUP_14_PLC_Parameters["14-37"], { group, code: "14-37", name: "MD1 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-38": P.p(GROUP_14_PLC_Parameters["14-38"], { group, code: "14-38", name: "MD1 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-39": P.p(GROUP_14_PLC_Parameters["14-39"], { group, code: "14-39", name: "MD2 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-40": P.p(GROUP_14_PLC_Parameters["14-40"], { group, code: "14-40", name: "MD2 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-41": P.p(GROUP_14_PLC_Parameters["14-41"], { group, code: "14-41", name: "MD2 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-42": P.p(GROUP_14_PLC_Parameters["14-42"], { group, code: "14-42", name: "MD3 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-43": P.p(GROUP_14_PLC_Parameters["14-43"], { group, code: "14-43", name: "MD3 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-44": P.p(GROUP_14_PLC_Parameters["14-44"], { group, code: "14-44", name: "MD3 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-45": P.p(GROUP_14_PLC_Parameters["14-45"], { group, code: "14-45", name: "MD4 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-46": P.p(GROUP_14_PLC_Parameters["14-46"], { group, code: "14-46", name: "MD4 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }),
  "14-47": P.p(GROUP_14_PLC_Parameters["14-47"], { group, code: "14-47", name: "MD4 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }),
}



// ── Group-level lookup ─────────────────────────────────────

export const group14Params = all;
