/**
 * Group 17: Automatic Tuning Parameters
 * Manual pages 4-78 to 4-79 (p478, p479)
 */

import * as P from "./param-utils";
import { GROUP_17_Automatic_Tuning_Parameters } from "../Registers";

const group = 17 as const;
const p478 = 478 as const;
const p479 = 479 as const;

const all = {
  "17-00": P.p(GROUP_17_Automatic_Tuning_Parameters["17-00"], { group, code: "17-00", name: "Mode Selection of Automatic Tuning", range: "0-6 (0:Rotation / 1:Static / 2:Stator R / 3:Reserved / 4:Loop / 5:Rot comb(4+2+0) / 6:Static comb(4+2+1))", default: "2 / 6", unit: "-", page: p478 }),
  "17-01": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-01"], 0.01, { group, code: "17-01", name: "Motor Rated Output Power", range: "0.00~600.00", default: "*", unit: "kW", page: p478 }),
  "17-02": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-02"], 0.1, { group, code: "17-02", name: "Motor Rated Current", range: "0.1~1200.0", default: "*", unit: "A", page: p478 }),
  "17-03": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-03"], 0.1, { group, code: "17-03", name: "Motor Rated Voltage", range: "200V:50.0~240.0 / 400V:100.0~480.0 / 575V:150.0~670.0 / 690V:180.0~804.0", default: "220.0 / 440.0 / 575.0 / 690.0", unit: "V", page: p478 }),
  "17-04": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-04"], 0.1, { group, code: "17-04", name: "Motor Rated Frequency", range: "4.8~599.0", default: "50.0 / 60.0", unit: "Hz", page: p478 }),
  "17-05": P.p(GROUP_17_Automatic_Tuning_Parameters["17-05"], { group, code: "17-05", name: "Motor Rated Speed", range: "0~24000", default: "*", unit: "rpm", page: p478 }),
  "17-06": P.p(GROUP_17_Automatic_Tuning_Parameters["17-06"], { group, code: "17-06", name: "Pole Number of Motor", range: "2~16 (Even)", default: "4", unit: "Pole", page: p478 }),
  "17-07": P.p(GROUP_17_Automatic_Tuning_Parameters["17-07"], { group, code: "17-07", name: "PG Pulse Number", range: "0~60000", default: "1024", unit: "ppr", page: p478 }),
  "17-08": P.p(GROUP_17_Automatic_Tuning_Parameters["17-08"], { group, code: "17-08", name: "Motor No-load Voltage", range: "200V:50~240 / 400V:100~480 / 575V:420~600 / 690V:504~720", default: "150 / 300 / 575 / 690", unit: "V", page: p478 }),
  "17-09": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-09"], 0.01, { group, code: "17-09", name: "Motor Excitation Current", range: "0.01~600.00", default: "*", unit: "A", page: p478 }),
  "17-10": P.p(GROUP_17_Automatic_Tuning_Parameters["17-10"], { group, code: "17-10", name: "Automatic Tuning Start", range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p479 }),
  "17-11": P.p(GROUP_17_Automatic_Tuning_Parameters["17-11"], { group, code: "17-11", name: "Error History of Automatic Tuning", range: "0-9 (0:No error / 1:Motor data / 2:Stator R / 3:Leakage L / 4:Rotor R / 5:Mutual L / 6:Encoder / 7:DT / 8:Accel / 9:Warning)", default: "0", unit: "-", page: p479 }),
  "17-12": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-12"], 0.1, { group, code: "17-12", name: "Proportion of Motor Leakage Inductance", range: "0.1~15.0", default: "3.4", unit: "%", page: p479 }),
  "17-13": P.sp(GROUP_17_Automatic_Tuning_Parameters["17-13"], 0.01, { group, code: "17-13", name: "Motor Slip Frequency", range: "0.10~20.00", default: "1.00", unit: "Hz", page: p479 }),
  "17-14": P.p(GROUP_17_Automatic_Tuning_Parameters["17-14"], { group, code: "17-14", name: "Selection of Rotation Auto-tuning", range: "0-1 (0:VF Rotation / 1:Vector Rotation)", default: "0", unit: "-", page: p479 }),
}

// ── Group-level lookup ─────────────────────────────────────

export const group17Params = all;
