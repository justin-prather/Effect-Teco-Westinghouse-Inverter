/**
 * Group 16: LCD Function Parameters
 * Manual pages 4-74 to 4-77
 */

import * as P from "./param-utils";
import { GROUP_16_LCD_Parameters } from "../Registers";

const group = 16 as const;
const p474 = 474 as const;
const p475 = 475 as const;
const p476 = 476 as const;
const p477 = 477 as const;

const all = {
  "16-00": P.p(GROUP_16_LCD_Parameters["16-00"], { group, code: "16-00", name: "Main Screen Monitoring", range: "5~82", default: "16", unit: "-", page: p474 }),
  "16-01": P.p(GROUP_16_LCD_Parameters["16-01"], { group, code: "16-01", name: "Sub-Screen Monitoring 1", range: "5~82", default: "17", unit: "-", page: p474 }),
  "16-02": P.p(GROUP_16_LCD_Parameters["16-02"], { group, code: "16-02", name: "Sub-Screen Monitoring 2", range: "5~82", default: "18", unit: "-", page: p474 }),
  "16-03": P.p(GROUP_16_LCD_Parameters["16-03"], { group, code: "16-03", name: "Display Unit", range: "0~39999 (0:0.01Hz / 1:0.01% / 2:rpm / 40~9999:XXXX at 100% / 10001~19999:XXX.X / 20001~29999:XX.XX / 30001~39999:X.XXX)", default: "0", unit: "-", page: p474 }),
  "16-04": P.p(GROUP_16_LCD_Parameters["16-04"], { group, code: "16-04", name: "Engineering Unit", range: "0~24 (0:none / 1:FPM / 2:CFM / 3:PSI / 4:GPH / 5:GPM / 6:IN / 7:FT / 8:/s / 9:/m / 10:/h / 11:°F / 12:inW / 13:HP / 14:m/s / 15:MPM / 16:CMM / 17:W / 18:KW / 19:m / 20:°C / 21:RPM / 22:Bar / 23:Pa / 24:KPa)", default: "0", unit: "-", page: p474 }),
  "16-05": P.p(GROUP_16_LCD_Parameters["16-05"], { group, code: "16-05", name: "LCD Backlight", range: "0~7", default: "5", unit: "-", page: p475 }),
  "16-07": P.p(GROUP_16_LCD_Parameters["16-07"], { group, code: "16-07", name: "Copy Function Selection", range: "0-3 (0:Do not copy / 1:Read to operator / 2:Write to inverter / 3:Compare)", default: "0", unit: "-", page: p475 }),
  "16-08": P.p(GROUP_16_LCD_Parameters["16-08"], { group, code: "16-08", name: "Selection of Allowing Reading", range: "0-1 (0:Not allow / 1:Allow)", default: "0", unit: "-", page: p475 }),
  "16-09": P.p(GROUP_16_LCD_Parameters["16-09"], { group, code: "16-09", name: "Selection of Operator Removed (LCD)", range: "0-1 (0:Keep operating / 1:Display fault)", default: "0", unit: "-", page: p475 }),
  "16-10": P.p(GROUP_16_LCD_Parameters["16-10"], { group, code: "16-10", name: "RTC Time Display Setting", range: "0-1 (0:Hide / 1:Display)", default: "0", unit: "-", page: p475 }),
  "16-11": P.p(GROUP_16_LCD_Parameters["16-11"], { group, code: "16-11", name: "RTC Date Setting", range: "12.01.01~99.12.31", default: "12.01.01", unit: "-", page: p475 }),
  "16-12": P.p(GROUP_16_LCD_Parameters["16-12"], { group, code: "16-12", name: "RTC Time Setting", range: "00:00~23:59", default: "00:00", unit: "-", page: p475 }),
  "16-13": P.p(GROUP_16_LCD_Parameters["16-13"], { group, code: "16-13", name: "RTC Timer Function", range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)", default: "0", unit: "-", page: p475 }),
  "16-14": P.p(GROUP_16_LCD_Parameters["16-14"], { group, code: "16-14", name: "P1 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p475 }),
  "16-15": P.p(GROUP_16_LCD_Parameters["16-15"], { group, code: "16-15", name: "P1 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p475 }),
  "16-16": P.p(GROUP_16_LCD_Parameters["16-16"], { group, code: "16-16", name: "P1 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p475 }),
  "16-17": P.p(GROUP_16_LCD_Parameters["16-17"], { group, code: "16-17", name: "P1 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p475 }),
  "16-18": P.p(GROUP_16_LCD_Parameters["16-18"], { group, code: "16-18", name: "P2 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p475 }),
  "16-19": P.p(GROUP_16_LCD_Parameters["16-19"], { group, code: "16-19", name: "P2 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p475 }),
  "16-20": P.p(GROUP_16_LCD_Parameters["16-20"], { group, code: "16-20", name: "P2 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p475 }),
  "16-21": P.p(GROUP_16_LCD_Parameters["16-21"], { group, code: "16-21", name: "P2 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }),
  "16-22": P.p(GROUP_16_LCD_Parameters["16-22"], { group, code: "16-22", name: "P3 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p476 }),
  "16-23": P.p(GROUP_16_LCD_Parameters["16-23"], { group, code: "16-23", name: "P3 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p476 }),
  "16-24": P.p(GROUP_16_LCD_Parameters["16-24"], { group, code: "16-24", name: "P3 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p476 }),
  "16-25": P.p(GROUP_16_LCD_Parameters["16-25"], { group, code: "16-25", name: "P3 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }),
  "16-26": P.p(GROUP_16_LCD_Parameters["16-26"], { group, code: "16-26", name: "P4 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p476 }),
  "16-27": P.p(GROUP_16_LCD_Parameters["16-27"], { group, code: "16-27", name: "P4 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p476 }),
  "16-28": P.p(GROUP_16_LCD_Parameters["16-28"], { group, code: "16-28", name: "P4 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p476 }),
  "16-29": P.p(GROUP_16_LCD_Parameters["16-29"], { group, code: "16-29", name: "P4 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }),
  "16-30": P.p(GROUP_16_LCD_Parameters["16-30"], { group, code: "16-30", name: "Selection of RTC Offset", range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)", default: "0", unit: "-", page: p476 }),
  "16-31": P.p(GROUP_16_LCD_Parameters["16-31"], { group, code: "16-31", name: "RTC Offset Time Setting", range: "00:00~23:59", default: "00:00", unit: "-", page: p476 }),
  "16-32": P.p(GROUP_16_LCD_Parameters["16-32"], { group, code: "16-32", name: "Source of Timer 1", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "1", unit: "-", page: p476 }),
  "16-33": P.p(GROUP_16_LCD_Parameters["16-33"], { group, code: "16-33", name: "Source of Timer 2", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "2", unit: "-", page: p476 }),
  "16-34": P.p(GROUP_16_LCD_Parameters["16-34"], { group, code: "16-34", name: "Source of Timer 3", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "4", unit: "-", page: p476 }),
  "16-35": P.p(GROUP_16_LCD_Parameters["16-35"], { group, code: "16-35", name: "Source of Timer 4", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "8", unit: "-", page: p476 }),
  "16-36": P.p(GROUP_16_LCD_Parameters["16-36"], { group, code: "16-36", name: "Selection of RTC Speed", range: "0-5 (0:Off / 1:Timer1 / 2:Timer2 / 3:Timer3 / 4:Timer4 / 5:Timer1+2)", default: "0", unit: "-", page: p477 }),
  "16-37": P.p(GROUP_16_LCD_Parameters["16-37"], { group, code: "16-37", name: "Selection of RTC Rotation Direction", range: "0~15 (bit-field for direction)", default: "0000b", unit: "-", page: p477 }),
}



// ── Group-level lookup ─────────────────────────────────────

export const group16Params = all;
