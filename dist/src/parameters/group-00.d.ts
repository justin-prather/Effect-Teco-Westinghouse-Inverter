/**
 * Group 00: Basic Parameters
 * Manual pages 4-19 to 4-22
 *
 * Parameter                       | Range            | Default | Unit  | Register
 * 00-00  Control Mode Selection   | 0-6              | 0       | -     | 0x0000
 * 00-01  Motor's Rotation Direct. | 0-1              | 0       | -     | 0x0001
 * 00-02  Main Run Cmd Source      | 0-3              | 0       | -     | 0x0002
 * 00-03  Alternative Run Cmd      | 0-3              | 2       | -     | 0x0003
 * 00-04  Language                 | 0-3              | 0       | -     | 0x0004
 * 00-05  Main Freq Cmd Source     | 0-8              | 0       | -     | 0x0005
 * 00-06  Alternative Freq Source  | 0-7              | 3       | -     | 0x0006
 * 00-07  Freq Cmd Modes           | 0-1              | 0       | -     | 0x0007
 * 00-08  Comm Freq Cmd Range      | 0.00~599.00      | 0.00    | Hz    | 0x0008
 * 00-09  Comm Freq Cmd Memory     | 0-1              | 0       | -     | 0x0009
 * 00-10  Min Freq Detection       | 0-1              | 0       | -     | 0x000A
 * 00-11  PID Lower Freq Limit     | 0-1              | 0       | -     | 0x000B
 * 00-12  Upper Limit Frequency    | 0.1~109.0        | 100.0   | %     | 0x000C
 * 00-13  Lower Limit Frequency    | 0.0~109.0        | 0.0     | %     | 0x000D
 * 00-14  Accel Time 1             | 0.1~6000.0       | *       | s     | 0x000E
 * 00-15  Decel Time 1             | 0.1~6000.0       | *       | s     | 0x000F
 * 00-16  Accel Time 2             | 0.1~6000.0       | *       | s     | 0x0010
 * 00-17  Decel Time 2             | 0.1~6000.0       | *       | s     | 0x0011
 * 00-18  Jog Frequency            | 0.00~599.00      | 6.00    | Hz    | 0x0012
 * 00-19  Jog Accel Time           | 0.1~600.0        | -       | s     | 0x0013
 * 00-20  Jog Decel Time           | 0.1~600.0        | -       | s     | 0x0014
 * 00-21  Accel Time 3             | 0.1~6000.0       | *       | s     | 0x0015
 * 00-22  Decel Time 3             | 0.1~6000.0       | *       | s     | 0x0016
 * 00-23  Accel Time 4             | 0.1~6000.0       | *       | s     | 0x0017
 * 00-24  Decel Time 4             | 0.1~6000.0       | *       | s     | 0x0018
 * 00-25  Switch-Over Freq         | 0.00~599.00      | 0.0     | Hz    | 0x0019
 * 00-26  Emergency Stop Time      | 0.1~6000.0       | 5.0     | s     | 0x001A
 * 00-27  HD/ND Mode Selection     | 0-1              | 0       | -     | 0x001B
 * 00-28  Cmd Characteristic       | 0-1              | 0       | -     | 0x001C
 * 00-29  Zero-Speed Operation     | 0-3              | 0       | -     | 0x001D
 * 00-32  Application Selection    | 0-8              | 0       | -     | 0x0020
 * 00-33  Modified Parameters      | 0-1              | 0       | -     | 0x0021
 * 00-41  User Parameter 0         | -                | 00-41   | -     | 0x0029
 * ...
 * 00-57  SV High Speed Mode       | 0-1              | 0       | -     | 0x0039
 */
import { ParamKind } from "modbus-schema";
import { GROUP_00_Basic_Parameters } from "../Registers";
export declare const group00Params: {
    /** @param 00-00 Control Mode Selection — Range: 0-6, Default: 0, Manual p.4-19 */
    readonly "00-00": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-00"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "V/F";
            readonly 1: "V/F+PG";
            readonly 2: "SLV";
            readonly 3: "SV";
            readonly 4: "PMSV";
            readonly 5: "PMSLV";
            readonly 6: "SLV2";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-00";
            readonly name: "Control Mode Selection";
            readonly range: "0-6";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-01 Motor's Rotation Direction — Range: 0-1, Default: 0, Manual p.4-19 */
    readonly "00-01": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-01"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Forward";
            readonly 1: "Reverse";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-01";
            readonly name: "Motor's Rotation Direction";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-02 Main Run Command Source Selection — Range: 0-3, Default: 0, Manual p.4-19 */
    readonly "00-02": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-02"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Keypad";
            readonly 1: "External Terminal";
            readonly 2: "Communication (RS-485)";
            readonly 3: "PLC";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-02";
            readonly name: "Main Run Command Source Selection";
            readonly range: "0-3";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-03 Alternative Run Command Selection — Range: 0-3, Default: 2, Manual p.4-19 */
    readonly "00-03": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-03"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Keypad";
            readonly 1: "External Terminal";
            readonly 2: "Communication (RS-485)";
            readonly 3: "PLC";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-03";
            readonly name: "Alternative Run Command Selection";
            readonly range: "0-3";
            readonly default: "2 (Note4)";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-04 Language — Range: 0-3, Default: 0, Manual p.4-19 */
    readonly "00-04": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-04"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "English";
            readonly 1: "Simplified Chinese";
            readonly 2: "Traditional Chinese";
            readonly 3: "Turkish";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-04";
            readonly name: "Language";
            readonly range: "0-3";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-05 Main Frequency Command Source Selection — Range: 0-8, Default: 0, Manual p.4-19 */
    readonly "00-05": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-05"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Keypad";
            readonly 1: "External Terminal (Analog1)";
            readonly 2: "Terminal Command UP/DOWN";
            readonly 3: "Communication (RS-485)";
            readonly 4: "Pulse Input";
            readonly 7: "AI2 Auxiliary Frequency";
            readonly 8: "Manual Pulse Generator (MPG)";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-05";
            readonly name: "Main Frequency Command Source Selection";
            readonly range: "0-8";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-06 Alternative Frequency Source Selection — Range: 0-7, Default: 3, Manual p.4-19 */
    readonly "00-06": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-06"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Keypad";
            readonly 1: "External Terminal (Analog1)";
            readonly 2: "Terminal Command UP/DOWN";
            readonly 3: "Communication (RS-485)";
            readonly 4: "Pulse Input";
            readonly 7: "AI2 Auxiliary Frequency";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-06";
            readonly name: "Alternative Frequency Source Selection";
            readonly range: "0-7";
            readonly default: "3 (Note4)";
            readonly unit: "-";
            readonly page: 419;
        };
    };
    /** @param 00-07 Main and Alternative Frequency Command Modes — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-07": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-07"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Main Frequency";
            readonly 1: "Main frequency + Alternative Frequency";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-07";
            readonly name: "Main and Alternative Frequency Command Modes";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-09 Communication Frequency Command Memory Selection — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-09": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-09"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Don't save when power supply is off (00-08)";
            readonly 1: "Save when power is off (00-08)";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-09";
            readonly name: "Communication Frequency Command Memory Selection";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-10 Minimum Frequency Detection — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-10": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-10"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Show warning if lower than minimum frequency";
            readonly 1: "Run as minimum frequency if lower than minimum frequency";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-10";
            readonly name: "Minimum Frequency Detection";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-11 PID Lower Limit of Frequency Selection — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-11": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-11"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "PID Sleep Limit is Lower Limit of Frequency";
            readonly 1: "PID Sleep Limit is 0Hz";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-11";
            readonly name: "PID Lower Limit of Frequency Selection";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-27 HD/ND Mode Selection — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-27": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-27"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "HD (Heavy Duty Mode)";
            readonly 1: "ND (Normal Duty Mode)";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-27";
            readonly name: "HD/ND Mode Selection";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-28 Command Characteristic Selection of Master Frequency — Range: 0-1, Default: 0, Manual p.4-20 */
    readonly "00-28": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-28"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Positive Characteristic (0~10V/4~20mA → 0~100%)";
            readonly 1: "Negative Characteristic (0~10V/4~20mA → 100~0%)";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-28";
            readonly name: "Command Characteristic Selection of Master Frequency";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-29 Zero-Speed Operation Selection — Range: 0-3, Default: 0, Manual p.4-20 */
    readonly "00-29": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-29"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Operation Based on Frequency Command";
            readonly 1: "Stop";
            readonly 2: "Operation Based on the Lowest Frequency";
            readonly 3: "Zero-Speed Operation";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-29";
            readonly name: "Zero-Speed Operation Selection";
            readonly range: "0-3";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-32 Application Selection Presets — Range: 0-8, Default: 0, Manual p.4-20 */
    readonly "00-32": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-32"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "General";
            readonly 2: "Conveyor";
            readonly 3: "Exhaust Fan";
            readonly 5: "Compressor";
            readonly 6: "Hoist";
            readonly 7: "Crane";
            readonly 8: "Manual Pulse Generator (MPG)";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-32";
            readonly name: "Application Selection Presets";
            readonly range: "0-8";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 420;
        };
    };
    /** @param 00-33 Modified Parameters (LCD keypad) — Range: 0-1, Default: 0, Manual p.4-21 */
    readonly "00-33": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-33"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Disable";
            readonly 1: "Enable";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-33";
            readonly name: "Modified Parameters (LCD keypad)";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-57 SV High Speed Mode — Range: 0-1, Default: 0, Manual p.4-21 */
    readonly "00-57": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-57"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "SV High Speed Mode 1";
            readonly 1: "SV High Speed Mode 2";
        };
        readonly meta: {
            readonly group: 0;
            readonly code: "00-57";
            readonly name: "SV High Speed Mode";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-08 Communication Frequency Command Range — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-20 */
    readonly "00-08": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-08";
            readonly name: "Communication Frequency Command Range";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 420;
        };
    };
    /** @param 00-18 Jog Frequency — Range: 0.00~599.00, Default: 6.00, Unit: Hz, Manual p.4-20 */
    readonly "00-18": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-18";
            readonly name: "Jog Frequency";
            readonly range: "0.00~599.00";
            readonly default: "6.00";
            readonly unit: "Hz";
            readonly page: 420;
        };
    };
    /** @param 00-25 Switch-Over Frequency of Acc/Dec Time 1 and Time 4 — Range: 0.00~599.00, Default: 0.0, Unit: Hz, Manual p.4-20 */
    readonly "00-25": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-25";
            readonly name: "Switch-Over Frequency of Acc/Dec Time 1 and Time 4";
            readonly range: "0.00~599.00";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 420;
        };
    };
    /** @param 00-12 Upper Limit Frequency — Range: 0.1~109.0, Default: 100.0, Unit: %, Manual p.4-20 */
    readonly "00-12": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-12";
            readonly name: "Upper Limit Frequency";
            readonly range: "0.1~109.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 420;
        };
    };
    /** @param 00-13 Lower Limit Frequency — Range: 0.0~109.0, Default: 0.0, Unit: %, Manual p.4-20 */
    readonly "00-13": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-13";
            readonly name: "Lower Limit Frequency";
            readonly range: "0.0~109.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 420;
        };
    };
    /** @param 00-14 Acceleration Time 1 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-14": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-14";
            readonly name: "Acceleration Time 1";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-15 Deceleration Time 1 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-15": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-15";
            readonly name: "Deceleration Time 1";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-16 Acceleration Time 2 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-16": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-16";
            readonly name: "Acceleration Time 2";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-17 Deceleration Time 2 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-17": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-17";
            readonly name: "Deceleration Time 2";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-19 Jog Acceleration Time — Range: 0.1~600.0, Default: -, Unit: s, Manual p.4-20 */
    readonly "00-19": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-19"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-19";
            readonly name: "Jog Acceleration Time";
            readonly range: "0.1~600.0";
            readonly default: "-";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-20 Jog Deceleration Time — Range: 0.1~600.0, Default: -, Unit: s, Manual p.4-20 */
    readonly "00-20": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-20";
            readonly name: "Jog Deceleration Time";
            readonly range: "0.1~600.0";
            readonly default: "-";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-21 Acceleration Time 3 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-21": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-21";
            readonly name: "Acceleration Time 3";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-22 Deceleration Time 3 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-22": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-22";
            readonly name: "Deceleration Time 3";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-23 Acceleration Time 4 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-23": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-23";
            readonly name: "Acceleration Time 4";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-24 Deceleration Time 4 — Range: 0.1~6000.0, Default: * (see Attachment 1 p.170), Unit: s, Manual p.4-20 */
    readonly "00-24": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-24";
            readonly name: "Deceleration Time 4";
            readonly range: "0.1~6000.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-26 Emergency Stop Time — Range: 0.1~6000.0, Default: 5.0, Unit: s, Manual p.4-20 */
    readonly "00-26": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-26"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-26";
            readonly name: "Emergency Stop Time";
            readonly range: "0.1~6000.0";
            readonly default: "5.0";
            readonly unit: "s";
            readonly page: 420;
        };
    };
    /** @param 00-41 User Parameter 0 — Range: -, Default: 00-41, Manual p.4-21 */
    readonly "00-41": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-41";
            readonly name: "User Parameter 0";
            readonly range: "00-01~22-31 (except 00-41~00-56, group 17)";
            readonly default: "00-41";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-42 User Parameter 1 — Manual p.4-21 */
    readonly "00-42": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-42";
            readonly name: "User Parameter 1";
            readonly range: "00-01~22-31";
            readonly default: "00-42";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-43 User Parameter 2 — Manual p.4-21 */
    readonly "00-43": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-43";
            readonly name: "User Parameter 2";
            readonly range: "00-01~22-31";
            readonly default: "00-43";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-44 User Parameter 3 — Manual p.4-21 */
    readonly "00-44": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-44"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-44";
            readonly name: "User Parameter 3";
            readonly range: "00-01~22-31";
            readonly default: "00-44";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-45 User Parameter 4 — Manual p.4-21 */
    readonly "00-45": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-45";
            readonly name: "User Parameter 4";
            readonly range: "00-01~22-31";
            readonly default: "00-45";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-46 User Parameter 5 — Manual p.4-21 */
    readonly "00-46": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-46";
            readonly name: "User Parameter 5";
            readonly range: "00-01~22-31";
            readonly default: "00-46";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-47 User Parameter 6 — Manual p.4-21 */
    readonly "00-47": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-47";
            readonly name: "User Parameter 6";
            readonly range: "00-01~22-31";
            readonly default: "00-47";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-48 User Parameter 7 — Manual p.4-21 */
    readonly "00-48": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-48"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-48";
            readonly name: "User Parameter 7";
            readonly range: "00-01~22-31";
            readonly default: "00-48";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-49 User Parameter 8 — Manual p.4-21 */
    readonly "00-49": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-49"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-49";
            readonly name: "User Parameter 8";
            readonly range: "00-01~22-31";
            readonly default: "00-49";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-50 User Parameter 9 — Manual p.4-21 */
    readonly "00-50": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-50"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-50";
            readonly name: "User Parameter 9";
            readonly range: "00-01~22-31";
            readonly default: "00-50";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-51 User Parameter 10 — Manual p.4-21 */
    readonly "00-51": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-51"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-51";
            readonly name: "User Parameter 10";
            readonly range: "00-01~22-31";
            readonly default: "00-51";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-52 User Parameter 11 — Manual p.4-21 */
    readonly "00-52": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-52"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-52";
            readonly name: "User Parameter 11";
            readonly range: "00-01~22-31";
            readonly default: "00-52";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-53 User Parameter 12 — Manual p.4-21 */
    readonly "00-53": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-53"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-53";
            readonly name: "User Parameter 12";
            readonly range: "00-01~22-31";
            readonly default: "00-53";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-54 User Parameter 13 — Manual p.4-21 */
    readonly "00-54": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-54"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-54";
            readonly name: "User Parameter 13";
            readonly range: "00-01~22-31";
            readonly default: "00-54";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-55 User Parameter 14 — Manual p.4-21 */
    readonly "00-55": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-55"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-55";
            readonly name: "User Parameter 14";
            readonly range: "00-01~22-31";
            readonly default: "00-55";
            readonly unit: "-";
            readonly page: 421;
        };
    };
    /** @param 00-56 User Parameter 15 — Manual p.4-21 */
    readonly "00-56": {
        readonly register: (typeof GROUP_00_Basic_Parameters)["00-56"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 0;
            readonly code: "00-56";
            readonly name: "User Parameter 15";
            readonly range: "00-01~22-31";
            readonly default: "00-56";
            readonly unit: "-";
            readonly page: 421;
        };
    };
};
