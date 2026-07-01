/**
 * Group 09: Communication Parameters
 * Manual pages 4-52
 */

import * as P from "./param-utils";
import { GROUP_09_Communication_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 9 as const;
const p452 = 452 as const;

const all = {
  /** @param 09-00 INV Communication Station Address -- Range: 1~31, Default: 1, Manual p.4-52 */
  "09-00": P.p(GROUP_09_Communication_Parameters["09-00"], {
    group, code: "09-00", name: "INV Communication Station Address",
    range: "1~31", default: "1", unit: "-", page: p452,
  }),

  /** @param 09-01 Communication Mode Selection -- Range: 0 (MODBUS), Default: 0, Manual p.4-52 */
  "09-01": P.p(GROUP_09_Communication_Parameters["09-01"], {
    group, code: "09-01", name: "Communication Mode Selection",
    range: "0 (MODBUS)", default: "0", unit: "-", page: p452,
  }),

  /** @param 09-02 Baud Rate Setting (bps) -- Range: 0-5, Default: 4, Manual p.4-52 */
  "09-02": P.p(GROUP_09_Communication_Parameters["09-02"], {
    group, code: "09-02", name: "Baud Rate Setting (bps)",
    range: "0-5 (0:1200 / 1:2400 / 2:4800 / 3:9600 / 4:19200 / 5:38400)", default: "4", unit: "-", page: p452,
  }),

  /** @param 09-03 Stop Bit Selection -- Range: 0-1, Default: 0, Manual p.4-52 */
  "09-03": P.p(GROUP_09_Communication_Parameters["09-03"], {
    group, code: "09-03", name: "Stop Bit Selection",
    range: "0-1 (0:1 StopBit / 1:2 StopBit)", default: "0", unit: "-", page: p452,
  }),

  /** @param 09-04 Parity Selection -- Range: 0-2, Default: 0, Manual p.4-52 */
  "09-04": P.p(GROUP_09_Communication_Parameters["09-04"], {
    group, code: "09-04", name: "Parity Selection",
    range: "0-2 (0:No Parity / 1:Even Bit / 2:Odd Bit)", default: "0", unit: "-", page: p452,
  }),

  /** @param 09-05 Communication DataBit Selection -- Range: 0-1, Default: 0, Manual p.4-52 */
  "09-05": P.p(GROUP_09_Communication_Parameters["09-05"], {
    group, code: "09-05", name: "Communication DataBit Selection",
    range: "0-1 (0:8 Bit Data / 1:7 Bit Data)", default: "0", unit: "-", page: p452,
  }),

  /** @param 09-06 Communication Error Detection Time -- Range: 0.0~25.5, Default: 0.0, Unit: S, Manual p.4-52 */
  "09-06": P.sp(GROUP_09_Communication_Parameters["09-06"], 0.1, {
    group, code: "09-06", name: "Communication Error Detection Time",
    range: "0.0~25.5", default: "0.0", unit: "S", page: p452,
  }),

  /** @param 09-07 Fault Stop Selection -- Range: 0-3, Default: 3, Manual p.4-52 */
  "09-07": P.p(GROUP_09_Communication_Parameters["09-07"], {
    group, code: "09-07", name: "Fault Stop Selection",
    range: "0-3 (0:Decel stop DT1 / 1:Coast stop / 2:Decel stop DT2 / 3:Keep operating)", default: "3", unit: "-", page: p452,
  }),

  /** @param 09-08 Comm. Fault Tolerance Count -- Range: 1~20, Default: 1, Manual p.4-52 */
  "09-08": P.p(GROUP_09_Communication_Parameters["09-08"], {
    group, code: "09-08", name: "Comm. Fault Tolerance Count",
    range: "1~20", default: "1", unit: "-", page: p452,
  }),

  /** @param 09-09 Waiting Time -- Range: 5~65, Default: 5, Unit: ms, Manual p.4-52 */
  "09-09": P.p(GROUP_09_Communication_Parameters["09-09"], {
    group, code: "09-09", name: "Waiting Time",
    range: "5~65", default: "5", unit: "ms", page: p452,
  }),
}

export const group09Params = all;
