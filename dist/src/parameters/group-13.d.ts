/**
 * Group 13: Maintenance Parameters
 * Manual pages 4-68 to 4-70
 */
import { ParamKind } from "modbus-schema";
import { GROUP_13_Maintenance_Parameters } from "../Registers";
export declare const group13Params: {
    readonly "13-00": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-00"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-00";
            readonly name: "Inverter Capacity Selection";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-01": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-01"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-01";
            readonly name: "Software Version";
            readonly range: "0.00~9.99";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-02": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-02"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-02";
            readonly name: "Clear Cumulative Operation Hours";
            readonly range: "0-1 (0:Disable / 1:Clear)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-03": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-03"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-03";
            readonly name: "Cumulative Operation Hours 1";
            readonly range: "0~23";
            readonly default: "-";
            readonly unit: "hr";
            readonly page: 468;
        };
    };
    readonly "13-04": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-04"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-04";
            readonly name: "Cumulative Operation Hours 2";
            readonly range: "0~65534";
            readonly default: "-";
            readonly unit: "day";
            readonly page: 468;
        };
    };
    readonly "13-05": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-05"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-05";
            readonly name: "Selection of Cumulative Operation Time";
            readonly range: "0-1 (0:Power on / 1:Operation)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-06": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-06"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-06";
            readonly name: "Parameters Locked";
            readonly range: "0-2 (0:Read-only / 1:User defined / 2:All writable)";
            readonly default: "2";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-07": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-07"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-07";
            readonly name: "Parameter Password Function";
            readonly range: "00000~65534";
            readonly default: "00000";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-08": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-08"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-08";
            readonly name: "Restore Factory Setting";
            readonly range: "0-16 (0:No init / 2:2-wire 60Hz 230/460/690V / 4:2-wire 50Hz 220/380V / 6:3-wire 60Hz 230/460/690V / 8:3-wire 50Hz 220/380V / 10:Customized / 12:2-wire 50Hz 200/400V / 14:3-wire 50Hz 200/400V / 16:3-wire 50Hz 220/380V)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 468;
        };
    };
    readonly "13-09": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-09"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-09";
            readonly name: "Fault History Clearance Function";
            readonly range: "0-1 (0:No clearing / 1:Clear)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-10": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-10"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-10";
            readonly name: "Parameter Password Function 2";
            readonly range: "0~9999";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-11": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-11"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-11";
            readonly name: "C/B CPLD Ver.";
            readonly range: "0.00~9.99";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-12": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-12"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-12";
            readonly name: "PG Card Id";
            readonly range: "0~255";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-13": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-13"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-13";
            readonly name: "PG Card Ver.";
            readonly range: "0.00~9.99";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-14": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-14"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-14";
            readonly name: "Fault Storage Selections";
            readonly range: "0-1 (0:Auto restart not saved / 1:Auto restart saved)";
            readonly default: "0";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    /**
     * Fault History registers 13-21 through 13-50.
     * @remarks Not listed in the A510 communication addendum (Group 13 register map ends at 13-14).
     *          All returned Modbus exception 2 (Illegal Data Address) on test device.
     *          Retained for completeness per the instruction manual parameter table.
     */
    readonly "13-21": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-21"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-21";
            readonly name: "Last time Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-22": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-22"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-22";
            readonly name: "Previous two Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-23": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-23"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-23";
            readonly name: "Previous three Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-24": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-24"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-24";
            readonly name: "Previous four Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-25": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-25"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-25";
            readonly name: "Previous five Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-26": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-26"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-26";
            readonly name: "Previous six Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 469;
        };
    };
    readonly "13-27": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-27"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-27";
            readonly name: "Previous seven Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-28": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-28"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-28";
            readonly name: "Previous eight Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-29": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-29"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-29";
            readonly name: "Previous nine Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-30": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-30"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-30";
            readonly name: "Previous ten Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-31": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-31"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-31";
            readonly name: "Previous eleven Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-32": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-32"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-32";
            readonly name: "Previous twelve Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-33": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-33"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-33";
            readonly name: "Previous thirteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-34": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-34"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-34";
            readonly name: "Previous fourteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-35": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-35"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-35";
            readonly name: "Previous fifteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-36": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-36"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-36";
            readonly name: "Previous sixteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-37": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-37"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-37";
            readonly name: "Previous seventeen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-38": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-38"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-38";
            readonly name: "Previous eighteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-39": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-39"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-39";
            readonly name: "Previous nineteen Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-40": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-40"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-40";
            readonly name: "Previous twenty Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-41": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-41"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-41";
            readonly name: "Previous twenty one Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-42": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-42"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-42";
            readonly name: "Previous twenty two Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-43": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-43"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-43";
            readonly name: "Previous twenty three Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-44": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-44"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-44";
            readonly name: "Previous twenty four Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-45": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-45"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-45";
            readonly name: "Previous twenty five Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-46": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-46"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-46";
            readonly name: "Previous twenty six Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-47": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-47"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-47";
            readonly name: "Previous twenty seven Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-48": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-48"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-48";
            readonly name: "Previous twenty eight Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-49": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-49"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-49";
            readonly name: "Previous twenty nine Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
    readonly "13-50": {
        readonly register: (typeof GROUP_13_Maintenance_Parameters)["13-50"];
        readonly kind: ParamKind.UInt16;
        readonly meta: {
            readonly group: 13;
            readonly code: "13-50";
            readonly name: "Previous thirty Fault History";
            readonly range: "read-only";
            readonly default: "-";
            readonly unit: "-";
            readonly page: 470;
        };
    };
};
