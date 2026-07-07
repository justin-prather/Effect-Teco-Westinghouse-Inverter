/**
 * Group 08: Protection Parameters
 * Manual pages 4-47 to 4-51
 */
import { ParamKind } from "modbus-schema";
import { GROUP_08_Protection_Parameters } from "../Registers";
export declare const group08Params: {
    /** @param 08-00 Stall Prevention Function -- Bit field, Default: 0000b, Manual p.4-47 */
    readonly "08-00": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-00";
            readonly name: "Stall Prevention Function";
            readonly range: "bit0:Acc/bit1:Dec/bit2:Op/bit3:DecTimeBase";
            readonly default: "0000b (0)";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-01 Stall Prevention Level in Acceleration -- Range: 20~200, Default: HD:150 ND:120, Unit: %, Manual p.4-47 */
    readonly "08-01": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-01";
            readonly name: "Stall Prevention Level in Acceleration";
            readonly range: "20~200";
            readonly default: "HD:150 / ND:120";
            readonly unit: "%";
            readonly page: 447;
        };
    };
    /** @param 08-02 Stall Prevention Level in Deceleration -- Range: voltage-dependent, Unit: V, Manual p.4-47 */
    readonly "08-02": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-02";
            readonly name: "Stall Prevention Level in Deceleration";
            readonly range: "330~410 (230V) / 660~820 (460V) / 900~1000 (575V) / 1080~1200 (690V)";
            readonly default: "385 (230V) / 770 (460V) / 950 (575V) / 1140 (690V)";
            readonly unit: "V";
            readonly page: 447;
        };
    };
    /** @param 08-03 Stall Prevention Level in Operation -- Range: 30~200, Default: HD:160 ND:120, Unit: %, Manual p.4-47 */
    readonly "08-03": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-03";
            readonly name: "Stall Prevention Level in Operation";
            readonly range: "30~200";
            readonly default: "HD:160 / ND:120";
            readonly unit: "%";
            readonly page: 447;
        };
    };
    /** @param 08-05 Selection for Motor Overload Protection (OL1) -- Bit field, Default: 0101b, Manual p.4-47 */
    readonly "08-05": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-05";
            readonly name: "Selection for Motor Overload Protection (OL1)";
            readonly range: "bit0:Enable/bit1:ColdHot/bit2:MotorType/bit3:Reserved";
            readonly default: "0101b (5)";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-06 Start-up Mode of Overload Protection Operation (OL1) -- Range: 0-1, Default: 0, Manual p.4-47 */
    readonly "08-06": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-06";
            readonly name: "Start-up Mode of Overload Protection Operation (OL1)";
            readonly range: "0-1 (0:Stop output / 1:Continuous operation)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-07 Motor Overload (OL1) Protection Level -- Range: 0-2, Default: 0, Manual p.4-47 */
    readonly "08-07": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-07";
            readonly name: "Motor Overload (OL1) Protection Level";
            readonly range: "0-2 (0:Protection 0 / 1:Protection 1 / 2:Protection 2)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-08 Automatic Voltage Regulation (AVR) -- Range: 0-1, Default: 0, Manual p.4-47 */
    readonly "08-08": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-08";
            readonly name: "Automatic Voltage Regulation (AVR)";
            readonly range: "0-1 (0:Enable / 1:Disable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-09 Selection of Input Phase Loss Protection -- Range: 0-1, Default: 0, Manual p.4-47 */
    readonly "08-09": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-09";
            readonly name: "Selection of Input Phase Loss Protection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 447;
        };
    };
    /** @param 08-10 Selection of Output Phase Loss Protection -- Range: 0-1, Default: 0, Manual p.4-48 */
    readonly "08-10": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-10";
            readonly name: "Selection of Output Phase Loss Protection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 448;
        };
    };
    /** @param 08-13 Selection of Over-Torque Detection -- Range: 0-2, Default: 0, Manual p.4-48 */
    readonly "08-13": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-13";
            readonly name: "Selection of Over-Torque Detection";
            readonly range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 448;
        };
    };
    /** @param 08-14 Selection of Over-Torque Operation -- Range: 0-2, Default: 0, Manual p.4-48 */
    readonly "08-14": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-14";
            readonly name: "Selection of Over-Torque Operation";
            readonly range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 448;
        };
    };
    /** @param 08-15 Level of Over-Torque Detection -- Range: 0~300, Default: 150, Unit: %, Manual p.4-48 */
    readonly "08-15": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-15"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-15";
            readonly name: "Level of Over-Torque Detection";
            readonly range: "0~300";
            readonly default: "150";
            readonly unit: "%";
            readonly page: 448;
        };
    };
    /** @param 08-16 Time of Over-Torque Detection -- Range: 0.0~10.0, Default: 0.1, Unit: Sec, Manual p.4-48 */
    readonly "08-16": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-16"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-16";
            readonly name: "Time of Over-Torque Detection";
            readonly range: "0.0~10.0";
            readonly default: "0.1";
            readonly unit: "Sec";
            readonly page: 448;
        };
    };
    /** @param 08-17 Selection of Low-Torque Detection -- Range: 0-2, Default: 0, Manual p.4-48 */
    readonly "08-17": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-17"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-17";
            readonly name: "Selection of Low-Torque Detection";
            readonly range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 448;
        };
    };
    /** @param 08-18 Selection of Low-Torque Operation -- Range: 0-2, Default: 0, Manual p.4-48 */
    readonly "08-18": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-18"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-18";
            readonly name: "Selection of Low-Torque Operation";
            readonly range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 448;
        };
    };
    /** @param 08-19 Level of Low-Torque Detection -- Range: 0~300, Default: 30, Unit: %, Manual p.4-48 */
    readonly "08-19": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-19"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-19";
            readonly name: "Level of Low-Torque Detection";
            readonly range: "0~300";
            readonly default: "30";
            readonly unit: "%";
            readonly page: 448;
        };
    };
    /** @param 08-20 Time of Low-Torque Detection -- Range: 0.0~10.0, Default: 0.1, Unit: Sec, Manual p.4-49 */
    readonly "08-20": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-20"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-20";
            readonly name: "Time of Low-Torque Detection";
            readonly range: "0.0~10.0";
            readonly default: "0.1";
            readonly unit: "Sec";
            readonly page: 449;
        };
    };
    /** @param 08-21 Limit of Stall Prevention in Acc over Base Speed -- Range: 1~100, Default: 50, Unit: %, Manual p.4-49 */
    readonly "08-21": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-21";
            readonly name: "Limit of Stall Prevention in Acc over Base Speed";
            readonly range: "1~100";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 449;
        };
    };
    /** @param 08-22 Stall Prevention Detection Time in Operation -- Range: 2~100, Default: 100, Unit: ms, Manual p.4-49 */
    readonly "08-22": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-22";
            readonly name: "Stall Prevention Detection Time in Operation";
            readonly range: "2~100";
            readonly default: "100";
            readonly unit: "ms";
            readonly page: 449;
        };
    };
    /** @param 08-23 Ground Fault (GF) Selection -- Range: 0-1, Default: 0, Manual p.4-49 */
    readonly "08-23": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-23";
            readonly name: "Ground Fault (GF) Selection";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-24 External Fault Operation Selection -- Range: 0-2, Default: 0, Manual p.4-49 */
    readonly "08-24": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-24";
            readonly name: "External Fault Operation Selection";
            readonly range: "0-2 (0:Decel to stop / 1:Coast to stop / 2:Continuous operation)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-25 Detection Selection of External Fault -- Range: 0-1, Default: 0, Manual p.4-49 */
    readonly "08-25": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-25";
            readonly name: "Detection Selection of External Fault";
            readonly range: "0-1 (0:Immediately / 1:When operation started)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-30 Run Permissive Function Selection -- Range: 0-1, Default: 0, Manual p.4-49 */
    readonly "08-30": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-30";
            readonly name: "Run Permissive Function Selection";
            readonly range: "0-1 (0:Decel to stop / 1:Coast to stop)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-35 Motor Overheating Fault Selection -- Range: 0-3, Default: 0, Manual p.4-49 */
    readonly "08-35": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-35";
            readonly name: "Motor Overheating Fault Selection";
            readonly range: "0-3 (0:Disable / 1:Decel to stop / 2:Coast to stop / 3:Continue running)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-36 PTC Input Filter Time Constant -- Range: 0.00~5.00, Default: 2.00, Unit: Sec, Manual p.4-49 */
    readonly "08-36": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-36"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-36";
            readonly name: "PTC Input Filter Time Constant";
            readonly range: "0.00~5.00";
            readonly default: "2.00";
            readonly unit: "Sec";
            readonly page: 449;
        };
    };
    /** @param 08-37 Fan Control Function -- Range: 0-2, Default: 0, Manual p.4-49 */
    readonly "08-37": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-37";
            readonly name: "Fan Control Function";
            readonly range: "0-2 (0:Start in operation / 1:Permanent start / 2:Start in high temp)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 449;
        };
    };
    /** @param 08-38 Delay Time of Fan Off -- Range: 0~600, Default: 60, Unit: s, Manual p.4-49 */
    readonly "08-38": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-38";
            readonly name: "Delay Time of Fan Off";
            readonly range: "0~600";
            readonly default: "60";
            readonly unit: "s";
            readonly page: 449;
        };
    };
    /** @param 08-39 Delay Time of Motor Overheat Protection -- Range: 1~300, Default: 60, Unit: sec, Manual p.4-49 */
    readonly "08-39": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-39";
            readonly name: "Delay Time of Motor Overheat Protection";
            readonly range: "1~300";
            readonly default: "60";
            readonly unit: "sec";
            readonly page: 449;
        };
    };
    /** @param 08-40 Motor2 Acceleration Stall Prevention Level -- Range: 20~200, Default: HD:150 ND:120, Unit: %, Manual p.4-49 */
    readonly "08-40": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-40";
            readonly name: "Motor2 Acceleration Stall Prevention Level";
            readonly range: "20~200";
            readonly default: "HD:150 / ND:120";
            readonly unit: "%";
            readonly page: 449;
        };
    };
    /** @param 08-41 Motor2 Acceleration Stall Prevention Limit -- Range: 1~100, Default: 50, Unit: %, Manual p.4-50 */
    readonly "08-41": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-41";
            readonly name: "Motor2 Acceleration Stall Prevention Limit";
            readonly range: "1~100";
            readonly default: "50";
            readonly unit: "%";
            readonly page: 450;
        };
    };
    /** @param 08-42 PTC Protection Level -- Range: 0.1~10.0, Default: 0.7, Unit: V, Manual p.4-50 */
    readonly "08-42": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-42"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-42";
            readonly name: "PTC Protection Level";
            readonly range: "0.1~10.0";
            readonly default: "0.7";
            readonly unit: "V";
            readonly page: 450;
        };
    };
    /** @param 08-43 PTC Restart Level -- Range: 0.1~10.0, Default: 0.3, Unit: V, Manual p.4-50 */
    readonly "08-43": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-43"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-43";
            readonly name: "PTC Restart Level";
            readonly range: "0.1~10.0";
            readonly default: "0.3";
            readonly unit: "V";
            readonly page: 450;
        };
    };
    /** @param 08-44 PTC Warning Level -- Range: 0.1~10.0, Default: 0.5, Unit: V, Manual p.4-50 */
    readonly "08-44": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-44"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-44";
            readonly name: "PTC Warning Level";
            readonly range: "0.1~10.0";
            readonly default: "0.5";
            readonly unit: "V";
            readonly page: 450;
        };
    };
    /**
     * @param 08-46 Temperature Agree Level -- Range: 0~254, Default: 0, Unit: degree C, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-46": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-46";
            readonly name: "Temperature Agree Level";
            readonly range: "0~254";
            readonly default: "0";
            readonly unit: "degree C";
            readonly page: 450;
        };
    };
    /**
     * @param 08-47 Temperature Reset Level -- Range: 0~254, Default: 0, Unit: degree C, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-47": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-47";
            readonly name: "Temperature Reset Level";
            readonly range: "0~254";
            readonly default: "0";
            readonly unit: "degree C";
            readonly page: 450;
        };
    };
    /**
     * @param 08-48 Selection of Fire Mode -- Range: 0-1, Default: 0, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-48": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-48"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-48";
            readonly name: "Selection of Fire Mode";
            readonly range: "0-1 (0:Disable / 1:Enable)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 450;
        };
    };
    /**
     * @param 08-49 Multi-Function Input Terminal Status of Fire Mode -- Range: 0-1, Default: 0, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-49": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-49"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-49";
            readonly name: "Multi-Function Input Terminal Status of Fire Mode";
            readonly range: "0-1 (0:Reset after power off / 1:Reset after terminal removed)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 450;
        };
    };
    /**
     * @param 08-50 Multi-Function Terminal Status of Fire Mode -- Bit field, Default: 0000b, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-50": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-50"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-50";
            readonly name: "Multi-Function Terminal Status of Fire Mode";
            readonly range: "bit0:S6 A/B contact (0:A / 1:B)";
            readonly default: "0000b (0)";
            readonly unit: "-";
            readonly page: 450;
        };
    };
    /**
     * @param 08-51 Motor Speed Setting Source of Fire Mode -- Range: 0-2, Default: 0, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-51": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-51"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-51";
            readonly name: "Motor Speed Setting Source of Fire Mode";
            readonly range: "0-2 (0:Fire speed / 1:PID / 2:AI2)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 450;
        };
    };
    /**
     * @param 08-52 Motor Speed of Fire Mode -- Range: 0.00~100.00, Default: 100.00, Unit: %, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-52": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-52"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.01;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-52";
            readonly name: "Motor Speed of Fire Mode";
            readonly range: "0.00~100.00";
            readonly default: "100.00";
            readonly unit: "%";
            readonly page: 450;
        };
    };
    /**
     * @param 08-53 PID Detection Level of Fire Mode -- Range: 0~100, Default: 0, Unit: %, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-53": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-53"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-53";
            readonly name: "PID Detection Level of Fire Mode";
            readonly range: "0~100";
            readonly default: "0";
            readonly unit: "%";
            readonly page: 450;
        };
    };
    /**
     * @param 08-54 Delay Time of Fire Mode PID Loss -- Range: 0.0~10.0, Default: 1.0, Unit: s, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-54": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-54"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-54";
            readonly name: "Delay Time of Fire Mode PID Loss";
            readonly range: "0.0~10.0";
            readonly default: "1.0";
            readonly unit: "s";
            readonly page: 450;
        };
    };
    /**
     * @param 08-55 PID Feedback Loss Detection Selection of Fire Mode -- Range: 0-2, Default: 1, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-55": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-55"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-55";
            readonly name: "PID Feedback Loss Detection Selection of Fire Mode";
            readonly range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 450;
        };
    };
    /**
     * @param 08-56 Detection Level of Fire Mode AI2 Signal -- Range: 0.0~100.0, Default: 80.0, Unit: %, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-56": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-56"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-56";
            readonly name: "Detection Level of Fire Mode AI2 Signal";
            readonly range: "0.0~100.0";
            readonly default: "80.0";
            readonly unit: "%";
            readonly page: 450;
        };
    };
    /**
     * @param 08-57 Delay Time of Fire Mode AI2 Signal Loss -- Range: 0.0~10.0, Default: 1.0, Unit: s, Manual p.4-50
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-57": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-57"];
        readonly kind: ParamKind.Scaled;
        readonly factor: 0.1;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-57";
            readonly name: "Delay Time of Fire Mode AI2 Signal Loss";
            readonly range: "0.0~10.0";
            readonly default: "1.0";
            readonly unit: "s";
            readonly page: 450;
        };
    };
    /**
     * @param 08-58 Selection of Fire Mode AI2 Signal Loss -- Range: 0-2, Default: 1, Manual p.4-51
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-58": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-58"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-58";
            readonly name: "Selection of Fire Mode AI2 Signal Loss";
            readonly range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)";
            readonly default: "1";
            readonly unit: "-";
            readonly page: 451;
        };
    };
    /**
     * @param 08-59 Fire Mode Motor Direction -- Range: 0-1, Default: 0, Manual p.4-51
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-59": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-59"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-59";
            readonly name: "Fire Mode Motor Direction";
            readonly range: "0-1 (0:Forward / 1:Reverse)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 451;
        };
    };
    /**
     * @param 08-60 Fire Mode Password -- Range: 00000~65534, Default: 0, Manual p.4-51
     * @remarks Not listed in the A510 communication addendum (Group 8 register map ends at 08-40).
     *          Returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "08-60": {
        readonly register: (typeof GROUP_08_Protection_Parameters)["08-60"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 8;
            readonly code: "08-60";
            readonly name: "Fire Mode Password";
            readonly range: "0~65534";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 451;
        };
    };
};
