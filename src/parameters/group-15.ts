/**
 * Group 15: PLC Monitoring Parameters
 * Manual page 4-73
 */

import * as P from "./param-utils";
import { GROUP_15_PLC_Monitoring_Parameters } from "../Registers";

const group = 15 as const;
const p473 = 473 as const;

const all = {
  "15-00": P.p(GROUP_15_PLC_Monitoring_Parameters["15-00"], { group, code: "15-00", name: "T1 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-01": P.p(GROUP_15_PLC_Monitoring_Parameters["15-01"], { group, code: "15-01", name: "T1 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-02": P.p(GROUP_15_PLC_Monitoring_Parameters["15-02"], { group, code: "15-02", name: "T2 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-03": P.p(GROUP_15_PLC_Monitoring_Parameters["15-03"], { group, code: "15-03", name: "T2 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-04": P.p(GROUP_15_PLC_Monitoring_Parameters["15-04"], { group, code: "15-04", name: "T3 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-05": P.p(GROUP_15_PLC_Monitoring_Parameters["15-05"], { group, code: "15-05", name: "T3 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-06": P.p(GROUP_15_PLC_Monitoring_Parameters["15-06"], { group, code: "15-06", name: "T4 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-07": P.p(GROUP_15_PLC_Monitoring_Parameters["15-07"], { group, code: "15-07", name: "T4 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-08": P.p(GROUP_15_PLC_Monitoring_Parameters["15-08"], { group, code: "15-08", name: "T5 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-09": P.p(GROUP_15_PLC_Monitoring_Parameters["15-09"], { group, code: "15-09", name: "T5 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-10": P.p(GROUP_15_PLC_Monitoring_Parameters["15-10"], { group, code: "15-10", name: "T6 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-11": P.p(GROUP_15_PLC_Monitoring_Parameters["15-11"], { group, code: "15-11", name: "T6 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-12": P.p(GROUP_15_PLC_Monitoring_Parameters["15-12"], { group, code: "15-12", name: "T7 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-13": P.p(GROUP_15_PLC_Monitoring_Parameters["15-13"], { group, code: "15-13", name: "T7 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-14": P.p(GROUP_15_PLC_Monitoring_Parameters["15-14"], { group, code: "15-14", name: "T8 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-15": P.p(GROUP_15_PLC_Monitoring_Parameters["15-15"], { group, code: "15-15", name: "T8 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }),
  "15-16": P.p(GROUP_15_PLC_Monitoring_Parameters["15-16"], { group, code: "15-16", name: "C1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-17": P.p(GROUP_15_PLC_Monitoring_Parameters["15-17"], { group, code: "15-17", name: "C2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-18": P.p(GROUP_15_PLC_Monitoring_Parameters["15-18"], { group, code: "15-18", name: "C3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-19": P.p(GROUP_15_PLC_Monitoring_Parameters["15-19"], { group, code: "15-19", name: "C4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-20": P.p(GROUP_15_PLC_Monitoring_Parameters["15-20"], { group, code: "15-20", name: "C5 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-21": P.p(GROUP_15_PLC_Monitoring_Parameters["15-21"], { group, code: "15-21", name: "C6 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-22": P.p(GROUP_15_PLC_Monitoring_Parameters["15-22"], { group, code: "15-22", name: "C7 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-23": P.p(GROUP_15_PLC_Monitoring_Parameters["15-23"], { group, code: "15-23", name: "C8 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-24": P.p(GROUP_15_PLC_Monitoring_Parameters["15-24"], { group, code: "15-24", name: "AS1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-25": P.p(GROUP_15_PLC_Monitoring_Parameters["15-25"], { group, code: "15-25", name: "AS2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-26": P.p(GROUP_15_PLC_Monitoring_Parameters["15-26"], { group, code: "15-26", name: "AS3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-27": P.p(GROUP_15_PLC_Monitoring_Parameters["15-27"], { group, code: "15-27", name: "AS4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-28": P.p(GROUP_15_PLC_Monitoring_Parameters["15-28"], { group, code: "15-28", name: "MD1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-29": P.p(GROUP_15_PLC_Monitoring_Parameters["15-29"], { group, code: "15-29", name: "MD2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-30": P.p(GROUP_15_PLC_Monitoring_Parameters["15-30"], { group, code: "15-30", name: "MD3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-31": P.p(GROUP_15_PLC_Monitoring_Parameters["15-31"], { group, code: "15-31", name: "MD4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
  "15-32": P.p(GROUP_15_PLC_Monitoring_Parameters["15-32"], { group, code: "15-32", name: "TD Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }),
}



// ── Group-level lookup ─────────────────────────────────────

export const group15Params = all;
