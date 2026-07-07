/**
 * Group 22: PM Motor Parameters
 * Manual pages 4-85 to 4-88
 */
import { ParamKind } from "modbus-schema";
import { GROUP_22_PM_Motor_Parameters } from "../Registers";
export declare const group22Params: {
    readonly "22-00": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-00"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-00";
            readonly name: "PM Motor Rated Power";
            readonly range: "0.00~600.00";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "kW";
            readonly page: 485;
        };
    };
    readonly "22-01": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-01"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-01";
            readonly name: "PM Motor Rated Voltage";
            readonly range: "230V:50.0~240.0 / 460V:100.0~480.0";
            readonly default: "220.0 / 440.0";
            readonly unit: "V";
            readonly page: 485;
        };
    };
    readonly "22-02": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-02";
            readonly name: "PM Motor Rated Current";
            readonly range: "25%~200% inverter rated";
            readonly default: "* (see Attachment 1 p.170)";
            readonly unit: "A";
            readonly page: 485;
        };
    };
    readonly "22-03": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-03";
            readonly name: "PM Motor's Pole Number";
            readonly range: "2~96";
            readonly default: "6";
            readonly unit: "poles";
            readonly page: 485;
        };
    };
    readonly "22-04": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-04";
            readonly name: "PM Motor's Rotation Speed";
            readonly range: "6~60000";
            readonly default: "1500";
            readonly unit: "rpm";
            readonly page: 485;
        };
    };
    readonly "22-05": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-05";
            readonly name: "PM Motor's Max Rotation Speed";
            readonly range: "6~60000";
            readonly default: "1500";
            readonly unit: "rpm";
            readonly page: 485;
        };
    };
    readonly "22-06": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-06"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-06";
            readonly name: "PM Motor Rated Frequency";
            readonly range: "4.8~599.0";
            readonly default: "75.0";
            readonly unit: "Hz";
            readonly page: 485;
        };
    };
    readonly "22-07": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-07";
            readonly name: "PM Type Selection";
            readonly range: "0-1 (0:SPM / 1:IPM)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 485;
        };
    };
    readonly "22-08": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-08";
            readonly name: "PM Encoder Type";
            readonly range: "0-4 (0:Tamagawa Non-WireSaving / 1:Tamagawa WireSaving / 2:Sumtak WireSaving / 3:General Incremental / 4:Sine Wave)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 485;
        };
    };
    readonly "22-10": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-10";
            readonly name: "PM SLV Start Current";
            readonly range: "20~200% Motor Rated Current";
            readonly default: "80";
            readonly unit: "%";
            readonly page: 486;
        };
    };
    readonly "22-11": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-11";
            readonly name: "I/F Mode Start Freq Switching Point";
            readonly range: "10~100";
            readonly default: "10";
            readonly unit: "%";
            readonly page: 486;
        };
    };
    readonly "22-14": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-14"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.001;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-14";
            readonly name: "Armature Resistance of PM Motor";
            readonly range: "0.001~30.000";
            readonly default: "1.000";
            readonly unit: "Ω";
            readonly page: 486;
        };
    };
    readonly "22-15": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-15"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-15";
            readonly name: "D-axis Inductance of PM Motor";
            readonly range: "0.01~300.00";
            readonly default: "10.00";
            readonly unit: "mH";
            readonly page: 486;
        };
    };
    readonly "22-16": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-16";
            readonly name: "Q-axis Inductance of PM Motor";
            readonly range: "0.01~300.00";
            readonly default: "10.00";
            readonly unit: "mH";
            readonly page: 486;
        };
    };
    readonly "22-17": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-17";
            readonly name: "PM No-Load Voltage";
            readonly range: "200V:0~200 / 400V:0~400";
            readonly default: "150 / 300";
            readonly unit: "V";
            readonly page: 486;
        };
    };
    readonly "22-18": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-18";
            readonly name: "Flux-Weakening Limit";
            readonly range: "0~100";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 486;
        };
    };
    readonly "22-20": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-20"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-20";
            readonly name: "Offset Angle of Magnetic Pole and PG Origin";
            readonly range: "0~360";
            readonly default: "0";
            readonly unit: "deg";
            readonly page: 487;
        };
    };
    readonly "22-21": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-21";
            readonly name: "PM Motor Tuning";
            readonly range: "0-3 (0:Not active / 1:Param auto-tune / 2:Mag pole align+loop adjust / 3:Mag pole alignment)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 487;
        };
    };
    readonly "22-22": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-22";
            readonly name: "Fault History of PM Motor Tuning";
            readonly range: "0-11 (0:No Error / 1:Static Mag Alignment / 2:No PG / 3:Rot Pole forced stop / 4:Encoder feedback dir / 5:Loop timeout / 6:Encoder error / 7:Other / 8:Current abn during align / 9:Current abn during loop / 10:Reserved / 11:Stator R timeout)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 487;
        };
    };
    /**
     * PM motor tuning registers 22-25 through 22-35.
     * @remarks Not listed in the A510 communication addendum (Group 22 register map ends at 22-22).
     *          All returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "22-25": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-25";
            readonly name: "Detection Mode Selection of Initial Magnetic Pole";
            readonly range: "0-2 (0:Angle before stopping / 1:Mode1 / 2:Mode2)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 487;
        };
    };
    readonly "22-26": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-26";
            readonly name: "Estimator Mode";
            readonly range: "0-1";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 487;
        };
    };
    readonly "22-27": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-27";
            readonly name: "Voltage Command of Mode 2";
            readonly range: "5~120";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 487;
        };
    };
    readonly "22-28": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-28";
            readonly name: "Divider Ratio of Mode 2";
            readonly range: "0~8";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 487;
        };
    };
    readonly "22-29": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-29";
            readonly name: "Flux-weakening Voltage Command Restriction";
            readonly range: "80~110";
            readonly default: "95";
            readonly unit: "%";
            readonly page: 488;
        };
    };
    readonly "22-30": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-30";
            readonly name: "SPM Speed Estimation Gain";
            readonly range: "1~100";
            readonly default: "85";
            readonly unit: "%";
            readonly page: 488;
        };
    };
    readonly "22-31": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-31";
            readonly name: "SPM Speed Estimation Filter Value";
            readonly range: "1~2000";
            readonly default: "60";
            readonly unit: "Hz";
            readonly page: 488;
        };
    };
    readonly "22-32": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-32";
            readonly name: "MTPA Selection";
            readonly range: "0-3 (0:Disabled / 1:Mode1 / 2:Mode2 / 3:Mode3)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 488;
        };
    };
    readonly "22-33": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-33";
            readonly name: "MTPA Gain";
            readonly range: "0~400";
            readonly default: "200";
            readonly unit: "%";
            readonly page: 488;
        };
    };
    readonly "22-34": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-34"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-34";
            readonly name: "IPM Estimator Gain";
            readonly range: "0.1~500.0";
            readonly default: "30.0";
            readonly unit: "-";
            readonly page: 488;
        };
    };
    readonly "22-35": {
        readonly register: (typeof GROUP_22_PM_Motor_Parameters)["22-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 22;
            readonly code: "22-35";
            readonly name: "IPM Estimator Compensation";
            readonly range: "0~300";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 488;
        };
    };
};
