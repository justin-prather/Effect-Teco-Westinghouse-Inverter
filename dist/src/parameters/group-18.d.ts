/**
 * Group 18: Slip Compensation Parameters
 * Manual page 4-79
 */
import { ParamKind } from "modbus-schema";
import { GROUP_18_Slip_Compensation_Parameters } from "../Registers";
export declare const group18Params: {
    readonly "18-00": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-00"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-00";
            readonly name: "Slip Compensation Gain at Low Speed";
            readonly range: "0.00~2.50";
            readonly default: "0.00 / *";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "18-01": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-01"];
        readonly kind: ParamKind.SignedScaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-01";
            readonly name: "Slip Compensation Gain at High Speed";
            readonly range: "-1.00~1.00";
            readonly default: "0.0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "18-02": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-02";
            readonly name: "Slip Compensation Limit";
            readonly range: "0~250";
            readonly default: "200";
            readonly unit: "%";
            readonly page: 479;
        };
    };
    readonly "18-03": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-03"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-03";
            readonly name: "Slip Compensation Filter Time";
            readonly range: "0.0~10.0";
            readonly default: "1.0";
            readonly unit: "Sec";
            readonly page: 479;
        };
    };
    readonly "18-04": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-04";
            readonly name: "Regenerative Slip Compensation Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 479;
        };
    };
    readonly "18-05": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-05";
            readonly name: "FOC Delay Time";
            readonly range: "1~1000";
            readonly default: "100";
            readonly unit: "ms";
            readonly page: 479;
        };
    };
    readonly "18-06": {
        readonly register: (typeof GROUP_18_Slip_Compensation_Parameters)["18-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 18;
            readonly code: "18-06";
            readonly name: "FOC Gain";
            readonly range: "0.00~2.00";
            readonly default: "0.1";
            readonly unit: "-";
            readonly page: 479;
        };
    };
};
