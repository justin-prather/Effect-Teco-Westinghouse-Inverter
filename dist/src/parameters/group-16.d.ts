/**
 * Group 16: LCD Function Parameters
 * Manual pages 4-74 to 4-77
 */
import { ParamKind } from "./param-utils";
import { GROUP_16_LCD_Parameters } from "../Registers";
export declare const group16Params: {
    readonly "16-00": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-00";
            readonly name: "Main Screen Monitoring";
            readonly range: "5~82";
            readonly default: "16";
            readonly unit: "-";
            readonly page: 474;
        };
    };
    readonly "16-01": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-01";
            readonly name: "Sub-Screen Monitoring 1";
            readonly range: "5~82";
            readonly default: "17";
            readonly unit: "-";
            readonly page: 474;
        };
    };
    readonly "16-02": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-02";
            readonly name: "Sub-Screen Monitoring 2";
            readonly range: "5~82";
            readonly default: "18";
            readonly unit: "-";
            readonly page: 474;
        };
    };
    readonly "16-03": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-03";
            readonly name: "Display Unit";
            readonly range: "0~39999 (0:0.01Hz / 1:0.01% / 2:rpm / 40~9999:XXXX at 100% / 10001~19999:XXX.X / 20001~29999:XX.XX / 30001~39999:X.XXX)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 474;
        };
    };
    readonly "16-04": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-04";
            readonly name: "Engineering Unit";
            readonly range: "0~24 (0:none / 1:FPM / 2:CFM / 3:PSI / 4:GPH / 5:GPM / 6:IN / 7:FT / 8:/s / 9:/m / 10:/h / 11:°F / 12:inW / 13:HP / 14:m/s / 15:MPM / 16:CMM / 17:W / 18:KW / 19:m / 20:°C / 21:RPM / 22:Bar / 23:Pa / 24:KPa)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 474;
        };
    };
    readonly "16-05": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-05";
            readonly name: "LCD Backlight";
            readonly range: "0~7";
            readonly default: "5";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-07": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-07";
            readonly name: "Copy Function Selection";
            readonly range: "0-3 (0:Do not copy / 1:Read to operator / 2:Write to inverter / 3:Compare)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-08": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-08";
            readonly name: "Selection of Allowing Reading";
            readonly range: "0-1 (0:Not allow / 1:Allow)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-09": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-09";
            readonly name: "Selection of Operator Removed (LCD)";
            readonly range: "0-1 (0:Keep operating / 1:Display fault)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-10": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-10";
            readonly name: "RTC Time Display Setting";
            readonly range: "0-1 (0:Hide / 1:Display)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-11": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-11";
            readonly name: "RTC Date Setting";
            readonly range: "12.01.01~99.12.31";
            readonly default: "12.01.01";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-12": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-12";
            readonly name: "RTC Time Setting";
            readonly range: "00:00~23:59";
            readonly default: "00:00";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-13": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-13";
            readonly name: "RTC Timer Function";
            readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-14": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-14";
            readonly name: "P1 Start Time";
            readonly range: "00:00~23:59";
            readonly default: "08:00";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-15": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-15";
            readonly name: "P1 Stop Time";
            readonly range: "00:00~23:59";
            readonly default: "18:00";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-16": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-16";
            readonly name: "P1 Start Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-17": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-17";
            readonly name: "P1 Stop Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "5";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-18": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-18";
            readonly name: "P2 Start Time";
            readonly range: "00:00~23:59";
            readonly default: "08:00";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-19": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-19";
            readonly name: "P2 Stop Time";
            readonly range: "00:00~23:59";
            readonly default: "18:00";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-20": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-20";
            readonly name: "P2 Start Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 475;
        };
    };
    readonly "16-21": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-21";
            readonly name: "P2 Stop Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "5";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-22": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-22";
            readonly name: "P3 Start Time";
            readonly range: "00:00~23:59";
            readonly default: "08:00";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-23": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-23";
            readonly name: "P3 Stop Time";
            readonly range: "00:00~23:59";
            readonly default: "18:00";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-24": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-24";
            readonly name: "P3 Start Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-25": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-25";
            readonly name: "P3 Stop Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "5";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-26": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-26";
            readonly name: "P4 Start Time";
            readonly range: "00:00~23:59";
            readonly default: "08:00";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-27": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-27";
            readonly name: "P4 Stop Time";
            readonly range: "00:00~23:59";
            readonly default: "18:00";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-28": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-28";
            readonly name: "P4 Start Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-29": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-29";
            readonly name: "P4 Stop Date";
            readonly range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)";
            readonly default: "5";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-30": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-30";
            readonly name: "Selection of RTC Offset";
            readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-31": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-31";
            readonly name: "RTC Offset Time Setting";
            readonly range: "00:00~23:59";
            readonly default: "00:00";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-32": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-32";
            readonly name: "Source of Timer 1";
            readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-33": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-33";
            readonly name: "Source of Timer 2";
            readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-34": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-34";
            readonly name: "Source of Timer 3";
            readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
            readonly default: "4";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-35": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-35";
            readonly name: "Source of Timer 4";
            readonly range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)";
            readonly default: "8";
            readonly unit: "-";
            readonly page: 476;
        };
    };
    readonly "16-36": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-36";
            readonly name: "Selection of RTC Speed";
            readonly range: "0-5 (0:Off / 1:Timer1 / 2:Timer2 / 3:Timer3 / 4:Timer4 / 5:Timer1+2)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 477;
        };
    };
    readonly "16-37": {
        readonly register: (typeof GROUP_16_LCD_Parameters)["16-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 16;
            readonly code: "16-37";
            readonly name: "Selection of RTC Rotation Direction";
            readonly range: "0~15 (bit-field for direction)";
            readonly default: "0000b";
            readonly unit: "-";
            readonly page: 477;
        };
    };
};
