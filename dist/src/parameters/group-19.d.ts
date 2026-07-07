/**
 * Group 19: Wobble Frequency Parameters
 * Manual pages 4-79 to 4-80
 */
import { ParamKind } from "modbus-schema";
import { GROUP_19_Wobble_Frequency_Parameters } from "../Registers";
export declare const group19Params: {
    readonly "19-00": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-00"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-00";
            readonly name: "Center Frequency of Wobble Frequency";
            readonly range: "5.00~100.00";
            readonly default: "20.00";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "19-01": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-01";
            readonly name: "Amplitude of Wobble Frequency";
            readonly range: "0.1~20.0";
            readonly default: "10.0";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "19-02": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-02"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-02";
            readonly name: "Jump Frequency of Wobble Frequency";
            readonly range: "0.0~50.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "19-03": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-03";
            readonly name: "Jump Time of Wobble Frequency";
            readonly range: "0~50";
            readonly default: "0";
            readonly unit: "ms";
            readonly page: 479;
        };
    };
    readonly "19-04": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-04";
            readonly name: "Wobble Frequency Cycle";
            readonly range: "0.0~1000.0";
            readonly default: "10.0";
            readonly unit: "Sec";
            readonly page: 479;
        };
    };
    readonly "19-05": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-05";
            readonly name: "Wobble Frequency Ratio";
            readonly range: "0.1~10.0";
            readonly default: "1.0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "19-06": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-06";
            readonly name: "Upper Offset Amplitude of Wobble Frequency";
            readonly range: "0.0~20.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "19-07": {
        readonly register: (typeof GROUP_19_Wobble_Frequency_Parameters)["19-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 19;
            readonly code: "19-07";
            readonly name: "Lower Offset Amplitude of Wobble Frequency";
            readonly range: "0.0~20.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 480;
        };
    };
};
