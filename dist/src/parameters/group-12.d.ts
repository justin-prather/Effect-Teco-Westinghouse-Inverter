/**
 * Group 12: Monitoring Parameters
 * Manual pages 4-62 to 4-67
 */
import { ParamKind } from "./param-utils";
import { GROUP_12_Monitoring_Parameters } from "../Registers";
export declare const group12Params: {
    readonly "12-00": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-00";
            readonly name: "Display Screen Selection (LED)";
            readonly range: "00000~77777";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 462;
        };
    };
    readonly "12-01": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-01";
            readonly name: "PID Feedback Display Mode (LED)";
            readonly range: "0-2 (0:Integer / 1:1 decimal / 2:2 decimals)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 462;
        };
    };
    readonly "12-02": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-02";
            readonly name: "PID Feedback Display Unit Setting (LED)";
            readonly range: "0-2 (0:xxxxx / 1:xxxPb / 2:xxxFL)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 462;
        };
    };
    readonly "12-03": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-03";
            readonly name: "Line Speed Display (LED)";
            readonly range: "0~60000";
            readonly default: "1500";
            readonly unit: "RPM";
            readonly page: 462;
        };
    };
    readonly "12-04": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-04";
            readonly name: "Modes of Line Speed Display (LED)";
            readonly range: "0-4 (0:Output Freq / 1:Integer / 2:1 dec / 3:2 dec / 4:3 dec)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 462;
        };
    };
    readonly "12-05": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-05";
            readonly name: "Status Display of Digital Input & Output Terminal";
            readonly range: "bit-field (see manual)";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 462;
        };
    };
    readonly "12-11": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-11";
            readonly name: "Output Current of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "A";
            readonly page: 463;
        };
    };
    readonly "12-12": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-12";
            readonly name: "Output Voltage of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 463;
        };
    };
    readonly "12-13": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-13";
            readonly name: "Output Frequency of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 463;
        };
    };
    readonly "12-14": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-14";
            readonly name: "DC Voltage of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 463;
        };
    };
    readonly "12-15": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-15";
            readonly name: "Frequency Command of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 463;
        };
    };
    readonly "12-16": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-16";
            readonly name: "Frequency Command";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 463;
        };
    };
    readonly "12-17": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-17";
            readonly name: "Output Frequency";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 463;
        };
    };
    readonly "12-18": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-18";
            readonly name: "Output Current";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "A";
            readonly page: 463;
        };
    };
    readonly "12-19": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-19";
            readonly name: "Output Voltage";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 463;
        };
    };
    readonly "12-20": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-20";
            readonly name: "DC Voltage (Vdc)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 463;
        };
    };
    readonly "12-21": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-21";
            readonly name: "Output Power (kW)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "kW";
            readonly page: 463;
        };
    };
    readonly "12-22": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-22";
            readonly name: "Motor's Rotation Speed (rpm)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "rpm";
            readonly page: 463;
        };
    };
    readonly "12-23": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-23";
            readonly name: "Output Power Factor (Pfo)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 463;
        };
    };
    readonly "12-24": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-24";
            readonly name: "Control Mode";
            readonly range: "Display only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 463;
        };
    };
    readonly "12-25": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-25";
            readonly name: "AI1 Input";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-26": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-26";
            readonly name: "AI2 Input";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-27": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-27";
            readonly name: "Motor Torque";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-28": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-28";
            readonly name: "Motor Torque Current (Iq)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-29": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-29";
            readonly name: "Motor Excitation Current (Id)";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-30": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-30";
            readonly name: "ASR Deviation";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 463;
        };
    };
    readonly "12-32": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-32";
            readonly name: "ASR Output";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-33": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-33";
            readonly name: "PG Feedback";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-34": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-34";
            readonly name: "PG Pulse Number";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Pulse";
            readonly page: 464;
        };
    };
    readonly "12-35": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-35";
            readonly name: "Zero-servo Pulse Number";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Pulse";
            readonly page: 464;
        };
    };
    readonly "12-36": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-36";
            readonly name: "PID Input";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-37": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-37";
            readonly name: "PID Output";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-38": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-38";
            readonly name: "PID Setting";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-39": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-39";
            readonly name: "PID Feedback";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 464;
        };
    };
    readonly "12-41": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-41";
            readonly name: "Heatsink Temperature";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "℃";
            readonly page: 464;
        };
    };
    readonly "12-42": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-42";
            readonly name: "RS-485 Error Code";
            readonly range: "bit-field (CRC/Data len/Function/Parity/Overrun/Framing/Timeout)";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 464;
        };
    };
    readonly "12-43": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-43";
            readonly name: "Inverter Status";
            readonly range: "bit-field (Ready/Running/Zero speed/Speed agree/Fault minor/Fault major)";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 464;
        };
    };
    readonly "12-44": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-44"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-44";
            readonly name: "Pulse Input Frequency";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 464;
        };
    };
    readonly "12-45": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-45";
            readonly name: "Recent Fault Message";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-46": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-46";
            readonly name: "Previous Fault Message";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-47": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-47";
            readonly name: "Previous Two Fault Messages";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-48": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-48"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-48";
            readonly name: "Previous Three Fault Messages";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-49": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-49"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-49";
            readonly name: "Previous Four Fault Messages";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-50": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-50"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-50";
            readonly name: "DIO Status of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-51": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-51"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-51";
            readonly name: "Inverter Status of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-52": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-52"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-52";
            readonly name: "Trip Time 1 of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hr";
            readonly page: 465;
        };
    };
    readonly "12-53": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-53"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-53";
            readonly name: "Trip Time 2 of Current Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "day";
            readonly page: 465;
        };
    };
    readonly "12-54": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-54"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-54";
            readonly name: "Frequency Command of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 465;
        };
    };
    readonly "12-55": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-55"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-55";
            readonly name: "Output Frequency of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hz";
            readonly page: 465;
        };
    };
    readonly "12-56": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-56"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-56";
            readonly name: "Output Current of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "A";
            readonly page: 465;
        };
    };
    readonly "12-57": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-57"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-57";
            readonly name: "Output Voltage of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 465;
        };
    };
    readonly "12-58": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-58"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-58";
            readonly name: "DC Voltage of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 465;
        };
    };
    readonly "12-59": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-59"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-59";
            readonly name: "DIO Status of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-60": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-60"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-60";
            readonly name: "Inverter Status of Previous Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-61": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-61"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-61";
            readonly name: "Trip Time 1 of Last Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "Hr";
            readonly page: 465;
        };
    };
    readonly "12-62": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-62"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-62";
            readonly name: "Trip Time 2 of Last Fault";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "day";
            readonly page: 465;
        };
    };
    readonly "12-63": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-63"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-63";
            readonly name: "Recent Warning Messages";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-64": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-64"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-64";
            readonly name: "Previous Warning Message";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 465;
        };
    };
    readonly "12-65": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-65"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-65";
            readonly name: "Motor Start Angle";
            readonly range: "0~360";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 466;
        };
    };
    readonly "12-66": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-66"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-66";
            readonly name: "Encoder Angle";
            readonly range: "0~360";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 466;
        };
    };
    readonly "12-67": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-67"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-67";
            readonly name: "Cumulative Energy (kWHr)";
            readonly range: "0.0~999.9";
            readonly default: "-";
            readonly unit: "kWHr";
            readonly page: 466;
        };
    };
    readonly "12-68": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-68"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-68";
            readonly name: "Cumulative Energy (MWHr)";
            readonly range: "0~60000";
            readonly default: "-";
            readonly unit: "MWHr";
            readonly page: 466;
        };
    };
    readonly "12-76": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-76"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-76";
            readonly name: "No-Load Voltage Output";
            readonly range: "0.0~600.0";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 467;
        };
    };
    readonly "12-78": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-78"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-78";
            readonly name: "Z-Phase Bias Value";
            readonly range: "-9999~9999";
            readonly default: "-";
            readonly unit: "Pulse";
            readonly page: 467;
        };
    };
    readonly "12-79": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-79"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-79";
            readonly name: "Pulse Input Percentage";
            readonly range: "0.0~100.0";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 467;
        };
    };
    readonly "12-80": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-80"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-80";
            readonly name: "AI1 Frequency Command";
            readonly range: "0.0~599.0";
            readonly default: "0";
            readonly unit: "Hz";
            readonly page: 467;
        };
    };
    readonly "12-82": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-82"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-82";
            readonly name: "Motor Load";
            readonly range: "0~200.0";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 467;
        };
    };
    readonly "12-85": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-85"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-85";
            readonly name: "AI3 Input";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 467;
        };
    };
    readonly "12-81": {
        readonly register: (typeof GROUP_12_Monitoring_Parameters)["12-81"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 12;
            readonly code: "12-81";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 467;
        };
    };
};
