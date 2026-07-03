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
import { ParamKind } from "./param-utils";
import { GROUP_03_External_Digital_Input_and_Output_Parameters } from "../Registers";
export declare const group03Params: {
    /** @param 03-00 Multi-Function Terminal Function Setting-S1 — Range: 0~69, Default: 0, Manual p.4-27 */
    readonly "03-00": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-00";
            readonly name: "Multi-Function Terminal Function Setting-S1";
            readonly range: "0~69";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-01 Multi-Function Terminal Function Setting-S2 — Range: 0~69, Default: 1, Manual p.4-27 */
    readonly "03-01": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-01";
            readonly name: "Multi-Function Terminal Function Setting-S2";
            readonly range: "0~69";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-02 Multi-Function Terminal Function Setting-S3 — Range: 0~69, Default: 2, Manual p.4-27 */
    readonly "03-02": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-02";
            readonly name: "Multi-Function Terminal Function Setting-S3";
            readonly range: "0~69";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-03 Multi-Function Terminal Function Setting-S4 — Range: 0~69, Default: 3, Manual p.4-27 */
    readonly "03-03": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-03";
            readonly name: "Multi-Function Terminal Function Setting-S4";
            readonly range: "0~69";
            readonly default: "3";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-04 Multi-Function Terminal Function Setting-S5 — Range: 0~69, Default: 4, Manual p.4-27 */
    readonly "03-04": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-04";
            readonly name: "Multi-Function Terminal Function Setting-S5";
            readonly range: "0~69";
            readonly default: "4";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-05 Multi-Function Terminal Function Setting-S6 — Range: 0~69, Default: 17, Manual p.4-27 */
    readonly "03-05": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-05";
            readonly name: "Multi-Function Terminal Function Setting-S6";
            readonly range: "0~69";
            readonly default: "17";
            readonly unit: "-";
            readonly page: 427;
        };
    };
    /** @param 03-06 Multi-Function Terminal Function Setting-S7 — Range: 0~69, Default: 29, Manual p.4-28 */
    readonly "03-06": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-06";
            readonly name: "Multi-Function Terminal Function Setting-S7";
            readonly range: "0~69";
            readonly default: "29";
            readonly unit: "-";
            readonly page: 428;
        };
    };
    /** @param 03-07 Multi-Function Terminal Function Setting-S8 — Range: 0~69, Default: 15, Manual p.4-28 */
    readonly "03-07": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-07";
            readonly name: "Multi-Function Terminal Function Setting-S8";
            readonly range: "0~69";
            readonly default: "15";
            readonly unit: "-";
            readonly page: 428;
        };
    };
    /** @param 03-08 (S1~S8) DI Scan Time — Range: 0-1, Default: 1, Manual p.4-28 */
    readonly "03-08": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-08";
            readonly name: "(S1~S8) DI Scan Time";
            readonly range: "0-1 (0:4ms / 1:8ms)";
            readonly default: "1 (8ms)";
            readonly unit: "-";
            readonly page: 428;
        };
    };
    /** @param 03-09 Multi-Function Terminal S1-S4 Type Selection — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-28 */
    readonly "03-09": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-09";
            readonly name: "Multi-Function Terminal S1-S4 Type Selection";
            readonly range: "0000b~1111b (bit0:S1 A/B ... bit3:S4 A/B)";
            readonly default: "0000b";
            readonly unit: "-";
            readonly page: 428;
        };
    };
    /** @param 03-10 Multi-Function Terminal S5-S8 Type Selection — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-28 */
    readonly "03-10": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-10";
            readonly name: "Multi-Function Terminal S5-S8 Type Selection";
            readonly range: "0000b~1111b (bit0:S5 A/B ... bit3:S8 A/B)";
            readonly default: "0000b";
            readonly unit: "-";
            readonly page: 428;
        };
    };
    /** @param 03-11 Relay (R1A-R1C) Output — Range: 0~59, Default: 0, Manual p.4-29 */
    readonly "03-11": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-11";
            readonly name: "Relay (R1A-R1C) Output";
            readonly range: "0~59 (see 03-11/03-12 function table)";
            readonly default: "0 (During Running)";
            readonly unit: "-";
            readonly page: 429;
        };
    };
    /** @param 03-12 Relay (R2A-R2C) Output — Range: 0~59, Default: 1, Manual p.4-29 */
    readonly "03-12": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-12";
            readonly name: "Relay (R2A-R2C) Output";
            readonly range: "0~59 (see 03-11/03-12 function table)";
            readonly default: "1 (Fault Contact Output)";
            readonly unit: "-";
            readonly page: 429;
        };
    };
    /** @param 03-13 Frequency Detection Level — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-29 */
    readonly "03-13": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-13";
            readonly name: "Frequency Detection Level";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 429;
        };
    };
    /** @param 03-14 Frequency Detection Width — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-29 */
    readonly "03-14": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-14";
            readonly name: "Frequency Detection Width";
            readonly range: "0.1~25.5";
            readonly default: "2.0";
            readonly unit: "Hz";
            readonly page: 429;
        };
    };
    /** @param 03-15 Current Agree Level — Range: 0.1~999.9, Default: 0.1, Unit: A, Manual p.4-29 */
    readonly "03-15": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-15";
            readonly name: "Current Agree Level";
            readonly range: "0.1~999.9";
            readonly default: "0.1";
            readonly unit: "A";
            readonly page: 429;
        };
    };
    /** @param 03-16 Delay Time of Current Agree Detection — Range: 0.1~10.0, Default: 0.1, Unit: s, Manual p.4-29 */
    readonly "03-16": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-16";
            readonly name: "Delay Time of Current Agree Detection";
            readonly range: "0.1~10.0";
            readonly default: "0.1";
            readonly unit: "s";
            readonly page: 429;
        };
    };
    /** @param 03-17 Mechanical Braking Release Level — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-29 */
    readonly "03-17": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-17";
            readonly name: "Mechanical Braking Release Level";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 429;
        };
    };
    /** @param 03-18 Mechanical Braking Level Set — Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-29 */
    readonly "03-18": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-18";
            readonly name: "Mechanical Braking Level Set";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 429;
        };
    };
    /** @param 03-19 Relay (R1A-R2A) Type — Range: bitfield 0000b~1111b, Default: 0000b, Manual p.4-29 */
    readonly "03-19": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-19";
            readonly name: "Relay (R1A-R2A) Type";
            readonly range: "0000b~1111b (bit0:R1 A/B, bit1:R2 A/B, bit3:R4 A/B)";
            readonly default: "0000b";
            readonly unit: "-";
            readonly page: 429;
        };
    };
    /** @param 03-20 Relay (R4A-R4C) Output — Range: 0~59, Default: 2, Manual p.4-30 */
    readonly "03-20": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-20";
            readonly name: "Relay (R4A-R4C) Output";
            readonly range: "0~59 (see 03-11/03-12 function table)";
            readonly default: "2 (Frequency Agree)";
            readonly unit: "-";
            readonly page: 430;
        };
    };
    /** @param 03-21 Photo-coupler Output Selection (DO2-DOG) — Range: 0~59, Default: 3, Manual p.4-30 */
    readonly "03-21": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-21";
            readonly name: "Photo-coupler Output Selection (DO2-DOG)";
            readonly range: "0~59 (see 03-11/03-12 function table)";
            readonly default: "3";
            readonly unit: "-";
            readonly page: 430;
        };
    };
    /** @param 03-27 UP/DOWN Frequency Hold/Adjust Selection — Range: 0-3, Default: 0, Manual p.4-31 */
    readonly "03-27": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-27";
            readonly name: "UP/DOWN Frequency Hold/Adjust Selection";
            readonly range: "0-3";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 431;
        };
    };
    /** @param 03-28 Photo-coupler Output (DO1-DOG) — Range: 0~59, Default: 0, Manual p.4-31 */
    readonly "03-28": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-28";
            readonly name: "Photo-coupler Output (DO1-DOG)";
            readonly range: "0~59 (see 03-11/03-12 function table)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 431;
        };
    };
    /** @param 03-29 Photo-coupler Output Selection (DO1-DOG)(DO2-DOG) — Range: bitfield, Default: 0000b, Manual p.4-31 */
    readonly "03-29": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-29";
            readonly name: "Photo-coupler Output Selection (DO1-DOG)(DO2-DOG)";
            readonly range: "0000b~1111b (bit0:PC1 A/B, bit1:PC2 A/B)";
            readonly default: "0000b";
            readonly unit: "-";
            readonly page: 431;
        };
    };
    /** @param 03-30 Selection of Pulse Input — Range: 0-1, Default: 0, Manual p.4-31 */
    readonly "03-30": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-30";
            readonly name: "Selection of Pulse Input";
            readonly range: "0-1 (0:General Pulse Input / 1:PWM)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 431;
        };
    };
    /** @param 03-31 Scale of Pulse Input — Range: 50~32000 / 10~1000, Default: 1000, Unit: Hz, Manual p.4-31 */
    readonly "03-31": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-31";
            readonly name: "Scale of Pulse Input";
            readonly range: "50~32000 (03-30=0) / 10~1000 (03-30=1)";
            readonly default: "1000";
            readonly unit: "Hz";
            readonly page: 431;
        };
    };
    /** @param 03-32 Pulse Input Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-31 */
    readonly "03-32": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-32"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-32";
            readonly name: "Pulse Input Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 431;
        };
    };
    /** @param 03-33 Pulse Input Bias — Range: -100.0~100.0, Default: 0.0, Unit: %, Manual p.4-31 */
    readonly "03-33": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-33"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-33";
            readonly name: "Pulse Input Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 431;
        };
    };
    /** @param 03-34 Filter Time of Pulse Input — Range: 0.00~2.00, Default: 0.10, Unit: Sec, Manual p.4-31 */
    readonly "03-34": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-34";
            readonly name: "Filter Time of Pulse Input";
            readonly range: "0.00~2.00";
            readonly default: "0.10";
            readonly unit: "Sec";
            readonly page: 431;
        };
    };
    /** @param 03-35 Function Setting of Pulse Output — Range: 1-7, Default: 2, Manual p.4-32 */
    readonly "03-35": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-35";
            readonly name: "Function Setting of Pulse Output";
            readonly range: "1-7 (1:Freq Cmd / 2:Output Freq / 3:After Soft-Start / 4:Motor Speed / 5:PID Fdbk / 6:PID Input / 7:PG Output)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 432;
        };
    };
    /** @param 03-36 Scale of Pulse Output — Range: 1~32000, Default: 1000, Unit: Hz, Manual p.4-32 */
    readonly "03-36": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-36";
            readonly name: "Scale of Pulse Output";
            readonly range: "1~32000";
            readonly default: "1000";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-37 Timer ON Delay (DIO) — Range: 0.0~6000.0, Default: 0.0, Unit: s, Manual p.4-32 */
    readonly "03-37": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-37"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-37";
            readonly name: "Timer ON Delay (DIO)";
            readonly range: "0.0~6000.0";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 432;
        };
    };
    /** @param 03-38 Timer OFF Delay (DIO) — Range: 0.0~6000.0, Default: 0.0, Unit: s, Manual p.4-32 */
    readonly "03-38": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-38"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-38";
            readonly name: "Timer OFF Delay (DIO)";
            readonly range: "0.0~6000.0";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 432;
        };
    };
    /** @param 03-40 Up/Down Frequency Width Setting — Range: 0.00~5.00, Default: 0.00, Unit: Hz, Manual p.4-32 */
    readonly "03-40": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-40"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-40";
            readonly name: "Up/Down Frequency Width Setting";
            readonly range: "0.00~5.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-41 Torque Detection Level — Range: 0~150, Default: 10, Unit: %, Manual p.4-32 */
    readonly "03-41": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-41";
            readonly name: "Torque Detection Level";
            readonly range: "0~150";
            readonly default: "10";
            readonly unit: "%";
            readonly page: 432;
        };
    };
    /** @param 03-42 Brake Release Delay Time — Range: 0.00~65.00, Default: 0.00, Unit: s, Manual p.4-32 */
    readonly "03-42": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-42"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-42";
            readonly name: "Brake Release Delay Time";
            readonly range: "0.00~65.00";
            readonly default: "0.00";
            readonly unit: "s";
            readonly page: 432;
        };
    };
    /** @param 03-43 UP/DOWN Acceleration/Deceleration Selection — Range: 0-1, Default: 0, Manual p.4-32 */
    readonly "03-43": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-43";
            readonly name: "UP/DOWN Acceleration/Deceleration Selection";
            readonly range: "0-1 (0:Accel/Decel Time 1 / 1:Accel/Decel Time 2)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 432;
        };
    };
    /** @param 03-44 Frequency Detection Level 2 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
    readonly "03-44": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-44";
            readonly name: "Frequency Detection Level 2";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-45 Frequency Detection Width 2 — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-32 */
    readonly "03-45": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-45"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-45";
            readonly name: "Frequency Detection Width 2";
            readonly range: "0.1~25.5";
            readonly default: "2.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-46 Frequency Detection Level 3 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
    readonly "03-46": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-46"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-46";
            readonly name: "Frequency Detection Level 3";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-47 Frequency Detection Width 3 — Range: 0.1~25.5, Default: 2.0, Unit: Hz, Manual p.4-32 */
    readonly "03-47": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-47"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-47";
            readonly name: "Frequency Detection Width 3";
            readonly range: "0.1~25.5";
            readonly default: "2.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-48 Low Current Detection Level — Range: 0.0~999.9, Default: 0.1, Unit: A, Manual p.4-32 */
    readonly "03-48": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-48"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-48";
            readonly name: "Low Current Detection Level";
            readonly range: "0.0~999.9";
            readonly default: "0.1";
            readonly unit: "A";
            readonly page: 432;
        };
    };
    /** @param 03-49 Low Current Detection Delay Time — Range: 0.00~655.34, Default: 0.01, Unit: Sec, Manual p.4-32 */
    readonly "03-49": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-49"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-49";
            readonly name: "Low Current Detection Delay Time";
            readonly range: "0.00~655.34";
            readonly default: "0.01";
            readonly unit: "Sec";
            readonly page: 432;
        };
    };
    /** @param 03-50 Frequency Detection Level 4 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
    readonly "03-50": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-50"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-50";
            readonly name: "Frequency Detection Level 4";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-51 Frequency Detection Level 5 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-32 */
    readonly "03-51": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-51"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-51";
            readonly name: "Frequency Detection Level 5";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 432;
        };
    };
    /** @param 03-52 Frequency Detection Level 6 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-33 */
    readonly "03-52": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-52"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-52";
            readonly name: "Frequency Detection Level 6";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 433;
        };
    };
    /** @param 03-53 Current Agree Level 2 — Range: 0.0~999.9, Default: 0.1, Unit: A, Manual p.4-33 */
    readonly "03-53": {
        readonly register: (typeof GROUP_03_External_Digital_Input_and_Output_Parameters)["03-53"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 3;
            readonly code: "03-53";
            readonly name: "Current Agree Level 2";
            readonly range: "0.0~999.9";
            readonly default: "0.1";
            readonly unit: "A";
            readonly page: 433;
        };
    };
};
