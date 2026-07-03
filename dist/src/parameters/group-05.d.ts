/**
 * Group 05: Multi-Speed Parameters
 * Manual pages 4-37 to 4-39
 *
 * All 16 speed-stage frequencies (05-01 through 05-16) share the same
 * format: ×0.01 Hz, range 0.00~599.00 Hz.
 * All 32 accel/decel times (05-17 through 05-48) share the same format:
 * ×0.1 s, range 0.1~6000.0 s, default 10.0.
 */
import { ParamKind } from "./param-utils";
import { GROUP_05_Multi_Speed_Parameters } from "../Registers";
export declare const group05Params: {
    readonly "05-00": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-00";
            readonly name: "Acceleration/Deceleration Selection of Multi-Speed";
            readonly range: "0-1 (0:by 00-14~00-24 / 1:by 05-17~05-48)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 437;
        };
    };
    /** @param 05-01 Frequency Setting of Speed-Stage 0 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-01": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-01";
            readonly name: "Frequency Setting of Speed-Stage 0";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-02 Frequency Setting of Speed-Stage 1 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-02": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-02";
            readonly name: "Frequency Setting of Speed-Stage 1";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-03 Frequency Setting of Speed-Stage 2 — Range: 0.00~599.00, Default: 10.00, Unit: Hz, Manual p.4-37 */
    readonly "05-03": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-03";
            readonly name: "Frequency Setting of Speed-Stage 2";
            readonly range: "0.00~599.00";
            readonly default: "10.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-04 Frequency Setting of Speed-Stage 3 — Range: 0.00~599.00, Default: 20.00, Unit: Hz, Manual p.4-37 */
    readonly "05-04": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-04";
            readonly name: "Frequency Setting of Speed-Stage 3";
            readonly range: "0.00~599.00";
            readonly default: "20.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-05 Frequency Setting of Speed-Stage 4 — Range: 0.00~599.00, Default: 30.00, Unit: Hz, Manual p.4-37 */
    readonly "05-05": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-05";
            readonly name: "Frequency Setting of Speed-Stage 4";
            readonly range: "0.00~599.00";
            readonly default: "30.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-06 Frequency Setting of Speed-Stage 5 — Range: 0.00~599.00, Default: 40.00, Unit: Hz, Manual p.4-37 */
    readonly "05-06": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-06";
            readonly name: "Frequency Setting of Speed-Stage 5";
            readonly range: "0.00~599.00";
            readonly default: "40.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-07 Frequency Setting of Speed-Stage 6 — Range: 0.00~599.00, Default: 50.00, Unit: Hz, Manual p.4-37 */
    readonly "05-07": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-07";
            readonly name: "Frequency Setting of Speed-Stage 6";
            readonly range: "0.00~599.00";
            readonly default: "50.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-08 Frequency Setting of Speed-Stage 7 — Range: 0.00~599.00, Default: 50.00, Unit: Hz, Manual p.4-37 */
    readonly "05-08": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-08";
            readonly name: "Frequency Setting of Speed-Stage 7";
            readonly range: "0.00~599.00";
            readonly default: "50.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-09 Frequency Setting of Speed-Stage 8 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-09": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-09";
            readonly name: "Frequency Setting of Speed-Stage 8";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-10 Frequency Setting of Speed-Stage 9 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-10": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-10";
            readonly name: "Frequency Setting of Speed-Stage 9";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-11 Frequency Setting of Speed-Stage 10 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-11": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-11"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-11";
            readonly name: "Frequency Setting of Speed-Stage 10";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-12 Frequency Setting of Speed-Stage 11 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-12": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-12"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-12";
            readonly name: "Frequency Setting of Speed-Stage 11";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-13 Frequency Setting of Speed-Stage 12 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-13": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-13"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-13";
            readonly name: "Frequency Setting of Speed-Stage 12";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-14 Frequency Setting of Speed-Stage 13 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-14": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-14";
            readonly name: "Frequency Setting of Speed-Stage 13";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-15 Frequency Setting of Speed-Stage 14 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-15": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-15";
            readonly name: "Frequency Setting of Speed-Stage 14";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-16 Frequency Setting of Speed-Stage 15 — Range: 0.00~599.00, Default: 5.00, Unit: Hz, Manual p.4-37 */
    readonly "05-16": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-16";
            readonly name: "Frequency Setting of Speed-Stage 15";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 437;
        };
    };
    /** @param 05-17 Acceleration Time of Multi Speed 0 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-17": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-17"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-17";
            readonly name: "Acceleration Time of Multi Speed 0";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-18 Deceleration Time of Multi Speed 0 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-18": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-18";
            readonly name: "Deceleration Time of Multi Speed 0";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-19 Acceleration Time of Multi Speed 1 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-19": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-19"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-19";
            readonly name: "Acceleration Time of Multi Speed 1";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-20 Deceleration Time of Multi Speed 1 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-20": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-20";
            readonly name: "Deceleration Time of Multi Speed 1";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-21 Acceleration Time of Multi Speed 2 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-21": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-21"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-21";
            readonly name: "Acceleration Time of Multi Speed 2";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-22 Deceleration Time of Multi Speed 2 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-22": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-22"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-22";
            readonly name: "Deceleration Time of Multi Speed 2";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-23 Acceleration Time of Multi Speed 3 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-23": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-23"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-23";
            readonly name: "Acceleration Time of Multi Speed 3";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-24 Deceleration Time of Multi Speed 3 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-24": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-24";
            readonly name: "Deceleration Time of Multi Speed 3";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-25 Acceleration Time of Multi Speed 4 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-25": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-25"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-25";
            readonly name: "Acceleration Time of Multi Speed 4";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-26 Deceleration Time of Multi Speed 4 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-37 */
    readonly "05-26": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-26"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-26";
            readonly name: "Deceleration Time of Multi Speed 4";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 437;
        };
    };
    /** @param 05-27 Acceleration Time of Multi Speed 5 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-27": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-27"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-27";
            readonly name: "Acceleration Time of Multi Speed 5";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-28 Deceleration Time of Multi Speed 5 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-28": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-28"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-28";
            readonly name: "Deceleration Time of Multi Speed 5";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-29 Acceleration Time of Multi Speed 6 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-29": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-29"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-29";
            readonly name: "Acceleration Time of Multi Speed 6";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-30 Deceleration Time of Multi Speed 6 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-30": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-30"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-30";
            readonly name: "Deceleration Time of Multi Speed 6";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-31 Acceleration Time of Multi Speed 7 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-31": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-31"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-31";
            readonly name: "Acceleration Time of Multi Speed 7";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-32 Deceleration Time of Multi Speed 7 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-32": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-32"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-32";
            readonly name: "Deceleration Time of Multi Speed 7";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-33 Acceleration Time of Multi Speed 8 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-33": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-33"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-33";
            readonly name: "Acceleration Time of Multi Speed 8";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-34 Deceleration Time of Multi Speed 8 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-34": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-34";
            readonly name: "Deceleration Time of Multi Speed 8";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-35 Acceleration Time of Multi Speed 9 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-35": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-35"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-35";
            readonly name: "Acceleration Time of Multi Speed 9";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-36 Deceleration Time of Multi Speed 9 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-36": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-36"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-36";
            readonly name: "Deceleration Time of Multi Speed 9";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-37 Acceleration Time of Multi Speed 10 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-37": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-37"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-37";
            readonly name: "Acceleration Time of Multi Speed 10";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-38 Deceleration Time of Multi Speed 10 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-38": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-38"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-38";
            readonly name: "Deceleration Time of Multi Speed 10";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-39 Acceleration Time of Multi Speed 11 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-39": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-39"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-39";
            readonly name: "Acceleration Time of Multi Speed 11";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-40 Deceleration Time of Multi Speed 11 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-40": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-40"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-40";
            readonly name: "Deceleration Time of Multi Speed 11";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-41 Acceleration Time of Multi Speed 12 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-41": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-41"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-41";
            readonly name: "Acceleration Time of Multi Speed 12";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-42 Deceleration Time of Multi Speed 12 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-42": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-42"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-42";
            readonly name: "Deceleration Time of Multi Speed 12";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-43 Acceleration Time of Multi Speed 13 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-38 */
    readonly "05-43": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-43"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-43";
            readonly name: "Acceleration Time of Multi Speed 13";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 438;
        };
    };
    /** @param 05-44 Deceleration Time of Multi Speed 13 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-39 */
    readonly "05-44": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-44";
            readonly name: "Deceleration Time of Multi Speed 13";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 439;
        };
    };
    /** @param 05-45 Acceleration Time of Multi Speed 14 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-39 */
    readonly "05-45": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-45"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-45";
            readonly name: "Acceleration Time of Multi Speed 14";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 439;
        };
    };
    /** @param 05-46 Deceleration Time of Multi Speed 14 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-39 */
    readonly "05-46": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-46"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-46";
            readonly name: "Deceleration Time of Multi Speed 14";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 439;
        };
    };
    /** @param 05-47 Acceleration Time of Multi Speed 15 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-39 */
    readonly "05-47": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-47"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-47";
            readonly name: "Acceleration Time of Multi Speed 15";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 439;
        };
    };
    /** @param 05-48 Deceleration Time of Multi Speed 15 — Range: 0.1~6000.0, Default: 10.0, Unit: s, Manual p.4-39 */
    readonly "05-48": {
        readonly register: (typeof GROUP_05_Multi_Speed_Parameters)["05-48"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 5;
            readonly code: "05-48";
            readonly name: "Deceleration Time of Multi Speed 15";
            readonly range: "0.1~6000.0";
            readonly default: "10.0";
            readonly unit: "s";
            readonly page: 439;
        };
    };
};
