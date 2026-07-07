/**
 * Group 06: Automatic Program Operation Parameters
 * Manual pages 4-40 to 4-43
 *
 * Three families:
 *   06-01…06-15  frequency settings     ×0.01 Hz
 *   06-16…06-31  operation times         ×0.1 s
 *   06-32…06-47  direction selections    0/1/2 (simple UInt16)
 */
import { ParamKind } from "modbus-schema";
import { GROUP_06_Automatic_Program_Operation_Parameters } from "../Registers";
export declare const group06Params: {
    readonly "06-00": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 6;
            readonly code: "06-00";
            readonly name: "Automatic Operation Mode Selection";
            readonly range: "0-6";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 440;
        };
    };
    readonly "06-32": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-33": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-34": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-35": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-36": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-37": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-38": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-39": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-40": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-41": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-42": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-43": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-44": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-44"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-45": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-46": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-47": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-01": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-02": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-03": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-04": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-05": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-06": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-07": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-08": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-09": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-10": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-11": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-11"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-12": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-13": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-14": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-15": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-16": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-17": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-18": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-19": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-19"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-20": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-21": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-22": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-23": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-24": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-25": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-26": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-26"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-27": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-27"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-28": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-28"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-29": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-29"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-30": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-30"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
    readonly "06-31": {
        readonly register: (typeof GROUP_06_Automatic_Program_Operation_Parameters)["06-31"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            group: 6;
            code: string;
            name: string;
            range: string;
            default: string;
            unit: string;
            page: number;
        };
    };
};
