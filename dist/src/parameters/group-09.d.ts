/**
 * Group 09: Communication Parameters
 * Manual pages 4-52
 */
import { ParamKind } from "./param-utils";
import { GROUP_09_Communication_Parameters } from "../Registers";
export declare const group09Params: {
    /** @param 09-00 INV Communication Station Address -- Range: 1~31, Default: 1, Manual p.4-52 */
    readonly "09-00": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-00";
            readonly name: "INV Communication Station Address";
            readonly range: "1~31";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-01 Communication Mode Selection -- Range: 0 (MODBUS), Default: 0, Manual p.4-52 */
    readonly "09-01": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-01";
            readonly name: "Communication Mode Selection";
            readonly range: "0 (MODBUS)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-02 Baud Rate Setting (bps) -- Range: 0-5, Default: 4, Manual p.4-52 */
    readonly "09-02": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-02";
            readonly name: "Baud Rate Setting (bps)";
            readonly range: "0-5 (0:1200 / 1:2400 / 2:4800 / 3:9600 / 4:19200 / 5:38400)";
            readonly default: "4";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-03 Stop Bit Selection -- Range: 0-1, Default: 0, Manual p.4-52 */
    readonly "09-03": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-03";
            readonly name: "Stop Bit Selection";
            readonly range: "0-1 (0:1 StopBit / 1:2 StopBit)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-04 Parity Selection -- Range: 0-2, Default: 0, Manual p.4-52 */
    readonly "09-04": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-04";
            readonly name: "Parity Selection";
            readonly range: "0-2 (0:No Parity / 1:Even Bit / 2:Odd Bit)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-05 Communication DataBit Selection -- Range: 0-1, Default: 0, Manual p.4-52 */
    readonly "09-05": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-05";
            readonly name: "Communication DataBit Selection";
            readonly range: "0-1 (0:8 Bit Data / 1:7 Bit Data)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-06 Communication Error Detection Time -- Range: 0.0~25.5, Default: 0.0, Unit: S, Manual p.4-52 */
    readonly "09-06": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-06";
            readonly name: "Communication Error Detection Time";
            readonly range: "0.0~25.5";
            readonly default: "0.0";
            readonly unit: "S";
            readonly page: 452;
        };
    };
    /** @param 09-07 Fault Stop Selection -- Range: 0-3, Default: 3, Manual p.4-52 */
    readonly "09-07": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-07";
            readonly name: "Fault Stop Selection";
            readonly range: "0-3 (0:Decel stop DT1 / 1:Coast stop / 2:Decel stop DT2 / 3:Keep operating)";
            readonly default: "3";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-08 Comm. Fault Tolerance Count -- Range: 1~20, Default: 1, Manual p.4-52 */
    readonly "09-08": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-08";
            readonly name: "Comm. Fault Tolerance Count";
            readonly range: "1~20";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 452;
        };
    };
    /** @param 09-09 Waiting Time -- Range: 5~65, Default: 5, Unit: ms, Manual p.4-52 */
    readonly "09-09": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-09";
            readonly name: "Waiting Time";
            readonly range: "5~65";
            readonly default: "5";
            readonly unit: "ms";
            readonly page: 452;
        };
    };
    readonly "09-10": {
        readonly register: (typeof GROUP_09_Communication_Parameters)["09-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 9;
            readonly code: "09-10";
            readonly name: "Reserved";
            readonly range: "-";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 452;
        };
    };
};
