/**
 * Group 03: External Digital Input and Output Parameters
 * Manual pages 4-27 to 4-33
 *
 * Parameter                                | Range                        | Default       | Unit | Page
 * 03-00  Multi-Function Terminal S1        | 0~69 (function code)        | 0             | -    | 4-27
 * 03-01  Multi-Function Terminal S2        | 0~69 (function code)        | 1             | -    | 4-27
 * 03-02  Multi-Function Terminal S3        | 0~69 (function code)        | 2             | -    | 4-27
 * 03-03  Multi-Function Terminal S4        | 0~69 (function code)        | 3             | -    | 4-27
 * 03-04  Multi-Function Terminal S5        | 0~69 (function code)        | 4             | -    | 4-27
 * 03-05  Multi-Function Terminal S6        | 0~69 (function code)        | 17            | -    | 4-27
 * 03-06  Multi-Function Terminal S7        | 0~69 (function code)        | 29            | -    | 4-28
 * 03-07  Multi-Function Terminal S8        | 0~69 (function code)        | 15            | -    | 4-28
 * 03-08  (S1~S8) DI Scan Time             | 0-1                         | 1             | -    | 4-28
 * 03-09  S1-S4 Type Selection             | bitfield (0000b~1111b)     | 0000b         | -    | 4-28
 * 03-10  S5-S8 Type Selection             | bitfield (0000b~1111b)     | 0000b         | -    | 4-28
 * 03-11  Relay (R1A-R1C) Output           | 0~59 (03-11 table)         | 0             | -    | 4-29
 * 03-12  Relay (R2A-R2C) Output           | 0~59 (03-11 table)         | 1             | -    | 4-29
 * 03-13  Frequency Detection Level        | 0.0~599.0                  | 0.0           | Hz   | 4-29
 * 03-14  Frequency Detection Width        | 0.1~25.5                   | 2.0           | Hz   | 4-29
 * 03-15  Current Agree Level              | 0.1~999.9                  | 0.1           | A    | 4-29
 * 03-16  Delay Time of Current Agree Det  | 0.1~10.0                   | 0.1           | s    | 4-29
 * 03-17  Mechanical Braking Release Level | 0.00~599.00                | 0.00          | Hz   | 4-29
 * 03-18  Mechanical Braking Level Set     | 0.00~599.00                | 0.00          | Hz   | 4-29
 * 03-19  Relay (R1A-R2A) Type            | bitfield (0000b~1111b)     | 0000b         | -    | 4-29
 * 03-20  Relay (R4A-R4C) Output           | 0~59 (03-11 table)         | 2             | -    | 4-30
 * 03-21  Photo-coupler Output (DO2-DOG)   | 0~59 (03-11 table)         | 3             | -    | 4-30
 * 03-27  UP/DOWN Freq Hold/Adjust Sel     | 0-3                         | 0             | -    | 4-31
 * 03-28  Photo-coupler Output (DO1-DOG)   | 0~59 (03-11 table)         | 0             | -    | 4-31
 * 03-29  Photo-coupler Output Sel (DO1-2) | bitfield (0000b~1111b)     | 0000b         | -    | 4-31
 * 03-30  Selection of Pulse Input         | 0-1                         | 0             | -    | 4-31
 * 03-31  Scale of Pulse Input             | 50~32000 (pulse)           | 1000          | Hz   | 4-31
 * 03-32  Pulse Input Gain                 | 0.0~1000.0                 | 100.0         | %    | 4-31
 * 03-33  Pulse Input Bias                 | -100.0~100.0               | 0.0           | %    | 4-31
 * 03-34  Filter Time of Pulse Input       | 0.00~2.00                  | 0.10          | Sec  | 4-31
 * 03-35  Function Setting of Pulse Output | 1-7                         | 2             | -    | 4-32
 * 03-36  Scale of Pulse Output            | 1~32000                    | 1000          | Hz   | 4-32
 * 03-37  Timer ON Delay (DIO)             | 0.0~6000.0                 | 0.0           | s    | 4-32
 * 03-38  Timer OFF Delay (DIO)            | 0.0~6000.0                 | 0.0           | s    | 4-32
 * 03-40  Up/Down Frequency Width Setting  | 0.00~5.00                  | 0.00          | Hz   | 4-32
 * 03-41  Torque Detection Level           | 0~150                      | 10            | %    | 4-32
 * 03-42  Brake Release Delay Time         | 0.00~65.00                 | 0.00          | s    | 4-32
 * 03-43  UP/DOWN Accel/Decel Selection    | 0-1                         | 0             | -    | 4-32
 * 03-44  Frequency Detection Level 2      | 0.0~599.0                  | 0.0           | Hz   | 4-32
 * 03-45  Frequency Detection Width 2      | 0.1~25.5                   | 2.0           | Hz   | 4-32
 * 03-46  Frequency Detection Level 3      | 0.0~599.0                  | 0.0           | Hz   | 4-32
 * 03-47  Frequency Detection Width 3      | 0.1~25.5                   | 2.0           | Hz   | 4-32
 * 03-48  Low Current Detection Level      | 0.0~999.9                  | 0.1           | A    | 4-32
 * 03-49  Low Current Detection Delay Time | 0.00~655.34                | 0.01          | Sec  | 4-32
 * 03-50  Frequency Detection Level 4      | 0.0~599.0                  | 0.0           | Hz   | 4-32
 * 03-51  Frequency Detection Level 5      | 0.0~599.0                  | 0.0           | Hz   | 4-32
 * 03-52  Frequency Detection Level 6      | 0.0~599.0                  | 0.0           | Hz   | 4-33
 * 03-53  Current Agree Level 2            | 0.0~999.9                  | 0.1           | A    | 4-33
 */

import * as P from "./param-utils";
import { GROUP_03_External_Digital_Input_and_Output_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 3 as const;
const p426 = 426 as const;
const p427 = 427 as const;
const p428 = 428 as const;
const p429 = 429 as const;
const p430 = 430 as const;
const p431 = 431 as const;
const p432 = 432 as const;
const p433 = 433 as const;

const all = {
  /** @param 03-00 Multi-Function Terminal Function Setting-S1 — Range: 0~69, Default: 0, Manual p.4-27 */
  "03-00": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-00"], {
    group, code: "03-00", name: "Multi-Function Terminal Function Setting-S1",
    range: "0~69", default: "0", unit: "-", page: p427,
  }),

  /** @param 03-01 Multi-Function Terminal Function Setting-S2 — Range: 0~69, Default: 1, Manual p.4-27 */
  "03-01": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-01"], {
    group, code: "03-01", name: "Multi-Function Terminal Function Setting-S2",
    range: "0~69", default: "1", unit: "-", page: p427,
  }),

  /** @param 03-02 Multi-Function Terminal Function Setting-S3 — Range: 0~69, Default: 2, Manual p.4-27 */
  "03-02": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-02"], {
    group, code: "03-02", name: "Multi-Function Terminal Function Setting-S3",
    range: "0~69", default: "2", unit: "-", page: p427,
  }),

  /** @param 03-03 Multi-Function Terminal Function Setting-S4 — Range: 0~69, Default: 3, Manual p.4-27 */
  "03-03": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-03"], {
    group, code: "03-03", name: "Multi-Function Terminal Function Setting-S4",
    range: "0~69", default: "3", unit: "-", page: p427,
  }),

  /** @param 03-04 Multi-Function Terminal Function Setting-S5 — Range: 0~69, Default: 4, Manual p.4-27 */
  "03-04": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-04"], {
    group, code: "03-04", name: "Multi-Function Terminal Function Setting-S5",
    range: "0~69", default: "4", unit: "-", page: p427,
  }),

  /** @param 03-05 Multi-Function Terminal Function Setting-S6 — Range: 0~69, Default: 17, Manual p.4-27 */
  "03-05": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-05"], {
    group, code: "03-05", name: "Multi-Function Terminal Function Setting-S6",
    range: "0~69", default: "17", unit: "-", page: p427,
  }),

  /** @param 03-06 Multi-Function Terminal Function Setting-S7 — Range: 0~69, Default: 29, Manual p.4-28 */
  "03-06": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-06"], {
    group, code: "03-06", name: "Multi-Function Terminal Function Setting-S7",
    range: "0~69", default: "29", unit: "-", page: p428,
  }),

  /** @param 03-07 Multi-Function Terminal Function Setting-S8 — Range: 0~69, Default: 15, Manual p.4-28 */
  "03-07": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-07"], {
    group, code: "03-07", name: "Multi-Function Terminal Function Setting-S8",
    range: "0~69", default: "15", unit: "-", page: p428,
  }),

  /** @param 03-08 (S1~S8) DI Scan Time — Range: 0-1, Default: 1, Manual p.4-28 */
  "03-08": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-08"], {
    group, code: "03-08", name: "(S1~S8) DI Scan Time",
    range: "0-1 (0:4ms / 1:8ms)", default: "1 (8ms)", unit: "-", page: p428,
  }),

  /** @param 03-09 Multi-Function Terminal S1-S4 Type Selection — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-28 */
  "03-09": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-09"], {
    group, code: "03-09", name: "Multi-Function Terminal S1-S4 Type Selection",
    range: "0000b~1111b (bit0:S1 A/B ... bit3:S4 A/B)", default: "0000b", unit: "-", page: p428,
  }),

  /** @param 03-10 Multi-Function Terminal S5-S8 Type Selection — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-28 */
  "03-10": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-10"], {
    group, code: "03-10", name: "Multi-Function Terminal S5-S8 Type Selection",
    range: "0000b~1111b (bit0:S5 A/B ... bit3:S8 A/B)", default: "0000b", unit: "-", page: p428,
  }),

  /** @param 03-11 Relay (R1A-R1C) Output — Range: 0~59, Default: 0, Manual p.4-29 */
  "03-11": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-11"], {
    group, code: "03-11", name: "Relay (R1A-R1C) Output",
    range: "0~59 (see 03-11/03-12 function table)", default: "0 (During Running)", unit: "-", page: p429,
  }),

  /** @param 03-12 Relay (R2A-R2C) Output — Range: 0~59, Default: 1, Manual p.4-29 */
  "03-12": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-12"], {
    group, code: "03-12", name: "Relay (R2A-R2C) Output",
    range: "0~59 (see 03-11/03-12 function table)", default: "1 (Fault Contact Output)", unit: "-", page: p429,
  }),

  /** @param 03-13 Frequency Detection Level — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-29 */
  "03-13": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-13"], 0.1, {
    group, code: "03-13", name: "Frequency Detection Level",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p429,
  }),

  /** @param 03-14 Frequency Detection Width — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-29 */
  "03-14": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-14"], 0.1, {
    group, code: "03-14", name: "Frequency Detection Width",
    range: "0.1~25.5", default: "2.0", unit: "Hz", page: p429,
  }),

  /** @param 03-15 Current Agree Level — Range: 0.1~999.9, Default: 0.1, Unit: A, Manual p.4-29 */
  "03-15": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-15"], 0.1, {
    group, code: "03-15", name: "Current Agree Level",
    range: "0.1~999.9", default: "0.1", unit: "A", page: p429,
  }),

  /** @param 03-16 Delay Time of Current Agree Detection — Range: 0.1~10.0, Default: 0.1, Unit: s, Manual p.4-29 */
  "03-16": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-16"], 0.1, {
    group, code: "03-16", name: "Delay Time of Current Agree Detection",
    range: "0.1~10.0", default: "0.1", unit: "s", page: p429,
  }),

  /** @param 03-17 Mechanical Braking Release Level — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-29 */
  "03-17": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-17"], 0.01, {
    group, code: "03-17", name: "Mechanical Braking Release Level",
    range: "0.00~599.00", default: "0.00", unit: "Hz", page: p429,
  }),

  /** @param 03-18 Mechanical Braking Level Set — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-29 */
  "03-18": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-18"], 0.01, {
    group, code: "03-18", name: "Mechanical Braking Level Set",
    range: "0.00~599.00", default: "0.00", unit: "Hz", page: p429,
  }),

  /** @param 03-19 Relay (R1A-R2A) Type — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-29 */
  "03-19": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-19"], {
    group, code: "03-19", name: "Relay (R1A-R2A) Type",
    range: "0000b~1111b (bit0:R1 A/B, bit1:R2 A/B, bit3:R4 A/B)", default: "0000b", unit: "-", page: p429,
  }),

  /** @param 03-20 Relay (R4A-R4C) Output — Range: 0~59, Default: 2, Manual p.4-30 */
  "03-20": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-20"], {
    group, code: "03-20", name: "Relay (R4A-R4C) Output",
    range: "0~59 (see 03-11/03-12 function table)", default: "2 (Frequency Agree)", unit: "-", page: p430,
  }),

  /** @param 03-21 Photo-coupler Output Selection (DO2-DOG) — Range: 0~59, Default: 3, Manual p.4-30 */
  "03-21": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-21"], {
    group, code: "03-21", name: "Photo-coupler Output Selection (DO2-DOG)",
    range: "0~59 (see 03-11/03-12 function table)", default: "3", unit: "-", page: p430,
  }),

  /** @param 03-27 UP/DOWN Frequency Hold/Adjust Selection — Range: 0-3, Default: 0, Manual p.4-31 */
  "03-27": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-27"], {
    group, code: "03-27", name: "UP/DOWN Frequency Hold/Adjust Selection",
    range: "0-3", default: "0", unit: "-", page: p431,
  }),

  /** @param 03-28 Photo-coupler Output (DO1-DOG) — Range: 0~59, Default: 0, Manual p.4-31 */
  "03-28": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-28"], {
    group, code: "03-28", name: "Photo-coupler Output (DO1-DOG)",
    range: "0~59 (see 03-11/03-12 function table)", default: "0", unit: "-", page: p431,
  }),

  /** @param 03-29 Photo-coupler Output Selection (DO1-DOG)(DO2-DOG) — Range: bitfield, Default: 0000b, Manual p.4-31 */
  "03-29": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-29"], {
    group, code: "03-29", name: "Photo-coupler Output Selection (DO1-DOG)(DO2-DOG)",
    range: "0000b~1111b (bit0:PC1 A/B, bit1:PC2 A/B)", default: "0000b", unit: "-", page: p431,
  }),

  /** @param 03-30 Selection of Pulse Input — Range: 0-1, Default: 0, Manual p.4-31 */
  "03-30": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-30"], {
    group, code: "03-30", name: "Selection of Pulse Input",
    range: "0-1 (0:General Pulse Input / 1:PWM)", default: "0", unit: "-", page: p431,
  }),

  /** @param 03-31 Scale of Pulse Input — Range: 50~32000 / 10~1000, Default: 1000, Unit: Hz, Manual p.4-31 */
  "03-31": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-31"], {
    group, code: "03-31", name: "Scale of Pulse Input",
    range: "50~32000 (03-30=0) / 10~1000 (03-30=1)", default: "1000", unit: "Hz", page: p431,
  }),

  /** @param 03-32 Pulse Input Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-31 */
  "03-32": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-32"], 0.1, {
    group, code: "03-32", name: "Pulse Input Gain",
    range: "0.0~1000.0", default: "100.0", unit: "%", page: p431,
  }),

  /** @param 03-33 Pulse Input Bias — Range: -100.0~100.0, Default: 0.0, Unit: %, Manual p.4-31 */
  "03-33": P.spSigned(GROUP_03_External_Digital_Input_and_Output_Parameters["03-33"], 0.1, {
    group, code: "03-33", name: "Pulse Input Bias",
    range: "-100.0~100.0", default: "0.0", unit: "%", page: p431,
  }),

  /** @param 03-34 Filter Time of Pulse Input — Range: 0.00~2.00, Default: 0.10, Unit: Sec, Manual p.4-31 */
  "03-34": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-34"], 0.01, {
    group, code: "03-34", name: "Filter Time of Pulse Input",
    range: "0.00~2.00", default: "0.10", unit: "Sec", page: p431,
  }),

  /** @param 03-35 Function Setting of Pulse Output — Range: 1-7, Default: 2, Manual p.4-32 */
  "03-35": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-35"], {
    group, code: "03-35", name: "Function Setting of Pulse Output",
    range: "1-7 (1:Freq Cmd / 2:Output Freq / 3:After Soft-Start / 4:Motor Speed / 5:PID Fdbk / 6:PID Input / 7:PG Output)", default: "2", unit: "-", page: p432,
  }),

  /** @param 03-36 Scale of Pulse Output — Range: 1~32000, Default: 1000, Unit: Hz, Manual p.4-32 */
  "03-36": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-36"], {
    group, code: "03-36", name: "Scale of Pulse Output",
    range: "1~32000", default: "1000", unit: "Hz", page: p432,
  }),

  /** @param 03-37 Timer ON Delay (DIO) — Range: 0.0~6000.0, Default: 0.0, Unit: s, Manual p.4-32 */
  "03-37": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-37"], 0.1, {
    group, code: "03-37", name: "Timer ON Delay (DIO)",
    range: "0.0~6000.0", default: "0.0", unit: "s", page: p432,
  }),

  /** @param 03-38 Timer OFF Delay (DIO) — Range: 0.0~6000.0, Default: 0.0, Unit: s, Manual p.4-32 */
  "03-38": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-38"], 0.1, {
    group, code: "03-38", name: "Timer OFF Delay (DIO)",
    range: "0.0~6000.0", default: "0.0", unit: "s", page: p432,
  }),

  /** @param 03-40 Up/Down Frequency Width Setting — Range: 0.00~5.00, Default: 0.00, Unit: Hz, Manual p.4-32 */
  "03-40": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-40"], 0.01, {
    group, code: "03-40", name: "Up/Down Frequency Width Setting",
    range: "0.00~5.00", default: "0.00", unit: "Hz", page: p432,
  }),

  /** @param 03-41 Torque Detection Level — Range: 0~150, Default: 10, Unit: %, Manual p.4-32 */
  "03-41": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-41"], {
    group, code: "03-41", name: "Torque Detection Level",
    range: "0~150", default: "10", unit: "%", page: p432,
  }),

  /** @param 03-42 Brake Release Delay Time — Range: 0.00~65.00, Default: 0.00, Unit: s, Manual p.4-32 */
  "03-42": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-42"], 0.01, {
    group, code: "03-42", name: "Brake Release Delay Time",
    range: "0.00~65.00", default: "0.00", unit: "s", page: p432,
  }),

  /** @param 03-43 UP/DOWN Acceleration/Deceleration Selection — Range: 0-1, Default: 0, Manual p.4-32 */
  "03-43": P.p(GROUP_03_External_Digital_Input_and_Output_Parameters["03-43"], {
    group, code: "03-43", name: "UP/DOWN Acceleration/Deceleration Selection",
    range: "0-1 (0:Accel/Decel Time 1 / 1:Accel/Decel Time 2)", default: "0", unit: "-", page: p432,
  }),

  /** @param 03-44 Frequency Detection Level 2 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
  "03-44": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-44"], 0.1, {
    group, code: "03-44", name: "Frequency Detection Level 2",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p432,
  }),

  /** @param 03-45 Frequency Detection Width 2 — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-32 */
  "03-45": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-45"], 0.1, {
    group, code: "03-45", name: "Frequency Detection Width 2",
    range: "0.1~25.5", default: "2.0", unit: "Hz", page: p432,
  }),

  /** @param 03-46 Frequency Detection Level 3 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
  "03-46": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-46"], 0.1, {
    group, code: "03-46", name: "Frequency Detection Level 3",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p432,
  }),

  /** @param 03-47 Frequency Detection Width 3 — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-32 */
  "03-47": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-47"], 0.1, {
    group, code: "03-47", name: "Frequency Detection Width 3",
    range: "0.1~25.5", default: "2.0", unit: "Hz", page: p432,
  }),

  /** @param 03-48 Low Current Detection Level — Range: 0.0~999.9, Default: 0.1, Unit: A, Manual p.4-32 */
  "03-48": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-48"], 0.1, {
    group, code: "03-48", name: "Low Current Detection Level",
    range: "0.0~999.9", default: "0.1", unit: "A", page: p432,
  }),

  /** @param 03-49 Low Current Detection Delay Time — Range: 0.00~655.34, Default: 0.01, Unit: Sec, Manual p.4-32 */
  "03-49": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-49"], 0.01, {
    group, code: "03-49", name: "Low Current Detection Delay Time",
    range: "0.00~655.34", default: "0.01", unit: "Sec", page: p432,
  }),

  /** @param 03-50 Frequency Detection Level 4 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
  "03-50": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-50"], 0.1, {
    group, code: "03-50", name: "Frequency Detection Level 4",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p432,
  }),

  /** @param 03-51 Frequency Detection Level 5 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
  "03-51": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-51"], 0.1, {
    group, code: "03-51", name: "Frequency Detection Level 5",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p432,
  }),

  /** @param 03-52 Frequency Detection Level 6 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-33 */
  "03-52": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-52"], 0.1, {
    group, code: "03-52", name: "Frequency Detection Level 6",
    range: "0.0~599.0", default: "0.0", unit: "Hz", page: p433,
  }),

  /** @param 03-53 Current Agree Level 2 — Range: 0.0~999.9, Default: 0.1, Unit: A, Manual p.4-33 */
  "03-53": P.sp(GROUP_03_External_Digital_Input_and_Output_Parameters["03-53"], 0.1, {
    group, code: "03-53", name: "Current Agree Level 2",
    range: "0.0~999.9", default: "0.1", unit: "A", page: p433,
  }),
}

export const group03Params = all;
