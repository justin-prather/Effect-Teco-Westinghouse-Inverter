/**
 * Group 07: Start/Stop Parameters
 * Manual pages 4-44 to 4-46
 */
import { ParamKind } from "./param-utils";
import { GROUP_07_Start_Stop_Parameters } from "../Registers";
export declare const group07Params: {
    /** @param 07-00 Momentary Power Loss/Fault Restart Selection — Range: 0-1, Default: 0, Manual p.4-44 */
    readonly "07-00": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-00";
            readonly name: "Momentary Power Loss/Fault Restart Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 444;
        };
    };
    /** @param 07-01 Fault Auto-Restart Time — Range: 0~7200, Default: 0, Unit: s, Manual p.4-44 */
    readonly "07-01": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-01";
            readonly name: "Fault Auto-Restart Time";
            readonly range: "0~7200";
            readonly default: "0";
            readonly unit: "s";
            readonly page: 444;
        };
    };
    /** @param 07-02 Number of Fault Auto-Restart Attempts — Range: 0~10, Default: 0, Manual p.4-44 */
    readonly "07-02": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-02";
            readonly name: "Number of Fault Auto-Restart Attempts";
            readonly range: "0~10";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 444;
        };
    };
    /** @param 07-04 Direct Start at Power On — Range: 0-1, Default: 1, Manual p.4-44 */
    readonly "07-04": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-04";
            readonly name: "Direct Start at Power On";
            readonly range: "0-1 (0:Direct start / 1:Unable to direct start)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 444;
        };
    };
    /** @param 07-05 Delay of Direct Start at Power On — Range: 1.0~300.0, Default: 3.5, Unit: s, Manual p.4-44 */
    readonly "07-05": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-05";
            readonly name: "Delay of Direct Start at Power On";
            readonly range: "1.0~300.0";
            readonly default: "3.5";
            readonly unit: "s";
            readonly page: 444;
        };
    };
    /** @param 07-06 DC Injection Braking Starting Frequency — Range: 0.0~10.0, Default: 0.5, Unit: Hz, Manual p.4-44 */
    readonly "07-06": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-06";
            readonly name: "DC Injection Braking Starting Frequency";
            readonly range: "0.0~10.0";
            readonly default: "0.5";
            readonly unit: "Hz";
            readonly page: 444;
        };
    };
    /** @param 07-07 DC Injection Braking Current — Range: 0~100, Default: 50, Unit: %, Manual p.4-44 */
    readonly "07-07": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-07";
            readonly name: "DC Injection Braking Current";
            readonly range: "0~100";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 444;
        };
    };
    /** @param 07-08 DC Injection Braking Time at Stop — Range: 0.00~100.00, Default: 0.50, Unit: s, Manual p.4-44 */
    readonly "07-08": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-08";
            readonly name: "DC Injection Braking Time at Stop";
            readonly range: "0.00~100.00";
            readonly default: "0.50";
            readonly unit: "s";
            readonly page: 444;
        };
    };
    /** @param 07-09 Stop Mode Selection — Range: 0-3, Default: 0, Manual p.4-44 */
    readonly "07-09": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-09";
            readonly name: "Stop Mode Selection";
            readonly range: "0-3 (0:Decel to Stop / 1:Coast to Stop / 2:DC Braking / 3:Coast to Stop w/ Timer)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 444;
        };
    };
    /** @param 07-13 Low Voltage Detection Level — Range: voltage-dependent, Default: 190/380/546, Unit: V, Manual p.4-44 */
    readonly "07-13": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-13";
            readonly name: "Low Voltage Detection Level";
            readonly range: "150~300 (230V) / 250~600 (460V) / 500~600 (575V/690V)";
            readonly default: "190 (230V) / 380 (460V) / 546 (575V/690V)";
            readonly unit: "V";
            readonly page: 444;
        };
    };
    /** @param 07-14 Pre-excitation Time — Range: 0.00~10.00, Default: 2.00, Unit: s, Manual p.4-44 */
    readonly "07-14": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-14";
            readonly name: "Pre-excitation Time";
            readonly range: "0.00~10.00";
            readonly default: "2.00";
            readonly unit: "s";
            readonly page: 444;
        };
    };
    /** @param 07-15 Pre-excitation Level — Range: 50~200, Default: 100, Unit: %, Manual p.4-44 */
    readonly "07-15": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-15";
            readonly name: "Pre-excitation Level";
            readonly range: "50~200";
            readonly default: "100";
            readonly unit: "%";
            readonly page: 444;
        };
    };
    /** @param 07-16 DC Injection Braking Time at Start — Range: 0.00~100.00, Default: 0.00, Unit: s, Manual p.4-44 */
    readonly "07-16": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-16";
            readonly name: "DC Injection Braking Time at Start";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "s";
            readonly page: 444;
        };
    };
    /** @param 07-18 Minimum Base block Time — Range: 0.1~5.0, Default: *, Unit: Sec, Manual p.4-44 */
    readonly "07-18": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-18";
            readonly name: "Minimum Base block Time";
            readonly range: "0.1~5.0";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "Sec";
            readonly page: 444;
        };
    };
    /** @param 07-19 Direction-Detection Speed Search — Range: 0~100, Default: 50, Unit: %, Manual p.4-44 */
    readonly "07-19": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-19";
            readonly name: "Direction-Detection Speed Search";
            readonly range: "0~100";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 444;
        };
    };
    /** @param 07-20 Speed Search Operating Current — Range: 0~100, Default: 20, Unit: %, Manual p.4-45 */
    readonly "07-20": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-20";
            readonly name: "Speed Search Operating Current";
            readonly range: "0~100";
            readonly default: "20";
            readonly unit: "%";
            readonly page: 445;
        };
    };
    /** @param 07-21 Integral Time of Speed Searching — Range: 0.1~10.0, Default: 2.0, Unit: Sec, Manual p.4-45 */
    readonly "07-21": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-21";
            readonly name: "Integral Time of Speed Searching";
            readonly range: "0.1~10.0";
            readonly default: "2.0";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-22 Delay Time of Speed Searching — Range: 0.0~20.0, Default: 0.2, Unit: Sec, Manual p.4-45 */
    readonly "07-22": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-22";
            readonly name: "Delay Time of Speed Searching";
            readonly range: "0.0~20.0";
            readonly default: "0.2";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-23 Voltage Recovery Time — Range: 0.1~5.0, Default: 2.0, Unit: Sec, Manual p.4-45 */
    readonly "07-23": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-23";
            readonly name: "Voltage Recovery Time";
            readonly range: "0.1~5.0";
            readonly default: "2.0";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-24 Direction-Detection Speed Search Selection — Range: 0-1, Default: 1, Manual p.4-45 */
    readonly "07-24": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-24";
            readonly name: "Direction-Detection Speed Search Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-25 Low Voltage Detection Time — Range: 0.00~1.00, Default: 0.02, Unit: Sec, Manual p.4-45 */
    readonly "07-25": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-25";
            readonly name: "Low Voltage Detection Time";
            readonly range: "0.00~1.00";
            readonly default: "0.02";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-26 Start-up Mode Selection of SLV Coast to Stop — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-26": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-26";
            readonly name: "Start-up Mode Selection of SLV Coast to Stop";
            readonly range: "0-1 (0:Speed search / 1:Normal start)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-27 Start Selection after Fault during SLV Mode — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-27": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-27";
            readonly name: "Start Selection after Fault during SLV Mode";
            readonly range: "0-1 (0:Speed search / 1:Normal start)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-28 Start after External Base Block — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-28": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-28";
            readonly name: "Start after External Base Block";
            readonly range: "0-1 (0:Speed search / 1:Normal start)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-29 Run Command Selection at DC Braking — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-29": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-29";
            readonly name: "Run Command Selection at DC Braking";
            readonly range: "0-1 (0:Not Allowable / 1:Allowable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-30 Low Voltage Level Selection — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-30": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-30";
            readonly name: "Low Voltage Level Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-31 Low Voltage Run Frequency — Range: 0.00~599.00, Default: 10.00, Unit: Hz, Manual p.4-45 */
    readonly "07-31": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-31"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-31";
            readonly name: "Low Voltage Run Frequency";
            readonly range: "0.00~599.00";
            readonly default: "10.00";
            readonly unit: "Hz";
            readonly page: 445;
        };
    };
    /** @param 07-32 Speed Search Mode Selection — Range: 0-2, Default: 0, Manual p.4-45 */
    readonly "07-32": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-32";
            readonly name: "Speed Search Mode Selection";
            readonly range: "0-2 (0:Disable / 1:Mode 1 / 2:Execute each time)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-33 Start Frequency of Speed Search Selection — Range: 0-1, Default: 0, Manual p.4-45 */
    readonly "07-33": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-33";
            readonly name: "Start Frequency of Speed Search Selection";
            readonly range: "0-1 (0:Max Output Freq / 1:Freq Cmd)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 445;
        };
    };
    /** @param 07-34 Short-circuit Braking Time at Start — Range: 0.00~100.00, Default: 0.00, Unit: Sec, Manual p.4-45 */
    readonly "07-34": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-34";
            readonly name: "Short-circuit Braking Time at Start";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-35 Short-circuit Braking Time at Stop — Range: 0.00~100.00, Default: 0.50, Unit: Sec, Manual p.4-45 */
    readonly "07-35": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-35"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-35";
            readonly name: "Short-circuit Braking Time at Stop";
            readonly range: "0.00~100.00";
            readonly default: "0.50";
            readonly unit: "Sec";
            readonly page: 445;
        };
    };
    /** @param 07-36 Short-circuit Braking Current — Range: 0.0~200.0, Default: 100.0, Unit: %, Manual p.4-45 */
    readonly "07-36": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-36"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-36";
            readonly name: "Short-circuit Braking Current";
            readonly range: "0.0~200.0";
            readonly default: "100.0";
            readonly unit: "%";
            readonly page: 445;
        };
    };
    /** @param 07-42 Voltage Limit Gain — Range: 0.0~50.0, Default: 0, Unit: %, Manual p.4-46 */
    readonly "07-42": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-42"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-42";
            readonly name: "Voltage Limit Gain";
            readonly range: "0.0~50.0";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 446;
        };
    };
    /** @param 07-43 Short-circuit Braking Time of PM Speed Search — Range: 0.00~100.00, Default: 0.00, Unit: Sec, Manual p.4-46 */
    readonly "07-43": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-43"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-43";
            readonly name: "Short-circuit Braking Time of PM Speed Search";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "Sec";
            readonly page: 446;
        };
    };
    /** @param 07-44 DC Braking Time of PM Speed Search — Range: 0.00~100.00, Default: 0.00, Unit: Sec, Manual p.4-46 */
    readonly "07-44": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-44";
            readonly name: "DC Braking Time of PM Speed Search";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "Sec";
            readonly page: 446;
        };
    };
    /** @param 07-45 STP2 Function Selection — Range: 0-1, Default: 0, Manual p.4-46 */
    readonly "07-45": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-45";
            readonly name: "STP2 Function Selection";
            readonly range: "0-1 (0:STP2 Enable / 1:STP2 Disable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 446;
        };
    };
    /** @param 07-46 DC Injection Current Limit — Range: 0~150, Default: 100, Unit: %, Manual p.4-46 */
    readonly "07-46": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-46";
            readonly name: "DC Injection Current Limit";
            readonly range: "0~150";
            readonly default: "100";
            readonly unit: "%";
            readonly page: 446;
        };
    };
    readonly "07-37": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-37";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 446;
        };
    };
    readonly "07-38": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-38";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 446;
        };
    };
    readonly "07-39": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-39";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 446;
        };
    };
    readonly "07-40": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-40";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 446;
        };
    };
    readonly "07-41": {
        readonly register: (typeof GROUP_07_Start_Stop_Parameters)["07-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 7;
            readonly code: "07-41";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 446;
        };
    };
};
