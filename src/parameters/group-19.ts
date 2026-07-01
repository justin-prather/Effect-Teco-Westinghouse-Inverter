/**
 * Group 19: Wobble Frequency Parameters
 * Manual pages 4-79 to 4-80
 */

import * as P from "./param-utils";
import { GROUP_19_Wobble_Frequency_Parameters } from "../Registers";

const group = 19 as const;
const p479 = 479 as const;
const p480 = 480 as const;

const all = {
  "19-00": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-00"], 0.01, { group, code: "19-00", name: "Center Frequency of Wobble Frequency", range: "5.00~100.00", default: "20.00", unit: "%", page: p479 }),
  "19-01": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-01"], 0.1, { group, code: "19-01", name: "Amplitude of Wobble Frequency", range: "0.1~20.0", default: "10.0", unit: "%", page: p479 }),
  "19-02": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-02"], 0.1, { group, code: "19-02", name: "Jump Frequency of Wobble Frequency", range: "0.0~50.0", default: "0.0", unit: "%", page: p479 }),
  "19-03": P.p(GROUP_19_Wobble_Frequency_Parameters["19-03"], { group, code: "19-03", name: "Jump Time of Wobble Frequency", range: "0~50", default: "0", unit: "ms", page: p479 }),
  "19-04": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-04"], 0.1, { group, code: "19-04", name: "Wobble Frequency Cycle", range: "0.0~1000.0", default: "10.0", unit: "Sec", page: p479 }),
  "19-05": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-05"], 0.1, { group, code: "19-05", name: "Wobble Frequency Ratio", range: "0.1~10.0", default: "1.0", unit: "-", page: p479 }),
  "19-06": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-06"], 0.1, { group, code: "19-06", name: "Upper Offset Amplitude of Wobble Frequency", range: "0.0~20.0", default: "0.0", unit: "%", page: p479 }),
  "19-07": P.sp(GROUP_19_Wobble_Frequency_Parameters["19-07"], 0.1, { group, code: "19-07", name: "Lower Offset Amplitude of Wobble Frequency", range: "0.0~20.0", default: "0.0", unit: "%", page: p480 }),
}

// ── Static named exports ───────────────────────────────────



// ── Group-level lookup ─────────────────────────────────────

export const group19Params = all;
