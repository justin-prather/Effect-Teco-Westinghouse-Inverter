/**
 * Group 10: PID Parameters
 * Manual pages 4-53 to 4-56
 */
import { ParamKind } from "./param-utils";
import { GROUP_10_PID_Parameters } from "../Registers";
export declare const group10Params: {
    /** @param 10-00 PID Target Value Source Setting -- Range: 1-4, Default: 1, Manual p.4-53 */
    readonly "10-00": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-00";
            readonly name: "PID Target Value Source Setting";
            readonly range: "1-4 (1:AI1 / 2:AI2 / 3:PI / 4:10-02)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-01 PID Feedback Value Source Setting -- Range: 1-3, Default: 2, Manual p.4-53 */
    readonly "10-01": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-01";
            readonly name: "PID Feedback Value Source Setting";
            readonly range: "1-3 (1:AI1 / 2:AI2 / 3:PI)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-02 PID Target Value -- Range: 0.00~100.00, Default: 0.00, Unit: %, Manual p.4-53 */
    readonly "10-02": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-02";
            readonly name: "PID Target Value";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "%";
            readonly page: 453;
        };
    };
    /** @param 10-03 PID Control Mode -- Bit field, Default: 0000b, Manual p.4-53 */
    readonly "10-03": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-03";
            readonly name: "PID Control Mode";
            readonly range: "bit0:Enable/bit1:Char/bit2:D input/bit3:Output mode";
            readonly default: "0000b (0)";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-04 Feedback Gain -- Range: 0.01~10.00, Default: 1.00, Unit: -, Manual p.4-53 */
    readonly "10-04": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-04";
            readonly name: "Feedback Gain";
            readonly range: "0.01~10.00";
            readonly default: "1.00";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-05 Proportional Gain (P) -- Range: 0.00~10.00, Default: 1.00, Unit: -, Manual p.4-53 */
    readonly "10-05": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-05";
            readonly name: "Proportional Gain (P)";
            readonly range: "0.00~10.00";
            readonly default: "1.00";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-06 Integral Time (I) -- Range: 0.00~100.00, Default: 1.00, Unit: s, Manual p.4-53 */
    readonly "10-06": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-06";
            readonly name: "Integral Time (I)";
            readonly range: "0.00~100.00";
            readonly default: "1.00";
            readonly unit: "s";
            readonly page: 453;
        };
    };
    /** @param 10-07 Differential Time (D) -- Range: 0.00~10.00, Default: 0.00, Unit: s, Manual p.4-53 */
    readonly "10-07": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-07";
            readonly name: "Differential Time (D)";
            readonly range: "0.00~10.00";
            readonly default: "0.00";
            readonly unit: "s";
            readonly page: 453;
        };
    };
    /** @param 10-08 AI1 Frequency Limit -- Range: 0.00~599.00, Default: 0, Unit: Hz, Manual p.4-53 */
    readonly "10-08": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-08";
            readonly name: "AI1 Frequency Limit";
            readonly range: "0.00~599.00";
            readonly default: "0";
            readonly unit: "Hz";
            readonly page: 453;
        };
    };
    /** @param 10-09 PID Bias -- Range: -100.0~100.0, Default: 0, Unit: %, Manual p.4-53 */
    readonly "10-09": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-09"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-09";
            readonly name: "PID Bias";
            readonly range: "-100.0~100.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 453;
        };
    };
    /** @param 10-10 PID Output Delay Time -- Range: 0.00~10.00, Default: 0.00, Unit: s, Manual p.4-53 */
    readonly "10-10": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-10";
            readonly name: "PID Output Delay Time";
            readonly range: "0.00~10.00";
            readonly default: "0.00";
            readonly unit: "s";
            readonly page: 453;
        };
    };
    /** @param 10-11 PID Feedback Loss Detection Selection -- Range: 0-2, Default: 0, Manual p.4-53 */
    readonly "10-11": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-11";
            readonly name: "PID Feedback Loss Detection Selection";
            readonly range: "0-2 (0:Disable / 1:Warning / 2:Fault)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-12 PID Feedback Loss Detection Level -- Range: 0~100, Default: 0, Unit: %, Manual p.4-53 */
    readonly "10-12": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-12";
            readonly name: "PID Feedback Loss Detection Level";
            readonly range: "0~100";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 453;
        };
    };
    /** @param 10-13 PID Feedback Loss Detection Time -- Range: 0.0~10.0, Default: 1.0, Unit: s, Manual p.4-53 */
    readonly "10-13": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-13";
            readonly name: "PID Feedback Loss Detection Time";
            readonly range: "0.0~10.0";
            readonly default: "1.0";
            readonly unit: "s";
            readonly page: 453;
        };
    };
    /** @param 10-14 PID Integral Limit -- Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-53 */
    readonly "10-14": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-14";
            readonly name: "PID Integral Limit";
            readonly range: "0.0~100.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 453;
        };
    };
    /** @param 10-15 PID Trim Mode -- Range: 0-2, Default: 0, Manual p.4-53 */
    readonly "10-15": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-15";
            readonly name: "PID Trim Mode";
            readonly range: "0-2";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 453;
        };
    };
    /** @param 10-16 PID Trim Scale -- Range: 0~100, Default: 100, Unit: %, Manual p.4-53 */
    readonly "10-16": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-16";
            readonly name: "PID Trim Scale";
            readonly range: "0~100";
            readonly default: "100";
            readonly unit: "%";
            readonly page: 453;
        };
    };
    /** @param 10-17 Start Frequency of PID Sleep -- Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-54 */
    readonly "10-17": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-17";
            readonly name: "Start Frequency of PID Sleep";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 454;
        };
    };
    /** @param 10-18 Delay Time of PID Sleep -- Range: 0.0~255.5, Default: 0.0, Unit: s, Manual p.4-54 */
    readonly "10-18": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-18";
            readonly name: "Delay Time of PID Sleep";
            readonly range: "0.0~255.5";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 454;
        };
    };
    /** @param 10-19 Frequency of PID Waking up -- Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-54 */
    readonly "10-19": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-19"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-19";
            readonly name: "Frequency of PID Waking up";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 454;
        };
    };
    /** @param 10-20 Delay Time of PID Waking up -- Range: 0.0~255.5, Default: 0.0, Unit: s, Manual p.4-54 */
    readonly "10-20": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-20";
            readonly name: "Delay Time of PID Waking up";
            readonly range: "0.0~255.5";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 454;
        };
    };
    /** @param 10-23 PID Output Limit -- Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-54 */
    readonly "10-23": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-23";
            readonly name: "PID Output Limit";
            readonly range: "0.0~100.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 454;
        };
    };
    /** @param 10-24 PID Output Gain -- Range: 0.0~25.0, Default: 1.0, Unit: -, Manual p.4-54 */
    readonly "10-24": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-24";
            readonly name: "PID Output Gain";
            readonly range: "0.0~25.0";
            readonly default: "1.0";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-25 PID Reversal Output Selection -- Range: 0-1, Default: 0, Manual p.4-54 */
    readonly "10-25": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-25";
            readonly name: "PID Reversal Output Selection";
            readonly range: "0-1 (0:No reversal / 1:Allow reversal)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-26 PID Target Acceleration/Deceleration Time -- Range: 0.0~25.5, Default: 0.0, Unit: s, Manual p.4-54 */
    readonly "10-26": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-26"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-26";
            readonly name: "PID Target Acceleration/Deceleration Time";
            readonly range: "0.0~25.5";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 454;
        };
    };
    /** @param 10-27 PID Feedback Display Bias -- Range: 0~9999, Default: 0, Manual p.4-54 */
    readonly "10-27": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-27";
            readonly name: "PID Feedback Display Bias";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-29 PID Sleep Selection -- Range: 0-2, Default: 1, Manual p.4-54 */
    readonly "10-29": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-29";
            readonly name: "PID Sleep Selection";
            readonly range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-30 Upper Limit of PID Target -- Range: 0.0~100.0, Default: 100.0, Unit: %, Manual p.4-54 */
    readonly "10-30": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-30"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-30";
            readonly name: "Upper Limit of PID Target";
            readonly range: "0.0~100.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 454;
        };
    };
    /** @param 10-31 Lower Limit of PID Target -- Range: 0.0~100.0, Default: 0.0, Unit: %, Manual p.4-54 */
    readonly "10-31": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-31"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-31";
            readonly name: "Lower Limit of PID Target";
            readonly range: "0.0~100.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 454;
        };
    };
    /** @param 10-33 Maximum Value of PID Feedback -- Range: 1~10000, Default: 999, Manual p.4-54 */
    readonly "10-33": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-33";
            readonly name: "Maximum Value of PID Feedback";
            readonly range: "1~10000";
            readonly default: "999";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-34 PID Decimal Width -- Range: 0~4, Default: 1, Manual p.4-54 */
    readonly "10-34": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-34";
            readonly name: "PID Decimal Width";
            readonly range: "0~4";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-35 PID Unit -- Range: 0~24, Default: 0, Manual p.4-54 */
    readonly "10-35": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-35";
            readonly name: "PID Unit";
            readonly range: "0~24 (0:% / 1:FPM / 2:CFM / 3:SPI ...)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 454;
        };
    };
    /** @param 10-36 Proportional Gain 2 (P) -- Range: 0.00~10.00, Default: 3.00, Unit: -, Manual p.4-55 */
    readonly "10-36": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-36"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-36";
            readonly name: "Proportional Gain 2 (P)";
            readonly range: "0.00~10.00";
            readonly default: "3.00";
            readonly unit: "-";
            readonly page: 455;
        };
    };
    /** @param 10-37 Integral Time 2 (I) -- Range: 0.00~100.00, Default: 0.50, Unit: Sec, Manual p.4-55 */
    readonly "10-37": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-37"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-37";
            readonly name: "Integral Time 2 (I)";
            readonly range: "0.00~100.00";
            readonly default: "0.50";
            readonly unit: "Sec";
            readonly page: 455;
        };
    };
    /** @param 10-38 Differential Time 2 (D) -- Range: 0.00~10.00, Default: 0.00, Unit: Sec, Manual p.4-55 */
    readonly "10-38": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-38"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-38";
            readonly name: "Differential Time 2 (D)";
            readonly range: "0.00~10.00";
            readonly default: "0.00";
            readonly unit: "Sec";
            readonly page: 455;
        };
    };
    /** @param 10-39 Output Frequency Setting of PID Disconnection -- Range: 0.00~599.00, Default: 30.00, Unit: Hz, Manual p.4-55 */
    readonly "10-39": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-39"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-39";
            readonly name: "Output Frequency Setting of PID Disconnection";
            readonly range: "0.00~599.00";
            readonly default: "30.00";
            readonly unit: "Hz";
            readonly page: 455;
        };
    };
    /** @param 10-40 Selection of PID Sleep Compensation Frequency -- Range: 0-1, Default: 0, Manual p.4-55 */
    readonly "10-40": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-40";
            readonly name: "Selection of PID Sleep Compensation Frequency";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 455;
        };
    };
    /** @param 10-41 PID Mode Switch -- Range: 0-1, Default: 0, Manual p.4-55 */
    readonly "10-41": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-41";
            readonly name: "PID Mode Switch";
            readonly range: "0-1 (0:General PID / 1:D Type PID)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 455;
        };
    };
    /** @param 10-47 Proportional Gain 3 (P) -- Range: 0.00~10.00, Default: 1.00, Unit: -, Manual p.4-56 */
    readonly "10-47": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-47"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-47";
            readonly name: "Proportional Gain 3 (P)";
            readonly range: "0.00~10.00";
            readonly default: "1.00";
            readonly unit: "-";
            readonly page: 456;
        };
    };
    /** @param 10-48 Integral Time 3 (I) -- Range: 0.00~100.00, Default: 1.00, Unit: Sec, Manual p.4-56 */
    readonly "10-48": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-48"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-48";
            readonly name: "Integral Time 3 (I)";
            readonly range: "0.00~100.00";
            readonly default: "1.00";
            readonly unit: "Sec";
            readonly page: 456;
        };
    };
    /** @param 10-49 Differential Time 3 (D) -- Range: 0.00~10.00, Default: 0.00, Unit: Sec, Manual p.4-56 */
    readonly "10-49": {
        readonly register: (typeof GROUP_10_PID_Parameters)["10-49"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 10;
            readonly code: "10-49";
            readonly name: "Differential Time 3 (D)";
            readonly range: "0.00~10.00";
            readonly default: "0.00";
            readonly unit: "Sec";
            readonly page: 456;
        };
    };
};
