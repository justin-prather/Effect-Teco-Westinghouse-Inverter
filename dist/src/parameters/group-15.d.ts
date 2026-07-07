/**
 * Group 15: PLC Monitoring Parameters
 * Manual page 4-73
 */
import { ParamKind } from "modbus-schema";
import { GROUP_15_PLC_Monitoring_Parameters } from "../Registers";
export declare const group15Params: {
    readonly "15-00": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-00";
            readonly name: "T1 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-01": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-01";
            readonly name: "T1 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-02": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-02";
            readonly name: "T2 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-03": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-03";
            readonly name: "T2 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-04": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-04";
            readonly name: "T3 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-05": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-05";
            readonly name: "T3 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-06": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-06";
            readonly name: "T4 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-07": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-07";
            readonly name: "T4 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-08": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-08";
            readonly name: "T5 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-09": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-09";
            readonly name: "T5 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-10": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-10";
            readonly name: "T6 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-11": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-11";
            readonly name: "T6 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-12": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-12";
            readonly name: "T7 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-13": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-13";
            readonly name: "T7 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-14": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-14";
            readonly name: "T8 Current Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-15": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-15";
            readonly name: "T8 Current Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-16": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-16";
            readonly name: "C1 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-17": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-17";
            readonly name: "C2 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-18": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-18";
            readonly name: "C3 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-19": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-19";
            readonly name: "C4 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-20": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-20";
            readonly name: "C5 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-21": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-21";
            readonly name: "C6 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-22": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-22";
            readonly name: "C7 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-23": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-23";
            readonly name: "C8 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-24": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-24";
            readonly name: "AS1 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-25": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-25";
            readonly name: "AS2 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-26": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-26";
            readonly name: "AS3 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-27": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-27";
            readonly name: "AS4 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-28": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-28";
            readonly name: "MD1 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-29": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-29";
            readonly name: "MD2 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-30": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-30";
            readonly name: "MD3 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-31": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-31";
            readonly name: "MD4 Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
    readonly "15-32": {
        readonly register: (typeof GROUP_15_PLC_Monitoring_Parameters)["15-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 15;
            readonly code: "15-32";
            readonly name: "TD Current Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 473;
        };
    };
};
