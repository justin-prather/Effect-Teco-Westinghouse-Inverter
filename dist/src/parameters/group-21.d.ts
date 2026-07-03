/**
 * Group 21: Torque And Position Control Parameters
 * Manual pages 4-82 to 4-85
 */
import { ParamKind } from "./param-utils";
import { GROUP_21_Torque_And_Position_Control_Parameters } from "../Registers";
export declare const group21Params: {
    readonly "21-00": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-00";
            readonly name: "Torque Control Selection";
            readonly range: "0-1 (0:Speed Control / 1:Torque Control)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "21-01": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-01";
            readonly name: "Filter Time of Torque Reference";
            readonly range: "0~1000";
            readonly default: "0";
            readonly unit: "ms";
            readonly page: 482;
        };
    };
    readonly "21-02": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-02";
            readonly name: "Speed Limit Selection";
            readonly range: "0-2 (0:AI input / 1:21-03 value / 2:Comm 2502H)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "21-03": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-03"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-03";
            readonly name: "Speed Limit Value";
            readonly range: "-120~120";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-04": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-04";
            readonly name: "Speed Limit Bias";
            readonly range: "0~120";
            readonly default: "10";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-05": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-05";
            readonly name: "Positive Torque Limit";
            readonly range: "0~300";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-06": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-06";
            readonly name: "Negative Torque Limit";
            readonly range: "0~300";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-07": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-07";
            readonly name: "Forward Regenerative Torque Limit";
            readonly range: "0~300";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-08": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-08";
            readonly name: "Reversal Regenerative Torque Limit";
            readonly range: "0~300";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "%";
            readonly page: 482;
        };
    };
    readonly "21-09": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-09";
            readonly name: "Maximum Frequency of Position Control";
            readonly range: "0.1~100.0";
            readonly default: "20.0";
            readonly unit: "Hz";
            readonly page: 482;
        };
    };
    readonly "21-10": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-10";
            readonly name: "Command of Rotation Cycle Number of Section 0";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-11": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-11";
            readonly name: "Command of the Pulse Number of Section 0";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-12": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-12";
            readonly name: "Command of Rotation Cycle Number of Section 1";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-13": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-13";
            readonly name: "Command of the Pulse Number of Section 1";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-14": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-14";
            readonly name: "Command of Rotation Cycle Number of Section 2";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-15": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-15";
            readonly name: "Command of the Pulse Number of Section 2";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-16": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-16";
            readonly name: "Command of Rotation Cycle Number of Section 3";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-17": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-17";
            readonly name: "Command of the Pulse Number of Section 3";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-18": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-18";
            readonly name: "Command of Rotation Cycle Number of Section 4";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-19": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-19";
            readonly name: "Command of the Pulse Number of Section 4";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-20": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-20";
            readonly name: "Command of Rotation Cycle Number of Section 5";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-21": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-21";
            readonly name: "Command of the Pulse Number of Section 5";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-22": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-22";
            readonly name: "Command of Rotation Cycle Number of Section 6";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-23": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-23";
            readonly name: "Command of the Pulse Number of Section 6";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-24": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-24";
            readonly name: "Command of Rotation Cycle Number of Section 7";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-25": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-25";
            readonly name: "Command of the Pulse Number of Section 7";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 483;
        };
    };
    readonly "21-26": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-26";
            readonly name: "Command of the Pulse Number of Section 8";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-27": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-27";
            readonly name: "Command of Rotation Cycle Number of Section 8";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-28": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-28";
            readonly name: "Command of the Pulse Number of Section 9";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-29": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-29";
            readonly name: "Command of Rotation Cycle Number of Section 9";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-30": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-30";
            readonly name: "Command of Rotation Cycle Number of Section 10";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-31": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-31";
            readonly name: "Command of the Pulse Number of Section 10";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-32": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-32";
            readonly name: "Command of Rotation Cycle Number of Section 11";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-33": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-33";
            readonly name: "Command of the Pulse Number of Section 11";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-34": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-34";
            readonly name: "Command of Rotation Cycle Number of Section 12";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-35": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-35";
            readonly name: "Command of the Pulse Number of Section 12";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-36": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-36";
            readonly name: "Command of Rotation Cycle Number of Section 13";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-37": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-37";
            readonly name: "Command of the Pulse Number of Section 13";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-38": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-38";
            readonly name: "Command of Rotation Cycle Number of Section 14";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-39": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-39";
            readonly name: "Command of the Pulse Number of Section 14";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-40": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-40";
            readonly name: "Command of Rotation Cycle Number of Section 15";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-41": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-41";
            readonly name: "Command of the Pulse Number of Section 15";
            readonly range: "-9999~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 484;
        };
    };
    readonly "21-42": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-42";
            readonly name: "Pos. Mode Sel";
            readonly range: "0-1 (0:Switch to pos mode when freq<01-08 / 1:Z Phase Locked)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 485;
        };
    };
    readonly "21-43": {
        readonly register: (typeof GROUP_21_Torque_And_Position_Control_Parameters)["21-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 21;
            readonly code: "21-43";
            readonly name: "Offset Angle";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "Pulse";
            readonly page: 485;
        };
    };
};
