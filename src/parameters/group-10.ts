/**
 * Group 10: PID Parameters
 * Manual pages 4-53 to 4-56
 */

import * as P from "./param-utils";
import { GROUP_10_PID_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 10 as const;
const p453 = 453 as const;
const p454 = 454 as const;
const p455 = 455 as const;
const p456 = 456 as const;

// ── Simple UInt16 parameters ───────────────────────────────

/** @param 10-00 PID Target Value Source Setting — Range: 1-4, Default: 1, Manual p.4-53 */
export const Param_10_00 = P.makeParam(GROUP_10_PID_Parameters["10-00"], {
  group, code: "10-00", name: "PID Target Value Source Setting",
  range: "1-4 (1:AI1 / 2:AI2 / 3:PI / 4:10-02)", default: "1", unit: "-", page: p453,
})

/** @param 10-01 PID Feedback Value Source Setting — Range: 1-3, Default: 2, Manual p.4-53 */
export const Param_10_01 = P.makeParam(GROUP_10_PID_Parameters["10-01"], {
  group, code: "10-01", name: "PID Feedback Value Source Setting",
  range: "1-3 (1:AI1 / 2:AI2 / 3:PI)", default: "2", unit: "-", page: p453,
})

/** @param 10-03 PID Control Mode — Bit field, Default: 0000b, Manual p.4-53 */
export const Param_10_03 = P.makeParam(GROUP_10_PID_Parameters["10-03"], {
  group, code: "10-03", name: "PID Control Mode",
  range: "bit0:Enable/bit1:Char/bit2:D input/bit3:Output mode", default: "0000b (0)", unit: "-", page: p453,
})

/** @param 10-11 PID Feedback Loss Detection Selection — Range: 0-2, Default: 0, Manual p.4-53 */
export const Param_10_11 = P.makeParam(GROUP_10_PID_Parameters["10-11"], {
  group, code: "10-11", name: "PID Feedback Loss Detection Selection",
  range: "0-2 (0:Disable / 1:Warning / 2:Fault)", default: "0", unit: "-", page: p453,
})

/** @param 10-12 PID Feedback Loss Detection Level — Range: 0~100, Default: 0, Unit: %, Manual p.4-53 */
export const Param_10_12 = P.makeParam(GROUP_10_PID_Parameters["10-12"], {
  group, code: "10-12", name: "PID Feedback Loss Detection Level",
  range: "0~100", default: "0", unit: "%", page: p453,
})

/** @param 10-15 PID Trim Mode — Range: 0-2, Default: 0, Manual p.4-53 */
export const Param_10_15 = P.makeParam(GROUP_10_PID_Parameters["10-15"], {
  group, code: "10-15", name: "PID Trim Mode",
  range: "0-2", default: "0", unit: "-", page: p453,
})

/** @param 10-16 PID Trim Scale — Range: 0~100, Default: 100, Unit: %, Manual p.4-53 */
export const Param_10_16 = P.makeParam(GROUP_10_PID_Parameters["10-16"], {
  group, code: "10-16", name: "PID Trim Scale",
  range: "0~100", default: "100", unit: "%", page: p453,
})

/** @param 10-25 PID Reversal Output Selection — Range: 0-1, Default: 0, Manual p.4-54 */
export const Param_10_25 = P.makeParam(GROUP_10_PID_Parameters["10-25"], {
  group, code: "10-25", name: "PID Reversal Output Selection",
  range: "0-1 (0:No reversal / 1:Allow reversal)", default: "0", unit: "-", page: p454,
})

/** @param 10-27 PID Feedback Display Bias — Range: 0~9999, Default: 0, Manual p.4-54 */
export const Param_10_27 = P.makeParam(GROUP_10_PID_Parameters["10-27"], {
  group, code: "10-27", name: "PID Feedback Display Bias",
  range: "0~9999", default: "0", unit: "-", page: p454,
})

/** @param 10-29 PID Sleep Selection — Range: 0-2, Default: 1, Manual p.4-54 */
export const Param_10_29 = P.makeParam(GROUP_10_PID_Parameters["10-29"], {
  group, code: "10-29", name: "PID Sleep Selection",
  range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)", default: "1", unit: "-", page: p454,
})

/** @param 10-33 Maximum Value of PID Feedback — Range: 1~10000, Default: 999, Manual p.4-54 */
export const Param_10_33 = P.makeParam(GROUP_10_PID_Parameters["10-33"], {
  group, code: "10-33", name: "Maximum Value of PID Feedback",
  range: "1~10000", default: "999", unit: "-", page: p454,
})

/** @param 10-34 PID Decimal Width — Range: 0~4, Default: 1, Manual p.4-54 */
export const Param_10_34 = P.makeParam(GROUP_10_PID_Parameters["10-34"], {
  group, code: "10-34", name: "PID Decimal Width",
  range: "0~4", default: "1", unit: "-", page: p454,
})

/** @param 10-35 PID Unit — Range: 0~24, Default: 0, Manual p.4-54 */
export const Param_10_35 = P.makeParam(GROUP_10_PID_Parameters["10-35"], {
  group, code: "10-35", name: "PID Unit",
  range: "0~24 (0:% / 1:FPM / 2:CFM / 3:SPI ...)", default: "0", unit: "-", page: p454,
})

/** @param 10-40 Selection of PID Sleep Compensation Frequency — Range: 0-1, Default: 0, Manual p.4-55 */
export const Param_10_40 = P.makeParam(GROUP_10_PID_Parameters["10-40"], {
  group, code: "10-40", name: "Selection of PID Sleep Compensation Frequency",
  range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p455,
})

/** @param 10-41 PID Mode Switch — Range: 0-1, Default: 0, Manual p.4-55 */
export const Param_10_41 = P.makeParam(GROUP_10_PID_Parameters["10-41"], {
  group, code: "10-41", name: "PID Mode Switch",
  range: "0-1 (0:General PID / 1:D Type PID)", default: "0", unit: "-", page: p455,
})

// ── Scaled (×0.1) parameters ───────────────────────────────

/** @param 10-09 PID Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-53 */
export const Param_10_09 = P.makeSignedScaledParam(GROUP_10_PID_Parameters["10-09"], 0.1, {
  group, code: "10-09", name: "PID Bias",
  range: "-100.0~100.0", default: "0", unit: "%", page: p453,
})

/** @param 10-13 PID Feedback Loss Detection Time — Range: 0.0~10.0, Default: 1.0, Unit: s, Manual p.4-53 */
export const Param_10_13 = P.makeScaledParam(GROUP_10_PID_Parameters["10-13"], 0.1, {
  group, code: "10-13", name: "PID Feedback Loss Detection Time",
  range: "0.0~10.0", default: "1.0", unit: "s", page: p453,
})

/** @param 10-14 PID Integral Limit — Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-53 */
export const Param_10_14 = P.makeScaledParam(GROUP_10_PID_Parameters["10-14"], 0.1, {
  group, code: "10-14", name: "PID Integral Limit",
  range: "0.0~100.0", default: "100.0", unit: "%", page: p453,
})

/** @param 10-18 Delay Time of PID Sleep — Range: 0.0~255.5, Default: 0.0, Unit: s, Manual p.4-54 */
export const Param_10_18 = P.makeScaledParam(GROUP_10_PID_Parameters["10-18"], 0.1, {
  group, code: "10-18", name: "Delay Time of PID Sleep",
  range: "0.0~255.5", default: "0.0", unit: "s", page: p454,
})

/** @param 10-20 Delay Time of PID Waking up — Range: 0.0~255.5, Default: 0.0, Unit: s, Manual p.4-54 */
export const Param_10_20 = P.makeScaledParam(GROUP_10_PID_Parameters["10-20"], 0.1, {
  group, code: "10-20", name: "Delay Time of PID Waking up",
  range: "0.0~255.5", default: "0.0", unit: "s", page: p454,
})

/** @param 10-23 PID Output Limit — Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-54 */
export const Param_10_23 = P.makeScaledParam(GROUP_10_PID_Parameters["10-23"], 0.1, {
  group, code: "10-23", name: "PID Output Limit",
  range: "0.0~100.0", default: "100.0", unit: "%", page: p454,
})

/** @param 10-24 PID Output Gain — Range: 0.0~25.0, Default: 1.0, Unit: -, Manual p.4-54 */
export const Param_10_24 = P.makeScaledParam(GROUP_10_PID_Parameters["10-24"], 0.1, {
  group, code: "10-24", name: "PID Output Gain",
  range: "0.0~25.0", default: "1.0", unit: "-", page: p454,
})

/** @param 10-26 PID Target Acceleration/Deceleration Time — Range: 0.0~25.5, Default: 0.0, Unit: s, Manual p.4-54 */
export const Param_10_26 = P.makeScaledParam(GROUP_10_PID_Parameters["10-26"], 0.1, {
  group, code: "10-26", name: "PID Target Acceleration/Deceleration Time",
  range: "0.0~25.5", default: "0.0", unit: "s", page: p454,
})

/** @param 10-30 Upper Limit of PID Target — Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-54 */
export const Param_10_30 = P.makeScaledParam(GROUP_10_PID_Parameters["10-30"], 0.1, {
  group, code: "10-30", name: "Upper Limit of PID Target",
  range: "0.0~100.0", default: "100.0", unit: "%", page: p454,
})

/** @param 10-31 Lower Limit of PID Target — Range: 0.0~100.0, Default: 0.0, Unit: %, Manual p.4-54 */
export const Param_10_31 = P.makeScaledParam(GROUP_10_PID_Parameters["10-31"], 0.1, {
  group, code: "10-31", name: "Lower Limit of PID Target",
  range: "0.0~100.0", default: "0.0", unit: "%", page: p454,
})

// ── Scaled (×0.01) parameters ──────────────────────────────

/** @param 10-02 PID Target Value — Range: 0.00~100.00, Default: 0.00, Unit: %, Manual p.4-53 */
export const Param_10_02 = P.makeScaledParam(GROUP_10_PID_Parameters["10-02"], 0.01, {
  group, code: "10-02", name: "PID Target Value",
  range: "0.00~100.00", default: "0.00", unit: "%", page: p453,
})

/** @param 10-04 Feedback Gain — Range: 0.01~10.00, Default: 1.00, Unit: -, Manual p.4-53 */
export const Param_10_04 = P.makeScaledParam(GROUP_10_PID_Parameters["10-04"], 0.01, {
  group, code: "10-04", name: "Feedback Gain",
  range: "0.01~10.00", default: "1.00", unit: "-", page: p453,
})

/** @param 10-05 Proportional Gain (P) — Range: 0.00~10.00, Default: 1.00, Unit: -, Manual p.4-53 */
export const Param_10_05 = P.makeScaledParam(GROUP_10_PID_Parameters["10-05"], 0.01, {
  group, code: "10-05", name: "Proportional Gain (P)",
  range: "0.00~10.00", default: "1.00", unit: "-", page: p453,
})

/** @param 10-06 Integral Time (I) — Range: 0.00~100.00, Default: 1.00, Unit: s, Manual p.4-53 */
export const Param_10_06 = P.makeScaledParam(GROUP_10_PID_Parameters["10-06"], 0.01, {
  group, code: "10-06", name: "Integral Time (I)",
  range: "0.00~100.00", default: "1.00", unit: "s", page: p453,
})

/** @param 10-07 Differential Time (D) — Range: 0.00~10.00, Default: 0.00, Unit: s, Manual p.4-53 */
export const Param_10_07 = P.makeScaledParam(GROUP_10_PID_Parameters["10-07"], 0.01, {
  group, code: "10-07", name: "Differential Time (D)",
  range: "0.00~10.00", default: "0.00", unit: "s", page: p453,
})

/** @param 10-08 AI1 Frequency Limit — Range: 0.00~599.00, Default: 0, Unit: Hz, Manual p.4-53 */
export const Param_10_08 = P.makeScaledParam(GROUP_10_PID_Parameters["10-08"], 0.01, {
  group, code: "10-08", name: "AI1 Frequency Limit",
  range: "0.00~599.00", default: "0", unit: "Hz", page: p453,
})

/** @param 10-10 PID Output Delay Time — Range: 0.00~10.00, Default: 0.00, Unit: s, Manual p.4-53 */
export const Param_10_10 = P.makeScaledParam(GROUP_10_PID_Parameters["10-10"], 0.01, {
  group, code: "10-10", name: "PID Output Delay Time",
  range: "0.00~10.00", default: "0.00", unit: "s", page: p453,
})

/** @param 10-17 Start Frequency of PID Sleep — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-54 */
export const Param_10_17 = P.makeScaledParam(GROUP_10_PID_Parameters["10-17"], 0.01, {
  group, code: "10-17", name: "Start Frequency of PID Sleep",
  range: "0.00~599.00", default: "0.00", unit: "Hz", page: p454,
})

/** @param 10-19 Frequency of PID Waking up — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-54 */
export const Param_10_19 = P.makeScaledParam(GROUP_10_PID_Parameters["10-19"], 0.01, {
  group, code: "10-19", name: "Frequency of PID Waking up",
  range: "0.00~599.00", default: "0.00", unit: "Hz", page: p454,
})

/** @param 10-36 Proportional Gain 2 (P) — Range: 0.00~10.00, Default: 3.00, Unit: -, Manual p.4-55 */
export const Param_10_36 = P.makeScaledParam(GROUP_10_PID_Parameters["10-36"], 0.01, {
  group, code: "10-36", name: "Proportional Gain 2 (P)",
  range: "0.00~10.00", default: "3.00", unit: "-", page: p455,
})

/** @param 10-37 Integral Time 2 (I) — Range: 0.00~100.00, Default: 0.50, Unit: Sec, Manual p.4-55 */
export const Param_10_37 = P.makeScaledParam(GROUP_10_PID_Parameters["10-37"], 0.01, {
  group, code: "10-37", name: "Integral Time 2 (I)",
  range: "0.00~100.00", default: "0.50", unit: "Sec", page: p455,
})

/** @param 10-38 Differential Time 2 (D) — Range: 0.00~10.00, Default: 0.00, Unit: Sec, Manual p.4-55 */
export const Param_10_38 = P.makeScaledParam(GROUP_10_PID_Parameters["10-38"], 0.01, {
  group, code: "10-38", name: "Differential Time 2 (D)",
  range: "0.00~10.00", default: "0.00", unit: "Sec", page: p455,
})

/** @param 10-39 Output Frequency Setting of PID Disconnection — Range: 0.00~599.00, Default: 30.00, Unit: Hz, Manual p.4-55 */
export const Param_10_39 = P.makeScaledParam(GROUP_10_PID_Parameters["10-39"], 0.01, {
  group, code: "10-39", name: "Output Frequency Setting of PID Disconnection",
  range: "0.00~599.00", default: "30.00", unit: "Hz", page: p455,
})

/** @param 10-47 Proportional Gain 3 (P) — Range: 0.00~10.00, Default: 1.00, Unit: -, Manual p.4-56 */
export const Param_10_47 = P.makeScaledParam(GROUP_10_PID_Parameters["10-47"], 0.01, {
  group, code: "10-47", name: "Proportional Gain 3 (P)",
  range: "0.00~10.00", default: "1.00", unit: "-", page: p456,
})

/** @param 10-48 Integral Time 3 (I) — Range: 0.00~100.00, Default: 1.00, Unit: Sec, Manual p.4-56 */
export const Param_10_48 = P.makeScaledParam(GROUP_10_PID_Parameters["10-48"], 0.01, {
  group, code: "10-48", name: "Integral Time 3 (I)",
  range: "0.00~100.00", default: "1.00", unit: "Sec", page: p456,
})

/** @param 10-49 Differential Time 3 (D) — Range: 0.00~10.00, Default: 0.00, Unit: Sec, Manual p.4-56 */
export const Param_10_49 = P.makeScaledParam(GROUP_10_PID_Parameters["10-49"], 0.01, {
  group, code: "10-49", name: "Differential Time 3 (D)",
  range: "0.00~10.00", default: "0.00", unit: "Sec", page: p456,
})

// ── Decode / Encode / Formatted exports ────────────────────

export const decode10_00 = P.makeDecode(Param_10_00)
export const encode10_00 = P.makeEncode(Param_10_00)
export const formatted10_00 = P.makeFormatted(Param_10_00)

export const decode10_01 = P.makeDecode(Param_10_01)
export const encode10_01 = P.makeEncode(Param_10_01)
export const formatted10_01 = P.makeFormatted(Param_10_01)

export const decode10_02 = P.makeDecode(Param_10_02)
export const encode10_02 = P.makeEncode(Param_10_02)
export const formatted10_02 = P.makeFormatted(Param_10_02)

export const decode10_03 = P.makeDecode(Param_10_03)
export const encode10_03 = P.makeEncode(Param_10_03)
export const formatted10_03 = P.makeFormatted(Param_10_03)

export const decode10_04 = P.makeDecode(Param_10_04)
export const encode10_04 = P.makeEncode(Param_10_04)
export const formatted10_04 = P.makeFormatted(Param_10_04)

export const decode10_05 = P.makeDecode(Param_10_05)
export const encode10_05 = P.makeEncode(Param_10_05)
export const formatted10_05 = P.makeFormatted(Param_10_05)

export const decode10_06 = P.makeDecode(Param_10_06)
export const encode10_06 = P.makeEncode(Param_10_06)
export const formatted10_06 = P.makeFormatted(Param_10_06)

export const decode10_07 = P.makeDecode(Param_10_07)
export const encode10_07 = P.makeEncode(Param_10_07)
export const formatted10_07 = P.makeFormatted(Param_10_07)

export const decode10_08 = P.makeDecode(Param_10_08)
export const encode10_08 = P.makeEncode(Param_10_08)
export const formatted10_08 = P.makeFormatted(Param_10_08)

export const decode10_09 = P.makeDecode(Param_10_09)
export const encode10_09 = P.makeEncode(Param_10_09)
export const formatted10_09 = P.makeFormatted(Param_10_09)

export const decode10_10 = P.makeDecode(Param_10_10)
export const encode10_10 = P.makeEncode(Param_10_10)
export const formatted10_10 = P.makeFormatted(Param_10_10)

export const decode10_11 = P.makeDecode(Param_10_11)
export const encode10_11 = P.makeEncode(Param_10_11)
export const formatted10_11 = P.makeFormatted(Param_10_11)

export const decode10_12 = P.makeDecode(Param_10_12)
export const encode10_12 = P.makeEncode(Param_10_12)
export const formatted10_12 = P.makeFormatted(Param_10_12)

export const decode10_13 = P.makeDecode(Param_10_13)
export const encode10_13 = P.makeEncode(Param_10_13)
export const formatted10_13 = P.makeFormatted(Param_10_13)

export const decode10_14 = P.makeDecode(Param_10_14)
export const encode10_14 = P.makeEncode(Param_10_14)
export const formatted10_14 = P.makeFormatted(Param_10_14)

export const decode10_15 = P.makeDecode(Param_10_15)
export const encode10_15 = P.makeEncode(Param_10_15)
export const formatted10_15 = P.makeFormatted(Param_10_15)

export const decode10_16 = P.makeDecode(Param_10_16)
export const encode10_16 = P.makeEncode(Param_10_16)
export const formatted10_16 = P.makeFormatted(Param_10_16)

export const decode10_17 = P.makeDecode(Param_10_17)
export const encode10_17 = P.makeEncode(Param_10_17)
export const formatted10_17 = P.makeFormatted(Param_10_17)

export const decode10_18 = P.makeDecode(Param_10_18)
export const encode10_18 = P.makeEncode(Param_10_18)
export const formatted10_18 = P.makeFormatted(Param_10_18)

export const decode10_19 = P.makeDecode(Param_10_19)
export const encode10_19 = P.makeEncode(Param_10_19)
export const formatted10_19 = P.makeFormatted(Param_10_19)

export const decode10_20 = P.makeDecode(Param_10_20)
export const encode10_20 = P.makeEncode(Param_10_20)
export const formatted10_20 = P.makeFormatted(Param_10_20)

export const decode10_23 = P.makeDecode(Param_10_23)
export const encode10_23 = P.makeEncode(Param_10_23)
export const formatted10_23 = P.makeFormatted(Param_10_23)

export const decode10_24 = P.makeDecode(Param_10_24)
export const encode10_24 = P.makeEncode(Param_10_24)
export const formatted10_24 = P.makeFormatted(Param_10_24)

export const decode10_25 = P.makeDecode(Param_10_25)
export const encode10_25 = P.makeEncode(Param_10_25)
export const formatted10_25 = P.makeFormatted(Param_10_25)

export const decode10_26 = P.makeDecode(Param_10_26)
export const encode10_26 = P.makeEncode(Param_10_26)
export const formatted10_26 = P.makeFormatted(Param_10_26)

export const decode10_27 = P.makeDecode(Param_10_27)
export const encode10_27 = P.makeEncode(Param_10_27)
export const formatted10_27 = P.makeFormatted(Param_10_27)

export const decode10_29 = P.makeDecode(Param_10_29)
export const encode10_29 = P.makeEncode(Param_10_29)
export const formatted10_29 = P.makeFormatted(Param_10_29)

export const decode10_30 = P.makeDecode(Param_10_30)
export const encode10_30 = P.makeEncode(Param_10_30)
export const formatted10_30 = P.makeFormatted(Param_10_30)

export const decode10_31 = P.makeDecode(Param_10_31)
export const encode10_31 = P.makeEncode(Param_10_31)
export const formatted10_31 = P.makeFormatted(Param_10_31)

export const decode10_33 = P.makeDecode(Param_10_33)
export const encode10_33 = P.makeEncode(Param_10_33)
export const formatted10_33 = P.makeFormatted(Param_10_33)

export const decode10_34 = P.makeDecode(Param_10_34)
export const encode10_34 = P.makeEncode(Param_10_34)
export const formatted10_34 = P.makeFormatted(Param_10_34)

export const decode10_35 = P.makeDecode(Param_10_35)
export const encode10_35 = P.makeEncode(Param_10_35)
export const formatted10_35 = P.makeFormatted(Param_10_35)

export const decode10_36 = P.makeDecode(Param_10_36)
export const encode10_36 = P.makeEncode(Param_10_36)
export const formatted10_36 = P.makeFormatted(Param_10_36)

export const decode10_37 = P.makeDecode(Param_10_37)
export const encode10_37 = P.makeEncode(Param_10_37)
export const formatted10_37 = P.makeFormatted(Param_10_37)

export const decode10_38 = P.makeDecode(Param_10_38)
export const encode10_38 = P.makeEncode(Param_10_38)
export const formatted10_38 = P.makeFormatted(Param_10_38)

export const decode10_39 = P.makeDecode(Param_10_39)
export const encode10_39 = P.makeEncode(Param_10_39)
export const formatted10_39 = P.makeFormatted(Param_10_39)

export const decode10_40 = P.makeDecode(Param_10_40)
export const encode10_40 = P.makeEncode(Param_10_40)
export const formatted10_40 = P.makeFormatted(Param_10_40)

export const decode10_41 = P.makeDecode(Param_10_41)
export const encode10_41 = P.makeEncode(Param_10_41)
export const formatted10_41 = P.makeFormatted(Param_10_41)

export const decode10_47 = P.makeDecode(Param_10_47)
export const encode10_47 = P.makeEncode(Param_10_47)
export const formatted10_47 = P.makeFormatted(Param_10_47)

export const decode10_48 = P.makeDecode(Param_10_48)
export const encode10_48 = P.makeEncode(Param_10_48)
export const formatted10_48 = P.makeFormatted(Param_10_48)

export const decode10_49 = P.makeDecode(Param_10_49)
export const encode10_49 = P.makeEncode(Param_10_49)
export const formatted10_49 = P.makeFormatted(Param_10_49)

// ── Group-level lookup ─────────────────────────────────────

export const group10Params = {
  "10-00": P.param(Param_10_00, decode10_00, encode10_00),
  "10-01": P.param(Param_10_01, decode10_01, encode10_01),
  "10-02": P.param(Param_10_02, decode10_02, encode10_02),
  "10-03": P.param(Param_10_03, decode10_03, encode10_03),
  "10-04": P.param(Param_10_04, decode10_04, encode10_04),
  "10-05": P.param(Param_10_05, decode10_05, encode10_05),
  "10-06": P.param(Param_10_06, decode10_06, encode10_06),
  "10-07": P.param(Param_10_07, decode10_07, encode10_07),
  "10-08": P.param(Param_10_08, decode10_08, encode10_08),
  "10-09": P.param(Param_10_09, decode10_09, encode10_09),
  "10-10": P.param(Param_10_10, decode10_10, encode10_10),
  "10-11": P.param(Param_10_11, decode10_11, encode10_11),
  "10-12": P.param(Param_10_12, decode10_12, encode10_12),
  "10-13": P.param(Param_10_13, decode10_13, encode10_13),
  "10-14": P.param(Param_10_14, decode10_14, encode10_14),
  "10-15": P.param(Param_10_15, decode10_15, encode10_15),
  "10-16": P.param(Param_10_16, decode10_16, encode10_16),
  "10-17": P.param(Param_10_17, decode10_17, encode10_17),
  "10-18": P.param(Param_10_18, decode10_18, encode10_18),
  "10-19": P.param(Param_10_19, decode10_19, encode10_19),
  "10-20": P.param(Param_10_20, decode10_20, encode10_20),
  "10-23": P.param(Param_10_23, decode10_23, encode10_23),
  "10-24": P.param(Param_10_24, decode10_24, encode10_24),
  "10-25": P.param(Param_10_25, decode10_25, encode10_25),
  "10-26": P.param(Param_10_26, decode10_26, encode10_26),
  "10-27": P.param(Param_10_27, decode10_27, encode10_27),
  "10-29": P.param(Param_10_29, decode10_29, encode10_29),
  "10-30": P.param(Param_10_30, decode10_30, encode10_30),
  "10-31": P.param(Param_10_31, decode10_31, encode10_31),
  "10-33": P.param(Param_10_33, decode10_33, encode10_33),
  "10-34": P.param(Param_10_34, decode10_34, encode10_34),
  "10-35": P.param(Param_10_35, decode10_35, encode10_35),
  "10-36": P.param(Param_10_36, decode10_36, encode10_36),
  "10-37": P.param(Param_10_37, decode10_37, encode10_37),
  "10-38": P.param(Param_10_38, decode10_38, encode10_38),
  "10-39": P.param(Param_10_39, decode10_39, encode10_39),
  "10-40": P.param(Param_10_40, decode10_40, encode10_40),
  "10-41": P.param(Param_10_41, decode10_41, encode10_41),
  "10-47": P.param(Param_10_47, decode10_47, encode10_47),
  "10-48": P.param(Param_10_48, decode10_48, encode10_48),
  "10-49": P.param(Param_10_49, decode10_49, encode10_49),
}
