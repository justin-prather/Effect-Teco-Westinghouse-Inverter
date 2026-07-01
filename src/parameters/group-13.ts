/**
 * Group 13: Maintenance Parameters
 * Manual pages 4-68 to 4-70
 */

import * as P from "./param-utils";
import { GROUP_13_Maintenance_Parameters } from "../Registers";

const group = 13 as const;
const p468 = 468 as const;
const p469 = 469 as const;
const p470 = 470 as const;

const all = {
  "13-00": P.p(GROUP_13_Maintenance_Parameters["13-00"], { group, code: "13-00", name: "Inverter Capacity Selection", range: "read-only", default: "-", unit: "-", page: p468 }),
  "13-01": P.p(GROUP_13_Maintenance_Parameters["13-01"], { group, code: "13-01", name: "Software Version", range: "0.00~9.99", default: "-", unit: "-", page: p468 }),
  "13-02": P.p(GROUP_13_Maintenance_Parameters["13-02"], { group, code: "13-02", name: "Clear Cumulative Operation Hours", range: "0-1 (0:Disable / 1:Clear)", default: "0", unit: "-", page: p468 }),
  "13-03": P.p(GROUP_13_Maintenance_Parameters["13-03"], { group, code: "13-03", name: "Cumulative Operation Hours 1", range: "0~23", default: "-", unit: "hr", page: p468 }),
  "13-04": P.p(GROUP_13_Maintenance_Parameters["13-04"], { group, code: "13-04", name: "Cumulative Operation Hours 2", range: "0~65534", default: "-", unit: "day", page: p468 }),
  "13-05": P.p(GROUP_13_Maintenance_Parameters["13-05"], { group, code: "13-05", name: "Selection of Cumulative Operation Time", range: "0-1 (0:Power on / 1:Operation)", default: "0", unit: "-", page: p468 }),
  "13-06": P.p(GROUP_13_Maintenance_Parameters["13-06"], { group, code: "13-06", name: "Parameters Locked", range: "0-2 (0:Read-only / 1:User defined / 2:All writable)", default: "2", unit: "-", page: p468 }),
  "13-07": P.p(GROUP_13_Maintenance_Parameters["13-07"], { group, code: "13-07", name: "Parameter Password Function", range: "00000~65534", default: "00000", unit: "-", page: p468 }),
  "13-08": P.p(GROUP_13_Maintenance_Parameters["13-08"], { group, code: "13-08", name: "Restore Factory Setting", range: "0-16 (0:No init / 2:2-wire 60Hz 230/460/690V / 4:2-wire 50Hz 220/380V / 6:3-wire 60Hz 230/460/690V / 8:3-wire 50Hz 220/380V / 10:Customized / 12:2-wire 50Hz 200/400V / 14:3-wire 50Hz 200/400V / 16:3-wire 50Hz 220/380V)", default: "0", unit: "-", page: p468 }),
  "13-09": P.p(GROUP_13_Maintenance_Parameters["13-09"], { group, code: "13-09", name: "Fault History Clearance Function", range: "0-1 (0:No clearing / 1:Clear)", default: "0", unit: "-", page: p469 }),
  "13-10": P.p(GROUP_13_Maintenance_Parameters["13-10"], { group, code: "13-10", name: "Parameter Password Function 2", range: "0~9999", default: "0", unit: "-", page: p469 }),
  "13-11": P.p(GROUP_13_Maintenance_Parameters["13-11"], { group, code: "13-11", name: "C/B CPLD Ver.", range: "0.00~9.99", default: "-", unit: "-", page: p469 }),
  "13-12": P.p(GROUP_13_Maintenance_Parameters["13-12"], { group, code: "13-12", name: "PG Card Id", range: "0~255", default: "0", unit: "-", page: p469 }),
  "13-13": P.p(GROUP_13_Maintenance_Parameters["13-13"], { group, code: "13-13", name: "PG Card Ver.", range: "0.00~9.99", default: "-", unit: "-", page: p469 }),
  "13-14": P.p(GROUP_13_Maintenance_Parameters["13-14"], { group, code: "13-14", name: "Fault Storage Selections", range: "0-1 (0:Auto restart not saved / 1:Auto restart saved)", default: "0", unit: "-", page: p469 }),
  "13-15": P.p(GROUP_13_Maintenance_Parameters["13-15"], { group, code: "13-15", name: "Reserved", range: "-", default: "-", unit: "-", page: p469 }),
  "13-21": P.p(GROUP_13_Maintenance_Parameters["13-21"], { group, code: "13-21", name: "Last time Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-22": P.p(GROUP_13_Maintenance_Parameters["13-22"], { group, code: "13-22", name: "Previous two Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-23": P.p(GROUP_13_Maintenance_Parameters["13-23"], { group, code: "13-23", name: "Previous three Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-24": P.p(GROUP_13_Maintenance_Parameters["13-24"], { group, code: "13-24", name: "Previous four Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-25": P.p(GROUP_13_Maintenance_Parameters["13-25"], { group, code: "13-25", name: "Previous five Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-26": P.p(GROUP_13_Maintenance_Parameters["13-26"], { group, code: "13-26", name: "Previous six Fault History", range: "read-only", default: "-", unit: "-", page: p469 }),
  "13-27": P.p(GROUP_13_Maintenance_Parameters["13-27"], { group, code: "13-27", name: "Previous seven Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-28": P.p(GROUP_13_Maintenance_Parameters["13-28"], { group, code: "13-28", name: "Previous eight Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-29": P.p(GROUP_13_Maintenance_Parameters["13-29"], { group, code: "13-29", name: "Previous nine Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-30": P.p(GROUP_13_Maintenance_Parameters["13-30"], { group, code: "13-30", name: "Previous ten Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-31": P.p(GROUP_13_Maintenance_Parameters["13-31"], { group, code: "13-31", name: "Previous eleven Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-32": P.p(GROUP_13_Maintenance_Parameters["13-32"], { group, code: "13-32", name: "Previous twelve Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-33": P.p(GROUP_13_Maintenance_Parameters["13-33"], { group, code: "13-33", name: "Previous thirteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-34": P.p(GROUP_13_Maintenance_Parameters["13-34"], { group, code: "13-34", name: "Previous fourteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-35": P.p(GROUP_13_Maintenance_Parameters["13-35"], { group, code: "13-35", name: "Previous fifteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-36": P.p(GROUP_13_Maintenance_Parameters["13-36"], { group, code: "13-36", name: "Previous sixteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-37": P.p(GROUP_13_Maintenance_Parameters["13-37"], { group, code: "13-37", name: "Previous seventeen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-38": P.p(GROUP_13_Maintenance_Parameters["13-38"], { group, code: "13-38", name: "Previous eighteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-39": P.p(GROUP_13_Maintenance_Parameters["13-39"], { group, code: "13-39", name: "Previous nineteen Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-40": P.p(GROUP_13_Maintenance_Parameters["13-40"], { group, code: "13-40", name: "Previous twenty Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-41": P.p(GROUP_13_Maintenance_Parameters["13-41"], { group, code: "13-41", name: "Previous twenty one Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-42": P.p(GROUP_13_Maintenance_Parameters["13-42"], { group, code: "13-42", name: "Previous twenty two Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-43": P.p(GROUP_13_Maintenance_Parameters["13-43"], { group, code: "13-43", name: "Previous twenty three Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-44": P.p(GROUP_13_Maintenance_Parameters["13-44"], { group, code: "13-44", name: "Previous twenty four Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-45": P.p(GROUP_13_Maintenance_Parameters["13-45"], { group, code: "13-45", name: "Previous twenty five Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-46": P.p(GROUP_13_Maintenance_Parameters["13-46"], { group, code: "13-46", name: "Previous twenty six Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-47": P.p(GROUP_13_Maintenance_Parameters["13-47"], { group, code: "13-47", name: "Previous twenty seven Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-48": P.p(GROUP_13_Maintenance_Parameters["13-48"], { group, code: "13-48", name: "Previous twenty eight Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-49": P.p(GROUP_13_Maintenance_Parameters["13-49"], { group, code: "13-49", name: "Previous twenty nine Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
  "13-50": P.p(GROUP_13_Maintenance_Parameters["13-50"], { group, code: "13-50", name: "Previous thirty Fault History", range: "read-only", default: "-", unit: "-", page: p470 }),
}



// ── Group-level lookup ─────────────────────────────────────

export const group13Params = all;
