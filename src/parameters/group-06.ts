/**
 * Group 06: Automatic Program Operation Parameters
 * Manual pages 4-40 to 4-43
 *
 * Three families:
 *   06-01…06-15  frequency settings     ×0.01 Hz
 *   06-16…06-31  operation times         ×0.1 s
 *   06-32…06-47  direction selections    0/1/2 (simple UInt16)
 */

import * as P from "./param-utils";
import { GROUP_06_Automatic_Program_Operation_Parameters } from "../Registers";
import { Schema } from "effect";

const group = 6 as const;
const p440 = 440 as const;
const p441 = 441 as const;
const p442 = 442 as const;
const p443 = 443 as const;

// ── Operation direction (0=Stop, 1=Forward, 2=Reverse) ────

const dirMeta = (idx: number, page: number): P.ParamMeta => ({
  group, code: `06-${32 + idx}`,
  name: `Operation Direction Selection of Speed-Stage ${idx}`,
  range: "0-2 (0:Stop / 1:Forward / 2:Reverse)", default: "0", unit: "-", page,
})

// ── Frequency settings (×0.01 Hz) ──────────────────────────

const freqMeta = (stage: number, def: string, page: number): P.ParamMeta => ({
  group, code: `06-${String(stage).padStart(2, "0")}`,
  name: `Frequency Setting of Operation-Stage ${stage}`,
  range: "0.00~599.00", default: def, unit: "Hz", page,
})

// ── Operation time settings (×0.1 s) ───────────────────────

const timeMeta = (stage: number, page: number): P.ParamMeta => ({
  group, code: `06-${16 + stage}`,
  name: `Operation Time Setting of Speed-Stage ${stage}`,
  range: "0.0~6000.0", default: "0.0", unit: "s", page,
})

// ── Simple UInt16 parameters ───────────────────────────────

/** @param 06-00 Automatic Operation Mode Selection — Range: 0-6, Default: 0, Manual p.4-40 */
const all = {
  "06-00": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-00"], {
    group, code: "06-00", name: "Automatic Operation Mode Selection",
    range: "0-6", default: "0", unit: "-", page: p440,
  }),

  // ── Operation direction (0=Stop, 1=Forward, 2=Reverse) ────

  "06-32": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-32"], dirMeta(0, p442)),
  "06-33": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-33"], dirMeta(1, p442)),
  "06-34": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-34"], dirMeta(2, p442)),
  "06-35": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-35"], dirMeta(3, p442)),
  "06-36": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-36"], dirMeta(4, p442)),
  "06-37": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-37"], dirMeta(5, p443)),
  "06-38": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-38"], dirMeta(6, p443)),
  "06-39": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-39"], dirMeta(7, p443)),
  "06-40": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-40"], dirMeta(8, p443)),
  "06-41": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-41"], dirMeta(9, p443)),
  "06-42": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-42"], dirMeta(10, p443)),
  "06-43": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-43"], dirMeta(11, p443)),
  "06-44": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-44"], dirMeta(12, p443)),
  "06-45": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-45"], dirMeta(13, p443)),
  "06-46": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-46"], dirMeta(14, p443)),
  "06-47": P.p(GROUP_06_Automatic_Program_Operation_Parameters["06-47"], dirMeta(15, p443)),

  // ── Frequency settings (×0.01 Hz) ──────────────────────────

  "06-01": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-01"], 0.01, freqMeta(1, "5.00", p440)),
  "06-02": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-02"], 0.01, freqMeta(2, "10.00", p440)),
  "06-03": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-03"], 0.01, freqMeta(3, "20.00", p440)),
  "06-04": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-04"], 0.01, freqMeta(4, "30.00", p441)),
  "06-05": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-05"], 0.01, freqMeta(5, "40.00", p441)),
  "06-06": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-06"], 0.01, freqMeta(6, "50.00", p441)),
  "06-07": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-07"], 0.01, freqMeta(7, "50.00", p441)),
  "06-08": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-08"], 0.01, freqMeta(8, "5.00", p441)),
  "06-09": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-09"], 0.01, freqMeta(9, "5.00", p441)),
  "06-10": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-10"], 0.01, freqMeta(10, "5.00", p441)),
  "06-11": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-11"], 0.01, freqMeta(11, "5.00", p441)),
  "06-12": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-12"], 0.01, freqMeta(12, "5.00", p441)),
  "06-13": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-13"], 0.01, freqMeta(13, "5.00", p441)),
  "06-14": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-14"], 0.01, freqMeta(14, "5.00", p441)),
  "06-15": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-15"], 0.01, freqMeta(15, "5.00", p441)),

  // ── Operation time settings (×0.1 s) ───────────────────────

  "06-16": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-16"], 0.1, timeMeta(0, p441)),
  "06-17": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-17"], 0.1, timeMeta(1, p441)),
  "06-18": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-18"], 0.1, timeMeta(2, p441)),
  "06-19": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-19"], 0.1, timeMeta(3, p441)),
  "06-20": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-20"], 0.1, timeMeta(4, p442)),
  "06-21": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-21"], 0.1, timeMeta(5, p442)),
  "06-22": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-22"], 0.1, timeMeta(6, p442)),
  "06-23": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-23"], 0.1, timeMeta(7, p442)),
  "06-24": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-24"], 0.1, timeMeta(8, p442)),
  "06-25": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-25"], 0.1, timeMeta(9, p442)),
  "06-26": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-26"], 0.1, timeMeta(10, p442)),
  "06-27": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-27"], 0.1, timeMeta(11, p442)),
  "06-28": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-28"], 0.1, timeMeta(12, p442)),
  "06-29": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-29"], 0.1, timeMeta(13, p442)),
  "06-30": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-30"], 0.1, timeMeta(14, p442)),
  "06-31": P.sp(GROUP_06_Automatic_Program_Operation_Parameters["06-31"], 0.1, timeMeta(15, p442)),
}

export const group06Params = all;
