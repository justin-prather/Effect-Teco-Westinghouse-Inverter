/**
 * Group 20: Speed Control Parameters
 * Manual pages 4-80 to 4-82 (p480, p481, p482)
 */
import { ParamKind } from "./param-utils";
import { GROUP_20_Speed_Control_Parameters } from "../Registers";
export declare const group20Params: {
    readonly "20-00": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-00"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-00";
            readonly name: "ASR Gain 1";
            readonly range: "0.00~250.00";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 480;
        };
    };
    readonly "20-01": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-01";
            readonly name: "ASR Integral Time 1";
            readonly range: "0.001~10.000";
            readonly default: "-";
            readonly unit: "Sec";
            readonly page: 480;
        };
    };
    readonly "20-02": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-02";
            readonly name: "ASR Gain 2";
            readonly range: "0.00~250.00";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 480;
        };
    };
    readonly "20-03": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-03";
            readonly name: "ASR Integral Time 2";
            readonly range: "0.001~10.000";
            readonly default: "-";
            readonly unit: "Sec";
            readonly page: 480;
        };
    };
    readonly "20-04": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-04";
            readonly name: "ASR Integral Time Limit";
            readonly range: "0~300";
            readonly default: "200";
            readonly unit: "%";
            readonly page: 480;
        };
    };
    readonly "20-05": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-05";
            readonly name: "ASR Positive Limit";
            readonly range: "0.1~10.0";
            readonly default: "5.0";
            readonly unit: "%";
            readonly page: 480;
        };
    };
    readonly "20-06": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-06";
            readonly name: "ASR Negative Limit";
            readonly range: "0.1~10.0";
            readonly default: "1.0";
            readonly unit: "%";
            readonly page: 480;
        };
    };
    readonly "20-07": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-07";
            readonly name: "Selection of Accel/Decel P/PI";
            readonly range: "0-1 (0:PI only constant speed / 1:P during accel/decel)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 480;
        };
    };
    readonly "20-08": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-08";
            readonly name: "ASR Delay Time";
            readonly range: "0.000~0.500";
            readonly default: "0.004";
            readonly unit: "Sec";
            readonly page: 480;
        };
    };
    readonly "20-09": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-09";
            readonly name: "Speed Observer P Gain 1";
            readonly range: "0.00~2.55";
            readonly default: "0.61";
            readonly unit: "-";
            readonly page: 480;
        };
    };
    readonly "20-10": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-10";
            readonly name: "Speed Observer I Time 1";
            readonly range: "0.01~10.00";
            readonly default: "0.05";
            readonly unit: "Sec";
            readonly page: 480;
        };
    };
    readonly "20-11": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-11"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-11";
            readonly name: "Speed Observer P Gain 2";
            readonly range: "0.00~2.55";
            readonly default: "0.61";
            readonly unit: "-";
            readonly page: 480;
        };
    };
    readonly "20-12": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-12";
            readonly name: "Speed Observer I Time 2";
            readonly range: "0.01~10.00";
            readonly default: "0.06";
            readonly unit: "Sec";
            readonly page: 480;
        };
    };
    readonly "20-13": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-13";
            readonly name: "Low-pass Filter Time of Speed Feedback 1";
            readonly range: "1~1000";
            readonly default: "4";
            readonly unit: "ms";
            readonly page: 480;
        };
    };
    readonly "20-14": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-14";
            readonly name: "Low-pass Filter Time of Speed Feedback 2";
            readonly range: "1~1000";
            readonly default: "30";
            readonly unit: "ms";
            readonly page: 480;
        };
    };
    readonly "20-15": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-15";
            readonly name: "ASR Gain Change Frequency 1";
            readonly range: "0.0~599.0";
            readonly default: "4.0";
            readonly unit: "Hz";
            readonly page: 481;
        };
    };
    readonly "20-16": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-16";
            readonly name: "ASR Gain Change Frequency 2";
            readonly range: "0.0~599.0";
            readonly default: "8.0";
            readonly unit: "Hz";
            readonly page: 481;
        };
    };
    readonly "20-17": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-17";
            readonly name: "Torque Compensation Gain at Low Speed";
            readonly range: "0.00~2.50";
            readonly default: "1.00";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-18": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-18";
            readonly name: "Torque Compensation Gain at High Speed";
            readonly range: "-10~10";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 481;
        };
    };
    readonly "20-19": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-19";
            readonly name: "Over Speed (OS) Selection";
            readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-20": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-20";
            readonly name: "Over Speed (OS) Detection Level";
            readonly range: "0~120";
            readonly default: "115";
            readonly unit: "%";
            readonly page: 481;
        };
    };
    readonly "20-21": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-21";
            readonly name: "Over Speed (OS) Detection Time";
            readonly range: "0.0~2.0";
            readonly default: "0.5";
            readonly unit: "Sec";
            readonly page: 481;
        };
    };
    readonly "20-22": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-22";
            readonly name: "Speed Deviation (DEV) Selection";
            readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-23": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-23";
            readonly name: "Speed Deviation (DEV) Detection Level";
            readonly range: "0~50";
            readonly default: "10";
            readonly unit: "%";
            readonly page: 481;
        };
    };
    readonly "20-24": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-24";
            readonly name: "Speed Deviation (DEV) Detection Time";
            readonly range: "0.0~10.0";
            readonly default: "0.5";
            readonly unit: "Sec";
            readonly page: 481;
        };
    };
    readonly "20-25": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-25";
            readonly name: "Selection of PG Open";
            readonly range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-26": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-26"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-26";
            readonly name: "Detection Time of PG Open";
            readonly range: "0.0~10.0";
            readonly default: "2.0";
            readonly unit: "Sec";
            readonly page: 481;
        };
    };
    readonly "20-27": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-27";
            readonly name: "PG Pulse Number";
            readonly range: "0~9999";
            readonly default: "1024";
            readonly unit: "ppr";
            readonly page: 481;
        };
    };
    readonly "20-28": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-28";
            readonly name: "Selection of PG Rotation Direction";
            readonly range: "0-1 (0:CCW / 1:CW)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-29": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-29";
            readonly name: "PG Pulse Dividing Ratio";
            readonly range: "001~132";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 481;
        };
    };
    readonly "20-30": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-30";
            readonly name: "PG Gear Ratio 1";
            readonly range: "1~1000";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-31": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-31";
            readonly name: "PG Gear Ratio 2";
            readonly range: "1~1000";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-32": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-32";
            readonly name: "Selection of Specific Encoder";
            readonly range: "0-1 (0:None / 1:Resolver)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-33": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-33"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-33";
            readonly name: "Detection Level at Constant Speed";
            readonly range: "0.1~5.0";
            readonly default: "1.0";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-34": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-34";
            readonly name: "Compensation Gain of Derating";
            readonly range: "0~25600";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-35": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-35";
            readonly name: "Compensation Time of Derating";
            readonly range: "0~30000";
            readonly default: "100";
            readonly unit: "ms";
            readonly page: 482;
        };
    };
    readonly "20-43": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-43";
            readonly name: "MPG Speed Magnification Calculation";
            readonly range: "1~500";
            readonly default: "20";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-44": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-44";
            readonly name: "MPG Speed Command Limit";
            readonly range: "0.1~30.0";
            readonly default: "6.0";
            readonly unit: "Hz";
            readonly page: 482;
        };
    };
    readonly "20-36": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-36";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-37": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-37";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-38": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-38";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-39": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-39";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-40": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-40";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-41": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-41";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
    readonly "20-42": {
        readonly register: (typeof GROUP_20_Speed_Control_Parameters)["20-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 20;
            readonly code: "20-42";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 482;
        };
    };
};
