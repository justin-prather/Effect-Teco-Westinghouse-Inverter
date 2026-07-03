/**
 * Group 14: PLC Setting Parameters
 * Manual page 4-72
 */
import { ParamKind } from "./param-utils";
import { GROUP_14_PLC_Parameters } from "../Registers";
export declare const group14Params: {
    readonly "14-00": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-00";
            readonly name: "T1 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-01": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-01";
            readonly name: "T1 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-02": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-02";
            readonly name: "T2 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-03": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-03";
            readonly name: "T2 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-04": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-04";
            readonly name: "T3 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-05": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-05";
            readonly name: "T3 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-06": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-06";
            readonly name: "T4 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-07": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-07";
            readonly name: "T4 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-08": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-08";
            readonly name: "T5 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-09": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-09";
            readonly name: "T5 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-10": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-10";
            readonly name: "T6 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-11": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-11";
            readonly name: "T6 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-12": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-12";
            readonly name: "T7 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-13": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-13";
            readonly name: "T7 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-14": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-14";
            readonly name: "T8 Set Value 1";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-15": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-15";
            readonly name: "T8 Set Value 2 (Mode 7)";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-16": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-16"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-16";
            readonly name: "C1 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-17": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-17";
            readonly name: "C2 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-18": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-18";
            readonly name: "C3 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-19": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-19";
            readonly name: "C4 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-20": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-20";
            readonly name: "C5 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-21": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-21";
            readonly name: "C6 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-22": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-22";
            readonly name: "C7 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-23": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-23";
            readonly name: "C8 Set Value";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-24": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-24";
            readonly name: "AS1 Set Value 1";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-25": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-25";
            readonly name: "AS1 Set Value 2";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-26": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-26";
            readonly name: "AS1 Set Value 3";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-27": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-27";
            readonly name: "AS2 Set Value 1";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-28": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-28";
            readonly name: "AS2 Set Value 2";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-29": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-29";
            readonly name: "AS2 Set Value 3";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-30": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-30";
            readonly name: "AS3 Set Value 1";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-31": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-31";
            readonly name: "AS3 Set Value 2";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-32": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-32";
            readonly name: "AS3 Set Value 3";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-33": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-33";
            readonly name: "AS4 Set Value 1";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-34": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-34";
            readonly name: "AS4 Set Value 2";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-35": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-35";
            readonly name: "AS4 Set Value 3";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-36": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-36";
            readonly name: "MD1 Set Value 1";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-37": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-37";
            readonly name: "MD1 Set Value 2";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-38": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-38";
            readonly name: "MD1 Set Value 3";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-39": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-39";
            readonly name: "MD2 Set Value 1";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-40": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-40";
            readonly name: "MD2 Set Value 2";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-41": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-41";
            readonly name: "MD2 Set Value 3";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-42": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-42";
            readonly name: "MD3 Set Value 1";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-43": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-43";
            readonly name: "MD3 Set Value 2";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-44": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-44"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-44";
            readonly name: "MD3 Set Value 3";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-45": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-45";
            readonly name: "MD4 Set Value 1";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-46": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-46";
            readonly name: "MD4 Set Value 2";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
    readonly "14-47": {
        readonly register: (typeof GROUP_14_PLC_Parameters)["14-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 14;
            readonly code: "14-47";
            readonly name: "MD4 Set Value 3";
            readonly range: "0~65534";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 472;
        };
    };
};
