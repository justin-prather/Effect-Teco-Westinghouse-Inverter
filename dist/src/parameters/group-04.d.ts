/**
 * Group 04: External Analog Input and Output Parameters
 * Manual pages 4-34 to 4-36
 *
 * Parameter                                | Range                        | Default       | Unit | Page
 * 04-00  AI Input Signal Type              | 0-5                          | 1             | -    | 4-34
 * 04-01  AI1 Signal Scanning/Filtering     | 0.00~2.00                   | 0.03          | s    | 4-34
 * 04-02  AI1 Gain                          | 0.0~1000.0                  | 100.0         | %    | 4-34
 * 04-03  AI1 Bias                          | -100.0~100.0                | 0             | %    | 4-34
 * 04-04  Negative AI                       | 0-1                         | 0             | -    | 4-34
 * 04-05  AI2 Function Setting              | 0-17                        | 0             | -    | 4-34
 * 04-06  AI2 Signal Scanning/Filtering     | 0.00~2.00                   | 0.03          | s    | 4-35
 * 04-07  AI2 Gain                          | 0.0~1000.0                  | 100.0         | %    | 4-35
 * 04-08  AI2 Bias                          | -100.0~100.0                | 0             | %    | 4-35
 * 04-09  AI Input Signal Type of I/O card  | 0-2                         | 0             | -    | 4-35
 * 04-10  AI3 Function Setting              | 0-17                        | 10            | -    | 4-35
 * 04-11  AO1 Function Setting              | 0-28                        | 0             | -    | 4-35
 * 04-12  AO1 Gain                          | 0.0~1000.0                  | 100.0         | %    | 4-35
 * 04-13  AO1 Bias                          | -100.0~100.0                | 0             | %    | 4-35
 * 04-16  AO2 Function Setting              | 0-28                        | 3             | -    | 4-36
 * 04-17  AO2 Gain                          | 0.0~1000.0                  | 100.0         | %    | 4-36
 * 04-18  AO2 Bias                          | -100.0~100.0                | 0             | %    | 4-36
 * 04-19  AO Output Signal Type             | 0-3                         | 0             | -    | 4-36
 * 04-20  Filter Time of AO Signal Scan     | 0.00~0.50                   | 0.00          | s    | 4-36
 * 04-21  AI3 Signal Scanning/Filtering     | 0.00~2.00                   | 0.03          | s    | 4-36
 * 04-22  AI3 Gain                          | 0.0~1000.0                  | 100.0         | %    | 4-36
 * 04-23  AI3 Bias                          | -100.0~100.0                | 0             | %    | 4-36
 */
import { ParamKind } from "modbus-schema";
import { GROUP_04_External_Analog_Input_and_Output_Parameters } from "../Registers";
export declare const group04Params: {
    /** @param 04-00 AI Input Signal Type — Range: 0-5, Default: 1, Manual p.4-34 */
    readonly "04-00": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-00";
            readonly name: "AI Input Signal Type";
            readonly range: "0-5 (0:AI1 0-10V/AI2 0-10V … 5:AI1 4-20mA/AI2 4-20mA)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 434;
        };
    };
    /** @param 04-01 AI1 Signal Scanning and Filtering Time — Range: 0.00~2.00, Default: 0.03, Unit: s, Manual p.4-34 */
    readonly "04-01": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-01";
            readonly name: "AI1 Signal Scanning and Filtering Time";
            readonly range: "0.00~2.00";
            readonly default: "0.03";
            readonly unit: "s";
            readonly page: 434;
        };
    };
    /** @param 04-02 AI1 Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-34 */
    readonly "04-02": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-02";
            readonly name: "AI1 Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 434;
        };
    };
    /** @param 04-03 AI1 Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-34 */
    readonly "04-03": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-03"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-03";
            readonly name: "AI1 Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 434;
        };
    };
    /** @param 04-04 Negative AI — Range: 0-1, Default: 0, Manual p.4-34 */
    readonly "04-04": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-04";
            readonly name: "Negative AI";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 434;
        };
    };
    /** @param 04-05 AI2 Function Setting — Range: 0-17, Default: 0, Manual p.4-34 */
    readonly "04-05": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-05";
            readonly name: "AI2 Function Setting";
            readonly range: "0-17 (0:Aux Freq / 1:Freq Ref Gain / 2:Freq Ref Bias / … / 17:PTC)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 434;
        };
    };
    /** @param 04-06 AI2 Signal Scanning and Filtering Time — Range: 0.00~2.00, Default: 0.03, Unit: s, Manual p.4-35 */
    readonly "04-06": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-06";
            readonly name: "AI2 Signal Scanning and Filtering Time";
            readonly range: "0.00~2.00";
            readonly default: "0.03";
            readonly unit: "s";
            readonly page: 435;
        };
    };
    /** @param 04-07 AI2 Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-35 */
    readonly "04-07": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-07";
            readonly name: "AI2 Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 435;
        };
    };
    /** @param 04-08 AI2 Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-35 */
    readonly "04-08": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-08"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-08";
            readonly name: "AI2 Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 435;
        };
    };
    /** @param 04-09 AI Input Signal Type of I/O card — Range: 0-2, Default: 0, Manual p.4-35 */
    readonly "04-09": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-09";
            readonly name: "AI Input Signal Type of I/O card";
            readonly range: "0-2 (0:AI3 0-10V / 1:AI3 -10-10V / 2:AI3 4-20mA)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 435;
        };
    };
    /** @param 04-10 AI3 Function Setting — Range: 0-17 (same as 04-05), Default: 10, Manual p.4-35 */
    readonly "04-10": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-10";
            readonly name: "AI3 Function Setting";
            readonly range: "0-17 (same as 04-05)";
            readonly default: "10";
            readonly unit: "-";
            readonly page: 435;
        };
    };
    /** @param 04-11 AO1 Function Setting — Range: 0-28, Default: 0, Manual p.4-35 */
    readonly "04-11": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-11";
            readonly name: "AO1 Function Setting";
            readonly range: "0-28 (0:Output Freq / 1:Freq Cmd / 2:Output V / … / 28:Comm control)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 435;
        };
    };
    /** @param 04-12 AO1 Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-35 */
    readonly "04-12": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-12";
            readonly name: "AO1 Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 435;
        };
    };
    /** @param 04-13 AO1 Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-35 */
    readonly "04-13": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-13"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-13";
            readonly name: "AO1 Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 435;
        };
    };
    /** @param 04-16 AO2 Function Setting — Range: 0-28 (same as 04-11), Default: 3, Manual p.4-36 */
    readonly "04-16": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-16";
            readonly name: "AO2 Function Setting";
            readonly range: "0-28 (same as 04-11)";
            readonly default: "3";
            readonly unit: "-";
            readonly page: 436;
        };
    };
    /** @param 04-17 AO2 Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-36 */
    readonly "04-17": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-17";
            readonly name: "AO2 Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 436;
        };
    };
    /** @param 04-18 AO2 Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-36 */
    readonly "04-18": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-18"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-18";
            readonly name: "AO2 Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 436;
        };
    };
    /** @param 04-19 AO Output Signal Type — Range: 0-3, Default: 0, Manual p.4-36 */
    readonly "04-19": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-19";
            readonly name: "AO Output Signal Type";
            readonly range: "0-3 (0:AO1 0-10V/AO2 0-10V … 3:AO1 4-20mA/AO2 4-20mA)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 436;
        };
    };
    /** @param 04-20 Filter Time of AO Signal Scan — Range: 0.00~0.50, Default: 0.00, Unit: s, Manual p.4-36 */
    readonly "04-20": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-20";
            readonly name: "Filter Time of AO Signal Scan";
            readonly range: "0.00~0.50";
            readonly default: "0.00";
            readonly unit: "s";
            readonly page: 436;
        };
    };
    /**
     * @param 04-21 AI3 Signal Scanning and Filtering Time — Range: 0.00~2.00, Default: 0.03, Unit: s, Manual p.4-36
     * @remarks Not listed in the A510 communication addendum (Group 4 register map ends at 04-12).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "04-21": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-21";
            readonly name: "AI3 Signal Scanning and Filtering Time";
            readonly range: "0.00~2.00";
            readonly default: "0.03";
            readonly unit: "s";
            readonly page: 436;
        };
    };
    /**
     * @param 04-22 AI3 Gain — Range: 0.0~1000.0, Default: 100.0, Unit: %, Manual p.4-36
     * @remarks Not listed in the A510 communication addendum (Group 4 register map ends at 04-12).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "04-22": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-22";
            readonly name: "AI3 Gain";
            readonly range: "0.0~1000.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 436;
        };
    };
    /**
     * @param 04-23 AI3 Bias — Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-36
     * @remarks Not listed in the A510 communication addendum (Group 4 register map ends at 04-12).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "04-23": {
        readonly register: (typeof GROUP_04_External_Analog_Input_and_Output_Parameters)["04-23"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 4;
            readonly code: "04-23";
            readonly name: "AI3 Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 436;
        };
    };
};
