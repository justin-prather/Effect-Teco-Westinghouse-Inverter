/**
 * Group 11: Auxiliary Parameters
 * Manual pages 4-56 to 4-59
 */
import { ParamKind } from "modbus-schema";
import { GROUP_11_Auxiliary_Parameters } from "../Registers";
export declare const group11Params: {
    readonly "11-00": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-00";
            readonly name: "Direction Lock Selection";
            readonly range: "0-2 (0:Fwd+Rev / 1:Fwd only / 2:Rev only)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 456;
        };
    };
    readonly "11-01": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-01";
            readonly name: "Carrier frequency";
            readonly range: "0~16 (0:Tuning / 1~16:1~16KHz)";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "-";
            readonly page: 456;
        };
    };
    readonly "11-02": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-02";
            readonly name: "Soft PWM Function Selection";
            readonly range: "0-2 (0:Disable / 1:Soft PWM 1 / 2:Soft PWM 2)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 456;
        };
    };
    readonly "11-03": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-03";
            readonly name: "Automatic carrier lowering selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 456;
        };
    };
    readonly "11-04": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-04"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-04";
            readonly name: "S-curve Time Setting at Start of Accel";
            readonly range: "0.00~2.50";
            readonly default: "0.20";
            readonly unit: "s";
            readonly page: 456;
        };
    };
    readonly "11-05": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-05"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-05";
            readonly name: "S-curve Time Setting at Stop of Accel";
            readonly range: "0.00~2.50";
            readonly default: "0.20";
            readonly unit: "s";
            readonly page: 456;
        };
    };
    readonly "11-06": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-06";
            readonly name: "S-curve Time Setting at Start of Decel";
            readonly range: "0.00~2.50";
            readonly default: "0.20";
            readonly unit: "s";
            readonly page: 456;
        };
    };
    readonly "11-07": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-07"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-07";
            readonly name: "S-curve Time Setting at Stop of Decel";
            readonly range: "0.00~2.50";
            readonly default: "0.20";
            readonly unit: "s";
            readonly page: 456;
        };
    };
    readonly "11-08": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-08"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-08";
            readonly name: "Jump Frequency 1";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 456;
        };
    };
    readonly "11-09": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-09"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-09";
            readonly name: "Jump Frequency 2";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 456;
        };
    };
    readonly "11-10": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-10"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-10";
            readonly name: "Jump Frequency 3";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 456;
        };
    };
    readonly "11-11": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-11"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-11";
            readonly name: "Jump Frequency Width";
            readonly range: "0.0~25.5";
            readonly default: "1.0";
            readonly unit: "Hz";
            readonly page: 456;
        };
    };
    readonly "11-12": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-12";
            readonly name: "Manual Energy Saving Gain";
            readonly range: "0~100";
            readonly default: "80";
            readonly unit: "%";
            readonly page: 456;
        };
    };
    readonly "11-13": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-13";
            readonly name: "Automatic Return Time";
            readonly range: "0~120";
            readonly default: "60";
            readonly unit: "Sec";
            readonly page: 456;
        };
    };
    readonly "11-18": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-18"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-18";
            readonly name: "Manual Energy Saving Frequency";
            readonly range: "0.0~599.0";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 456;
        };
    };
    readonly "11-19": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-19";
            readonly name: "Automatic Energy Saving Function";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-20": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-20";
            readonly name: "Filter Time of Automatic Energy Saving";
            readonly range: "0~200";
            readonly default: "140";
            readonly unit: "ms";
            readonly page: 457;
        };
    };
    readonly "11-21": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-21";
            readonly name: "Voltage Upper Limit of Energy Saving";
            readonly range: "0~100";
            readonly default: "100";
            readonly unit: "%";
            readonly page: 457;
        };
    };
    readonly "11-22": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-22";
            readonly name: "Adjustment Time of Auto Energy Saving";
            readonly range: "0~5000";
            readonly default: "20";
            readonly unit: "ms";
            readonly page: 457;
        };
    };
    readonly "11-23": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-23";
            readonly name: "Detection Level of Auto Energy Saving";
            readonly range: "0~100";
            readonly default: "10";
            readonly unit: "%";
            readonly page: 457;
        };
    };
    readonly "11-24": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-24"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-24";
            readonly name: "Coefficient of Auto Energy Saving";
            readonly range: "0.00~655.34";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-28": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-28";
            readonly name: "Frequency Gain of OV Prevention 2";
            readonly range: "1~200";
            readonly default: "100";
            readonly unit: "%";
            readonly page: 457;
        };
    };
    readonly "11-29": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-29";
            readonly name: "Auto De-rating Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-30": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-30";
            readonly name: "Variable Carrier Freq Max Limit";
            readonly range: "2~16";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "KHz";
            readonly page: 457;
        };
    };
    readonly "11-31": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-31";
            readonly name: "Variable Carrier Freq Min Limit";
            readonly range: "1~16";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "KHz";
            readonly page: 457;
        };
    };
    readonly "11-32": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-32";
            readonly name: "Variable Carrier Freq Prop Gain";
            readonly range: "0~99";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-33": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-33"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-33";
            readonly name: "DC Voltage Filter Rise Amount";
            readonly range: "0.1~10.0";
            readonly default: "0.1";
            readonly unit: "Vdc";
            readonly page: 457;
        };
    };
    readonly "11-34": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-34";
            readonly name: "DC Voltage Filter Fall Amount";
            readonly range: "0.1~10.0";
            readonly default: "5.0";
            readonly unit: "Vdc";
            readonly page: 457;
        };
    };
    readonly "11-35": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-35"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-35";
            readonly name: "DC Voltage Filter Dead band Level";
            readonly range: "0.0~99.0";
            readonly default: "10.0";
            readonly unit: "Vdc";
            readonly page: 457;
        };
    };
    readonly "11-36": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-36"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-36";
            readonly name: "Frequency Gain of OV Prevention";
            readonly range: "0.000~1.000";
            readonly default: "0.050";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-37": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-37"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-37";
            readonly name: "Frequency Limit of OV Prevention";
            readonly range: "0.00~599.00";
            readonly default: "5.00";
            readonly unit: "Hz";
            readonly page: 457;
        };
    };
    readonly "11-38": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-38";
            readonly name: "Deceleration Start Voltage of OV Prevention";
            readonly range: "200~400(230V)/400~800(460V)/500~1000(575V)/600~1200(690V)";
            readonly default: "300/700/900/1080";
            readonly unit: "V";
            readonly page: 457;
        };
    };
    readonly "11-39": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-39";
            readonly name: "Deceleration Stop Voltage of OV Prevention";
            readonly range: "300~400(230V)/600~800(460V)/500~1000(575V)/600~1200(690V)";
            readonly default: "350/750/950/1140";
            readonly unit: "V";
            readonly page: 457;
        };
    };
    readonly "11-40": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-40";
            readonly name: "OV Prevention Selection";
            readonly range: "0-3 (0:Disable / 1:Mode1 / 2:Mode2 / 3:Mode3)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 457;
        };
    };
    readonly "11-41": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-41";
            readonly name: "Selection of Ref Freq Disappearance Detection";
            readonly range: "0-1 (0:Decel stop / 1:Use 11-42 level)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-42": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-42"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-42";
            readonly name: "Disappearance Level of Reference Frequency";
            readonly range: "0.0~100.0";
            readonly default: "80.0";
            readonly unit: "%";
            readonly page: 458;
        };
    };
    readonly "11-43": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-43"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-43";
            readonly name: "Hold Frequency at Start";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 458;
        };
    };
    readonly "11-44": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-44";
            readonly name: "Frequency Hold Time at Start";
            readonly range: "0.0~10.0";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 458;
        };
    };
    readonly "11-45": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-45"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-45";
            readonly name: "Hold Frequency at Stop";
            readonly range: "0.0~599.0";
            readonly default: "0.0";
            readonly unit: "Hz";
            readonly page: 458;
        };
    };
    readonly "11-46": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-46"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-46";
            readonly name: "Frequency Hold Time at Stop";
            readonly range: "0.0~10.0";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 458;
        };
    };
    readonly "11-47": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-47"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-47";
            readonly name: "KEB Deceleration Time";
            readonly range: "0.0~25.5";
            readonly default: "0.0";
            readonly unit: "s";
            readonly page: 458;
        };
    };
    readonly "11-48": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-48"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-48";
            readonly name: "KEB Detection Level";
            readonly range: "190~210(230V)/380~420(460V)/540~570(575V)/540~684(690V)";
            readonly default: "200/400/555/555";
            readonly unit: "V";
            readonly page: 458;
        };
    };
    readonly "11-49": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-49"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-49";
            readonly name: "Zero-servo Gain";
            readonly range: "0.01~5.00";
            readonly default: "1.00";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-50": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-50"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-50";
            readonly name: "Zero-servo Count";
            readonly range: "0~4096";
            readonly default: "12";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-51": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-51"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-51";
            readonly name: "Braking Selection of Zero Speed";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-52": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-52"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-52";
            readonly name: "Droop Control Level";
            readonly range: "0.0~100.0";
            readonly default: "0.0";
            readonly unit: "%";
            readonly page: 458;
        };
    };
    readonly "11-53": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-53"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-53";
            readonly name: "Droop Control Delay";
            readonly range: "0.01~2.00";
            readonly default: "0.2";
            readonly unit: "s";
            readonly page: 458;
        };
    };
    readonly "11-54": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-54"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-54";
            readonly name: "Initialization of Cumulative Energy";
            readonly range: "0-1 (0:Do not clear / 1:Clear)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-55": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-55"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-55";
            readonly name: "STOP Key Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 458;
        };
    };
    readonly "11-56": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-56"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-56";
            readonly name: "UP/DOWN Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-58": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-58"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-58";
            readonly name: "Record Reference Frequency";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-59": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-59"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-59";
            readonly name: "Gain of Preventing Oscillation";
            readonly range: "0.00~2.50";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-60": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-60"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-60";
            readonly name: "Upper Limit of Preventing Oscillation";
            readonly range: "0~100";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "%";
            readonly page: 459;
        };
    };
    readonly "11-61": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-61"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-61";
            readonly name: "Time Parameter of Preventing Oscillation";
            readonly range: "0~100";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-62": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-62"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-62";
            readonly name: "Selection of Preventing Oscillation";
            readonly range: "0-2 (0:Mode1 / 1:Mode2 / 2:Mode3)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-63": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-63"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-63";
            readonly name: "Strong Magnetic Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-64": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-64"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-64";
            readonly name: "Acceleration Speed Gain Adjustment";
            readonly range: "0.1~10.0";
            readonly default: "1.0";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-65": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-65"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-65";
            readonly name: "Target Main Circuit Voltage";
            readonly range: "200~400(230V)/400~800(460V)/520~1040(575V)/624~1248(690V)";
            readonly default: "370/740/962/1154";
            readonly unit: "-";
            readonly page: 459;
        };
    };
    readonly "11-66": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-66"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-66";
            readonly name: "2 Phase/ 3 Phase PWM Switch Frequency";
            readonly range: "6.00~60.00";
            readonly default: "20";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    readonly "11-67": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-67"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-67";
            readonly name: "Soft PWM 2 Frequency Range";
            readonly range: "0~12000";
            readonly default: "0";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    readonly "11-68": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-68"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-68";
            readonly name: "Soft PWM 2 Switch Frequency";
            readonly range: "6.00~60.00";
            readonly default: "20";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    readonly "11-69": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-69"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-69";
            readonly name: "Gain of Preventing Oscillation 3";
            readonly range: "0.00~200.00";
            readonly default: "5.00";
            readonly unit: "%";
            readonly page: 459;
        };
    };
    readonly "11-70": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-70"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-70";
            readonly name: "Upper Limit of Preventing Oscillation 3";
            readonly range: "0.01~100.00";
            readonly default: "5.00";
            readonly unit: "%";
            readonly page: 459;
        };
    };
    readonly "11-71": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-71"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-71";
            readonly name: "Time Parameter of Preventing Oscillation 3";
            readonly range: "0~30000";
            readonly default: "100";
            readonly unit: "ms";
            readonly page: 459;
        };
    };
    readonly "11-72": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-72"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-72";
            readonly name: "Gain of Preventing Oscillation for Switch Frequency 1";
            readonly range: "0.01~300.00";
            readonly default: "30.00";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    readonly "11-73": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-73"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-73";
            readonly name: "Gain of Preventing Oscillation for Switch Frequency 2";
            readonly range: "0.01~300.00";
            readonly default: "50.00";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    /**
     * @param 11-76 Droop Frequency Level 1 -- Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-59
     * @remarks Not listed in the A510 communication addendum (Group 11 register map ends at 11-65).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "11-76": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-76"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-76";
            readonly name: "Droop Frequency Level 1";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    /**
     * @param 11-77 Droop Frequency Level 2 -- Range: 0.00~599.00, Default: 0.00, Unit: Hz, Manual p.4-59
     * @remarks Not listed in the A510 communication addendum (Group 11 register map ends at 11-65).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "11-77": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-77"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-77";
            readonly name: "Droop Frequency Level 2";
            readonly range: "0.00~599.00";
            readonly default: "0.00";
            readonly unit: "Hz";
            readonly page: 459;
        };
    };
    /**
     * @param 11-78 Droop Torque Offset Value -- Range: 0.00~100.00, Default: 0.00, Unit: %, Manual p.4-59
     * @remarks Not listed in the A510 communication addendum (Group 11 register map ends at 11-65).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "11-78": {
        readonly register: (typeof GROUP_11_Auxiliary_Parameters)["11-78"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 11;
            readonly code: "11-78";
            readonly name: "Droop Torque Offset Value";
            readonly range: "0.00~100.00";
            readonly default: "0.00";
            readonly unit: "%";
            readonly page: 459;
        };
    };
};
