/**
 * Group 02: IM Motor Parameters
 * Manual pages 4-25 to 4-26
 *
 * Parameter                                | Range                        | Default       | Unit | Page
 * 02-00  No-Load Current of Motor 1        | 0.01~600.00                 | -             | A    | 4-25
 * 02-01  Rated Current of Motor 1          | 10%~200% of inv rated cur   | -             | A    | 4-25
 * 02-03  Rated Rotation Speed of Motor 1   | 0~60000                     | -             | Rpm  | 4-25
 * 02-04  Rated Voltage of Motor 1          | 50.0~240.0 (230V)           | -             | V    | 4-25
 * 02-05  Rated Power of Motor 1            | 0.01~600.00                 | -             | kW   | 4-25
 * 02-06  Rated Frequency of Motor 1        | 4.8~599.0                   | 50.0/60.0     | Hz   | 4-25
 * 02-07  Poles of Motor 1                  | 2~16 (Even)                 | 4             | -    | 4-25
 * 02-09  Excitation Current of Motor 1     | 15%~70% of Motor Rated Cur  | -             | %    | 4-25
 * 02-10  Core Saturation Coeff 1 Motor 1   | 1~100                       | -             | %    | 4-25
 * 02-11  Core Saturation Coeff 2 Motor 1   | 1~100                       | -             | %    | 4-25
 * 02-12  Core Saturation Coeff 3 Motor 1   | 80~300                      | -             | %    | 4-25
 * 02-13  Core Loss of Motor 1              | 0.0~15.0                    | -             | %    | 4-25
 * 02-15  Resistance between Wires Motor 1  | 0.001~60.000                | -             | Ω    | 4-25
 * 02-19  No-Load Voltage of Motor 1        | 50~240 (230V)               | -             | V    | 4-25
 * 02-20  No-Load Current of Motor 2        | 0.01~600.00                 | -             | A    | 4-25
 * 02-21  Rated Current of Motor 2          | 10%~200% of inv rated cur   | -             | A    | 4-25
 * 02-22  Rated Rotation Speed of Motor 2   | 0~60000                     | -             | Rpm  | 4-25
 * 02-23  Rated Voltage of Motor 2          | 50.0~240.0 (230V)           | -             | V    | 4-25
 * 02-24  Rated Power of Motor 2            | 0.01~600.00                 | -             | kW   | 4-25
 * 02-25  Rated Frequency of Motor 2        | 4.8~599.0                   | 50.0/60.0     | Hz   | 4-25
 * 02-26  Poles of Motor 2                  | 2~16 (Even)                 | 4             | -    | 4-25
 * 02-32  Resistance between Wires Motor 2  | 0.001~60.000                | -             | Ω    | 4-25
 * 02-33  Proportion of Motor 1 Leak Induct | 0.1~15.0                    | 3.7           | %    | 4-25
 * 02-34  Motor 1 Slip Frequency            | 0.10~20.00                  | 2.48          | Hz   | 4-25
 * 02-37  Motor Mechanical Loss             | 0.0~10.0                    | 4.0           | %    | 4-26
 */
import { ParamKind } from "./param-utils";
import { GROUP_02_IM_Motor_Parameters } from "../Registers";
export declare const group02Params: {
    /** @param 02-00 No-Load Current of Motor 1 — Range: 0.01~600.00, Default: -, Unit: A, Manual p.4-25 */
    readonly "02-00": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-00"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-00";
            readonly name: "No-Load Current of Motor 1";
            readonly range: "0.01~600.00";
            readonly default: "-";
            readonly unit: "A";
            readonly page: 425;
        };
    };
    /** @param 02-01 Rated Current of Motor 1 — Range: 10%~200% of inverter's rated current, Default: -, Unit: A, Manual p.4-25 */
    readonly "02-01": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-01";
            readonly name: "Rated Current of Motor 1";
            readonly range: "10%~200% of inverter's rated current";
            readonly default: "- (inverter dependent)";
            readonly unit: "A";
            readonly page: 425;
        };
    };
    /** @param 02-03 Rated Rotation Speed of Motor 1 — Range: 0~60000, Default: -, Unit: Rpm, Manual p.4-25 */
    readonly "02-03": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-03";
            readonly name: "Rated Rotation Speed of Motor 1";
            readonly range: "0~60000";
            readonly default: "-";
            readonly unit: "Rpm";
            readonly page: 425;
        };
    };
    /** @param 02-04 Rated Voltage of Motor 1 — Range: 50.0~240.0 (230V), Default: -, Unit: V, Manual p.4-25 */
    readonly "02-04": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-04";
            readonly name: "Rated Voltage of Motor 1";
            readonly range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 425;
        };
    };
    /** @param 02-05 Rated Power of Motor 1 — Range: 0.01~600.00, Default: -, Unit: kW, Manual p.4-25 */
    readonly "02-05": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-05";
            readonly name: "Rated Power of Motor 1";
            readonly range: "0.01~600.00";
            readonly default: "-";
            readonly unit: "kW";
            readonly page: 425;
        };
    };
    /** @param 02-06 Rated Frequency of Motor 1 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-25 */
    readonly "02-06": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-06";
            readonly name: "Rated Frequency of Motor 1";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 425;
        };
    };
    /** @param 02-07 Poles of Motor 1 — Range: 2~16 (Even), Default: 4, Manual p.4-25 */
    readonly "02-07": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-07";
            readonly name: "Poles of Motor 1";
            readonly range: "2~16 (Even)";
            readonly default: "4";
            readonly unit: "-";
            readonly page: 425;
        };
    };
    /** @param 02-09 Excitation Current of Motor 1 — Range: 15%~70% of Motor Rated Current, Default: -, Unit: %, Manual p.4-25 */
    readonly "02-09": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-09";
            readonly name: "Excitation Current of Motor 1";
            readonly range: "15%~70% of Motor Rated Current";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-10 Core Saturation Coefficient 1 of Motor 1 — Range: 1~100, Default: -, Unit: %, Manual p.4-25 */
    readonly "02-10": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-10";
            readonly name: "Core Saturation Coefficient 1 of Motor 1";
            readonly range: "1~100";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-11 Core Saturation Coefficient 2 of Motor 1 — Range: 1~100, Default: -, Unit: %, Manual p.4-25 */
    readonly "02-11": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-11";
            readonly name: "Core Saturation Coefficient 2 of Motor 1";
            readonly range: "1~100";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-12 Core Saturation Coefficient 3 of Motor 1 — Range: 80~300, Default: -, Unit: %, Manual p.4-25 */
    readonly "02-12": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-12";
            readonly name: "Core Saturation Coefficient 3 of Motor 1";
            readonly range: "80~300";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-13 Core Loss of Motor 1 — Range: 0.0~15.0, Default: -, Unit: %, Manual p.4-25 */
    readonly "02-13": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-13";
            readonly name: "Core Loss of Motor 1";
            readonly range: "0.0~15.0";
            readonly default: "-";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-15 Resistance between Wires of Motor 1 — Range: 0.001~60.000, Default: -, Unit: Ω, Manual p.4-25 */
    readonly "02-15": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-15";
            readonly name: "Resistance between Wires of Motor 1";
            readonly range: "0.001~60.000";
            readonly default: "-";
            readonly unit: "Ω";
            readonly page: 425;
        };
    };
    /** @param 02-19 No-Load Voltage of Motor 1 — Range: 50~240 (230V), Default: -, Unit: V, Manual p.4-25 */
    readonly "02-19": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-19";
            readonly name: "No-Load Voltage of Motor 1";
            readonly range: "50~240 (230V) / 100~480 (460V) / 420~600 (575V) / 504~720 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 425;
        };
    };
    /** @param 02-20 No-Load Current of Motor 2 — Range: 0.01~600.00, Default: -, Unit: A, Manual p.4-25 */
    readonly "02-20": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-20";
            readonly name: "No-Load Current of Motor 2";
            readonly range: "0.01~600.00";
            readonly default: "-";
            readonly unit: "A";
            readonly page: 425;
        };
    };
    /** @param 02-21 Rated Current of Motor 2 — Range: 10%~200% of inverter's rated current, Default: -, Unit: A, Manual p.4-25 */
    readonly "02-21": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-21";
            readonly name: "Rated Current of Motor 2";
            readonly range: "10%~200% of inverter's rated current";
            readonly default: "- (inverter dependent)";
            readonly unit: "A";
            readonly page: 425;
        };
    };
    /** @param 02-22 Rated Rotation Speed of Motor 2 — Range: 0~60000, Default: -, Unit: Rpm, Manual p.4-25 */
    readonly "02-22": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-22";
            readonly name: "Rated Rotation Speed of Motor 2";
            readonly range: "0~60000";
            readonly default: "-";
            readonly unit: "Rpm";
            readonly page: 425;
        };
    };
    /** @param 02-23 Rated Voltage of Motor 2 — Range: 50.0~240.0 (230V), Default: -, Unit: V, Manual p.4-25 */
    readonly "02-23": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-23";
            readonly name: "Rated Voltage of Motor 2";
            readonly range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)";
            readonly default: "-";
            readonly unit: "V";
            readonly page: 425;
        };
    };
    /** @param 02-24 Rated Power of Motor 2 — Range: 0.01~600.00, Default: -, Unit: kW, Manual p.4-25 */
    readonly "02-24": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-24";
            readonly name: "Rated Power of Motor 2";
            readonly range: "0.01~600.00";
            readonly default: "-";
            readonly unit: "kW";
            readonly page: 425;
        };
    };
    /** @param 02-25 Rated Frequency of Motor 2 — Range: 4.8~599.0, Default: 50.0/60.0, Unit: Hz, Manual p.4-25 */
    readonly "02-25": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-25";
            readonly name: "Rated Frequency of Motor 2";
            readonly range: "4.8~599.0";
            readonly default: "50.0/60.0";
            readonly unit: "Hz";
            readonly page: 425;
        };
    };
    /** @param 02-26 Poles of Motor 2 — Range: 2~16 (Even), Default: 4, Manual p.4-25 */
    readonly "02-26": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-26";
            readonly name: "Poles of Motor 2";
            readonly range: "2~16 (Even)";
            readonly default: "4";
            readonly unit: "-";
            readonly page: 425;
        };
    };
    /** @param 02-32 Resistance between Wires of Motor 2 — Range: 0.001~60.000, Default: -, Unit: Ω, Manual p.4-25 */
    readonly "02-32": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-32"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-32";
            readonly name: "Resistance between Wires of Motor 2";
            readonly range: "0.001~60.000";
            readonly default: "-";
            readonly unit: "Ω";
            readonly page: 425;
        };
    };
    /** @param 02-33 Proportion of Motor 1 Leakage Inductance — Range: 0.1~15.0, Default: 3.7, Unit: %, Manual p.4-25 */
    readonly "02-33": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-33"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-33";
            readonly name: "Proportion of Motor 1 Leakage Inductance";
            readonly range: "0.1~15.0";
            readonly default: "3.7";
            readonly unit: "%";
            readonly page: 425;
        };
    };
    /** @param 02-34 Motor 1 Slip Frequency — Range: 0.10~20.00, Default: 2.48, Unit: Hz, Manual p.4-25 */
    readonly "02-34": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-34";
            readonly name: "Motor 1 Slip Frequency";
            readonly range: "0.10~20.00";
            readonly default: "2.48";
            readonly unit: "Hz";
            readonly page: 425;
        };
    };
    /** @param 02-37 Motor Mechanical Loss — Range: 0.0~10.0, Default: 4.0, Unit: %, Manual p.4-26 */
    readonly "02-37": {
        readonly register: (typeof GROUP_02_IM_Motor_Parameters)["02-37"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 2;
            readonly code: "02-37";
            readonly name: "Motor Mechanical Loss";
            readonly range: "0.0~10.0";
            readonly default: "4.0";
            readonly unit: "%";
            readonly page: 426;
        };
    };
};
