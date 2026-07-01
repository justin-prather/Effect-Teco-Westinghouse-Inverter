/**
 * Group 18: Slip Compensation Parameters
 * Manual page 4-79
 */

import * as P from "./param-utils";
import { GROUP_18_Slip_Compensation_Parameters } from "../Registers";

const group = 18 as const;
const p479 = 479 as const;

const all = {
  "18-00": P.sp(GROUP_18_Slip_Compensation_Parameters["18-00"], 0.01, { group, code: "18-00", name: "Slip Compensation Gain at Low Speed", range: "0.00~2.50", default: "0.00 / *", unit: "-", page: p479 }),
  "18-01": P.spSigned(GROUP_18_Slip_Compensation_Parameters["18-01"], 0.01, { group, code: "18-01", name: "Slip Compensation Gain at High Speed", range: "-1.00~1.00", default: "0.0", unit: "-", page: p479 }),
  "18-02": P.p(GROUP_18_Slip_Compensation_Parameters["18-02"], { group, code: "18-02", name: "Slip Compensation Limit", range: "0~250", default: "200", unit: "%", page: p479 }),
  "18-03": P.sp(GROUP_18_Slip_Compensation_Parameters["18-03"], 0.1, { group, code: "18-03", name: "Slip Compensation Filter Time", range: "0.0~10.0", default: "1.0", unit: "Sec", page: p479 }),
  "18-04": P.p(GROUP_18_Slip_Compensation_Parameters["18-04"], { group, code: "18-04", name: "Regenerative Slip Compensation Selection", range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p479 }),
  "18-05": P.p(GROUP_18_Slip_Compensation_Parameters["18-05"], { group, code: "18-05", name: "FOC Delay Time", range: "1~1000", default: "100", unit: "ms", page: p479 }),
  "18-06": P.sp(GROUP_18_Slip_Compensation_Parameters["18-06"], 0.01, { group, code: "18-06", name: "FOC Gain", range: "0.00~2.00", default: "0.1", unit: "-", page: p479 }),
}

// ── Static named exports ───────────────────────────────────



// ── Group-level lookup ─────────────────────────────────────

export const group18Params = all;
