/**
 * Group 12: Monitoring Parameters
 * Manual pages 4-62 to 4-67
 */

import * as P from "./param-utils";
import { GROUP_12_Monitoring_Parameters } from "../Registers";

const group = 12 as const;
const p462 = 462 as const;
const p463 = 463 as const;
const p464 = 464 as const;
const p465 = 465 as const;
const p466 = 466 as const;
const p467 = 467 as const;

const all = {
  "12-00": P.p(GROUP_12_Monitoring_Parameters["12-00"], { group, code: "12-00", name: "Display Screen Selection (LED)", range: "00000~77777", default: "-", unit: "-", page: p462 }),
  "12-01": P.p(GROUP_12_Monitoring_Parameters["12-01"], { group, code: "12-01", name: "PID Feedback Display Mode (LED)", range: "0-2 (0:Integer / 1:1 decimal / 2:2 decimals)", default: "0", unit: "-", page: p462 }),
  "12-02": P.p(GROUP_12_Monitoring_Parameters["12-02"], { group, code: "12-02", name: "PID Feedback Display Unit Setting (LED)", range: "0-2 (0:xxxxx / 1:xxxPb / 2:xxxFL)", default: "0", unit: "-", page: p462 }),
  "12-03": P.p(GROUP_12_Monitoring_Parameters["12-03"], { group, code: "12-03", name: "Line Speed Display (LED)", range: "0~60000", default: "1500", unit: "RPM", page: p462 }),
  "12-04": P.p(GROUP_12_Monitoring_Parameters["12-04"], { group, code: "12-04", name: "Modes of Line Speed Display (LED)", range: "0-4 (0:Output Freq / 1:Integer / 2:1 dec / 3:2 dec / 4:3 dec)", default: "0", unit: "-", page: p462 }),
  "12-05": P.p(GROUP_12_Monitoring_Parameters["12-05"], { group, code: "12-05", name: "Status Display of Digital Input & Output Terminal", range: "bit-field (see manual)", default: "-", unit: "-", page: p462 }),
  "12-11": P.p(GROUP_12_Monitoring_Parameters["12-11"], { group, code: "12-11", name: "Output Current of Current Fault", range: "read-only", default: "-", unit: "A", page: p463 }),
  "12-12": P.p(GROUP_12_Monitoring_Parameters["12-12"], { group, code: "12-12", name: "Output Voltage of Current Fault", range: "read-only", default: "-", unit: "V", page: p463 }),
  "12-13": P.p(GROUP_12_Monitoring_Parameters["12-13"], { group, code: "12-13", name: "Output Frequency of Current Fault", range: "read-only", default: "-", unit: "Hz", page: p463 }),
  "12-14": P.p(GROUP_12_Monitoring_Parameters["12-14"], { group, code: "12-14", name: "DC Voltage of Current Fault", range: "read-only", default: "-", unit: "V", page: p463 }),
  "12-15": P.p(GROUP_12_Monitoring_Parameters["12-15"], { group, code: "12-15", name: "Frequency Command of Current Fault", range: "read-only", default: "-", unit: "Hz", page: p463 }),
  "12-16": P.p(GROUP_12_Monitoring_Parameters["12-16"], { group, code: "12-16", name: "Frequency Command", range: "read-only", default: "-", unit: "Hz", page: p463 }),
  "12-17": P.p(GROUP_12_Monitoring_Parameters["12-17"], { group, code: "12-17", name: "Output Frequency", range: "read-only", default: "-", unit: "Hz", page: p463 }),
  "12-18": P.p(GROUP_12_Monitoring_Parameters["12-18"], { group, code: "12-18", name: "Output Current", range: "read-only", default: "-", unit: "A", page: p463 }),
  "12-19": P.p(GROUP_12_Monitoring_Parameters["12-19"], { group, code: "12-19", name: "Output Voltage", range: "read-only", default: "-", unit: "V", page: p463 }),
  "12-20": P.p(GROUP_12_Monitoring_Parameters["12-20"], { group, code: "12-20", name: "DC Voltage (Vdc)", range: "read-only", default: "-", unit: "V", page: p463 }),
  "12-21": P.p(GROUP_12_Monitoring_Parameters["12-21"], { group, code: "12-21", name: "Output Power (kW)", range: "read-only", default: "-", unit: "kW", page: p463 }),
  "12-22": P.p(GROUP_12_Monitoring_Parameters["12-22"], { group, code: "12-22", name: "Motor's Rotation Speed (rpm)", range: "read-only", default: "-", unit: "rpm", page: p463 }),
  "12-23": P.p(GROUP_12_Monitoring_Parameters["12-23"], { group, code: "12-23", name: "Output Power Factor (Pfo)", range: "read-only", default: "-", unit: "-", page: p463 }),
  "12-24": P.p(GROUP_12_Monitoring_Parameters["12-24"], { group, code: "12-24", name: "Control Mode", range: "Display only", default: "-", unit: "-", page: p463 }),
  "12-25": P.p(GROUP_12_Monitoring_Parameters["12-25"], { group, code: "12-25", name: "AI1 Input", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-26": P.p(GROUP_12_Monitoring_Parameters["12-26"], { group, code: "12-26", name: "AI2 Input", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-27": P.p(GROUP_12_Monitoring_Parameters["12-27"], { group, code: "12-27", name: "Motor Torque", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-28": P.p(GROUP_12_Monitoring_Parameters["12-28"], { group, code: "12-28", name: "Motor Torque Current (Iq)", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-29": P.p(GROUP_12_Monitoring_Parameters["12-29"], { group, code: "12-29", name: "Motor Excitation Current (Id)", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-30": P.p(GROUP_12_Monitoring_Parameters["12-30"], { group, code: "12-30", name: "ASR Deviation", range: "read-only", default: "-", unit: "%", page: p463 }),
  "12-32": P.p(GROUP_12_Monitoring_Parameters["12-32"], { group, code: "12-32", name: "ASR Output", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-33": P.p(GROUP_12_Monitoring_Parameters["12-33"], { group, code: "12-33", name: "PG Feedback", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-34": P.p(GROUP_12_Monitoring_Parameters["12-34"], { group, code: "12-34", name: "PG Pulse Number", range: "read-only", default: "-", unit: "Pulse", page: p464 }),
  "12-35": P.p(GROUP_12_Monitoring_Parameters["12-35"], { group, code: "12-35", name: "Zero-servo Pulse Number", range: "read-only", default: "-", unit: "Pulse", page: p464 }),
  "12-36": P.p(GROUP_12_Monitoring_Parameters["12-36"], { group, code: "12-36", name: "PID Input", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-37": P.p(GROUP_12_Monitoring_Parameters["12-37"], { group, code: "12-37", name: "PID Output", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-38": P.p(GROUP_12_Monitoring_Parameters["12-38"], { group, code: "12-38", name: "PID Setting", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-39": P.p(GROUP_12_Monitoring_Parameters["12-39"], { group, code: "12-39", name: "PID Feedback", range: "read-only", default: "-", unit: "%", page: p464 }),
  "12-41": P.p(GROUP_12_Monitoring_Parameters["12-41"], { group, code: "12-41", name: "Heatsink Temperature", range: "read-only", default: "-", unit: "℃", page: p464 }),
  "12-42": P.p(GROUP_12_Monitoring_Parameters["12-42"], { group, code: "12-42", name: "RS-485 Error Code", range: "bit-field (CRC/Data len/Function/Parity/Overrun/Framing/Timeout)", default: "-", unit: "-", page: p464 }),
  "12-43": P.p(GROUP_12_Monitoring_Parameters["12-43"], { group, code: "12-43", name: "Inverter Status", range: "bit-field (Ready/Running/Zero speed/Speed agree/Fault minor/Fault major)", default: "-", unit: "-", page: p464 }),
  "12-44": P.p(GROUP_12_Monitoring_Parameters["12-44"], { group, code: "12-44", name: "Pulse Input Frequency", range: "read-only", default: "-", unit: "Hz", page: p464 }),
  "12-45": P.p(GROUP_12_Monitoring_Parameters["12-45"], { group, code: "12-45", name: "Recent Fault Message", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-46": P.p(GROUP_12_Monitoring_Parameters["12-46"], { group, code: "12-46", name: "Previous Fault Message", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-47": P.p(GROUP_12_Monitoring_Parameters["12-47"], { group, code: "12-47", name: "Previous Two Fault Messages", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-48": P.p(GROUP_12_Monitoring_Parameters["12-48"], { group, code: "12-48", name: "Previous Three Fault Messages", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-49": P.p(GROUP_12_Monitoring_Parameters["12-49"], { group, code: "12-49", name: "Previous Four Fault Messages", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-50": P.p(GROUP_12_Monitoring_Parameters["12-50"], { group, code: "12-50", name: "DIO Status of Current Fault", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-51": P.p(GROUP_12_Monitoring_Parameters["12-51"], { group, code: "12-51", name: "Inverter Status of Current Fault", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-52": P.p(GROUP_12_Monitoring_Parameters["12-52"], { group, code: "12-52", name: "Trip Time 1 of Current Fault", range: "read-only", default: "-", unit: "Hr", page: p465 }),
  "12-53": P.p(GROUP_12_Monitoring_Parameters["12-53"], { group, code: "12-53", name: "Trip Time 2 of Current Fault", range: "read-only", default: "-", unit: "day", page: p465 }),
  "12-54": P.p(GROUP_12_Monitoring_Parameters["12-54"], { group, code: "12-54", name: "Frequency Command of Previous Fault", range: "read-only", default: "-", unit: "Hz", page: p465 }),
  "12-55": P.p(GROUP_12_Monitoring_Parameters["12-55"], { group, code: "12-55", name: "Output Frequency of Previous Fault", range: "read-only", default: "-", unit: "Hz", page: p465 }),
  "12-56": P.p(GROUP_12_Monitoring_Parameters["12-56"], { group, code: "12-56", name: "Output Current of Previous Fault", range: "read-only", default: "-", unit: "A", page: p465 }),
  "12-57": P.p(GROUP_12_Monitoring_Parameters["12-57"], { group, code: "12-57", name: "Output Voltage of Previous Fault", range: "read-only", default: "-", unit: "V", page: p465 }),
  "12-58": P.p(GROUP_12_Monitoring_Parameters["12-58"], { group, code: "12-58", name: "DC Voltage of Previous Fault", range: "read-only", default: "-", unit: "V", page: p465 }),
  "12-59": P.p(GROUP_12_Monitoring_Parameters["12-59"], { group, code: "12-59", name: "DIO Status of Previous Fault", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-60": P.p(GROUP_12_Monitoring_Parameters["12-60"], { group, code: "12-60", name: "Inverter Status of Previous Fault", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-61": P.p(GROUP_12_Monitoring_Parameters["12-61"], { group, code: "12-61", name: "Trip Time 1 of Last Fault", range: "read-only", default: "-", unit: "Hr", page: p465 }),
  "12-62": P.p(GROUP_12_Monitoring_Parameters["12-62"], { group, code: "12-62", name: "Trip Time 2 of Last Fault", range: "read-only", default: "-", unit: "day", page: p465 }),
  "12-63": P.p(GROUP_12_Monitoring_Parameters["12-63"], { group, code: "12-63", name: "Recent Warning Messages", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-64": P.p(GROUP_12_Monitoring_Parameters["12-64"], { group, code: "12-64", name: "Previous Warning Message", range: "read-only", default: "-", unit: "-", page: p465 }),
  "12-65": P.p(GROUP_12_Monitoring_Parameters["12-65"], { group, code: "12-65", name: "Motor Start Angle", range: "0~360", default: "-", unit: "-", page: p466 }),
  "12-66": P.p(GROUP_12_Monitoring_Parameters["12-66"], { group, code: "12-66", name: "Encoder Angle", range: "0~360", default: "-", unit: "-", page: p466 }),
  "12-67": P.sp(GROUP_12_Monitoring_Parameters["12-67"], 0.1, { group, code: "12-67", name: "Cumulative Energy (kWHr)", range: "0.0~999.9", default: "-", unit: "kWHr", page: p466 }),
  "12-68": P.p(GROUP_12_Monitoring_Parameters["12-68"], { group, code: "12-68", name: "Cumulative Energy (MWHr)", range: "0~60000", default: "-", unit: "MWHr", page: p466 }),
  "12-76": P.sp(GROUP_12_Monitoring_Parameters["12-76"], 0.1, { group, code: "12-76", name: "No-Load Voltage Output", range: "0.0~600.0", default: "-", unit: "V", page: p467 }),
  "12-78": P.spSigned(GROUP_12_Monitoring_Parameters["12-78"], 1, { group, code: "12-78", name: "Z-Phase Bias Value", range: "-9999~9999", default: "-", unit: "Pulse", page: p467 }),
  "12-79": P.sp(GROUP_12_Monitoring_Parameters["12-79"], 0.1, { group, code: "12-79", name: "Pulse Input Percentage", range: "0.0~100.0", default: "-", unit: "%", page: p467 }),
  "12-80": P.sp(GROUP_12_Monitoring_Parameters["12-80"], 0.1, { group, code: "12-80", name: "AI1 Frequency Command", range: "0.0~599.0", default: "0", unit: "Hz", page: p467 }),
  "12-82": P.sp(GROUP_12_Monitoring_Parameters["12-82"], 0.1, { group, code: "12-82", name: "Motor Load", range: "0~200.0", default: "-", unit: "%", page: p467 }),
  "12-85": P.p(GROUP_12_Monitoring_Parameters["12-85"], { group, code: "12-85", name: "AI3 Input", range: "read-only", default: "-", unit: "%", page: p467 }),
}



// ── Group-level lookup ─────────────────────────────────────

export const group12Params = all;
