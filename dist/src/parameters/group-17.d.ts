/**
 * Group 17: Automatic Tuning Parameters
 * Manual pages 4-78 to 4-79 (p478, p479)
 */
import { ParamKind } from "modbus-schema";
import { GROUP_17_Automatic_Tuning_Parameters } from "../Registers";
export declare const group17Params: {
    readonly "17-00": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-00";
            readonly name: "Mode Selection of Automatic Tuning";
            readonly range: "0-6 (0:Rotation / 1:Static / 2:Stator R / 3:Reserved / 4:Loop / 5:Rot comb(4+2+0) / 6:Static comb(4+2+1))";
            readonly default: "2 / 6";
            readonly unit: "-";
            readonly page: 478;
        };
    };
    readonly "17-01": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-01";
            readonly name: "Motor Rated Output Power";
            readonly range: "0.00~600.00";
            readonly default: "*";
            readonly unit: "kW";
            readonly page: 478;
        };
    };
    readonly "17-02": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-02";
            readonly name: "Motor Rated Current";
            readonly range: "0.1~1200.0";
            readonly default: "*";
            readonly unit: "A";
            readonly page: 478;
        };
    };
    readonly "17-03": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-03";
            readonly name: "Motor Rated Voltage";
            readonly range: "200V:50.0~240.0 / 400V:100.0~480.0 / 575V:150.0~670.0 / 690V:180.0~804.0";
            readonly default: "220.0 / 440.0 / 575.0 / 690.0";
            readonly unit: "V";
            readonly page: 478;
        };
    };
    readonly "17-04": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-04";
            readonly name: "Motor Rated Frequency";
            readonly range: "4.8~599.0";
            readonly default: "50.0 / 60.0";
            readonly unit: "Hz";
            readonly page: 478;
        };
    };
    readonly "17-05": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-05";
            readonly name: "Motor Rated Speed";
            readonly range: "0~24000";
            readonly default: "*";
            readonly unit: "rpm";
            readonly page: 478;
        };
    };
    readonly "17-06": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-06";
            readonly name: "Pole Number of Motor";
            readonly range: "2~16 (Even)";
            readonly default: "4";
            readonly unit: "Pole";
            readonly page: 478;
        };
    };
    readonly "17-07": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-07";
            readonly name: "PG Pulse Number";
            readonly range: "0~60000";
            readonly default: "1024";
            readonly unit: "ppr";
            readonly page: 478;
        };
    };
    readonly "17-08": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-08";
            readonly name: "Motor No-load Voltage";
            readonly range: "200V:50~240 / 400V:100~480 / 575V:420~600 / 690V:504~720";
            readonly default: "150 / 300 / 575 / 690";
            readonly unit: "V";
            readonly page: 478;
        };
    };
    readonly "17-09": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-09";
            readonly name: "Motor Excitation Current";
            readonly range: "0.01~600.00";
            readonly default: "*";
            readonly unit: "A";
            readonly page: 478;
        };
    };
    readonly "17-10": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-10";
            readonly name: "Automatic Tuning Start";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "17-11": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-11";
            readonly name: "Error History of Automatic Tuning";
            readonly range: "0-9 (0:No error / 1:Motor data / 2:Stator R / 3:Leakage L / 4:Rotor R / 5:Mutual L / 6:Encoder / 7:DT / 8:Accel / 9:Warning)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "17-12": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-12";
            readonly name: "Proportion of Motor Leakage Inductance";
            readonly range: "0.1~15.0";
            readonly default: "3.4";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "17-13": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-13";
            readonly name: "Motor Slip Frequency";
            readonly range: "0.10~20.00";
            readonly default: "1.00";
            readonly unit: "Hz";
            readonly page: 479;
        };
    };
    readonly "17-14": {
        readonly register: (typeof GROUP_17_Automatic_Tuning_Parameters)["17-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 17;
            readonly code: "17-14";
            readonly name: "Selection of Rotation Auto-tuning";
            readonly range: "0-1 (0:VF Rotation / 1:Vector Rotation)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
};
