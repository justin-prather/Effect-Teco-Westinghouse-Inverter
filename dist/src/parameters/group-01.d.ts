/**
 * Group 01: V/F Control Parameters
 * Manual pages 4-22 to 4-24
 *
 * Parameter                           | Range              | Default       | Unit | Register
 * 01-00  V/F Curve Selection          | 0~FF (hex)         | F             | -    | 0x0100
 * 01-02  Max Output Freq Motor 1      | 4.8~599.0          | 50.0/60.0     | Hz   | 0x0102
 * 01-03  Max Output Voltage Motor 1   | 0.1~255.0 (230V)   | -             | V    | 0x0103
 * 01-04  Middle Freq 2 Motor 1        | 0.0~599.0          | 0.0           | Hz   | 0x0104
 * 01-05  Middle Voltage 2 Motor 1     | 0.0~255.0 (230V)   | 0.0           | V    | 0x0105
 * 01-06  Middle Freq 1 Motor 1        | 0.0~599.0          | 3.0           | Hz   | 0x0106
 * 01-07  Middle Voltage 1 Motor 1     | 0.0~255.0 (230V)   | ***** (KVA)   | V    | 0x0107
 * 01-08  Min Output Freq Motor 1      | 0.0~599.0          | VF:1.5        | Hz   | 0x0108
 * 01-09  Min Output Voltage Motor 1   | 0.0~255.0 (230V)   | 8.3 (230V)    | V    | 0x0109
 * 01-10  Torque Compensation Gain     | 0.0~2.0            | 0.5           | -    | 0x010A
 * 01-11  Torque Compensation Mode     | 0-1                | 0             | -    | 0x010B
 * 01-12  Base Freq Motor 1            | 4.8~599.0          | 50.0/60.0     | Hz   | 0x010C
 * 01-13  Base Output Voltage Motor 1  | 0.0~255.0 (230V)   | -             | V    | 0x010D
 * 01-14  Input Voltage Setting        | 155.0~255.0 (230V) | -             | V    | 0x010E
 * 01-15  Torque Compensation Time     | 0~10000            | 200           | ms   | 0x010F
 * 01-16  Max Output Freq Motor 2      | 4.8~599.0          | 50.0/60.0     | Hz   | 0x0110
 * 01-17  Max Output Voltage Motor 2   | 0.1~255.0 (230V)   | -             | V    | 0x0111
 * 01-18  Middle Freq 2 Motor 2        | 0.0~599.0          | 0.0           | Hz   | 0x0112
 * 01-19  Middle Voltage 2 Motor 2     | 0.0~255.0 (230V)   | 0.0           | V    | 0x0113
 * 01-20  Middle Freq 1 Motor 2        | 0.0~599.0          | 3.0           | Hz   | 0x0114
 * 01-21  Middle Voltage 1 Motor 2     | 0.0~255.0 (230V)   | KVA           | V    | 0x0115
 * 01-22  Min Output Freq Motor 2      | 0.0~599.0          | 1.5           | Hz   | 0x0116
 * 01-23  Min Output Voltage Motor 2   | 0.0~255.0 (230V)   | KVA           | V    | 0x0117
 * 01-24  Base Freq Motor 2            | 4.8~599.0          | 50.0/60.0     | Hz   | 0x0118
 * 01-25  Base Output Voltage Motor 2  | 0.0~255.0 (230V)   | -             | V    | 0x0119
 * 01-26  V/F Curve Selection Motor 2  | 0~FF (hex)         | F             | -    | 0x011A
 */
import { ParamKind } from "modbus-schema";
import { GROUP_01_VF_Control_Parameters } from "../Registers";
export declare const group01Params: {
    /** @param 01-00 V/F Curve Selection — Range: 0~FF (hex), Default: F, Manual p.4-22 */
    readonly "01-00": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-00";
            readonly name: "V/F Curve Selection";
            readonly range: "0~FF (hex)";
            readonly default: "F (hex)";
            readonly unit: "-";
            readonly page: 422;
        };
    };
    /** @param 01-02 Maximum Output Frequency of Motor 1 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-22 */
    readonly "01-02": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-02";
            readonly name: "Maximum Output Frequency of Motor 1";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 422;
        };
    };
    /** @param 01-03 Maximum Output Voltage of Motor 1 — Range: 0.1~255.0 (230V), Default: -, Unit: V, Manual p.4-22 */
    readonly "01-03": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-03";
            readonly name: "Maximum Output Voltage of Motor 1";
            readonly range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 422;
        };
    };
    /** @param 01-04 Middle Output Frequency 2 of Motor 1 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-22 */
    readonly "01-04": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-04";
            readonly name: "Middle Output Frequency 2 of Motor 1";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 422;
        };
    };
    /** @param 01-05 Middle Output Voltage 2 of Motor 1 — Range: 0.0~255.0 (230V), Default: 0.0, Unit: V, Manual p.4-22 */
    readonly "01-05": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-05";
            readonly name: "Middle Output Voltage 2 of Motor 1";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "0.0";
            readonly unit: "V";
            readonly page: 422;
        };
    };
    /** @param 01-06 Middle Output Frequency 1 of Motor 1 — Range: 0.0~599.0, Default: 3.0, Unit: Hz, Manual p.4-22 */
    readonly "01-06": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-06";
            readonly name: "Middle Output Frequency 1 of Motor 1";
            readonly range: "0.0~599.0";
            readonly default: "3.0";
            readonly unit: "Hz";
            readonly page: 422;
        };
    };
    /** @param 01-07 Middle Output Voltage 1 of Motor 1 — Range: 0.0~255.0 (230V), Default: ***** (KVA dependent), Unit: V, Manual p.4-22 */
    readonly "01-07": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-07";
            readonly name: "Middle Output Voltage 1 of Motor 1";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "***** (KVA dependent)";
            readonly unit: "V";
            readonly page: 422;
        };
    };
    /** @param 01-08 Minimum Output Frequency of Motor 1 — Range: 0.0~599.0, Default: VF:1.5 / SLV:0.6 / SV:0.1, Unit: Hz, Manual p.4-22 */
    readonly "01-08": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-08";
            readonly name: "Minimum Output Frequency of Motor 1";
            readonly range: "0.0~599.0";
            readonly default: "VF:1.5 / VF+PG:1.5 / SLV:0.6 / SV:0.1 / PMSV:0.1 / PMSLV:9.0 / SLV2:1.0";
            readonly unit: "Hz";
            readonly page: 422;
        };
    };
    /** @param 01-09 Minimum Output Voltage of Motor 1 — Range: 0.0~255.0 (230V), Default: 8.3 (230V) / 15.0 (460V), Unit: V, Manual p.4-22 */
    readonly "01-09": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-09";
            readonly name: "Minimum Output Voltage of Motor 1";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "8.3 (230V) / 15.0 (460V)";
            readonly unit: "V";
            readonly page: 422;
        };
    };
    /** @param 01-10 Torque Compensation Gain — Range: 0.0~2.0, Default: 0.5, Unit: -, Manual p.4-22 */
    readonly "01-10": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-10";
            readonly name: "Torque Compensation Gain";
            readonly range: "0.0~2.0";
            readonly default: "0.5";
            readonly unit: "-";
            readonly page: 422;
        };
    };
    /** @param 01-11 Selection of Torque Compensation Mode — Range: 0-1, Default: 0, Manual p.4-23 */
    readonly "01-11": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-11"];
        readonly kind: ParamKind.Enum;
        readonly labels: {
            readonly 0: "Torque Compensation Mode 0";
            readonly 1: "Torque Compensation Mode 1";
        };
        readonly meta: {
            readonly group: 1;
            readonly code: "01-11";
            readonly name: "Selection of Torque Compensation Mode";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 423;
        };
    };
    /** @param 01-12 Base Frequency of Motor 1 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-23 */
    readonly "01-12": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-12";
            readonly name: "Base Frequency of Motor 1";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-13 Base Output Voltage of Motor 1 — Range: 0.0~255.0 (230V), Default: -, Unit: V, Manual p.4-23 */
    readonly "01-13": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-13";
            readonly name: "Base Output Voltage of Motor 1";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-14 Input Voltage Setting — Range: 155.0~255.0 (230V), Default: -, Unit: V, Manual p.4-23 */
    readonly "01-14": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-14";
            readonly name: "Input Voltage Setting";
            readonly range: "155.0~255.0 (230V) / 310.0~510.0 (460V) / 540.0~670.0 (575V) / 648.0~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-15 Torque Compensation Time — Range: 0~10000, Default: 200, Unit: ms, Manual p.4-23 */
    readonly "01-15": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-15";
            readonly name: "Torque Compensation Time";
            readonly range: "0~10000";
            readonly default: "200";
            readonly unit: "ms";
            readonly page: 423;
        };
    };
    /** @param 01-16 Maximum Output Frequency of Motor 2 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-23 */
    readonly "01-16": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-16";
            readonly name: "Maximum Output Frequency of Motor 2";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-17 Maximum Output Voltage of Motor 2 — Range: 0.1~255.0 (230V), Default: -, Unit: V, Manual p.4-23 */
    readonly "01-17": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-17";
            readonly name: "Maximum Output Voltage of Motor 2";
            readonly range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-18 Middle Output Frequency 2 of Motor 2 — Range: 0.0~599.0, Default: 0.0, Unit: Hz, Manual p.4-23 */
    readonly "01-18": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-18";
            readonly name: "Middle Output Frequency 2 of Motor 2";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-19 Middle Output Voltage 2 of Motor 2 — Range: 0.0~255.0 (230V), Default: 0.0, Unit: V, Manual p.4-23 */
    readonly "01-19": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-19"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-19";
            readonly name: "Middle Output Voltage 2 of Motor 2";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "0.0";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-20 Middle Output Frequency 1 of Motor 2 — Range: 0.0~599.0, Default: 3.0, Unit: Hz, Manual p.4-23 */
    readonly "01-20": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-20";
            readonly name: "Middle Output Frequency 1 of Motor 2";
            readonly range: "0.0~599.0";
            readonly default: "3.0";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-21 Middle Output Voltage 1 of Motor 2 — Range: 0.0~255.0 (230V), Default: KVA, Unit: V, Manual p.4-23 */
    readonly "01-21": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-21";
            readonly name: "Middle Output Voltage 1 of Motor 2";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "KVA (inverter capacity dependent)";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-22 Minimum Output Frequency of Motor 2 — Range: 0.0~599.0, Default: 1.5, Unit: Hz, Manual p.4-23 */
    readonly "01-22": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-22";
            readonly name: "Minimum Output Frequency of Motor 2";
            readonly range: "0.0~599.0";
            readonly default: "1.5";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-23 Minimum Output Voltage of Motor 2 — Range: 0.0~255.0 (230V), Default: KVA, Unit: V, Manual p.4-23 */
    readonly "01-23": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-23";
            readonly name: "Minimum Output Voltage of Motor 2";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "KVA (inverter capacity dependent)";
            readonly unit: "V";
            readonly page: 423;
        };
    };
    /** @param 01-24 Base Frequency of Motor 2 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-23 */
    readonly "01-24": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-24";
            readonly name: "Base Frequency of Motor 2";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 423;
        };
    };
    /** @param 01-25 Base Output Voltage of Motor 2 — Range: 0.0~255.0 (230V), Default: -, Unit: V, Manual p.4-24 */
    readonly "01-25": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-25";
            readonly name: "Base Output Voltage of Motor 2";
            readonly range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 424;
        };
    };
    /** @param 01-26 V/F Curve Selection of Motor 2 — Range: 0~FF (hex), Default: F, Manual p.4-24 */
    readonly "01-26": {
        readonly register: (typeof GROUP_01_VF_Control_Parameters)["01-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 1;
            readonly code: "01-26";
            readonly name: "V/F Curve Selection of Motor 2";
            readonly range: "0~FF (hex)";
            readonly default: "F (hex)";
            readonly unit: "-";
            readonly page: 424;
        };
    };
};
