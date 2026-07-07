// src/Registers.ts
var COMMAND_REGISTERS;
((COMMAND_REGISTERS2) => {
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["OPERATION_COMMAND"] = 9473] = "OPERATION_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["FREQUENCY_COMMAND"] = 9474] = "FREQUENCY_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["TORQUE_COMMAND"] = 9475] = "TORQUE_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["SPEED_LIMIT_COMMAND"] = 9476] = "SPEED_LIMIT_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["ANALOG_OUT_1_COMMAND"] = 9477] = "ANALOG_OUT_1_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["ANALOG_OUT_2_COMMAND"] = 9478] = "ANALOG_OUT_2_COMMAND";
  COMMAND_REGISTERS2[COMMAND_REGISTERS2["DIGITAL_OUT_COMMAND"] = 9479] = "DIGITAL_OUT_COMMAND";
})(COMMAND_REGISTERS ||= {});
var MONITOR_REGISTERS;
((MONITOR_REGISTERS2) => {
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["STATE_MONITOR"] = 9504] = "STATE_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["ERROR_DESCRIPTION_MONITOR"] = 9505] = "ERROR_DESCRIPTION_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["DIGITAL_IN_STATE_MONITOR"] = 9506] = "DIGITAL_IN_STATE_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["FREQUENCY_COMMAND_MONITOR"] = 9507] = "FREQUENCY_COMMAND_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["OUTPUT_FREQUENCY_MONITOR"] = 9508] = "OUTPUT_FREQUENCY_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["DC_VOLTAGE_COMMAND_MONITOR"] = 9510] = "DC_VOLTAGE_COMMAND_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["OUTPUT_CURRENT_MONITOR"] = 9511] = "OUTPUT_CURRENT_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["WARNING_DESCRIPTION_MONITOR"] = 9512] = "WARNING_DESCRIPTION_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["DIGITAL_OUTPUT_STATE_MONITOR"] = 9513] = "DIGITAL_OUTPUT_STATE_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["ANALOG_OUT_1_MONITOR"] = 9514] = "ANALOG_OUT_1_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["ANALOG_OUT_2_MONITOR"] = 9515] = "ANALOG_OUT_2_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["ANALOG_IN_1_MONITOR"] = 9516] = "ANALOG_IN_1_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["ANALOG_IN_2_MONITOR"] = 9517] = "ANALOG_IN_2_MONITOR";
  MONITOR_REGISTERS2[MONITOR_REGISTERS2["A510_CHECK_MONITOR"] = 9519] = "A510_CHECK_MONITOR";
})(MONITOR_REGISTERS ||= {});
var GROUP_00_Basic_Parameters;
((GROUP_00_Basic_Parameters2) => {
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-00"] = 0] = "00-00";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-01"] = 1] = "00-01";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-02"] = 2] = "00-02";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-03"] = 3] = "00-03";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-04"] = 4] = "00-04";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-05"] = 5] = "00-05";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-06"] = 6] = "00-06";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-07"] = 7] = "00-07";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-08"] = 8] = "00-08";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-09"] = 9] = "00-09";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-10"] = 10] = "00-10";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-11"] = 11] = "00-11";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-12"] = 12] = "00-12";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-13"] = 13] = "00-13";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-14"] = 14] = "00-14";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-15"] = 15] = "00-15";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-16"] = 16] = "00-16";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-17"] = 17] = "00-17";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-18"] = 18] = "00-18";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-19"] = 19] = "00-19";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-20"] = 20] = "00-20";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-21"] = 21] = "00-21";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-22"] = 22] = "00-22";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-23"] = 23] = "00-23";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-24"] = 24] = "00-24";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-25"] = 25] = "00-25";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-26"] = 26] = "00-26";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-27"] = 27] = "00-27";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-28"] = 28] = "00-28";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-29"] = 29] = "00-29";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-32"] = 32] = "00-32";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-33"] = 33] = "00-33";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-41"] = 41] = "00-41";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-42"] = 42] = "00-42";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-43"] = 43] = "00-43";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-44"] = 44] = "00-44";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-45"] = 45] = "00-45";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-46"] = 46] = "00-46";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-47"] = 47] = "00-47";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-48"] = 48] = "00-48";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-49"] = 49] = "00-49";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-50"] = 50] = "00-50";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-51"] = 51] = "00-51";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-52"] = 52] = "00-52";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-53"] = 53] = "00-53";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-54"] = 54] = "00-54";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-55"] = 55] = "00-55";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-56"] = 56] = "00-56";
  GROUP_00_Basic_Parameters2[GROUP_00_Basic_Parameters2["00-57"] = 57] = "00-57";
})(GROUP_00_Basic_Parameters ||= {});
var GROUP_01_VF_Control_Parameters;
((GROUP_01_VF_Control_Parameters2) => {
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-00"] = 256] = "01-00";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-02"] = 258] = "01-02";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-03"] = 259] = "01-03";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-04"] = 260] = "01-04";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-05"] = 261] = "01-05";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-06"] = 262] = "01-06";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-07"] = 263] = "01-07";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-08"] = 264] = "01-08";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-09"] = 265] = "01-09";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-10"] = 266] = "01-10";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-11"] = 267] = "01-11";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-12"] = 268] = "01-12";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-13"] = 269] = "01-13";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-14"] = 270] = "01-14";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-15"] = 271] = "01-15";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-16"] = 272] = "01-16";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-17"] = 273] = "01-17";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-18"] = 274] = "01-18";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-19"] = 275] = "01-19";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-20"] = 276] = "01-20";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-21"] = 277] = "01-21";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-22"] = 278] = "01-22";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-23"] = 279] = "01-23";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-24"] = 280] = "01-24";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-25"] = 281] = "01-25";
  GROUP_01_VF_Control_Parameters2[GROUP_01_VF_Control_Parameters2["01-26"] = 282] = "01-26";
})(GROUP_01_VF_Control_Parameters ||= {});
var GROUP_02_IM_Motor_Parameters;
((GROUP_02_IM_Motor_Parameters2) => {
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-00"] = 512] = "02-00";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-01"] = 513] = "02-01";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-03"] = 515] = "02-03";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-04"] = 516] = "02-04";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-05"] = 517] = "02-05";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-06"] = 518] = "02-06";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-07"] = 519] = "02-07";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-09"] = 521] = "02-09";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-10"] = 522] = "02-10";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-11"] = 523] = "02-11";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-12"] = 524] = "02-12";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-13"] = 525] = "02-13";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-15"] = 527] = "02-15";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-19"] = 531] = "02-19";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-20"] = 532] = "02-20";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-21"] = 533] = "02-21";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-22"] = 534] = "02-22";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-23"] = 535] = "02-23";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-24"] = 536] = "02-24";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-25"] = 537] = "02-25";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-26"] = 538] = "02-26";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-32"] = 544] = "02-32";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-33"] = 545] = "02-33";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-34"] = 546] = "02-34";
  GROUP_02_IM_Motor_Parameters2[GROUP_02_IM_Motor_Parameters2["02-37"] = 549] = "02-37";
})(GROUP_02_IM_Motor_Parameters ||= {});
var GROUP_03_External_Digital_Input_and_Output_Parameters;
((GROUP_03_External_Digital_Input_and_Output_Parameters2) => {
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-00"] = 768] = "03-00";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-01"] = 769] = "03-01";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-02"] = 770] = "03-02";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-03"] = 771] = "03-03";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-04"] = 772] = "03-04";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-05"] = 773] = "03-05";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-06"] = 774] = "03-06";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-07"] = 775] = "03-07";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-08"] = 776] = "03-08";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-09"] = 777] = "03-09";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-10"] = 778] = "03-10";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-11"] = 779] = "03-11";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-12"] = 780] = "03-12";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-13"] = 781] = "03-13";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-14"] = 782] = "03-14";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-15"] = 783] = "03-15";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-16"] = 784] = "03-16";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-17"] = 785] = "03-17";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-18"] = 786] = "03-18";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-19"] = 787] = "03-19";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-20"] = 788] = "03-20";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-21"] = 789] = "03-21";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-27"] = 795] = "03-27";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-28"] = 796] = "03-28";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-29"] = 797] = "03-29";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-30"] = 798] = "03-30";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-31"] = 799] = "03-31";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-32"] = 800] = "03-32";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-33"] = 801] = "03-33";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-34"] = 802] = "03-34";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-35"] = 803] = "03-35";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-36"] = 804] = "03-36";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-37"] = 805] = "03-37";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-38"] = 806] = "03-38";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-40"] = 808] = "03-40";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-41"] = 809] = "03-41";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-42"] = 810] = "03-42";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-43"] = 811] = "03-43";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-44"] = 812] = "03-44";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-45"] = 813] = "03-45";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-46"] = 814] = "03-46";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-47"] = 815] = "03-47";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-48"] = 816] = "03-48";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-49"] = 817] = "03-49";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-50"] = 818] = "03-50";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-51"] = 819] = "03-51";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-52"] = 820] = "03-52";
  GROUP_03_External_Digital_Input_and_Output_Parameters2[GROUP_03_External_Digital_Input_and_Output_Parameters2["03-53"] = 821] = "03-53";
})(GROUP_03_External_Digital_Input_and_Output_Parameters ||= {});
var GROUP_04_External_Analog_Input_and_Output_Parameters;
((GROUP_04_External_Analog_Input_and_Output_Parameters2) => {
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-00"] = 1024] = "04-00";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-01"] = 1025] = "04-01";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-02"] = 1026] = "04-02";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-03"] = 1027] = "04-03";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-04"] = 1028] = "04-04";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-05"] = 1029] = "04-05";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-06"] = 1030] = "04-06";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-07"] = 1031] = "04-07";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-08"] = 1032] = "04-08";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-09"] = 1033] = "04-09";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-10"] = 1034] = "04-10";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-11"] = 1035] = "04-11";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-12"] = 1036] = "04-12";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-13"] = 1037] = "04-13";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-16"] = 1040] = "04-16";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-17"] = 1041] = "04-17";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-18"] = 1042] = "04-18";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-19"] = 1043] = "04-19";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-20"] = 1044] = "04-20";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-21"] = 1045] = "04-21";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-22"] = 1046] = "04-22";
  GROUP_04_External_Analog_Input_and_Output_Parameters2[GROUP_04_External_Analog_Input_and_Output_Parameters2["04-23"] = 1047] = "04-23";
})(GROUP_04_External_Analog_Input_and_Output_Parameters ||= {});
var GROUP_05_Multi_Speed_Parameters;
((GROUP_05_Multi_Speed_Parameters2) => {
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-00"] = 1280] = "05-00";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-01"] = 1281] = "05-01";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-02"] = 1282] = "05-02";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-03"] = 1283] = "05-03";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-04"] = 1284] = "05-04";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-05"] = 1285] = "05-05";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-06"] = 1286] = "05-06";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-07"] = 1287] = "05-07";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-08"] = 1288] = "05-08";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-09"] = 1289] = "05-09";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-10"] = 1290] = "05-10";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-11"] = 1291] = "05-11";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-12"] = 1292] = "05-12";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-13"] = 1293] = "05-13";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-14"] = 1294] = "05-14";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-15"] = 1295] = "05-15";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-16"] = 1296] = "05-16";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-17"] = 1297] = "05-17";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-18"] = 1298] = "05-18";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-19"] = 1299] = "05-19";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-20"] = 1300] = "05-20";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-21"] = 1301] = "05-21";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-22"] = 1302] = "05-22";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-23"] = 1303] = "05-23";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-24"] = 1304] = "05-24";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-25"] = 1305] = "05-25";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-26"] = 1306] = "05-26";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-27"] = 1307] = "05-27";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-28"] = 1308] = "05-28";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-29"] = 1309] = "05-29";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-30"] = 1310] = "05-30";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-31"] = 1311] = "05-31";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-32"] = 1312] = "05-32";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-33"] = 1313] = "05-33";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-34"] = 1314] = "05-34";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-35"] = 1315] = "05-35";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-36"] = 1316] = "05-36";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-37"] = 1317] = "05-37";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-38"] = 1318] = "05-38";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-39"] = 1319] = "05-39";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-40"] = 1320] = "05-40";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-41"] = 1321] = "05-41";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-42"] = 1322] = "05-42";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-43"] = 1323] = "05-43";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-44"] = 1324] = "05-44";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-45"] = 1325] = "05-45";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-46"] = 1326] = "05-46";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-47"] = 1327] = "05-47";
  GROUP_05_Multi_Speed_Parameters2[GROUP_05_Multi_Speed_Parameters2["05-48"] = 1328] = "05-48";
})(GROUP_05_Multi_Speed_Parameters ||= {});
var GROUP_06_Automatic_Program_Operation_Parameters;
((GROUP_06_Automatic_Program_Operation_Parameters2) => {
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-00"] = 1536] = "06-00";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-01"] = 1537] = "06-01";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-02"] = 1538] = "06-02";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-03"] = 1539] = "06-03";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-04"] = 1540] = "06-04";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-05"] = 1541] = "06-05";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-06"] = 1542] = "06-06";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-07"] = 1543] = "06-07";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-08"] = 1544] = "06-08";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-09"] = 1545] = "06-09";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-10"] = 1546] = "06-10";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-11"] = 1547] = "06-11";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-12"] = 1548] = "06-12";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-13"] = 1549] = "06-13";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-14"] = 1550] = "06-14";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-15"] = 1551] = "06-15";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-16"] = 1552] = "06-16";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-17"] = 1553] = "06-17";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-18"] = 1554] = "06-18";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-19"] = 1555] = "06-19";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-20"] = 1556] = "06-20";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-21"] = 1557] = "06-21";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-22"] = 1558] = "06-22";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-23"] = 1559] = "06-23";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-24"] = 1560] = "06-24";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-25"] = 1561] = "06-25";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-26"] = 1562] = "06-26";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-27"] = 1563] = "06-27";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-28"] = 1564] = "06-28";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-29"] = 1565] = "06-29";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-30"] = 1566] = "06-30";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-31"] = 1567] = "06-31";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-32"] = 1568] = "06-32";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-33"] = 1569] = "06-33";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-34"] = 1570] = "06-34";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-35"] = 1571] = "06-35";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-36"] = 1572] = "06-36";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-37"] = 1573] = "06-37";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-38"] = 1574] = "06-38";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-39"] = 1575] = "06-39";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-40"] = 1576] = "06-40";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-41"] = 1577] = "06-41";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-42"] = 1578] = "06-42";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-43"] = 1579] = "06-43";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-44"] = 1580] = "06-44";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-45"] = 1581] = "06-45";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-46"] = 1582] = "06-46";
  GROUP_06_Automatic_Program_Operation_Parameters2[GROUP_06_Automatic_Program_Operation_Parameters2["06-47"] = 1583] = "06-47";
})(GROUP_06_Automatic_Program_Operation_Parameters ||= {});
var GROUP_07_Start_Stop_Parameters;
((GROUP_07_Start_Stop_Parameters2) => {
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-00"] = 1792] = "07-00";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-01"] = 1793] = "07-01";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-02"] = 1794] = "07-02";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-04"] = 1796] = "07-04";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-05"] = 1797] = "07-05";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-06"] = 1798] = "07-06";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-07"] = 1799] = "07-07";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-08"] = 1800] = "07-08";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-09"] = 1801] = "07-09";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-13"] = 1805] = "07-13";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-14"] = 1806] = "07-14";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-15"] = 1807] = "07-15";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-16"] = 1808] = "07-16";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-18"] = 1810] = "07-18";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-19"] = 1811] = "07-19";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-20"] = 1812] = "07-20";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-21"] = 1813] = "07-21";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-22"] = 1814] = "07-22";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-23"] = 1815] = "07-23";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-24"] = 1816] = "07-24";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-25"] = 1817] = "07-25";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-26"] = 1818] = "07-26";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-27"] = 1819] = "07-27";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-28"] = 1820] = "07-28";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-29"] = 1821] = "07-29";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-30"] = 1822] = "07-30";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-31"] = 1823] = "07-31";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-32"] = 1824] = "07-32";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-33"] = 1825] = "07-33";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-34"] = 1826] = "07-34";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-35"] = 1827] = "07-35";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-36"] = 1828] = "07-36";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-42"] = 1834] = "07-42";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-43"] = 1835] = "07-43";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-44"] = 1836] = "07-44";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-45"] = 1837] = "07-45";
  GROUP_07_Start_Stop_Parameters2[GROUP_07_Start_Stop_Parameters2["07-46"] = 1838] = "07-46";
})(GROUP_07_Start_Stop_Parameters ||= {});
var GROUP_08_Protection_Parameters;
((GROUP_08_Protection_Parameters2) => {
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-00"] = 2048] = "08-00";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-01"] = 2049] = "08-01";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-02"] = 2050] = "08-02";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-03"] = 2051] = "08-03";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-05"] = 2053] = "08-05";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-06"] = 2054] = "08-06";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-07"] = 2055] = "08-07";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-08"] = 2056] = "08-08";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-09"] = 2057] = "08-09";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-10"] = 2058] = "08-10";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-13"] = 2061] = "08-13";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-14"] = 2062] = "08-14";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-15"] = 2063] = "08-15";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-16"] = 2064] = "08-16";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-17"] = 2065] = "08-17";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-18"] = 2066] = "08-18";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-19"] = 2067] = "08-19";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-20"] = 2068] = "08-20";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-21"] = 2069] = "08-21";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-22"] = 2070] = "08-22";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-23"] = 2071] = "08-23";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-24"] = 2072] = "08-24";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-25"] = 2073] = "08-25";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-30"] = 2078] = "08-30";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-35"] = 2083] = "08-35";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-36"] = 2084] = "08-36";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-37"] = 2085] = "08-37";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-38"] = 2086] = "08-38";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-39"] = 2087] = "08-39";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-40"] = 2088] = "08-40";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-41"] = 2089] = "08-41";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-42"] = 2090] = "08-42";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-43"] = 2091] = "08-43";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-44"] = 2092] = "08-44";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-46"] = 2094] = "08-46";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-47"] = 2095] = "08-47";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-48"] = 2096] = "08-48";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-49"] = 2097] = "08-49";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-50"] = 2098] = "08-50";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-51"] = 2099] = "08-51";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-52"] = 2100] = "08-52";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-53"] = 2101] = "08-53";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-54"] = 2102] = "08-54";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-55"] = 2103] = "08-55";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-56"] = 2104] = "08-56";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-57"] = 2105] = "08-57";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-58"] = 2106] = "08-58";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-59"] = 2107] = "08-59";
  GROUP_08_Protection_Parameters2[GROUP_08_Protection_Parameters2["08-60"] = 2108] = "08-60";
})(GROUP_08_Protection_Parameters ||= {});
var GROUP_09_Communication_Parameters;
((GROUP_09_Communication_Parameters2) => {
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-00"] = 2304] = "09-00";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-01"] = 2305] = "09-01";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-02"] = 2306] = "09-02";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-03"] = 2307] = "09-03";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-04"] = 2308] = "09-04";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-05"] = 2309] = "09-05";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-06"] = 2310] = "09-06";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-07"] = 2311] = "09-07";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-08"] = 2312] = "09-08";
  GROUP_09_Communication_Parameters2[GROUP_09_Communication_Parameters2["09-09"] = 2313] = "09-09";
})(GROUP_09_Communication_Parameters ||= {});
var GROUP_10_PID_Parameters;
((GROUP_10_PID_Parameters2) => {
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-00"] = 2560] = "10-00";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-01"] = 2561] = "10-01";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-02"] = 2562] = "10-02";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-03"] = 2563] = "10-03";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-04"] = 2564] = "10-04";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-05"] = 2565] = "10-05";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-06"] = 2566] = "10-06";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-07"] = 2567] = "10-07";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-08"] = 2568] = "10-08";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-09"] = 2569] = "10-09";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-10"] = 2570] = "10-10";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-11"] = 2571] = "10-11";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-12"] = 2572] = "10-12";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-13"] = 2573] = "10-13";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-14"] = 2574] = "10-14";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-15"] = 2575] = "10-15";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-16"] = 2576] = "10-16";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-17"] = 2577] = "10-17";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-18"] = 2578] = "10-18";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-19"] = 2579] = "10-19";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-20"] = 2580] = "10-20";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-23"] = 2583] = "10-23";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-24"] = 2584] = "10-24";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-25"] = 2585] = "10-25";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-26"] = 2586] = "10-26";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-27"] = 2587] = "10-27";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-29"] = 2589] = "10-29";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-30"] = 2590] = "10-30";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-31"] = 2591] = "10-31";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-33"] = 2593] = "10-33";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-34"] = 2594] = "10-34";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-35"] = 2595] = "10-35";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-36"] = 2596] = "10-36";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-37"] = 2597] = "10-37";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-38"] = 2598] = "10-38";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-39"] = 2599] = "10-39";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-40"] = 2600] = "10-40";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-41"] = 2601] = "10-41";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-47"] = 2607] = "10-47";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-48"] = 2608] = "10-48";
  GROUP_10_PID_Parameters2[GROUP_10_PID_Parameters2["10-49"] = 2609] = "10-49";
})(GROUP_10_PID_Parameters ||= {});
var GROUP_11_Auxiliary_Parameters;
((GROUP_11_Auxiliary_Parameters2) => {
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-00"] = 2816] = "11-00";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-01"] = 2817] = "11-01";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-02"] = 2818] = "11-02";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-03"] = 2819] = "11-03";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-04"] = 2820] = "11-04";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-05"] = 2821] = "11-05";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-06"] = 2822] = "11-06";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-07"] = 2823] = "11-07";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-08"] = 2824] = "11-08";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-09"] = 2825] = "11-09";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-10"] = 2826] = "11-10";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-11"] = 2827] = "11-11";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-12"] = 2828] = "11-12";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-13"] = 2829] = "11-13";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-18"] = 2834] = "11-18";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-19"] = 2835] = "11-19";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-20"] = 2836] = "11-20";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-21"] = 2837] = "11-21";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-22"] = 2838] = "11-22";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-23"] = 2839] = "11-23";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-24"] = 2840] = "11-24";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-28"] = 2844] = "11-28";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-29"] = 2845] = "11-29";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-30"] = 2846] = "11-30";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-31"] = 2847] = "11-31";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-32"] = 2848] = "11-32";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-33"] = 2849] = "11-33";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-34"] = 2850] = "11-34";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-35"] = 2851] = "11-35";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-36"] = 2852] = "11-36";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-37"] = 2853] = "11-37";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-38"] = 2854] = "11-38";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-39"] = 2855] = "11-39";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-40"] = 2856] = "11-40";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-41"] = 2857] = "11-41";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-42"] = 2858] = "11-42";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-43"] = 2859] = "11-43";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-44"] = 2860] = "11-44";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-45"] = 2861] = "11-45";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-46"] = 2862] = "11-46";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-47"] = 2863] = "11-47";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-48"] = 2864] = "11-48";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-49"] = 2865] = "11-49";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-50"] = 2866] = "11-50";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-51"] = 2867] = "11-51";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-52"] = 2868] = "11-52";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-53"] = 2869] = "11-53";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-54"] = 2870] = "11-54";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-55"] = 2871] = "11-55";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-56"] = 2872] = "11-56";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-58"] = 2874] = "11-58";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-59"] = 2875] = "11-59";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-60"] = 2876] = "11-60";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-61"] = 2877] = "11-61";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-62"] = 2878] = "11-62";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-63"] = 2879] = "11-63";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-64"] = 2880] = "11-64";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-65"] = 2881] = "11-65";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-66"] = 2882] = "11-66";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-67"] = 2883] = "11-67";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-68"] = 2884] = "11-68";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-69"] = 2885] = "11-69";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-70"] = 2886] = "11-70";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-71"] = 2887] = "11-71";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-72"] = 2888] = "11-72";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-73"] = 2889] = "11-73";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-76"] = 2892] = "11-76";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-77"] = 2893] = "11-77";
  GROUP_11_Auxiliary_Parameters2[GROUP_11_Auxiliary_Parameters2["11-78"] = 2894] = "11-78";
})(GROUP_11_Auxiliary_Parameters ||= {});
var GROUP_12_Monitoring_Parameters;
((GROUP_12_Monitoring_Parameters2) => {
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-00"] = 9488] = "12-00";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-01"] = 3073] = "12-01";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-02"] = 3074] = "12-02";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-03"] = 3075] = "12-03";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-04"] = 3076] = "12-04";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-05"] = 3077] = "12-05";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-11"] = 3083] = "12-11";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-12"] = 3084] = "12-12";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-13"] = 3085] = "12-13";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-14"] = 3086] = "12-14";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-15"] = 3087] = "12-15";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-16"] = 3088] = "12-16";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-17"] = 3089] = "12-17";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-18"] = 3090] = "12-18";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-19"] = 3091] = "12-19";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-20"] = 3092] = "12-20";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-21"] = 3093] = "12-21";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-22"] = 3094] = "12-22";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-23"] = 3095] = "12-23";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-24"] = 3096] = "12-24";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-25"] = 3097] = "12-25";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-26"] = 3098] = "12-26";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-27"] = 3099] = "12-27";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-28"] = 3100] = "12-28";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-29"] = 3101] = "12-29";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-30"] = 3102] = "12-30";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-32"] = 3104] = "12-32";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-33"] = 3105] = "12-33";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-34"] = 3106] = "12-34";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-35"] = 3107] = "12-35";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-36"] = 3108] = "12-36";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-37"] = 3109] = "12-37";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-38"] = 3110] = "12-38";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-39"] = 3111] = "12-39";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-41"] = 3113] = "12-41";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-42"] = 3114] = "12-42";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-43"] = 3115] = "12-43";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-44"] = 3116] = "12-44";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-45"] = 3117] = "12-45";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-46"] = 3118] = "12-46";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-47"] = 3119] = "12-47";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-48"] = 3120] = "12-48";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-49"] = 3121] = "12-49";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-50"] = 3122] = "12-50";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-51"] = 3123] = "12-51";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-52"] = 3124] = "12-52";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-53"] = 3125] = "12-53";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-54"] = 3126] = "12-54";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-55"] = 3127] = "12-55";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-56"] = 3128] = "12-56";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-57"] = 3129] = "12-57";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-58"] = 3130] = "12-58";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-59"] = 3131] = "12-59";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-60"] = 3132] = "12-60";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-61"] = 3133] = "12-61";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-62"] = 3134] = "12-62";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-63"] = 3135] = "12-63";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-64"] = 3136] = "12-64";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-65"] = 3137] = "12-65";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-66"] = 3138] = "12-66";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-67"] = 3139] = "12-67";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-68"] = 3140] = "12-68";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-76"] = 3148] = "12-76";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-78"] = 3150] = "12-78";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-79"] = 3151] = "12-79";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-80"] = 3152] = "12-80";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-82"] = 3154] = "12-82";
  GROUP_12_Monitoring_Parameters2[GROUP_12_Monitoring_Parameters2["12-85"] = 3157] = "12-85";
})(GROUP_12_Monitoring_Parameters ||= {});
var GROUP_13_Maintenance_Parameters;
((GROUP_13_Maintenance_Parameters2) => {
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-00"] = 3328] = "13-00";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-01"] = 3329] = "13-01";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-02"] = 3330] = "13-02";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-03"] = 3331] = "13-03";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-04"] = 3332] = "13-04";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-05"] = 3333] = "13-05";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-06"] = 3334] = "13-06";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-07"] = 3335] = "13-07";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-08"] = 3336] = "13-08";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-09"] = 3337] = "13-09";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-10"] = 3338] = "13-10";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-11"] = 3339] = "13-11";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-12"] = 3340] = "13-12";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-13"] = 3341] = "13-13";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-14"] = 3342] = "13-14";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-21"] = 3349] = "13-21";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-22"] = 3350] = "13-22";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-23"] = 3351] = "13-23";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-24"] = 3352] = "13-24";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-25"] = 3353] = "13-25";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-26"] = 3354] = "13-26";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-27"] = 3355] = "13-27";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-28"] = 3356] = "13-28";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-29"] = 3357] = "13-29";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-30"] = 3358] = "13-30";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-31"] = 3359] = "13-31";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-32"] = 3360] = "13-32";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-33"] = 3361] = "13-33";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-34"] = 3362] = "13-34";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-35"] = 3363] = "13-35";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-36"] = 3364] = "13-36";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-37"] = 3365] = "13-37";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-38"] = 3366] = "13-38";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-39"] = 3367] = "13-39";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-40"] = 3368] = "13-40";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-41"] = 3369] = "13-41";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-42"] = 3370] = "13-42";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-43"] = 3371] = "13-43";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-44"] = 3372] = "13-44";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-45"] = 3373] = "13-45";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-46"] = 3374] = "13-46";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-47"] = 3375] = "13-47";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-48"] = 3376] = "13-48";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-49"] = 3377] = "13-49";
  GROUP_13_Maintenance_Parameters2[GROUP_13_Maintenance_Parameters2["13-50"] = 3378] = "13-50";
})(GROUP_13_Maintenance_Parameters ||= {});
var GROUP_14_PLC_Parameters;
((GROUP_14_PLC_Parameters2) => {
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-00"] = 3584] = "14-00";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-01"] = 3585] = "14-01";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-02"] = 3586] = "14-02";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-03"] = 3587] = "14-03";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-04"] = 3588] = "14-04";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-05"] = 3589] = "14-05";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-06"] = 3590] = "14-06";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-07"] = 3591] = "14-07";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-08"] = 3592] = "14-08";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-09"] = 3593] = "14-09";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-10"] = 3594] = "14-10";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-11"] = 3595] = "14-11";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-12"] = 3596] = "14-12";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-13"] = 3597] = "14-13";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-14"] = 3598] = "14-14";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-15"] = 3599] = "14-15";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-16"] = 3600] = "14-16";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-17"] = 3601] = "14-17";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-18"] = 3602] = "14-18";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-19"] = 3603] = "14-19";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-20"] = 3604] = "14-20";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-21"] = 3605] = "14-21";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-22"] = 3606] = "14-22";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-23"] = 3607] = "14-23";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-24"] = 3608] = "14-24";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-25"] = 3609] = "14-25";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-26"] = 3610] = "14-26";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-27"] = 3611] = "14-27";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-28"] = 3612] = "14-28";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-29"] = 3613] = "14-29";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-30"] = 3614] = "14-30";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-31"] = 3615] = "14-31";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-32"] = 3616] = "14-32";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-33"] = 3617] = "14-33";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-34"] = 3618] = "14-34";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-35"] = 3619] = "14-35";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-36"] = 3620] = "14-36";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-37"] = 3621] = "14-37";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-38"] = 3622] = "14-38";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-39"] = 3623] = "14-39";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-40"] = 3624] = "14-40";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-41"] = 3625] = "14-41";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-42"] = 3626] = "14-42";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-43"] = 3627] = "14-43";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-44"] = 3628] = "14-44";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-45"] = 3629] = "14-45";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-46"] = 3630] = "14-46";
  GROUP_14_PLC_Parameters2[GROUP_14_PLC_Parameters2["14-47"] = 3631] = "14-47";
})(GROUP_14_PLC_Parameters ||= {});
var GROUP_15_PLC_Monitoring_Parameters;
((GROUP_15_PLC_Monitoring_Parameters2) => {
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-00"] = 3840] = "15-00";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-01"] = 3841] = "15-01";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-02"] = 3842] = "15-02";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-03"] = 3843] = "15-03";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-04"] = 3844] = "15-04";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-05"] = 3845] = "15-05";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-06"] = 3846] = "15-06";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-07"] = 3847] = "15-07";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-08"] = 3848] = "15-08";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-09"] = 3849] = "15-09";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-10"] = 3850] = "15-10";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-11"] = 3851] = "15-11";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-12"] = 3852] = "15-12";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-13"] = 3853] = "15-13";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-14"] = 3854] = "15-14";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-15"] = 3855] = "15-15";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-16"] = 3856] = "15-16";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-17"] = 3857] = "15-17";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-18"] = 3858] = "15-18";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-19"] = 3859] = "15-19";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-20"] = 3860] = "15-20";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-21"] = 3861] = "15-21";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-22"] = 3862] = "15-22";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-23"] = 3863] = "15-23";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-24"] = 3864] = "15-24";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-25"] = 3865] = "15-25";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-26"] = 3866] = "15-26";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-27"] = 3867] = "15-27";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-28"] = 3868] = "15-28";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-29"] = 3869] = "15-29";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-30"] = 3870] = "15-30";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-31"] = 3871] = "15-31";
  GROUP_15_PLC_Monitoring_Parameters2[GROUP_15_PLC_Monitoring_Parameters2["15-32"] = 3872] = "15-32";
})(GROUP_15_PLC_Monitoring_Parameters ||= {});
var GROUP_16_LCD_Parameters;
((GROUP_16_LCD_Parameters2) => {
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-00"] = 4096] = "16-00";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-01"] = 4097] = "16-01";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-02"] = 4098] = "16-02";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-03"] = 4099] = "16-03";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-04"] = 4100] = "16-04";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-05"] = 4101] = "16-05";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-07"] = 4103] = "16-07";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-08"] = 4104] = "16-08";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-09"] = 4105] = "16-09";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-10"] = 4106] = "16-10";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-11"] = 4107] = "16-11";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-12"] = 4108] = "16-12";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-13"] = 4109] = "16-13";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-14"] = 4110] = "16-14";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-15"] = 4111] = "16-15";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-16"] = 4112] = "16-16";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-17"] = 4113] = "16-17";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-18"] = 4114] = "16-18";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-19"] = 4115] = "16-19";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-20"] = 4116] = "16-20";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-21"] = 4117] = "16-21";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-22"] = 4118] = "16-22";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-23"] = 4119] = "16-23";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-24"] = 4120] = "16-24";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-25"] = 4121] = "16-25";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-26"] = 4122] = "16-26";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-27"] = 4123] = "16-27";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-28"] = 4124] = "16-28";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-29"] = 4125] = "16-29";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-30"] = 4126] = "16-30";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-31"] = 4127] = "16-31";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-32"] = 4128] = "16-32";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-33"] = 4129] = "16-33";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-34"] = 4130] = "16-34";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-35"] = 4131] = "16-35";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-36"] = 4132] = "16-36";
  GROUP_16_LCD_Parameters2[GROUP_16_LCD_Parameters2["16-37"] = 4133] = "16-37";
})(GROUP_16_LCD_Parameters ||= {});
var GROUP_17_Automatic_Tuning_Parameters;
((GROUP_17_Automatic_Tuning_Parameters2) => {
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-00"] = 4352] = "17-00";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-01"] = 4353] = "17-01";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-02"] = 4354] = "17-02";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-03"] = 4355] = "17-03";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-04"] = 4356] = "17-04";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-05"] = 4357] = "17-05";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-06"] = 4358] = "17-06";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-07"] = 4359] = "17-07";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-08"] = 4360] = "17-08";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-09"] = 4361] = "17-09";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-10"] = 4362] = "17-10";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-11"] = 4363] = "17-11";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-12"] = 4364] = "17-12";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-13"] = 4365] = "17-13";
  GROUP_17_Automatic_Tuning_Parameters2[GROUP_17_Automatic_Tuning_Parameters2["17-14"] = 4366] = "17-14";
})(GROUP_17_Automatic_Tuning_Parameters ||= {});
var GROUP_18_Slip_Compensation_Parameters;
((GROUP_18_Slip_Compensation_Parameters2) => {
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-00"] = 4608] = "18-00";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-01"] = 4609] = "18-01";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-02"] = 4610] = "18-02";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-03"] = 4611] = "18-03";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-04"] = 4612] = "18-04";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-05"] = 4613] = "18-05";
  GROUP_18_Slip_Compensation_Parameters2[GROUP_18_Slip_Compensation_Parameters2["18-06"] = 4614] = "18-06";
})(GROUP_18_Slip_Compensation_Parameters ||= {});
var GROUP_19_Wobble_Frequency_Parameters;
((GROUP_19_Wobble_Frequency_Parameters2) => {
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-00"] = 4864] = "19-00";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-01"] = 4865] = "19-01";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-02"] = 4866] = "19-02";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-03"] = 4867] = "19-03";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-04"] = 4868] = "19-04";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-05"] = 4869] = "19-05";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-06"] = 4870] = "19-06";
  GROUP_19_Wobble_Frequency_Parameters2[GROUP_19_Wobble_Frequency_Parameters2["19-07"] = 4871] = "19-07";
})(GROUP_19_Wobble_Frequency_Parameters ||= {});
var GROUP_20_Speed_Control_Parameters;
((GROUP_20_Speed_Control_Parameters2) => {
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-00"] = 5120] = "20-00";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-01"] = 5121] = "20-01";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-02"] = 5122] = "20-02";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-03"] = 5123] = "20-03";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-04"] = 5124] = "20-04";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-05"] = 5125] = "20-05";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-06"] = 5126] = "20-06";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-07"] = 5127] = "20-07";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-08"] = 5128] = "20-08";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-09"] = 5129] = "20-09";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-10"] = 5130] = "20-10";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-11"] = 5131] = "20-11";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-12"] = 5132] = "20-12";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-13"] = 5133] = "20-13";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-14"] = 5134] = "20-14";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-15"] = 5135] = "20-15";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-16"] = 5136] = "20-16";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-17"] = 5137] = "20-17";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-18"] = 5138] = "20-18";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-19"] = 5139] = "20-19";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-20"] = 5140] = "20-20";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-21"] = 5141] = "20-21";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-22"] = 5142] = "20-22";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-23"] = 5143] = "20-23";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-24"] = 5144] = "20-24";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-25"] = 5145] = "20-25";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-26"] = 5146] = "20-26";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-27"] = 5147] = "20-27";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-28"] = 5148] = "20-28";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-29"] = 5149] = "20-29";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-30"] = 5150] = "20-30";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-31"] = 5151] = "20-31";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-32"] = 5152] = "20-32";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-33"] = 5153] = "20-33";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-34"] = 5154] = "20-34";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-35"] = 5155] = "20-35";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-43"] = 5163] = "20-43";
  GROUP_20_Speed_Control_Parameters2[GROUP_20_Speed_Control_Parameters2["20-44"] = 5164] = "20-44";
})(GROUP_20_Speed_Control_Parameters ||= {});
var GROUP_21_Torque_And_Position_Control_Parameters;
((GROUP_21_Torque_And_Position_Control_Parameters2) => {
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-00"] = 5376] = "21-00";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-01"] = 5377] = "21-01";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-02"] = 5378] = "21-02";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-03"] = 5379] = "21-03";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-04"] = 5380] = "21-04";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-05"] = 5381] = "21-05";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-06"] = 5382] = "21-06";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-07"] = 5383] = "21-07";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-08"] = 5384] = "21-08";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-09"] = 5385] = "21-09";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-10"] = 5386] = "21-10";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-11"] = 5387] = "21-11";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-12"] = 5388] = "21-12";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-13"] = 5389] = "21-13";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-14"] = 5390] = "21-14";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-15"] = 5391] = "21-15";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-16"] = 5392] = "21-16";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-17"] = 5393] = "21-17";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-18"] = 5394] = "21-18";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-19"] = 5395] = "21-19";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-20"] = 5396] = "21-20";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-21"] = 5397] = "21-21";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-22"] = 5398] = "21-22";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-23"] = 5399] = "21-23";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-24"] = 5400] = "21-24";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-25"] = 5401] = "21-25";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-26"] = 5402] = "21-26";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-27"] = 5403] = "21-27";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-28"] = 5404] = "21-28";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-29"] = 5405] = "21-29";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-30"] = 5406] = "21-30";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-31"] = 5407] = "21-31";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-32"] = 5408] = "21-32";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-33"] = 5409] = "21-33";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-34"] = 5410] = "21-34";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-35"] = 5411] = "21-35";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-36"] = 5412] = "21-36";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-37"] = 5413] = "21-37";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-38"] = 5414] = "21-38";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-39"] = 5415] = "21-39";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-40"] = 5416] = "21-40";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-41"] = 5417] = "21-41";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-42"] = 5418] = "21-42";
  GROUP_21_Torque_And_Position_Control_Parameters2[GROUP_21_Torque_And_Position_Control_Parameters2["21-43"] = 5419] = "21-43";
})(GROUP_21_Torque_And_Position_Control_Parameters ||= {});
var GROUP_22_PM_Motor_Parameters;
((GROUP_22_PM_Motor_Parameters2) => {
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-00"] = 5632] = "22-00";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-01"] = 5633] = "22-01";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-02"] = 5634] = "22-02";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-03"] = 5635] = "22-03";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-04"] = 5636] = "22-04";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-05"] = 5637] = "22-05";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-06"] = 5638] = "22-06";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-07"] = 5639] = "22-07";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-08"] = 5640] = "22-08";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-10"] = 5642] = "22-10";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-11"] = 5643] = "22-11";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-14"] = 5646] = "22-14";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-15"] = 5647] = "22-15";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-16"] = 5648] = "22-16";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-17"] = 5649] = "22-17";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-18"] = 5650] = "22-18";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-20"] = 5652] = "22-20";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-21"] = 5653] = "22-21";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-22"] = 5654] = "22-22";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-25"] = 5657] = "22-25";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-26"] = 5658] = "22-26";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-27"] = 5659] = "22-27";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-28"] = 5660] = "22-28";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-29"] = 5661] = "22-29";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-30"] = 5662] = "22-30";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-31"] = 5663] = "22-31";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-32"] = 5664] = "22-32";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-33"] = 5665] = "22-33";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-34"] = 5666] = "22-34";
  GROUP_22_PM_Motor_Parameters2[GROUP_22_PM_Motor_Parameters2["22-35"] = 5667] = "22-35";
})(GROUP_22_PM_Motor_Parameters ||= {});
// src/errors.ts
import { readOnlyEncodeFailure } from "modbus-schema";
// src/schemas.ts
import { Schema } from "effect";
import {
  makeBitfieldParam,
  makeLookupParam,
  makeScaledParam,
  makeSignedScaledParam
} from "modbus-schema";
import { Int16, UInt16 } from "modbus-schema";
var FrequencyHz = Schema.Number.pipe(Schema.nonNegative(), Schema.lessThanOrEqualTo(600), Schema.brand("FrequencyHz"));
var TorquePercent = Schema.Number.pipe(Schema.greaterThanOrEqualTo(-100), Schema.lessThanOrEqualTo(100), Schema.brand("TorquePercent"));
var SpeedLimitPercent = Schema.Number.pipe(Schema.greaterThanOrEqualTo(-120), Schema.lessThanOrEqualTo(120), Schema.brand("SpeedLimitPercent"));
var Voltage = Schema.Number.pipe(Schema.nonNegative(), Schema.lessThanOrEqualTo(10), Schema.brand("Voltage"));
var DCBusVoltage = Schema.Number.pipe(Schema.nonNegative(), Schema.lessThanOrEqualTo(1000), Schema.brand("DCBusVoltage"));
var CurrentAmps = Schema.Number.pipe(Schema.nonNegative(), Schema.lessThanOrEqualTo(6553.5), Schema.brand("CurrentAmps"));
var AnalogInputPercent = Schema.Number.pipe(Schema.nonNegative(), Schema.lessThanOrEqualTo(100), Schema.brand("AnalogInputPercent"));
var ErrorDescriptionMonitor = Schema.String.pipe(Schema.brand("ErrorDescriptionMonitor"));
var WarningDescriptionMonitor = Schema.String.pipe(Schema.brand("WarningDescriptionMonitor"));
var A510CheckMonitor = Schema.String.pipe(Schema.brand("A510CheckMonitor"));
var meta = (name, unit, range, def) => ({ name, unit, range, default: def });

class CommandWordFlags extends Schema.Class("CommandWordFlags")({
  run: Schema.Boolean,
  reverse: Schema.Boolean,
  externalFault: Schema.Boolean,
  faultReset: Schema.Boolean,
  commS1: Schema.Boolean,
  commS2: Schema.Boolean,
  commS3: Schema.Boolean,
  commS4: Schema.Boolean,
  commS5: Schema.Boolean,
  commS6: Schema.Boolean,
  commS7: Schema.Boolean,
  commS8: Schema.Boolean,
  inverterMode: Schema.Boolean,
  torqueByComm: Schema.Boolean
}) {
  static get empty() {
    return new CommandWordFlags({
      run: false,
      reverse: false,
      externalFault: false,
      faultReset: false,
      commS1: false,
      commS2: false,
      commS3: false,
      commS4: false,
      commS5: false,
      commS6: false,
      commS7: false,
      commS8: false,
      inverterMode: false,
      torqueByComm: false
    });
  }
  static get runForward() {
    return new CommandWordFlags({ ...CommandWordFlags.empty, run: true });
  }
  static get runReverse() {
    return new CommandWordFlags({ ...CommandWordFlags.empty, run: true, reverse: true });
  }
  static get stop() {
    return CommandWordFlags.empty;
  }
  static get resetFaultPulse() {
    return new CommandWordFlags({ ...CommandWordFlags.empty, faultReset: true });
  }
}
var commandWordLayout = {
  run: 0,
  reverse: 1,
  externalFault: 2,
  faultReset: 3,
  commS1: 6,
  commS2: 7,
  commS3: 8,
  commS4: 9,
  commS5: 10,
  commS6: 11,
  commS7: 12,
  commS8: 13,
  inverterMode: 14,
  torqueByComm: 15
};
var _commandWordParam = makeBitfieldParam(9473, CommandWordFlags, commandWordLayout, meta("Operation Command", "-", "bitfield", "0"));
var CommandWordSchema = _commandWordParam.schema;
var decodeCommandWord = _commandWordParam.decode;
var encodeCommandWord = _commandWordParam.encode;
var formattedCommandWord = _commandWordParam.formatted;
var CommandWordPatch = _commandWordParam.patch;
var mergeCommandWordPatch = _commandWordParam.merge;
var commandWord = {
  stop: () => CommandWordFlags.stop,
  runForward: () => CommandWordFlags.runForward,
  runReverse: () => CommandWordFlags.runReverse,
  resetFaultPulse: () => CommandWordFlags.resetFaultPulse,
  withInverterMode: (base) => new CommandWordFlags({ ...base, inverterMode: true })
};
var _frequencyCommandEntry = makeScaledParam(9474, 0.01, meta("Frequency Command", "Hz", "0.00–599.00", "0.00"), { domain: FrequencyHz });
var decodeFrequencyCommand = _frequencyCommandEntry.decode;
var encodeFrequencyCommand = _frequencyCommandEntry.encode;
var formattedFrequencyCommand = _frequencyCommandEntry.formatted;
var FrequencyCommandSchema = _frequencyCommandEntry.schema;
var _torqueCommandEntry = makeSignedScaledParam(9475, 1 / 81.92, meta("Torque Command", "%", "–100.0–100.0", "0.0"), { domain: TorquePercent });
var decodeTorqueCommand = _torqueCommandEntry.decode;
var encodeTorqueCommand = _torqueCommandEntry.encode;
var formattedTorqueCommand = _torqueCommandEntry.formatted;
var TorqueCommandSchema = _torqueCommandEntry.schema;
var _speedLimitCommandEntry = makeSignedScaledParam(9476, 1, meta("Speed Limit Command", "%", "–120–120", "0"), { domain: SpeedLimitPercent });
var decodeSpeedLimitCommand = _speedLimitCommandEntry.decode;
var encodeSpeedLimitCommand = _speedLimitCommandEntry.encode;
var formattedSpeedLimitCommand = _speedLimitCommandEntry.formatted;
var SpeedLimitCommandSchema = _speedLimitCommandEntry.schema;
var _analogOut1CommandEntry = makeScaledParam(9477, 0.01, meta("Analog Out 1 Command", "V", "0.00–10.00", "0.00"), { domain: Voltage });
var decodeAnalogOut1Command = _analogOut1CommandEntry.decode;
var encodeAnalogOut1Command = _analogOut1CommandEntry.encode;
var formattedAnalogOut1Command = _analogOut1CommandEntry.formatted;
var AnalogOut1CommandSchema = _analogOut1CommandEntry.schema;
var _analogOut2CommandEntry = makeScaledParam(9478, 0.01, meta("Analog Out 2 Command", "V", "0.00–10.00", "0.00"), { domain: Voltage });
var decodeAnalogOut2Command = _analogOut2CommandEntry.decode;
var encodeAnalogOut2Command = _analogOut2CommandEntry.encode;
var formattedAnalogOut2Command = _analogOut2CommandEntry.formatted;
var AnalogOut2CommandSchema = _analogOut2CommandEntry.schema;

class DigitalOutCommandFlags extends Schema.Class("DigitalOutCommandFlags")({
  ry1: Schema.Boolean,
  ry2: Schema.Boolean,
  pulse: Schema.Boolean
}) {
  static get empty() {
    return new DigitalOutCommandFlags({ ry1: false, ry2: false, pulse: false });
  }
}
var digitalOutLayout = {
  ry1: 0,
  ry2: 1,
  pulse: 2
};
var _digitalOutParam = makeBitfieldParam(9479, DigitalOutCommandFlags, digitalOutLayout, meta("Digital Out Command", "-", "bitfield", "0"));
var DigitalOutCommandSchema = _digitalOutParam.schema;
var decodeDigitalOutCommand = _digitalOutParam.decode;
var encodeDigitalOutCommand = _digitalOutParam.encode;
var formattedDigitalOutCommand = _digitalOutParam.formatted;
var DigitalOutCommandPatch = _digitalOutParam.patch;
var mergeDigitalOutCommandPatch = _digitalOutParam.merge;

class StateMonitorFlags extends Schema.Class("StateMonitorFlags")({
  operation: Schema.Boolean,
  direction: Schema.Boolean,
  inverterReady: Schema.Boolean,
  fault: Schema.Boolean,
  warning: Schema.Boolean,
  zeroSpeed: Schema.Boolean,
  is440V: Schema.Boolean,
  frequencyAgree: Schema.Boolean,
  setFrequencyAgree: Schema.Boolean,
  frequencyDetection1: Schema.Boolean,
  frequencyDetection2: Schema.Boolean,
  underVoltage: Schema.Boolean,
  baseblock: Schema.Boolean,
  freqRefNotFromComm: Schema.Boolean,
  seqNotFromComm: Schema.Boolean,
  overTorque: Schema.Boolean
}) {
  static get empty() {
    return new StateMonitorFlags({
      operation: false,
      direction: false,
      inverterReady: false,
      fault: false,
      warning: false,
      zeroSpeed: false,
      is440V: false,
      frequencyAgree: false,
      setFrequencyAgree: false,
      frequencyDetection1: false,
      frequencyDetection2: false,
      underVoltage: false,
      baseblock: false,
      freqRefNotFromComm: false,
      seqNotFromComm: false,
      overTorque: false
    });
  }
}
var stateMonitorLayout = {
  operation: 0,
  direction: 1,
  inverterReady: 2,
  fault: 3,
  warning: 4,
  zeroSpeed: 5,
  is440V: 6,
  frequencyAgree: 7,
  setFrequencyAgree: 8,
  frequencyDetection1: 9,
  frequencyDetection2: 10,
  underVoltage: 11,
  baseblock: 12,
  freqRefNotFromComm: 13,
  seqNotFromComm: 14,
  overTorque: 15
};
var _stateMonitorParam = makeBitfieldParam(9504, StateMonitorFlags, stateMonitorLayout, meta("State Monitor", "-", "bitfield", "0"), { readOnly: true });
var StateMonitorSchema = _stateMonitorParam.schema;
var decodeStateMonitor = _stateMonitorParam.decode;
var formattedStateMonitor = _stateMonitorParam.formatted;
var errorDescriptionLabels = {
  1: "UV (Under-voltage)",
  2: "OC (Over-current)",
  3: "OV (Over-voltage)",
  4: "OH1 (Overheat 1)",
  5: "OL1 (Electronic thermal overload)",
  6: "OL2 (Motor overload)",
  7: "OT (Over-torque)",
  8: "UT (Under-torque)",
  9: "SC (Short circuit)",
  10: "Ground OC (Ground fault)",
  11: "Fuse broken",
  12: "Input Phase Loss",
  13: "Output Phase Loss",
  14: "PG Overspeed",
  15: "PG Open",
  16: "PG Speed Deviation",
  17: "External Fault 01",
  18: "External Fault 02",
  19: "External Fault 03",
  20: "External Fault 04",
  21: "External Fault 05",
  22: "External Fault 06",
  23: "External Fault 07",
  24: "External Fault 08",
  25: "FB (Feedback)",
  26: "OPR (Option)",
  27: "Reserved",
  28: "CE (Communication error)",
  29: "STO (Safe torque off)",
  30: "Over Torque 2",
  38: "CF07 (Configuration error 07)",
  41: "OLDOP",
  46: "OH4 (Motor overheat)",
  47: "SS1",
  48: "CF20 (Configuration error 20)",
  49: "RUN"
};
var _errorDescriptionMonitorEntry = makeLookupParam(9505, errorDescriptionLabels, (raw) => `Unknown (${raw})`, meta("Error Description Monitor", "-", "0–49", "0"), { domain: ErrorDescriptionMonitor });
var decodeErrorDescriptionMonitor = _errorDescriptionMonitorEntry.decode;
var formattedErrorDescriptionMonitor = _errorDescriptionMonitorEntry.formatted;
var ErrorDescriptionMonitorSchema = _errorDescriptionMonitorEntry.schema;

class DigitalInStateMonitorFlags extends Schema.Class("DigitalInStateMonitorFlags")({
  s1: Schema.Boolean,
  s2: Schema.Boolean,
  s3: Schema.Boolean,
  s4: Schema.Boolean,
  s5: Schema.Boolean,
  s6: Schema.Boolean,
  s7: Schema.Boolean,
  s8: Schema.Boolean
}) {
  static get empty() {
    return new DigitalInStateMonitorFlags({
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false,
      s6: false,
      s7: false,
      s8: false
    });
  }
}
var digitalInLayout = {
  s1: 0,
  s2: 1,
  s3: 2,
  s4: 3,
  s5: 4,
  s6: 5,
  s7: 6,
  s8: 7
};
var _digitalInParam = makeBitfieldParam(9506, DigitalInStateMonitorFlags, digitalInLayout, meta("Digital In State Monitor", "-", "bitfield", "0"), { readOnly: true });
var DigitalInStateMonitorSchema = _digitalInParam.schema;
var decodeDigitalInStateMonitor = _digitalInParam.decode;
var formattedDigitalInStateMonitor = _digitalInParam.formatted;
var _frequencyCommandMonitorEntry = makeScaledParam(9507, 0.01, meta("Frequency Command Monitor", "Hz", "0.00–599.00", "0.00"), { domain: FrequencyHz, readOnly: true });
var decodeFrequencyCommandMonitor = _frequencyCommandMonitorEntry.decode;
var formattedFrequencyCommandMonitor = _frequencyCommandMonitorEntry.formatted;
var FrequencyCommandMonitorSchema = _frequencyCommandMonitorEntry.schema;
var _outputFrequencyMonitorEntry = makeScaledParam(9508, 0.01, meta("Output Frequency Monitor", "Hz", "0.00–599.00", "0.00"), { domain: FrequencyHz, readOnly: true });
var decodeOutputFrequencyMonitor = _outputFrequencyMonitorEntry.decode;
var formattedOutputFrequencyMonitor = _outputFrequencyMonitorEntry.formatted;
var OutputFrequencyMonitorSchema = _outputFrequencyMonitorEntry.schema;
var _dcBusVoltageCommandMonitorEntry = makeScaledParam(9510, 0.1, meta("DC Bus Voltage Monitor", "V", "0.0–1000.0", "0.0"), { domain: DCBusVoltage, readOnly: true });
var decodeDCBusVoltageCommandMonitor = _dcBusVoltageCommandMonitorEntry.decode;
var formattedDCBusVoltageCommandMonitor = _dcBusVoltageCommandMonitorEntry.formatted;
var DCBusVoltageCommandMonitorSchema = _dcBusVoltageCommandMonitorEntry.schema;
var _outputCurrentMonitorEntry = makeScaledParam(9511, 0.1, meta("Output Current Monitor", "A", "0.0–6553.5", "0.0"), { domain: CurrentAmps, readOnly: true });
var decodeOutputCurrentMonitor = _outputCurrentMonitorEntry.decode;
var formattedOutputCurrentMonitor = _outputCurrentMonitorEntry.formatted;
var OutputCurrentMonitorSchema = _outputCurrentMonitorEntry.schema;
var warningDescriptionLabels = {
  0: "No alarm",
  1: "OV (Overvoltage)",
  2: "UV (Undervoltage)",
  3: "OL2 (Overload 2)",
  4: "OH2 (Overheat 2)",
  5: "Reserved",
  6: "OT (Over-torque)",
  7: "Reserved",
  8: "Reserved",
  9: "UT (Under-torque)",
  10: "OS (Overspeed)",
  11: "PGO (PG open)",
  12: "DEV (Speed deviation)",
  13: "CE (Communication error)",
  14: "CALL (Communication call)",
  15: "Reserved",
  16: "EF0 (External fault 0)",
  17: "EF1 (External fault 1)",
  18: "EF2 (External fault 2)",
  19: "EF3 (External fault 3)",
  20: "EF4 (External fault 4)",
  21: "EF5 (External fault 5)",
  22: "EF6 (External fault 6)",
  23: "EF7 (External fault 7)",
  24: "EF8 (External fault 8)",
  25: "Reserved",
  26: "CLB",
  27: "Reserved",
  28: "CT",
  29: "USP",
  30: "RDE",
  31: "WRE",
  32: "FB",
  33: "VRYE",
  34: "SE01",
  35: "SE02",
  36: "SE03",
  37: "Reserved",
  38: "SE05",
  39: "HPERR",
  40: "EF",
  41: "Reserved",
  42: "Reserved",
  43: "RDP",
  44: "Reserved",
  45: "OL1 (Overload 1)",
  46: "HP_ER",
  47: "SE10",
  48: "Reserved",
  49: "BB1 (Baseblock 1)",
  50: "BB2 (Baseblock 2)",
  51: "BB3 (Baseblock 3)",
  52: "BB4 (Baseblock 4)",
  53: "BB5 (Baseblock 5)",
  54: "BB6 (Baseblock 6)",
  55: "BB7 (Baseblock 7)",
  56: "BB8 (Baseblock 8)",
  57: "Reserved",
  58: "Reserved",
  59: "Reserved",
  60: "Reserved",
  61: "RETRY",
  62: "SE07",
  63: "SE08",
  64: "Reserved",
  65: "OH1 (Overheat 1)",
  66: "FIRE",
  67: "ES",
  68: "STP1",
  69: "BDERR",
  70: "EPERR",
  71: "ADCER",
  72: "Reserved",
  73: "STP0",
  74: "ENC",
  75: "STP2",
  76: "RUNER",
  77: "LOC",
  78: "PTCLS",
  79: "Sys Init",
  80: "FBLSS"
};
var _warningDescriptionMonitorEntry = makeLookupParam(9512, warningDescriptionLabels, (raw) => `Unknown warning (${raw})`, meta("Warning Description Monitor", "-", "0–80", "0"), { domain: WarningDescriptionMonitor });
var decodeWarningDescriptionMonitor = _warningDescriptionMonitorEntry.decode;
var formattedWarningDescriptionMonitor = _warningDescriptionMonitorEntry.formatted;
var WarningDescriptionMonitorSchema = _warningDescriptionMonitorEntry.schema;

class DigitalOutStateMonitorFlags extends Schema.Class("DigitalOutStateMonitorFlags")({
  ry1: Schema.Boolean,
  ry2: Schema.Boolean,
  pulse: Schema.Boolean
}) {
  static get empty() {
    return new DigitalOutStateMonitorFlags({ ry1: false, ry2: false, pulse: false });
  }
}
var _digitalOutStateParam = makeBitfieldParam(9513, DigitalOutStateMonitorFlags, digitalOutLayout, meta("Digital Out State Monitor", "-", "bitfield", "0"), { readOnly: true });
var DigitalOutStateMonitorSchema = _digitalOutStateParam.schema;
var decodeDigitalOutStateMonitor = _digitalOutStateParam.decode;
var formattedDigitalOutStateMonitor = _digitalOutStateParam.formatted;
var _analogOut1MonitorEntry = makeScaledParam(9514, 0.01, meta("Analog Out 1 Monitor", "V", "0.00–10.00", "0.00"), { domain: Voltage, readOnly: true });
var decodeAnalogOut1Monitor = _analogOut1MonitorEntry.decode;
var formattedAnalogOut1Monitor = _analogOut1MonitorEntry.formatted;
var AnalogOut1MonitorSchema = _analogOut1MonitorEntry.schema;
var _analogOut2MonitorEntry = makeScaledParam(9515, 0.01, meta("Analog Out 2 Monitor", "V", "0.00–10.00", "0.00"), { domain: Voltage, readOnly: true });
var decodeAnalogOut2Monitor = _analogOut2MonitorEntry.decode;
var formattedAnalogOut2Monitor = _analogOut2MonitorEntry.formatted;
var AnalogOut2MonitorSchema = _analogOut2MonitorEntry.schema;
var _analogIn1MonitorEntry = makeScaledParam(9516, 0.1, meta("Analog In 1 Monitor", "%", "0.0–100.0", "0.0"), { domain: AnalogInputPercent, readOnly: true });
var decodeAnalogIn1Monitor = _analogIn1MonitorEntry.decode;
var formattedAnalogIn1Monitor = _analogIn1MonitorEntry.formatted;
var AnalogIn1MonitorSchema = _analogIn1MonitorEntry.schema;
var _analogIn2MonitorEntry = makeScaledParam(9517, 0.1, meta("Analog In 2 Monitor", "%", "0.0–100.0", "0.0"), { domain: AnalogInputPercent, readOnly: true });
var decodeAnalogIn2Monitor = _analogIn2MonitorEntry.decode;
var formattedAnalogIn2Monitor = _analogIn2MonitorEntry.formatted;
var AnalogIn2MonitorSchema = _analogIn2MonitorEntry.schema;
var a510CheckLabels = {
  1: "L510(s)",
  2: "E510(s)",
  3: "A510(s)",
  4: "F510"
};
var _a510CheckMonitorEntry = makeLookupParam(9519, a510CheckLabels, (raw) => `Unknown (0x${raw.toString(16)})`, meta("A510 Check Monitor", "-", "0x01–0x04", "0"), { domain: A510CheckMonitor });
var decodeA510CheckMonitor = _a510CheckMonitorEntry.decode;
var formattedA510CheckMonitor = _a510CheckMonitorEntry.formatted;
var A510CheckMonitorSchema = _a510CheckMonitorEntry.schema;
// src/TecoInverterService.ts
import { Effect, Record } from "effect";
import {
  SerialTransportService
} from "effect-modbus-rs";

// src/parameters/group-00.ts
import { ParamKind } from "modbus-schema";
var group = 0;
var p419 = 419;
var p420 = 420;
var p421 = 421;
var all = {
  "00-00": {
    register: 0 /* 00-00 */,
    kind: ParamKind.Enum,
    labels: {
      0: "V/F",
      1: "V/F+PG",
      2: "SLV",
      3: "SV",
      4: "PMSV",
      5: "PMSLV",
      6: "SLV2"
    },
    meta: {
      group,
      code: "00-00",
      name: "Control Mode Selection",
      range: "0-6",
      default: "0",
      unit: "-",
      page: p419
    }
  },
  "00-01": {
    register: 1 /* 00-01 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Forward",
      1: "Reverse"
    },
    meta: {
      group,
      code: "00-01",
      name: "Motor's Rotation Direction",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p419
    }
  },
  "00-02": {
    register: 2 /* 00-02 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Keypad",
      1: "External Terminal",
      2: "Communication (RS-485)",
      3: "PLC"
    },
    meta: {
      group,
      code: "00-02",
      name: "Main Run Command Source Selection",
      range: "0-3",
      default: "0",
      unit: "-",
      page: p419
    }
  },
  "00-03": {
    register: 3 /* 00-03 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Keypad",
      1: "External Terminal",
      2: "Communication (RS-485)",
      3: "PLC"
    },
    meta: {
      group,
      code: "00-03",
      name: "Alternative Run Command Selection",
      range: "0-3",
      default: "2 (Note4)",
      unit: "-",
      page: p419
    }
  },
  "00-04": {
    register: 4 /* 00-04 */,
    kind: ParamKind.Enum,
    labels: {
      0: "English",
      1: "Simplified Chinese",
      2: "Traditional Chinese",
      3: "Turkish"
    },
    meta: {
      group,
      code: "00-04",
      name: "Language",
      range: "0-3",
      default: "0",
      unit: "-",
      page: p419
    }
  },
  "00-05": {
    register: 5 /* 00-05 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Keypad",
      1: "External Terminal (Analog1)",
      2: "Terminal Command UP/DOWN",
      3: "Communication (RS-485)",
      4: "Pulse Input",
      7: "AI2 Auxiliary Frequency",
      8: "Manual Pulse Generator (MPG)"
    },
    meta: {
      group,
      code: "00-05",
      name: "Main Frequency Command Source Selection",
      range: "0-8",
      default: "0",
      unit: "-",
      page: p419
    }
  },
  "00-06": {
    register: 6 /* 00-06 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Keypad",
      1: "External Terminal (Analog1)",
      2: "Terminal Command UP/DOWN",
      3: "Communication (RS-485)",
      4: "Pulse Input",
      7: "AI2 Auxiliary Frequency"
    },
    meta: {
      group,
      code: "00-06",
      name: "Alternative Frequency Source Selection",
      range: "0-7",
      default: "3 (Note4)",
      unit: "-",
      page: p419
    }
  },
  "00-07": {
    register: 7 /* 00-07 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Main Frequency",
      1: "Main frequency + Alternative Frequency"
    },
    meta: {
      group,
      code: "00-07",
      name: "Main and Alternative Frequency Command Modes",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-09": {
    register: 9 /* 00-09 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Don't save when power supply is off (00-08)",
      1: "Save when power is off (00-08)"
    },
    meta: {
      group,
      code: "00-09",
      name: "Communication Frequency Command Memory Selection",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-10": {
    register: 10 /* 00-10 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Show warning if lower than minimum frequency",
      1: "Run as minimum frequency if lower than minimum frequency"
    },
    meta: {
      group,
      code: "00-10",
      name: "Minimum Frequency Detection",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-11": {
    register: 11 /* 00-11 */,
    kind: ParamKind.Enum,
    labels: {
      0: "PID Sleep Limit is Lower Limit of Frequency",
      1: "PID Sleep Limit is 0Hz"
    },
    meta: {
      group,
      code: "00-11",
      name: "PID Lower Limit of Frequency Selection",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-27": {
    register: 27 /* 00-27 */,
    kind: ParamKind.Enum,
    labels: {
      0: "HD (Heavy Duty Mode)",
      1: "ND (Normal Duty Mode)"
    },
    meta: {
      group,
      code: "00-27",
      name: "HD/ND Mode Selection",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-28": {
    register: 28 /* 00-28 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Positive Characteristic (0~10V/4~20mA → 0~100%)",
      1: "Negative Characteristic (0~10V/4~20mA → 100~0%)"
    },
    meta: {
      group,
      code: "00-28",
      name: "Command Characteristic Selection of Master Frequency",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-29": {
    register: 29 /* 00-29 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Operation Based on Frequency Command",
      1: "Stop",
      2: "Operation Based on the Lowest Frequency",
      3: "Zero-Speed Operation"
    },
    meta: {
      group,
      code: "00-29",
      name: "Zero-Speed Operation Selection",
      range: "0-3",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-32": {
    register: 32 /* 00-32 */,
    kind: ParamKind.Enum,
    labels: {
      0: "General",
      2: "Conveyor",
      3: "Exhaust Fan",
      5: "Compressor",
      6: "Hoist",
      7: "Crane",
      8: "Manual Pulse Generator (MPG)"
    },
    meta: {
      group,
      code: "00-32",
      name: "Application Selection Presets",
      range: "0-8",
      default: "0",
      unit: "-",
      page: p420
    }
  },
  "00-33": {
    register: 33 /* 00-33 */,
    kind: ParamKind.Enum,
    labels: {
      0: "Disable",
      1: "Enable"
    },
    meta: {
      group,
      code: "00-33",
      name: "Modified Parameters (LCD keypad)",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p421
    }
  },
  "00-57": {
    register: 57 /* 00-57 */,
    kind: ParamKind.Enum,
    labels: {
      0: "SV High Speed Mode 1",
      1: "SV High Speed Mode 2"
    },
    meta: {
      group,
      code: "00-57",
      name: "SV High Speed Mode",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p421
    }
  },
  "00-08": {
    register: 8 /* 00-08 */,
    kind: ParamKind.Scaled,
    factor: 0.01,
    meta: {
      group,
      code: "00-08",
      name: "Communication Frequency Command Range",
      range: "0.00~599.00",
      default: "0.00",
      unit: "Hz",
      page: p420
    }
  },
  "00-18": {
    register: 18 /* 00-18 */,
    kind: ParamKind.Scaled,
    factor: 0.01,
    meta: {
      group,
      code: "00-18",
      name: "Jog Frequency",
      range: "0.00~599.00",
      default: "6.00",
      unit: "Hz",
      page: p420
    }
  },
  "00-25": {
    register: 25 /* 00-25 */,
    kind: ParamKind.Scaled,
    factor: 0.01,
    meta: {
      group,
      code: "00-25",
      name: "Switch-Over Frequency of Acc/Dec Time 1 and Time 4",
      range: "0.00~599.00",
      default: "0.0",
      unit: "Hz",
      page: p420
    }
  },
  "00-12": {
    register: 12 /* 00-12 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-12",
      name: "Upper Limit Frequency",
      range: "0.1~109.0",
      default: "100.0",
      unit: "%",
      page: p420
    }
  },
  "00-13": {
    register: 13 /* 00-13 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-13",
      name: "Lower Limit Frequency",
      range: "0.0~109.0",
      default: "0.0",
      unit: "%",
      page: p420
    }
  },
  "00-14": {
    register: 14 /* 00-14 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-14",
      name: "Acceleration Time 1",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-15": {
    register: 15 /* 00-15 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-15",
      name: "Deceleration Time 1",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-16": {
    register: 16 /* 00-16 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-16",
      name: "Acceleration Time 2",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-17": {
    register: 17 /* 00-17 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-17",
      name: "Deceleration Time 2",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-19": {
    register: 19 /* 00-19 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-19",
      name: "Jog Acceleration Time",
      range: "0.1~600.0",
      default: "-",
      unit: "s",
      page: p420
    }
  },
  "00-20": {
    register: 20 /* 00-20 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-20",
      name: "Jog Deceleration Time",
      range: "0.1~600.0",
      default: "-",
      unit: "s",
      page: p420
    }
  },
  "00-21": {
    register: 21 /* 00-21 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-21",
      name: "Acceleration Time 3",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-22": {
    register: 22 /* 00-22 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-22",
      name: "Deceleration Time 3",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-23": {
    register: 23 /* 00-23 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-23",
      name: "Acceleration Time 4",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-24": {
    register: 24 /* 00-24 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-24",
      name: "Deceleration Time 4",
      range: "0.1~6000.0",
      default: "* (see Attachment 1 p.170)",
      unit: "s",
      page: p420
    }
  },
  "00-26": {
    register: 26 /* 00-26 */,
    kind: ParamKind.Scaled,
    factor: 0.1,
    meta: {
      group,
      code: "00-26",
      name: "Emergency Stop Time",
      range: "0.1~6000.0",
      default: "5.0",
      unit: "s",
      page: p420
    }
  },
  "00-41": {
    register: 41 /* 00-41 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-41",
      name: "User Parameter 0",
      range: "00-01~22-31 (except 00-41~00-56, group 17)",
      default: "00-41",
      unit: "-",
      page: p421
    }
  },
  "00-42": {
    register: 42 /* 00-42 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-42",
      name: "User Parameter 1",
      range: "00-01~22-31",
      default: "00-42",
      unit: "-",
      page: p421
    }
  },
  "00-43": {
    register: 43 /* 00-43 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-43",
      name: "User Parameter 2",
      range: "00-01~22-31",
      default: "00-43",
      unit: "-",
      page: p421
    }
  },
  "00-44": {
    register: 44 /* 00-44 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-44",
      name: "User Parameter 3",
      range: "00-01~22-31",
      default: "00-44",
      unit: "-",
      page: p421
    }
  },
  "00-45": {
    register: 45 /* 00-45 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-45",
      name: "User Parameter 4",
      range: "00-01~22-31",
      default: "00-45",
      unit: "-",
      page: p421
    }
  },
  "00-46": {
    register: 46 /* 00-46 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-46",
      name: "User Parameter 5",
      range: "00-01~22-31",
      default: "00-46",
      unit: "-",
      page: p421
    }
  },
  "00-47": {
    register: 47 /* 00-47 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-47",
      name: "User Parameter 6",
      range: "00-01~22-31",
      default: "00-47",
      unit: "-",
      page: p421
    }
  },
  "00-48": {
    register: 48 /* 00-48 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-48",
      name: "User Parameter 7",
      range: "00-01~22-31",
      default: "00-48",
      unit: "-",
      page: p421
    }
  },
  "00-49": {
    register: 49 /* 00-49 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-49",
      name: "User Parameter 8",
      range: "00-01~22-31",
      default: "00-49",
      unit: "-",
      page: p421
    }
  },
  "00-50": {
    register: 50 /* 00-50 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-50",
      name: "User Parameter 9",
      range: "00-01~22-31",
      default: "00-50",
      unit: "-",
      page: p421
    }
  },
  "00-51": {
    register: 51 /* 00-51 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-51",
      name: "User Parameter 10",
      range: "00-01~22-31",
      default: "00-51",
      unit: "-",
      page: p421
    }
  },
  "00-52": {
    register: 52 /* 00-52 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-52",
      name: "User Parameter 11",
      range: "00-01~22-31",
      default: "00-52",
      unit: "-",
      page: p421
    }
  },
  "00-53": {
    register: 53 /* 00-53 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-53",
      name: "User Parameter 12",
      range: "00-01~22-31",
      default: "00-53",
      unit: "-",
      page: p421
    }
  },
  "00-54": {
    register: 54 /* 00-54 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-54",
      name: "User Parameter 13",
      range: "00-01~22-31",
      default: "00-54",
      unit: "-",
      page: p421
    }
  },
  "00-55": {
    register: 55 /* 00-55 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-55",
      name: "User Parameter 14",
      range: "00-01~22-31",
      default: "00-55",
      unit: "-",
      page: p421
    }
  },
  "00-56": {
    register: 56 /* 00-56 */,
    kind: ParamKind.UInt16,
    meta: {
      group,
      code: "00-56",
      name: "User Parameter 15",
      range: "00-01~22-31",
      default: "00-56",
      unit: "-",
      page: p421
    }
  }
};
var group00Params = all;
// src/parameters/group-01.ts
import { ParamKind as ParamKind2 } from "modbus-schema";
var group2 = 1;
var p422 = 422;
var p423 = 423;
var p424 = 424;
var all2 = {
  "01-00": {
    register: 256 /* 01-00 */,
    kind: ParamKind2.UInt16,
    meta: {
      group: group2,
      code: "01-00",
      name: "V/F Curve Selection",
      range: "0~FF (hex)",
      default: "F (hex)",
      unit: "-",
      page: p422
    }
  },
  "01-02": {
    register: 258 /* 01-02 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-02",
      name: "Maximum Output Frequency of Motor 1",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p422
    }
  },
  "01-03": {
    register: 259 /* 01-03 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-03",
      name: "Maximum Output Voltage of Motor 1",
      range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p422
    }
  },
  "01-04": {
    register: 260 /* 01-04 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-04",
      name: "Middle Output Frequency 2 of Motor 1",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p422
    }
  },
  "01-05": {
    register: 261 /* 01-05 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-05",
      name: "Middle Output Voltage 2 of Motor 1",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "0.0",
      unit: "V",
      page: p422
    }
  },
  "01-06": {
    register: 262 /* 01-06 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-06",
      name: "Middle Output Frequency 1 of Motor 1",
      range: "0.0~599.0",
      default: "3.0",
      unit: "Hz",
      page: p422
    }
  },
  "01-07": {
    register: 263 /* 01-07 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-07",
      name: "Middle Output Voltage 1 of Motor 1",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "***** (KVA dependent)",
      unit: "V",
      page: p422
    }
  },
  "01-08": {
    register: 264 /* 01-08 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-08",
      name: "Minimum Output Frequency of Motor 1",
      range: "0.0~599.0",
      default: "VF:1.5 / VF+PG:1.5 / SLV:0.6 / SV:0.1 / PMSV:0.1 / PMSLV:9.0 / SLV2:1.0",
      unit: "Hz",
      page: p422
    }
  },
  "01-09": {
    register: 265 /* 01-09 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-09",
      name: "Minimum Output Voltage of Motor 1",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "8.3 (230V) / 15.0 (460V)",
      unit: "V",
      page: p422
    }
  },
  "01-10": {
    register: 266 /* 01-10 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-10",
      name: "Torque Compensation Gain",
      range: "0.0~2.0",
      default: "0.5",
      unit: "-",
      page: p422
    }
  },
  "01-11": {
    register: 267 /* 01-11 */,
    kind: ParamKind2.Enum,
    labels: {
      0: "Torque Compensation Mode 0",
      1: "Torque Compensation Mode 1"
    },
    meta: {
      group: group2,
      code: "01-11",
      name: "Selection of Torque Compensation Mode",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p423
    }
  },
  "01-12": {
    register: 268 /* 01-12 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-12",
      name: "Base Frequency of Motor 1",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p423
    }
  },
  "01-13": {
    register: 269 /* 01-13 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-13",
      name: "Base Output Voltage of Motor 1",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p423
    }
  },
  "01-14": {
    register: 270 /* 01-14 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-14",
      name: "Input Voltage Setting",
      range: "155.0~255.0 (230V) / 310.0~510.0 (460V) / 540.0~670.0 (575V) / 648.0~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p423
    }
  },
  "01-15": {
    register: 271 /* 01-15 */,
    kind: ParamKind2.UInt16,
    meta: {
      group: group2,
      code: "01-15",
      name: "Torque Compensation Time",
      range: "0~10000",
      default: "200",
      unit: "ms",
      page: p423
    }
  },
  "01-16": {
    register: 272 /* 01-16 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-16",
      name: "Maximum Output Frequency of Motor 2",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p423
    }
  },
  "01-17": {
    register: 273 /* 01-17 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-17",
      name: "Maximum Output Voltage of Motor 2",
      range: "0.1~255.0 (230V) / 0.2~510.0 (460V) / 0.1~670.0 (575V) / 0.1~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p423
    }
  },
  "01-18": {
    register: 274 /* 01-18 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-18",
      name: "Middle Output Frequency 2 of Motor 2",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p423
    }
  },
  "01-19": {
    register: 275 /* 01-19 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-19",
      name: "Middle Output Voltage 2 of Motor 2",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "0.0",
      unit: "V",
      page: p423
    }
  },
  "01-20": {
    register: 276 /* 01-20 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-20",
      name: "Middle Output Frequency 1 of Motor 2",
      range: "0.0~599.0",
      default: "3.0",
      unit: "Hz",
      page: p423
    }
  },
  "01-21": {
    register: 277 /* 01-21 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-21",
      name: "Middle Output Voltage 1 of Motor 2",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "KVA (inverter capacity dependent)",
      unit: "V",
      page: p423
    }
  },
  "01-22": {
    register: 278 /* 01-22 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-22",
      name: "Minimum Output Frequency of Motor 2",
      range: "0.0~599.0",
      default: "1.5",
      unit: "Hz",
      page: p423
    }
  },
  "01-23": {
    register: 279 /* 01-23 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-23",
      name: "Minimum Output Voltage of Motor 2",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "KVA (inverter capacity dependent)",
      unit: "V",
      page: p423
    }
  },
  "01-24": {
    register: 280 /* 01-24 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-24",
      name: "Base Frequency of Motor 2",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p423
    }
  },
  "01-25": {
    register: 281 /* 01-25 */,
    kind: ParamKind2.Scaled,
    factor: 0.1,
    meta: {
      group: group2,
      code: "01-25",
      name: "Base Output Voltage of Motor 2",
      range: "0.0~255.0 (230V) / 0.0~510.0 (460V) / 0.0~670.0 (575V) / 0.0~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p424
    }
  },
  "01-26": {
    register: 282 /* 01-26 */,
    kind: ParamKind2.UInt16,
    meta: {
      group: group2,
      code: "01-26",
      name: "V/F Curve Selection of Motor 2",
      range: "0~FF (hex)",
      default: "F (hex)",
      unit: "-",
      page: p424
    }
  }
};
var group01Params = all2;
// src/parameters/group-02.ts
import { ParamKind as ParamKind3 } from "modbus-schema";
var group3 = 2;
var p425 = 425;
var p426 = 426;
var all3 = {
  "02-00": {
    register: 512 /* 02-00 */,
    kind: ParamKind3.Scaled,
    factor: 0.01,
    meta: {
      group: group3,
      code: "02-00",
      name: "No-Load Current of Motor 1",
      range: "0.01~600.00",
      default: "-",
      unit: "A",
      page: p425
    }
  },
  "02-01": {
    register: 513 /* 02-01 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-01",
      name: "Rated Current of Motor 1",
      range: "10%~200% of inverter's rated current",
      default: "- (inverter dependent)",
      unit: "A",
      page: p425
    }
  },
  "02-03": {
    register: 515 /* 02-03 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-03",
      name: "Rated Rotation Speed of Motor 1",
      range: "0~60000",
      default: "-",
      unit: "Rpm",
      page: p425
    }
  },
  "02-04": {
    register: 516 /* 02-04 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-04",
      name: "Rated Voltage of Motor 1",
      range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p425
    }
  },
  "02-05": {
    register: 517 /* 02-05 */,
    kind: ParamKind3.Scaled,
    factor: 0.01,
    meta: {
      group: group3,
      code: "02-05",
      name: "Rated Power of Motor 1",
      range: "0.01~600.00",
      default: "-",
      unit: "kW",
      page: p425
    }
  },
  "02-06": {
    register: 518 /* 02-06 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-06",
      name: "Rated Frequency of Motor 1",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p425
    }
  },
  "02-07": {
    register: 519 /* 02-07 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-07",
      name: "Poles of Motor 1",
      range: "2~16 (Even)",
      default: "4",
      unit: "-",
      page: p425
    }
  },
  "02-09": {
    register: 521 /* 02-09 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-09",
      name: "Excitation Current of Motor 1",
      range: "15%~70% of Motor Rated Current",
      default: "-",
      unit: "%",
      page: p425
    }
  },
  "02-10": {
    register: 522 /* 02-10 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-10",
      name: "Core Saturation Coefficient 1 of Motor 1",
      range: "1~100",
      default: "-",
      unit: "%",
      page: p425
    }
  },
  "02-11": {
    register: 523 /* 02-11 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-11",
      name: "Core Saturation Coefficient 2 of Motor 1",
      range: "1~100",
      default: "-",
      unit: "%",
      page: p425
    }
  },
  "02-12": {
    register: 524 /* 02-12 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-12",
      name: "Core Saturation Coefficient 3 of Motor 1",
      range: "80~300",
      default: "-",
      unit: "%",
      page: p425
    }
  },
  "02-13": {
    register: 525 /* 02-13 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-13",
      name: "Core Loss of Motor 1",
      range: "0.0~15.0",
      default: "-",
      unit: "%",
      page: p425
    }
  },
  "02-15": {
    register: 527 /* 02-15 */,
    kind: ParamKind3.Scaled,
    factor: 0.001,
    meta: {
      group: group3,
      code: "02-15",
      name: "Resistance between Wires of Motor 1",
      range: "0.001~60.000",
      default: "-",
      unit: "Ω",
      page: p425
    }
  },
  "02-19": {
    register: 531 /* 02-19 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-19",
      name: "No-Load Voltage of Motor 1",
      range: "50~240 (230V) / 100~480 (460V) / 420~600 (575V) / 504~720 (690V)",
      default: "-",
      unit: "V",
      page: p425
    }
  },
  "02-20": {
    register: 532 /* 02-20 */,
    kind: ParamKind3.Scaled,
    factor: 0.01,
    meta: {
      group: group3,
      code: "02-20",
      name: "No-Load Current of Motor 2",
      range: "0.01~600.00",
      default: "-",
      unit: "A",
      page: p425
    }
  },
  "02-21": {
    register: 533 /* 02-21 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-21",
      name: "Rated Current of Motor 2",
      range: "10%~200% of inverter's rated current",
      default: "- (inverter dependent)",
      unit: "A",
      page: p425
    }
  },
  "02-22": {
    register: 534 /* 02-22 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-22",
      name: "Rated Rotation Speed of Motor 2",
      range: "0~60000",
      default: "-",
      unit: "Rpm",
      page: p425
    }
  },
  "02-23": {
    register: 535 /* 02-23 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-23",
      name: "Rated Voltage of Motor 2",
      range: "50.0~240.0 (230V) / 100.0~480.0 (460V) / 150.0~670.0 (575V) / 200.0~804.0 (690V)",
      default: "-",
      unit: "V",
      page: p425
    }
  },
  "02-24": {
    register: 536 /* 02-24 */,
    kind: ParamKind3.Scaled,
    factor: 0.01,
    meta: {
      group: group3,
      code: "02-24",
      name: "Rated Power of Motor 2",
      range: "0.01~600.00",
      default: "-",
      unit: "kW",
      page: p425
    }
  },
  "02-25": {
    register: 537 /* 02-25 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-25",
      name: "Rated Frequency of Motor 2",
      range: "4.8~599.0",
      default: "50.0/60.0",
      unit: "Hz",
      page: p425
    }
  },
  "02-26": {
    register: 538 /* 02-26 */,
    kind: ParamKind3.UInt16,
    meta: {
      group: group3,
      code: "02-26",
      name: "Poles of Motor 2",
      range: "2~16 (Even)",
      default: "4",
      unit: "-",
      page: p425
    }
  },
  "02-32": {
    register: 544 /* 02-32 */,
    kind: ParamKind3.Scaled,
    factor: 0.001,
    meta: {
      group: group3,
      code: "02-32",
      name: "Resistance between Wires of Motor 2",
      range: "0.001~60.000",
      default: "-",
      unit: "Ω",
      page: p425
    }
  },
  "02-33": {
    register: 545 /* 02-33 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-33",
      name: "Proportion of Motor 1 Leakage Inductance",
      range: "0.1~15.0",
      default: "3.7",
      unit: "%",
      page: p425
    }
  },
  "02-34": {
    register: 546 /* 02-34 */,
    kind: ParamKind3.Scaled,
    factor: 0.01,
    meta: {
      group: group3,
      code: "02-34",
      name: "Motor 1 Slip Frequency",
      range: "0.10~20.00",
      default: "2.48",
      unit: "Hz",
      page: p425
    }
  },
  "02-37": {
    register: 549 /* 02-37 */,
    kind: ParamKind3.Scaled,
    factor: 0.1,
    meta: {
      group: group3,
      code: "02-37",
      name: "Motor Mechanical Loss",
      range: "0.0~10.0",
      default: "4.0",
      unit: "%",
      page: p426
    }
  }
};
var group02Params = all3;
// src/parameters/group-03.ts
import { ParamKind as ParamKind4 } from "modbus-schema";
var group4 = 3;
var p427 = 427;
var p428 = 428;
var p429 = 429;
var p430 = 430;
var p431 = 431;
var p432 = 432;
var p433 = 433;
var all4 = {
  "03-00": {
    register: 768 /* 03-00 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-00",
      name: "Multi-Function Terminal Function Setting-S1",
      range: "0~69",
      default: "0",
      unit: "-",
      page: p427
    }
  },
  "03-01": {
    register: 769 /* 03-01 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-01",
      name: "Multi-Function Terminal Function Setting-S2",
      range: "0~69",
      default: "1",
      unit: "-",
      page: p427
    }
  },
  "03-02": {
    register: 770 /* 03-02 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-02",
      name: "Multi-Function Terminal Function Setting-S3",
      range: "0~69",
      default: "2",
      unit: "-",
      page: p427
    }
  },
  "03-03": {
    register: 771 /* 03-03 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-03",
      name: "Multi-Function Terminal Function Setting-S4",
      range: "0~69",
      default: "3",
      unit: "-",
      page: p427
    }
  },
  "03-04": {
    register: 772 /* 03-04 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-04",
      name: "Multi-Function Terminal Function Setting-S5",
      range: "0~69",
      default: "4",
      unit: "-",
      page: p427
    }
  },
  "03-05": {
    register: 773 /* 03-05 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-05",
      name: "Multi-Function Terminal Function Setting-S6",
      range: "0~69",
      default: "17",
      unit: "-",
      page: p427
    }
  },
  "03-06": {
    register: 774 /* 03-06 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-06",
      name: "Multi-Function Terminal Function Setting-S7",
      range: "0~69",
      default: "29",
      unit: "-",
      page: p428
    }
  },
  "03-07": {
    register: 775 /* 03-07 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-07",
      name: "Multi-Function Terminal Function Setting-S8",
      range: "0~69",
      default: "15",
      unit: "-",
      page: p428
    }
  },
  "03-08": {
    register: 776 /* 03-08 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-08",
      name: "(S1~S8) DI Scan Time",
      range: "0-1 (0:4ms / 1:8ms)",
      default: "1 (8ms)",
      unit: "-",
      page: p428
    }
  },
  "03-09": {
    register: 777 /* 03-09 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-09",
      name: "Multi-Function Terminal S1-S4 Type Selection",
      range: "0000b~1111b (bit0:S1 A/B ... bit3:S4 A/B)",
      default: "0000b",
      unit: "-",
      page: p428
    }
  },
  "03-10": {
    register: 778 /* 03-10 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-10",
      name: "Multi-Function Terminal S5-S8 Type Selection",
      range: "0000b~1111b (bit0:S5 A/B ... bit3:S8 A/B)",
      default: "0000b",
      unit: "-",
      page: p428
    }
  },
  "03-11": {
    register: 779 /* 03-11 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-11",
      name: "Relay (R1A-R1C) Output",
      range: "0~59 (see 03-11/03-12 function table)",
      default: "0 (During Running)",
      unit: "-",
      page: p429
    }
  },
  "03-12": {
    register: 780 /* 03-12 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-12",
      name: "Relay (R2A-R2C) Output",
      range: "0~59 (see 03-11/03-12 function table)",
      default: "1 (Fault Contact Output)",
      unit: "-",
      page: p429
    }
  },
  "03-13": {
    register: 781 /* 03-13 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-13",
      name: "Frequency Detection Level",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p429
    }
  },
  "03-14": {
    register: 782 /* 03-14 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-14",
      name: "Frequency Detection Width",
      range: "0.1~25.5",
      default: "2.0",
      unit: "Hz",
      page: p429
    }
  },
  "03-15": {
    register: 783 /* 03-15 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-15",
      name: "Current Agree Level",
      range: "0.1~999.9",
      default: "0.1",
      unit: "A",
      page: p429
    }
  },
  "03-16": {
    register: 784 /* 03-16 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-16",
      name: "Delay Time of Current Agree Detection",
      range: "0.1~10.0",
      default: "0.1",
      unit: "s",
      page: p429
    }
  },
  "03-17": {
    register: 785 /* 03-17 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-17",
      name: "Mechanical Braking Release Level",
      range: "0.00~599.00",
      default: "0.00",
      unit: "Hz",
      page: p429
    }
  },
  "03-18": {
    register: 786 /* 03-18 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-18",
      name: "Mechanical Braking Level Set",
      range: "0.00~599.00",
      default: "0.00",
      unit: "Hz",
      page: p429
    }
  },
  "03-19": {
    register: 787 /* 03-19 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-19",
      name: "Relay (R1A-R2A) Type",
      range: "0000b~1111b (bit0:R1 A/B, bit1:R2 A/B, bit3:R4 A/B)",
      default: "0000b",
      unit: "-",
      page: p429
    }
  },
  "03-20": {
    register: 788 /* 03-20 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-20",
      name: "Relay (R4A-R4C) Output",
      range: "0~59 (see 03-11/03-12 function table)",
      default: "2 (Frequency Agree)",
      unit: "-",
      page: p430
    }
  },
  "03-21": {
    register: 789 /* 03-21 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-21",
      name: "Photo-coupler Output Selection (DO2-DOG)",
      range: "0~59 (see 03-11/03-12 function table)",
      default: "3",
      unit: "-",
      page: p430
    }
  },
  "03-27": {
    register: 795 /* 03-27 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-27",
      name: "UP/DOWN Frequency Hold/Adjust Selection",
      range: "0-3",
      default: "0",
      unit: "-",
      page: p431
    }
  },
  "03-28": {
    register: 796 /* 03-28 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-28",
      name: "Photo-coupler Output (DO1-DOG)",
      range: "0~59 (see 03-11/03-12 function table)",
      default: "0",
      unit: "-",
      page: p431
    }
  },
  "03-29": {
    register: 797 /* 03-29 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-29",
      name: "Photo-coupler Output Selection (DO1-DOG)(DO2-DOG)",
      range: "0000b~1111b (bit0:PC1 A/B, bit1:PC2 A/B)",
      default: "0000b",
      unit: "-",
      page: p431
    }
  },
  "03-30": {
    register: 798 /* 03-30 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-30",
      name: "Selection of Pulse Input",
      range: "0-1 (0:General Pulse Input / 1:PWM)",
      default: "0",
      unit: "-",
      page: p431
    }
  },
  "03-31": {
    register: 799 /* 03-31 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-31",
      name: "Scale of Pulse Input",
      range: "50~32000 (03-30=0) / 10~1000 (03-30=1)",
      default: "1000",
      unit: "Hz",
      page: p431
    }
  },
  "03-32": {
    register: 800 /* 03-32 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-32",
      name: "Pulse Input Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p431
    }
  },
  "03-33": {
    register: 801 /* 03-33 */,
    kind: ParamKind4.SignedScaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-33",
      name: "Pulse Input Bias",
      range: "-100.0~100.0",
      default: "0.0",
      unit: "%",
      page: p431
    }
  },
  "03-34": {
    register: 802 /* 03-34 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-34",
      name: "Filter Time of Pulse Input",
      range: "0.00~2.00",
      default: "0.10",
      unit: "Sec",
      page: p431
    }
  },
  "03-35": {
    register: 803 /* 03-35 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-35",
      name: "Function Setting of Pulse Output",
      range: "1-7 (1:Freq Cmd / 2:Output Freq / 3:After Soft-Start / 4:Motor Speed / 5:PID Fdbk / 6:PID Input / 7:PG Output)",
      default: "2",
      unit: "-",
      page: p432
    }
  },
  "03-36": {
    register: 804 /* 03-36 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-36",
      name: "Scale of Pulse Output",
      range: "1~32000",
      default: "1000",
      unit: "Hz",
      page: p432
    }
  },
  "03-37": {
    register: 805 /* 03-37 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-37",
      name: "Timer ON Delay (DIO)",
      range: "0.0~6000.0",
      default: "0.0",
      unit: "s",
      page: p432
    }
  },
  "03-38": {
    register: 806 /* 03-38 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-38",
      name: "Timer OFF Delay (DIO)",
      range: "0.0~6000.0",
      default: "0.0",
      unit: "s",
      page: p432
    }
  },
  "03-40": {
    register: 808 /* 03-40 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-40",
      name: "Up/Down Frequency Width Setting",
      range: "0.00~5.00",
      default: "0.00",
      unit: "Hz",
      page: p432
    }
  },
  "03-41": {
    register: 809 /* 03-41 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-41",
      name: "Torque Detection Level",
      range: "0~150",
      default: "10",
      unit: "%",
      page: p432
    }
  },
  "03-42": {
    register: 810 /* 03-42 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-42",
      name: "Brake Release Delay Time",
      range: "0.00~65.00",
      default: "0.00",
      unit: "s",
      page: p432
    }
  },
  "03-43": {
    register: 811 /* 03-43 */,
    kind: ParamKind4.UInt16,
    meta: {
      group: group4,
      code: "03-43",
      name: "UP/DOWN Acceleration/Deceleration Selection",
      range: "0-1 (0:Accel/Decel Time 1 / 1:Accel/Decel Time 2)",
      default: "0",
      unit: "-",
      page: p432
    }
  },
  "03-44": {
    register: 812 /* 03-44 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-44",
      name: "Frequency Detection Level 2",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-45": {
    register: 813 /* 03-45 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-45",
      name: "Frequency Detection Width 2",
      range: "0.1~25.5",
      default: "2.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-46": {
    register: 814 /* 03-46 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-46",
      name: "Frequency Detection Level 3",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-47": {
    register: 815 /* 03-47 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-47",
      name: "Frequency Detection Width 3",
      range: "0.1~25.5",
      default: "2.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-48": {
    register: 816 /* 03-48 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-48",
      name: "Low Current Detection Level",
      range: "0.0~999.9",
      default: "0.1",
      unit: "A",
      page: p432
    }
  },
  "03-49": {
    register: 817 /* 03-49 */,
    kind: ParamKind4.Scaled,
    factor: 0.01,
    meta: {
      group: group4,
      code: "03-49",
      name: "Low Current Detection Delay Time",
      range: "0.00~655.34",
      default: "0.01",
      unit: "Sec",
      page: p432
    }
  },
  "03-50": {
    register: 818 /* 03-50 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-50",
      name: "Frequency Detection Level 4",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-51": {
    register: 819 /* 03-51 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-51",
      name: "Frequency Detection Level 5",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p432
    }
  },
  "03-52": {
    register: 820 /* 03-52 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-52",
      name: "Frequency Detection Level 6",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p433
    }
  },
  "03-53": {
    register: 821 /* 03-53 */,
    kind: ParamKind4.Scaled,
    factor: 0.1,
    meta: {
      group: group4,
      code: "03-53",
      name: "Current Agree Level 2",
      range: "0.0~999.9",
      default: "0.1",
      unit: "A",
      page: p433
    }
  }
};
var group03Params = all4;
// src/parameters/group-04.ts
import { ParamKind as ParamKind5 } from "modbus-schema";
var group5 = 4;
var p434 = 434;
var p435 = 435;
var p436 = 436;
var all5 = {
  "04-00": {
    register: 1024 /* 04-00 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-00",
      name: "AI Input Signal Type",
      range: "0-5 (0:AI1 0-10V/AI2 0-10V … 5:AI1 4-20mA/AI2 4-20mA)",
      default: "1",
      unit: "-",
      page: p434
    }
  },
  "04-01": {
    register: 1025 /* 04-01 */,
    kind: ParamKind5.Scaled,
    factor: 0.01,
    meta: {
      group: group5,
      code: "04-01",
      name: "AI1 Signal Scanning and Filtering Time",
      range: "0.00~2.00",
      default: "0.03",
      unit: "s",
      page: p434
    }
  },
  "04-02": {
    register: 1026 /* 04-02 */,
    kind: ParamKind5.Scaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-02",
      name: "AI1 Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p434
    }
  },
  "04-03": {
    register: 1027 /* 04-03 */,
    kind: ParamKind5.SignedScaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-03",
      name: "AI1 Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p434
    }
  },
  "04-04": {
    register: 1028 /* 04-04 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-04",
      name: "Negative AI",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p434
    }
  },
  "04-05": {
    register: 1029 /* 04-05 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-05",
      name: "AI2 Function Setting",
      range: "0-17 (0:Aux Freq / 1:Freq Ref Gain / 2:Freq Ref Bias / … / 17:PTC)",
      default: "0",
      unit: "-",
      page: p434
    }
  },
  "04-06": {
    register: 1030 /* 04-06 */,
    kind: ParamKind5.Scaled,
    factor: 0.01,
    meta: {
      group: group5,
      code: "04-06",
      name: "AI2 Signal Scanning and Filtering Time",
      range: "0.00~2.00",
      default: "0.03",
      unit: "s",
      page: p435
    }
  },
  "04-07": {
    register: 1031 /* 04-07 */,
    kind: ParamKind5.Scaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-07",
      name: "AI2 Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p435
    }
  },
  "04-08": {
    register: 1032 /* 04-08 */,
    kind: ParamKind5.SignedScaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-08",
      name: "AI2 Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p435
    }
  },
  "04-09": {
    register: 1033 /* 04-09 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-09",
      name: "AI Input Signal Type of I/O card",
      range: "0-2 (0:AI3 0-10V / 1:AI3 -10-10V / 2:AI3 4-20mA)",
      default: "0",
      unit: "-",
      page: p435
    }
  },
  "04-10": {
    register: 1034 /* 04-10 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-10",
      name: "AI3 Function Setting",
      range: "0-17 (same as 04-05)",
      default: "10",
      unit: "-",
      page: p435
    }
  },
  "04-11": {
    register: 1035 /* 04-11 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-11",
      name: "AO1 Function Setting",
      range: "0-28 (0:Output Freq / 1:Freq Cmd / 2:Output V / … / 28:Comm control)",
      default: "0",
      unit: "-",
      page: p435
    }
  },
  "04-12": {
    register: 1036 /* 04-12 */,
    kind: ParamKind5.Scaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-12",
      name: "AO1 Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p435
    }
  },
  "04-13": {
    register: 1037 /* 04-13 */,
    kind: ParamKind5.SignedScaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-13",
      name: "AO1 Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p435
    }
  },
  "04-16": {
    register: 1040 /* 04-16 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-16",
      name: "AO2 Function Setting",
      range: "0-28 (same as 04-11)",
      default: "3",
      unit: "-",
      page: p436
    }
  },
  "04-17": {
    register: 1041 /* 04-17 */,
    kind: ParamKind5.Scaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-17",
      name: "AO2 Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p436
    }
  },
  "04-18": {
    register: 1042 /* 04-18 */,
    kind: ParamKind5.SignedScaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-18",
      name: "AO2 Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p436
    }
  },
  "04-19": {
    register: 1043 /* 04-19 */,
    kind: ParamKind5.UInt16,
    meta: {
      group: group5,
      code: "04-19",
      name: "AO Output Signal Type",
      range: "0-3 (0:AO1 0-10V/AO2 0-10V … 3:AO1 4-20mA/AO2 4-20mA)",
      default: "0",
      unit: "-",
      page: p436
    }
  },
  "04-20": {
    register: 1044 /* 04-20 */,
    kind: ParamKind5.Scaled,
    factor: 0.01,
    meta: {
      group: group5,
      code: "04-20",
      name: "Filter Time of AO Signal Scan",
      range: "0.00~0.50",
      default: "0.00",
      unit: "s",
      page: p436
    }
  },
  "04-21": {
    register: 1045 /* 04-21 */,
    kind: ParamKind5.Scaled,
    factor: 0.01,
    meta: {
      group: group5,
      code: "04-21",
      name: "AI3 Signal Scanning and Filtering Time",
      range: "0.00~2.00",
      default: "0.03",
      unit: "s",
      page: p436
    }
  },
  "04-22": {
    register: 1046 /* 04-22 */,
    kind: ParamKind5.Scaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-22",
      name: "AI3 Gain",
      range: "0.0~1000.0",
      default: "100.0",
      unit: "%",
      page: p436
    }
  },
  "04-23": {
    register: 1047 /* 04-23 */,
    kind: ParamKind5.SignedScaled,
    factor: 0.1,
    meta: {
      group: group5,
      code: "04-23",
      name: "AI3 Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p436
    }
  }
};
var group04Params = all5;
// src/parameters/group-05.ts
import { ParamKind as ParamKind6 } from "modbus-schema";
var group6 = 5;
var p437 = 437;
var p438 = 438;
var p439 = 439;
var all6 = {
  "05-00": {
    register: 1280 /* 05-00 */,
    kind: ParamKind6.UInt16,
    meta: {
      group: group6,
      code: "05-00",
      name: "Acceleration/Deceleration Selection of Multi-Speed",
      range: "0-1 (0:by 00-14~00-24 / 1:by 05-17~05-48)",
      default: "0",
      unit: "-",
      page: p437
    }
  },
  "05-01": {
    register: 1281 /* 05-01 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-01",
      name: "Frequency Setting of Speed-Stage 0",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-02": {
    register: 1282 /* 05-02 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-02",
      name: "Frequency Setting of Speed-Stage 1",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-03": {
    register: 1283 /* 05-03 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-03",
      name: "Frequency Setting of Speed-Stage 2",
      range: "0.00~599.00",
      default: "10.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-04": {
    register: 1284 /* 05-04 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-04",
      name: "Frequency Setting of Speed-Stage 3",
      range: "0.00~599.00",
      default: "20.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-05": {
    register: 1285 /* 05-05 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-05",
      name: "Frequency Setting of Speed-Stage 4",
      range: "0.00~599.00",
      default: "30.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-06": {
    register: 1286 /* 05-06 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-06",
      name: "Frequency Setting of Speed-Stage 5",
      range: "0.00~599.00",
      default: "40.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-07": {
    register: 1287 /* 05-07 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-07",
      name: "Frequency Setting of Speed-Stage 6",
      range: "0.00~599.00",
      default: "50.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-08": {
    register: 1288 /* 05-08 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-08",
      name: "Frequency Setting of Speed-Stage 7",
      range: "0.00~599.00",
      default: "50.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-09": {
    register: 1289 /* 05-09 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-09",
      name: "Frequency Setting of Speed-Stage 8",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-10": {
    register: 1290 /* 05-10 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-10",
      name: "Frequency Setting of Speed-Stage 9",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-11": {
    register: 1291 /* 05-11 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-11",
      name: "Frequency Setting of Speed-Stage 10",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-12": {
    register: 1292 /* 05-12 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-12",
      name: "Frequency Setting of Speed-Stage 11",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-13": {
    register: 1293 /* 05-13 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-13",
      name: "Frequency Setting of Speed-Stage 12",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-14": {
    register: 1294 /* 05-14 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-14",
      name: "Frequency Setting of Speed-Stage 13",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-15": {
    register: 1295 /* 05-15 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-15",
      name: "Frequency Setting of Speed-Stage 14",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-16": {
    register: 1296 /* 05-16 */,
    kind: ParamKind6.Scaled,
    factor: 0.01,
    meta: {
      group: group6,
      code: "05-16",
      name: "Frequency Setting of Speed-Stage 15",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p437
    }
  },
  "05-17": {
    register: 1297 /* 05-17 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-17",
      name: "Acceleration Time of Multi Speed 0",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-18": {
    register: 1298 /* 05-18 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-18",
      name: "Deceleration Time of Multi Speed 0",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-19": {
    register: 1299 /* 05-19 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-19",
      name: "Acceleration Time of Multi Speed 1",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-20": {
    register: 1300 /* 05-20 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-20",
      name: "Deceleration Time of Multi Speed 1",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-21": {
    register: 1301 /* 05-21 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-21",
      name: "Acceleration Time of Multi Speed 2",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-22": {
    register: 1302 /* 05-22 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-22",
      name: "Deceleration Time of Multi Speed 2",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-23": {
    register: 1303 /* 05-23 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-23",
      name: "Acceleration Time of Multi Speed 3",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-24": {
    register: 1304 /* 05-24 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-24",
      name: "Deceleration Time of Multi Speed 3",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-25": {
    register: 1305 /* 05-25 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-25",
      name: "Acceleration Time of Multi Speed 4",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-26": {
    register: 1306 /* 05-26 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-26",
      name: "Deceleration Time of Multi Speed 4",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p437
    }
  },
  "05-27": {
    register: 1307 /* 05-27 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-27",
      name: "Acceleration Time of Multi Speed 5",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-28": {
    register: 1308 /* 05-28 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-28",
      name: "Deceleration Time of Multi Speed 5",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-29": {
    register: 1309 /* 05-29 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-29",
      name: "Acceleration Time of Multi Speed 6",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-30": {
    register: 1310 /* 05-30 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-30",
      name: "Deceleration Time of Multi Speed 6",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-31": {
    register: 1311 /* 05-31 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-31",
      name: "Acceleration Time of Multi Speed 7",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-32": {
    register: 1312 /* 05-32 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-32",
      name: "Deceleration Time of Multi Speed 7",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-33": {
    register: 1313 /* 05-33 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-33",
      name: "Acceleration Time of Multi Speed 8",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-34": {
    register: 1314 /* 05-34 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-34",
      name: "Deceleration Time of Multi Speed 8",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-35": {
    register: 1315 /* 05-35 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-35",
      name: "Acceleration Time of Multi Speed 9",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-36": {
    register: 1316 /* 05-36 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-36",
      name: "Deceleration Time of Multi Speed 9",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-37": {
    register: 1317 /* 05-37 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-37",
      name: "Acceleration Time of Multi Speed 10",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-38": {
    register: 1318 /* 05-38 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-38",
      name: "Deceleration Time of Multi Speed 10",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-39": {
    register: 1319 /* 05-39 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-39",
      name: "Acceleration Time of Multi Speed 11",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-40": {
    register: 1320 /* 05-40 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-40",
      name: "Deceleration Time of Multi Speed 11",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-41": {
    register: 1321 /* 05-41 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-41",
      name: "Acceleration Time of Multi Speed 12",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-42": {
    register: 1322 /* 05-42 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-42",
      name: "Deceleration Time of Multi Speed 12",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-43": {
    register: 1323 /* 05-43 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-43",
      name: "Acceleration Time of Multi Speed 13",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p438
    }
  },
  "05-44": {
    register: 1324 /* 05-44 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-44",
      name: "Deceleration Time of Multi Speed 13",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p439
    }
  },
  "05-45": {
    register: 1325 /* 05-45 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-45",
      name: "Acceleration Time of Multi Speed 14",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p439
    }
  },
  "05-46": {
    register: 1326 /* 05-46 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-46",
      name: "Deceleration Time of Multi Speed 14",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p439
    }
  },
  "05-47": {
    register: 1327 /* 05-47 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-47",
      name: "Acceleration Time of Multi Speed 15",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p439
    }
  },
  "05-48": {
    register: 1328 /* 05-48 */,
    kind: ParamKind6.Scaled,
    factor: 0.1,
    meta: {
      group: group6,
      code: "05-48",
      name: "Deceleration Time of Multi Speed 15",
      range: "0.1~6000.0",
      default: "10.0",
      unit: "s",
      page: p439
    }
  }
};
var group05Params = all6;
// src/parameters/group-06.ts
import { ParamKind as ParamKind7 } from "modbus-schema";
var group7 = 6;
var p440 = 440;
var p441 = 441;
var p442 = 442;
var p443 = 443;
var dirMeta = (idx, page) => ({
  group: group7,
  code: `06-${32 + idx}`,
  name: `Operation Direction Selection of Speed-Stage ${idx}`,
  range: "0-2 (0:Stop / 1:Forward / 2:Reverse)",
  default: "0",
  unit: "-",
  page
});
var freqMeta = (stage, def, page) => ({
  group: group7,
  code: `06-${String(stage).padStart(2, "0")}`,
  name: `Frequency Setting of Operation-Stage ${stage}`,
  range: "0.00~599.00",
  default: def,
  unit: "Hz",
  page
});
var timeMeta = (stage, page) => ({
  group: group7,
  code: `06-${16 + stage}`,
  name: `Operation Time Setting of Speed-Stage ${stage}`,
  range: "0.0~6000.0",
  default: "0.0",
  unit: "s",
  page
});
var all7 = {
  "06-00": {
    register: 1536 /* 06-00 */,
    kind: ParamKind7.UInt16,
    meta: {
      group: group7,
      code: "06-00",
      name: "Automatic Operation Mode Selection",
      range: "0-6",
      default: "0",
      unit: "-",
      page: p440
    }
  },
  "06-32": { register: 1568 /* 06-32 */, kind: ParamKind7.UInt16, meta: dirMeta(0, p442) },
  "06-33": { register: 1569 /* 06-33 */, kind: ParamKind7.UInt16, meta: dirMeta(1, p442) },
  "06-34": { register: 1570 /* 06-34 */, kind: ParamKind7.UInt16, meta: dirMeta(2, p442) },
  "06-35": { register: 1571 /* 06-35 */, kind: ParamKind7.UInt16, meta: dirMeta(3, p442) },
  "06-36": { register: 1572 /* 06-36 */, kind: ParamKind7.UInt16, meta: dirMeta(4, p442) },
  "06-37": { register: 1573 /* 06-37 */, kind: ParamKind7.UInt16, meta: dirMeta(5, p443) },
  "06-38": { register: 1574 /* 06-38 */, kind: ParamKind7.UInt16, meta: dirMeta(6, p443) },
  "06-39": { register: 1575 /* 06-39 */, kind: ParamKind7.UInt16, meta: dirMeta(7, p443) },
  "06-40": { register: 1576 /* 06-40 */, kind: ParamKind7.UInt16, meta: dirMeta(8, p443) },
  "06-41": { register: 1577 /* 06-41 */, kind: ParamKind7.UInt16, meta: dirMeta(9, p443) },
  "06-42": { register: 1578 /* 06-42 */, kind: ParamKind7.UInt16, meta: dirMeta(10, p443) },
  "06-43": { register: 1579 /* 06-43 */, kind: ParamKind7.UInt16, meta: dirMeta(11, p443) },
  "06-44": { register: 1580 /* 06-44 */, kind: ParamKind7.UInt16, meta: dirMeta(12, p443) },
  "06-45": { register: 1581 /* 06-45 */, kind: ParamKind7.UInt16, meta: dirMeta(13, p443) },
  "06-46": { register: 1582 /* 06-46 */, kind: ParamKind7.UInt16, meta: dirMeta(14, p443) },
  "06-47": { register: 1583 /* 06-47 */, kind: ParamKind7.UInt16, meta: dirMeta(15, p443) },
  "06-01": { register: 1537 /* 06-01 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(1, "5.00", p440) },
  "06-02": { register: 1538 /* 06-02 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(2, "10.00", p440) },
  "06-03": { register: 1539 /* 06-03 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(3, "20.00", p440) },
  "06-04": { register: 1540 /* 06-04 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(4, "30.00", p441) },
  "06-05": { register: 1541 /* 06-05 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(5, "40.00", p441) },
  "06-06": { register: 1542 /* 06-06 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(6, "50.00", p441) },
  "06-07": { register: 1543 /* 06-07 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(7, "50.00", p441) },
  "06-08": { register: 1544 /* 06-08 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(8, "5.00", p441) },
  "06-09": { register: 1545 /* 06-09 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(9, "5.00", p441) },
  "06-10": { register: 1546 /* 06-10 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(10, "5.00", p441) },
  "06-11": { register: 1547 /* 06-11 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(11, "5.00", p441) },
  "06-12": { register: 1548 /* 06-12 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(12, "5.00", p441) },
  "06-13": { register: 1549 /* 06-13 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(13, "5.00", p441) },
  "06-14": { register: 1550 /* 06-14 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(14, "5.00", p441) },
  "06-15": { register: 1551 /* 06-15 */, kind: ParamKind7.Scaled, factor: 0.01, meta: freqMeta(15, "5.00", p441) },
  "06-16": { register: 1552 /* 06-16 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(0, p441) },
  "06-17": { register: 1553 /* 06-17 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(1, p441) },
  "06-18": { register: 1554 /* 06-18 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(2, p441) },
  "06-19": { register: 1555 /* 06-19 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(3, p441) },
  "06-20": { register: 1556 /* 06-20 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(4, p442) },
  "06-21": { register: 1557 /* 06-21 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(5, p442) },
  "06-22": { register: 1558 /* 06-22 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(6, p442) },
  "06-23": { register: 1559 /* 06-23 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(7, p442) },
  "06-24": { register: 1560 /* 06-24 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(8, p442) },
  "06-25": { register: 1561 /* 06-25 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(9, p442) },
  "06-26": { register: 1562 /* 06-26 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(10, p442) },
  "06-27": { register: 1563 /* 06-27 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(11, p442) },
  "06-28": { register: 1564 /* 06-28 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(12, p442) },
  "06-29": { register: 1565 /* 06-29 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(13, p442) },
  "06-30": { register: 1566 /* 06-30 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(14, p442) },
  "06-31": { register: 1567 /* 06-31 */, kind: ParamKind7.Scaled, factor: 0.1, meta: timeMeta(15, p442) }
};
var group06Params = all7;
// src/parameters/group-07.ts
import { ParamKind as ParamKind8 } from "modbus-schema";
var group8 = 7;
var p444 = 444;
var p445 = 445;
var p446 = 446;
var all8 = {
  "07-00": {
    register: 1792 /* 07-00 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-00",
      name: "Momentary Power Loss/Fault Restart Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p444
    }
  },
  "07-01": {
    register: 1793 /* 07-01 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-01",
      name: "Fault Auto-Restart Time",
      range: "0~7200",
      default: "0",
      unit: "s",
      page: p444
    }
  },
  "07-02": {
    register: 1794 /* 07-02 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-02",
      name: "Number of Fault Auto-Restart Attempts",
      range: "0~10",
      default: "0",
      unit: "-",
      page: p444
    }
  },
  "07-04": {
    register: 1796 /* 07-04 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-04",
      name: "Direct Start at Power On",
      range: "0-1 (0:Direct start / 1:Unable to direct start)",
      default: "1",
      unit: "-",
      page: p444
    }
  },
  "07-05": {
    register: 1797 /* 07-05 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-05",
      name: "Delay of Direct Start at Power On",
      range: "1.0~300.0",
      default: "3.5",
      unit: "s",
      page: p444
    }
  },
  "07-06": {
    register: 1798 /* 07-06 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-06",
      name: "DC Injection Braking Starting Frequency",
      range: "0.0~10.0",
      default: "0.5",
      unit: "Hz",
      page: p444
    }
  },
  "07-07": {
    register: 1799 /* 07-07 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-07",
      name: "DC Injection Braking Current",
      range: "0~100",
      default: "50",
      unit: "%",
      page: p444
    }
  },
  "07-08": {
    register: 1800 /* 07-08 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-08",
      name: "DC Injection Braking Time at Stop",
      range: "0.00~100.00",
      default: "0.50",
      unit: "s",
      page: p444
    }
  },
  "07-09": {
    register: 1801 /* 07-09 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-09",
      name: "Stop Mode Selection",
      range: "0-3 (0:Decel to Stop / 1:Coast to Stop / 2:DC Braking / 3:Coast to Stop w/ Timer)",
      default: "0",
      unit: "-",
      page: p444
    }
  },
  "07-13": {
    register: 1805 /* 07-13 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-13",
      name: "Low Voltage Detection Level",
      range: "150~300 (230V) / 250~600 (460V) / 500~600 (575V/690V)",
      default: "190 (230V) / 380 (460V) / 546 (575V/690V)",
      unit: "V",
      page: p444
    }
  },
  "07-14": {
    register: 1806 /* 07-14 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-14",
      name: "Pre-excitation Time",
      range: "0.00~10.00",
      default: "2.00",
      unit: "s",
      page: p444
    }
  },
  "07-15": {
    register: 1807 /* 07-15 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-15",
      name: "Pre-excitation Level",
      range: "50~200",
      default: "100",
      unit: "%",
      page: p444
    }
  },
  "07-16": {
    register: 1808 /* 07-16 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-16",
      name: "DC Injection Braking Time at Start",
      range: "0.00~100.00",
      default: "0.00",
      unit: "s",
      page: p444
    }
  },
  "07-18": {
    register: 1810 /* 07-18 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-18",
      name: "Minimum Base block Time",
      range: "0.1~5.0",
      default: "* (see Attachment 1 p.170)",
      unit: "Sec",
      page: p444
    }
  },
  "07-19": {
    register: 1811 /* 07-19 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-19",
      name: "Direction-Detection Speed Search",
      range: "0~100",
      default: "50",
      unit: "%",
      page: p444
    }
  },
  "07-20": {
    register: 1812 /* 07-20 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-20",
      name: "Speed Search Operating Current",
      range: "0~100",
      default: "20",
      unit: "%",
      page: p445
    }
  },
  "07-21": {
    register: 1813 /* 07-21 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-21",
      name: "Integral Time of Speed Searching",
      range: "0.1~10.0",
      default: "2.0",
      unit: "Sec",
      page: p445
    }
  },
  "07-22": {
    register: 1814 /* 07-22 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-22",
      name: "Delay Time of Speed Searching",
      range: "0.0~20.0",
      default: "0.2",
      unit: "Sec",
      page: p445
    }
  },
  "07-23": {
    register: 1815 /* 07-23 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-23",
      name: "Voltage Recovery Time",
      range: "0.1~5.0",
      default: "2.0",
      unit: "Sec",
      page: p445
    }
  },
  "07-24": {
    register: 1816 /* 07-24 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-24",
      name: "Direction-Detection Speed Search Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "1",
      unit: "-",
      page: p445
    }
  },
  "07-25": {
    register: 1817 /* 07-25 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-25",
      name: "Low Voltage Detection Time",
      range: "0.00~1.00",
      default: "0.02",
      unit: "Sec",
      page: p445
    }
  },
  "07-26": {
    register: 1818 /* 07-26 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-26",
      name: "Start-up Mode Selection of SLV Coast to Stop",
      range: "0-1 (0:Speed search / 1:Normal start)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-27": {
    register: 1819 /* 07-27 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-27",
      name: "Start Selection after Fault during SLV Mode",
      range: "0-1 (0:Speed search / 1:Normal start)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-28": {
    register: 1820 /* 07-28 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-28",
      name: "Start after External Base Block",
      range: "0-1 (0:Speed search / 1:Normal start)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-29": {
    register: 1821 /* 07-29 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-29",
      name: "Run Command Selection at DC Braking",
      range: "0-1 (0:Not Allowable / 1:Allowable)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-30": {
    register: 1822 /* 07-30 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-30",
      name: "Low Voltage Level Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-31": {
    register: 1823 /* 07-31 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-31",
      name: "Low Voltage Run Frequency",
      range: "0.00~599.00",
      default: "10.00",
      unit: "Hz",
      page: p445
    }
  },
  "07-32": {
    register: 1824 /* 07-32 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-32",
      name: "Speed Search Mode Selection",
      range: "0-2 (0:Disable / 1:Mode 1 / 2:Execute each time)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-33": {
    register: 1825 /* 07-33 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-33",
      name: "Start Frequency of Speed Search Selection",
      range: "0-1 (0:Max Output Freq / 1:Freq Cmd)",
      default: "0",
      unit: "-",
      page: p445
    }
  },
  "07-34": {
    register: 1826 /* 07-34 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-34",
      name: "Short-circuit Braking Time at Start",
      range: "0.00~100.00",
      default: "0.00",
      unit: "Sec",
      page: p445
    }
  },
  "07-35": {
    register: 1827 /* 07-35 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-35",
      name: "Short-circuit Braking Time at Stop",
      range: "0.00~100.00",
      default: "0.50",
      unit: "Sec",
      page: p445
    }
  },
  "07-36": {
    register: 1828 /* 07-36 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-36",
      name: "Short-circuit Braking Current",
      range: "0.0~200.0",
      default: "100.0",
      unit: "%",
      page: p445
    }
  },
  "07-42": {
    register: 1834 /* 07-42 */,
    kind: ParamKind8.Scaled,
    factor: 0.1,
    meta: {
      group: group8,
      code: "07-42",
      name: "Voltage Limit Gain",
      range: "0.0~50.0",
      default: "0",
      unit: "%",
      page: p446
    }
  },
  "07-43": {
    register: 1835 /* 07-43 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-43",
      name: "Short-circuit Braking Time of PM Speed Search",
      range: "0.00~100.00",
      default: "0.00",
      unit: "Sec",
      page: p446
    }
  },
  "07-44": {
    register: 1836 /* 07-44 */,
    kind: ParamKind8.Scaled,
    factor: 0.01,
    meta: {
      group: group8,
      code: "07-44",
      name: "DC Braking Time of PM Speed Search",
      range: "0.00~100.00",
      default: "0.00",
      unit: "Sec",
      page: p446
    }
  },
  "07-45": {
    register: 1837 /* 07-45 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-45",
      name: "STP2 Function Selection",
      range: "0-1 (0:STP2 Enable / 1:STP2 Disable)",
      default: "0",
      unit: "-",
      page: p446
    }
  },
  "07-46": {
    register: 1838 /* 07-46 */,
    kind: ParamKind8.UInt16,
    meta: {
      group: group8,
      code: "07-46",
      name: "DC Injection Current Limit",
      range: "0~150",
      default: "100",
      unit: "%",
      page: p446
    }
  }
};
var group07Params = all8;
// src/parameters/group-08.ts
import { ParamKind as ParamKind9 } from "modbus-schema";
var group9 = 8;
var p447 = 447;
var p448 = 448;
var p449 = 449;
var p450 = 450;
var p451 = 451;
var all9 = {
  "08-00": {
    register: 2048 /* 08-00 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-00",
      name: "Stall Prevention Function",
      range: "bit0:Acc/bit1:Dec/bit2:Op/bit3:DecTimeBase",
      default: "0000b (0)",
      unit: "-",
      page: p447
    }
  },
  "08-01": {
    register: 2049 /* 08-01 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-01",
      name: "Stall Prevention Level in Acceleration",
      range: "20~200",
      default: "HD:150 / ND:120",
      unit: "%",
      page: p447
    }
  },
  "08-02": {
    register: 2050 /* 08-02 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-02",
      name: "Stall Prevention Level in Deceleration",
      range: "330~410 (230V) / 660~820 (460V) / 900~1000 (575V) / 1080~1200 (690V)",
      default: "385 (230V) / 770 (460V) / 950 (575V) / 1140 (690V)",
      unit: "V",
      page: p447
    }
  },
  "08-03": {
    register: 2051 /* 08-03 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-03",
      name: "Stall Prevention Level in Operation",
      range: "30~200",
      default: "HD:160 / ND:120",
      unit: "%",
      page: p447
    }
  },
  "08-05": {
    register: 2053 /* 08-05 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-05",
      name: "Selection for Motor Overload Protection (OL1)",
      range: "bit0:Enable/bit1:ColdHot/bit2:MotorType/bit3:Reserved",
      default: "0101b (5)",
      unit: "-",
      page: p447
    }
  },
  "08-06": {
    register: 2054 /* 08-06 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-06",
      name: "Start-up Mode of Overload Protection Operation (OL1)",
      range: "0-1 (0:Stop output / 1:Continuous operation)",
      default: "0",
      unit: "-",
      page: p447
    }
  },
  "08-07": {
    register: 2055 /* 08-07 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-07",
      name: "Motor Overload (OL1) Protection Level",
      range: "0-2 (0:Protection 0 / 1:Protection 1 / 2:Protection 2)",
      default: "0",
      unit: "-",
      page: p447
    }
  },
  "08-08": {
    register: 2056 /* 08-08 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-08",
      name: "Automatic Voltage Regulation (AVR)",
      range: "0-1 (0:Enable / 1:Disable)",
      default: "0",
      unit: "-",
      page: p447
    }
  },
  "08-09": {
    register: 2057 /* 08-09 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-09",
      name: "Selection of Input Phase Loss Protection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p447
    }
  },
  "08-10": {
    register: 2058 /* 08-10 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-10",
      name: "Selection of Output Phase Loss Protection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p448
    }
  },
  "08-13": {
    register: 2061 /* 08-13 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-13",
      name: "Selection of Over-Torque Detection",
      range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)",
      default: "0",
      unit: "-",
      page: p448
    }
  },
  "08-14": {
    register: 2062 /* 08-14 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-14",
      name: "Selection of Over-Torque Operation",
      range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)",
      default: "0",
      unit: "-",
      page: p448
    }
  },
  "08-15": {
    register: 2063 /* 08-15 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-15",
      name: "Level of Over-Torque Detection",
      range: "0~300",
      default: "150",
      unit: "%",
      page: p448
    }
  },
  "08-16": {
    register: 2064 /* 08-16 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-16",
      name: "Time of Over-Torque Detection",
      range: "0.0~10.0",
      default: "0.1",
      unit: "Sec",
      page: p448
    }
  },
  "08-17": {
    register: 2065 /* 08-17 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-17",
      name: "Selection of Low-Torque Detection",
      range: "0-2 (0:Disable / 1:Detect at set freq / 2:Detect at operation start)",
      default: "0",
      unit: "-",
      page: p448
    }
  },
  "08-18": {
    register: 2066 /* 08-18 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-18",
      name: "Selection of Low-Torque Operation",
      range: "0-2 (0:Decel to stop / 1:Warning only / 2:Coast to stop)",
      default: "0",
      unit: "-",
      page: p448
    }
  },
  "08-19": {
    register: 2067 /* 08-19 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-19",
      name: "Level of Low-Torque Detection",
      range: "0~300",
      default: "30",
      unit: "%",
      page: p448
    }
  },
  "08-20": {
    register: 2068 /* 08-20 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-20",
      name: "Time of Low-Torque Detection",
      range: "0.0~10.0",
      default: "0.1",
      unit: "Sec",
      page: p449
    }
  },
  "08-21": {
    register: 2069 /* 08-21 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-21",
      name: "Limit of Stall Prevention in Acc over Base Speed",
      range: "1~100",
      default: "50",
      unit: "%",
      page: p449
    }
  },
  "08-22": {
    register: 2070 /* 08-22 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-22",
      name: "Stall Prevention Detection Time in Operation",
      range: "2~100",
      default: "100",
      unit: "ms",
      page: p449
    }
  },
  "08-23": {
    register: 2071 /* 08-23 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-23",
      name: "Ground Fault (GF) Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-24": {
    register: 2072 /* 08-24 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-24",
      name: "External Fault Operation Selection",
      range: "0-2 (0:Decel to stop / 1:Coast to stop / 2:Continuous operation)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-25": {
    register: 2073 /* 08-25 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-25",
      name: "Detection Selection of External Fault",
      range: "0-1 (0:Immediately / 1:When operation started)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-30": {
    register: 2078 /* 08-30 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-30",
      name: "Run Permissive Function Selection",
      range: "0-1 (0:Decel to stop / 1:Coast to stop)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-35": {
    register: 2083 /* 08-35 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-35",
      name: "Motor Overheating Fault Selection",
      range: "0-3 (0:Disable / 1:Decel to stop / 2:Coast to stop / 3:Continue running)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-36": {
    register: 2084 /* 08-36 */,
    kind: ParamKind9.Scaled,
    factor: 0.01,
    meta: {
      group: group9,
      code: "08-36",
      name: "PTC Input Filter Time Constant",
      range: "0.00~5.00",
      default: "2.00",
      unit: "Sec",
      page: p449
    }
  },
  "08-37": {
    register: 2085 /* 08-37 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-37",
      name: "Fan Control Function",
      range: "0-2 (0:Start in operation / 1:Permanent start / 2:Start in high temp)",
      default: "0",
      unit: "-",
      page: p449
    }
  },
  "08-38": {
    register: 2086 /* 08-38 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-38",
      name: "Delay Time of Fan Off",
      range: "0~600",
      default: "60",
      unit: "s",
      page: p449
    }
  },
  "08-39": {
    register: 2087 /* 08-39 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-39",
      name: "Delay Time of Motor Overheat Protection",
      range: "1~300",
      default: "60",
      unit: "sec",
      page: p449
    }
  },
  "08-40": {
    register: 2088 /* 08-40 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-40",
      name: "Motor2 Acceleration Stall Prevention Level",
      range: "20~200",
      default: "HD:150 / ND:120",
      unit: "%",
      page: p449
    }
  },
  "08-41": {
    register: 2089 /* 08-41 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-41",
      name: "Motor2 Acceleration Stall Prevention Limit",
      range: "1~100",
      default: "50",
      unit: "%",
      page: p450
    }
  },
  "08-42": {
    register: 2090 /* 08-42 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-42",
      name: "PTC Protection Level",
      range: "0.1~10.0",
      default: "0.7",
      unit: "V",
      page: p450
    }
  },
  "08-43": {
    register: 2091 /* 08-43 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-43",
      name: "PTC Restart Level",
      range: "0.1~10.0",
      default: "0.3",
      unit: "V",
      page: p450
    }
  },
  "08-44": {
    register: 2092 /* 08-44 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-44",
      name: "PTC Warning Level",
      range: "0.1~10.0",
      default: "0.5",
      unit: "V",
      page: p450
    }
  },
  "08-46": {
    register: 2094 /* 08-46 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-46",
      name: "Temperature Agree Level",
      range: "0~254",
      default: "0",
      unit: "degree C",
      page: p450
    }
  },
  "08-47": {
    register: 2095 /* 08-47 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-47",
      name: "Temperature Reset Level",
      range: "0~254",
      default: "0",
      unit: "degree C",
      page: p450
    }
  },
  "08-48": {
    register: 2096 /* 08-48 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-48",
      name: "Selection of Fire Mode",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p450
    }
  },
  "08-49": {
    register: 2097 /* 08-49 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-49",
      name: "Multi-Function Input Terminal Status of Fire Mode",
      range: "0-1 (0:Reset after power off / 1:Reset after terminal removed)",
      default: "0",
      unit: "-",
      page: p450
    }
  },
  "08-50": {
    register: 2098 /* 08-50 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-50",
      name: "Multi-Function Terminal Status of Fire Mode",
      range: "bit0:S6 A/B contact (0:A / 1:B)",
      default: "0000b (0)",
      unit: "-",
      page: p450
    }
  },
  "08-51": {
    register: 2099 /* 08-51 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-51",
      name: "Motor Speed Setting Source of Fire Mode",
      range: "0-2 (0:Fire speed / 1:PID / 2:AI2)",
      default: "0",
      unit: "-",
      page: p450
    }
  },
  "08-52": {
    register: 2100 /* 08-52 */,
    kind: ParamKind9.Scaled,
    factor: 0.01,
    meta: {
      group: group9,
      code: "08-52",
      name: "Motor Speed of Fire Mode",
      range: "0.00~100.00",
      default: "100.00",
      unit: "%",
      page: p450
    }
  },
  "08-53": {
    register: 2101 /* 08-53 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-53",
      name: "PID Detection Level of Fire Mode",
      range: "0~100",
      default: "0",
      unit: "%",
      page: p450
    }
  },
  "08-54": {
    register: 2102 /* 08-54 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-54",
      name: "Delay Time of Fire Mode PID Loss",
      range: "0.0~10.0",
      default: "1.0",
      unit: "s",
      page: p450
    }
  },
  "08-55": {
    register: 2103 /* 08-55 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-55",
      name: "PID Feedback Loss Detection Selection of Fire Mode",
      range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)",
      default: "1",
      unit: "-",
      page: p450
    }
  },
  "08-56": {
    register: 2104 /* 08-56 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-56",
      name: "Detection Level of Fire Mode AI2 Signal",
      range: "0.0~100.0",
      default: "80.0",
      unit: "%",
      page: p450
    }
  },
  "08-57": {
    register: 2105 /* 08-57 */,
    kind: ParamKind9.Scaled,
    factor: 0.1,
    meta: {
      group: group9,
      code: "08-57",
      name: "Delay Time of Fire Mode AI2 Signal Loss",
      range: "0.0~10.0",
      default: "1.0",
      unit: "s",
      page: p450
    }
  },
  "08-58": {
    register: 2106 /* 08-58 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-58",
      name: "Selection of Fire Mode AI2 Signal Loss",
      range: "0-2 (0:Keep running / 1:Fire speed / 2:Max output freq)",
      default: "1",
      unit: "-",
      page: p451
    }
  },
  "08-59": {
    register: 2107 /* 08-59 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-59",
      name: "Fire Mode Motor Direction",
      range: "0-1 (0:Forward / 1:Reverse)",
      default: "0",
      unit: "-",
      page: p451
    }
  },
  "08-60": {
    register: 2108 /* 08-60 */,
    kind: ParamKind9.UInt16,
    meta: {
      group: group9,
      code: "08-60",
      name: "Fire Mode Password",
      range: "0~65534",
      default: "0",
      unit: "-",
      page: p451
    }
  }
};
var group08Params = all9;
// src/parameters/group-09.ts
import { ParamKind as ParamKind10 } from "modbus-schema";
var group10 = 9;
var p452 = 452;
var all10 = {
  "09-00": {
    register: 2304 /* 09-00 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-00",
      name: "INV Communication Station Address",
      range: "1~31",
      default: "1",
      unit: "-",
      page: p452
    }
  },
  "09-01": {
    register: 2305 /* 09-01 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-01",
      name: "Communication Mode Selection",
      range: "0 (MODBUS)",
      default: "0",
      unit: "-",
      page: p452
    }
  },
  "09-02": {
    register: 2306 /* 09-02 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-02",
      name: "Baud Rate Setting (bps)",
      range: "0-5 (0:1200 / 1:2400 / 2:4800 / 3:9600 / 4:19200 / 5:38400)",
      default: "4",
      unit: "-",
      page: p452
    }
  },
  "09-03": {
    register: 2307 /* 09-03 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-03",
      name: "Stop Bit Selection",
      range: "0-1 (0:1 StopBit / 1:2 StopBit)",
      default: "0",
      unit: "-",
      page: p452
    }
  },
  "09-04": {
    register: 2308 /* 09-04 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-04",
      name: "Parity Selection",
      range: "0-2 (0:No Parity / 1:Even Bit / 2:Odd Bit)",
      default: "0",
      unit: "-",
      page: p452
    }
  },
  "09-05": {
    register: 2309 /* 09-05 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-05",
      name: "Communication DataBit Selection",
      range: "0-1 (0:8 Bit Data / 1:7 Bit Data)",
      default: "0",
      unit: "-",
      page: p452
    }
  },
  "09-06": {
    register: 2310 /* 09-06 */,
    kind: ParamKind10.Scaled,
    factor: 0.1,
    meta: {
      group: group10,
      code: "09-06",
      name: "Communication Error Detection Time",
      range: "0.0~25.5",
      default: "0.0",
      unit: "S",
      page: p452
    }
  },
  "09-07": {
    register: 2311 /* 09-07 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-07",
      name: "Fault Stop Selection",
      range: "0-3 (0:Decel stop DT1 / 1:Coast stop / 2:Decel stop DT2 / 3:Keep operating)",
      default: "3",
      unit: "-",
      page: p452
    }
  },
  "09-08": {
    register: 2312 /* 09-08 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-08",
      name: "Comm. Fault Tolerance Count",
      range: "1~20",
      default: "1",
      unit: "-",
      page: p452
    }
  },
  "09-09": {
    register: 2313 /* 09-09 */,
    kind: ParamKind10.UInt16,
    meta: {
      group: group10,
      code: "09-09",
      name: "Waiting Time",
      range: "5~65",
      default: "5",
      unit: "ms",
      page: p452
    }
  }
};
var group09Params = all10;
// src/parameters/group-10.ts
import { ParamKind as ParamKind11 } from "modbus-schema";
var group11 = 10;
var p453 = 453;
var p454 = 454;
var p455 = 455;
var p456 = 456;
var all11 = {
  "10-00": {
    register: 2560 /* 10-00 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-00",
      name: "PID Target Value Source Setting",
      range: "1-4 (1:AI1 / 2:AI2 / 3:PI / 4:10-02)",
      default: "1",
      unit: "-",
      page: p453
    }
  },
  "10-01": {
    register: 2561 /* 10-01 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-01",
      name: "PID Feedback Value Source Setting",
      range: "1-3 (1:AI1 / 2:AI2 / 3:PI)",
      default: "2",
      unit: "-",
      page: p453
    }
  },
  "10-02": {
    register: 2562 /* 10-02 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-02",
      name: "PID Target Value",
      range: "0.00~100.00",
      default: "0.00",
      unit: "%",
      page: p453
    }
  },
  "10-03": {
    register: 2563 /* 10-03 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-03",
      name: "PID Control Mode",
      range: "bit0:Enable/bit1:Char/bit2:D input/bit3:Output mode",
      default: "0000b (0)",
      unit: "-",
      page: p453
    }
  },
  "10-04": {
    register: 2564 /* 10-04 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-04",
      name: "Feedback Gain",
      range: "0.01~10.00",
      default: "1.00",
      unit: "-",
      page: p453
    }
  },
  "10-05": {
    register: 2565 /* 10-05 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-05",
      name: "Proportional Gain (P)",
      range: "0.00~10.00",
      default: "1.00",
      unit: "-",
      page: p453
    }
  },
  "10-06": {
    register: 2566 /* 10-06 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-06",
      name: "Integral Time (I)",
      range: "0.00~100.00",
      default: "1.00",
      unit: "s",
      page: p453
    }
  },
  "10-07": {
    register: 2567 /* 10-07 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-07",
      name: "Differential Time (D)",
      range: "0.00~10.00",
      default: "0.00",
      unit: "s",
      page: p453
    }
  },
  "10-08": {
    register: 2568 /* 10-08 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-08",
      name: "AI1 Frequency Limit",
      range: "0.00~599.00",
      default: "0",
      unit: "Hz",
      page: p453
    }
  },
  "10-09": {
    register: 2569 /* 10-09 */,
    kind: ParamKind11.SignedScaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-09",
      name: "PID Bias",
      range: "-100.0~100.0",
      default: "0",
      unit: "%",
      page: p453
    }
  },
  "10-10": {
    register: 2570 /* 10-10 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-10",
      name: "PID Output Delay Time",
      range: "0.00~10.00",
      default: "0.00",
      unit: "s",
      page: p453
    }
  },
  "10-11": {
    register: 2571 /* 10-11 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-11",
      name: "PID Feedback Loss Detection Selection",
      range: "0-2 (0:Disable / 1:Warning / 2:Fault)",
      default: "0",
      unit: "-",
      page: p453
    }
  },
  "10-12": {
    register: 2572 /* 10-12 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-12",
      name: "PID Feedback Loss Detection Level",
      range: "0~100",
      default: "0",
      unit: "%",
      page: p453
    }
  },
  "10-13": {
    register: 2573 /* 10-13 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-13",
      name: "PID Feedback Loss Detection Time",
      range: "0.0~10.0",
      default: "1.0",
      unit: "s",
      page: p453
    }
  },
  "10-14": {
    register: 2574 /* 10-14 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-14",
      name: "PID Integral Limit",
      range: "0.0~100.0",
      default: "100.0",
      unit: "%",
      page: p453
    }
  },
  "10-15": {
    register: 2575 /* 10-15 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-15",
      name: "PID Trim Mode",
      range: "0-2",
      default: "0",
      unit: "-",
      page: p453
    }
  },
  "10-16": {
    register: 2576 /* 10-16 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-16",
      name: "PID Trim Scale",
      range: "0~100",
      default: "100",
      unit: "%",
      page: p453
    }
  },
  "10-17": {
    register: 2577 /* 10-17 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-17",
      name: "Start Frequency of PID Sleep",
      range: "0.00~599.00",
      default: "0.00",
      unit: "Hz",
      page: p454
    }
  },
  "10-18": {
    register: 2578 /* 10-18 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-18",
      name: "Delay Time of PID Sleep",
      range: "0.0~255.5",
      default: "0.0",
      unit: "s",
      page: p454
    }
  },
  "10-19": {
    register: 2579 /* 10-19 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-19",
      name: "Frequency of PID Waking up",
      range: "0.00~599.00",
      default: "0.00",
      unit: "Hz",
      page: p454
    }
  },
  "10-20": {
    register: 2580 /* 10-20 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-20",
      name: "Delay Time of PID Waking up",
      range: "0.0~255.5",
      default: "0.0",
      unit: "s",
      page: p454
    }
  },
  "10-23": {
    register: 2583 /* 10-23 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-23",
      name: "PID Output Limit",
      range: "0.0~100.0",
      default: "100.0",
      unit: "%",
      page: p454
    }
  },
  "10-24": {
    register: 2584 /* 10-24 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-24",
      name: "PID Output Gain",
      range: "0.0~25.0",
      default: "1.0",
      unit: "-",
      page: p454
    }
  },
  "10-25": {
    register: 2585 /* 10-25 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-25",
      name: "PID Reversal Output Selection",
      range: "0-1 (0:No reversal / 1:Allow reversal)",
      default: "0",
      unit: "-",
      page: p454
    }
  },
  "10-26": {
    register: 2586 /* 10-26 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-26",
      name: "PID Target Acceleration/Deceleration Time",
      range: "0.0~25.5",
      default: "0.0",
      unit: "s",
      page: p454
    }
  },
  "10-27": {
    register: 2587 /* 10-27 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-27",
      name: "PID Feedback Display Bias",
      range: "0~9999",
      default: "0",
      unit: "-",
      page: p454
    }
  },
  "10-29": {
    register: 2589 /* 10-29 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-29",
      name: "PID Sleep Selection",
      range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)",
      default: "1",
      unit: "-",
      page: p454
    }
  },
  "10-30": {
    register: 2590 /* 10-30 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-30",
      name: "Upper Limit of PID Target",
      range: "0.0~100.0",
      default: "100.0",
      unit: "%",
      page: p454
    }
  },
  "10-31": {
    register: 2591 /* 10-31 */,
    kind: ParamKind11.Scaled,
    factor: 0.1,
    meta: {
      group: group11,
      code: "10-31",
      name: "Lower Limit of PID Target",
      range: "0.0~100.0",
      default: "0.0",
      unit: "%",
      page: p454
    }
  },
  "10-33": {
    register: 2593 /* 10-33 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-33",
      name: "Maximum Value of PID Feedback",
      range: "1~10000",
      default: "999",
      unit: "-",
      page: p454
    }
  },
  "10-34": {
    register: 2594 /* 10-34 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-34",
      name: "PID Decimal Width",
      range: "0~4",
      default: "1",
      unit: "-",
      page: p454
    }
  },
  "10-35": {
    register: 2595 /* 10-35 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-35",
      name: "PID Unit",
      range: "0~24 (0:% / 1:FPM / 2:CFM / 3:SPI ...)",
      default: "0",
      unit: "-",
      page: p454
    }
  },
  "10-36": {
    register: 2596 /* 10-36 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-36",
      name: "Proportional Gain 2 (P)",
      range: "0.00~10.00",
      default: "3.00",
      unit: "-",
      page: p455
    }
  },
  "10-37": {
    register: 2597 /* 10-37 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-37",
      name: "Integral Time 2 (I)",
      range: "0.00~100.00",
      default: "0.50",
      unit: "Sec",
      page: p455
    }
  },
  "10-38": {
    register: 2598 /* 10-38 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-38",
      name: "Differential Time 2 (D)",
      range: "0.00~10.00",
      default: "0.00",
      unit: "Sec",
      page: p455
    }
  },
  "10-39": {
    register: 2599 /* 10-39 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-39",
      name: "Output Frequency Setting of PID Disconnection",
      range: "0.00~599.00",
      default: "30.00",
      unit: "Hz",
      page: p455
    }
  },
  "10-40": {
    register: 2600 /* 10-40 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-40",
      name: "Selection of PID Sleep Compensation Frequency",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p455
    }
  },
  "10-41": {
    register: 2601 /* 10-41 */,
    kind: ParamKind11.UInt16,
    meta: {
      group: group11,
      code: "10-41",
      name: "PID Mode Switch",
      range: "0-1 (0:General PID / 1:D Type PID)",
      default: "0",
      unit: "-",
      page: p455
    }
  },
  "10-47": {
    register: 2607 /* 10-47 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-47",
      name: "Proportional Gain 3 (P)",
      range: "0.00~10.00",
      default: "1.00",
      unit: "-",
      page: p456
    }
  },
  "10-48": {
    register: 2608 /* 10-48 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-48",
      name: "Integral Time 3 (I)",
      range: "0.00~100.00",
      default: "1.00",
      unit: "Sec",
      page: p456
    }
  },
  "10-49": {
    register: 2609 /* 10-49 */,
    kind: ParamKind11.Scaled,
    factor: 0.01,
    meta: {
      group: group11,
      code: "10-49",
      name: "Differential Time 3 (D)",
      range: "0.00~10.00",
      default: "0.00",
      unit: "Sec",
      page: p456
    }
  }
};
var group10Params = all11;
// src/parameters/group-11.ts
import { ParamKind as ParamKind12 } from "modbus-schema";
var group12 = 11;
var p4562 = 456;
var p457 = 457;
var p458 = 458;
var p459 = 459;
var all12 = {
  "11-00": {
    register: 2816 /* 11-00 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-00",
      name: "Direction Lock Selection",
      range: "0-2 (0:Fwd+Rev / 1:Fwd only / 2:Rev only)",
      default: "0",
      unit: "-",
      page: p4562
    }
  },
  "11-01": {
    register: 2817 /* 11-01 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-01",
      name: "Carrier frequency",
      range: "0~16 (0:Tuning / 1~16:1~16KHz)",
      default: "* (see Attachment 1 p.170)",
      unit: "-",
      page: p4562
    }
  },
  "11-02": {
    register: 2818 /* 11-02 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-02",
      name: "Soft PWM Function Selection",
      range: "0-2 (0:Disable / 1:Soft PWM 1 / 2:Soft PWM 2)",
      default: "0",
      unit: "-",
      page: p4562
    }
  },
  "11-03": {
    register: 2819 /* 11-03 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-03",
      name: "Automatic carrier lowering selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p4562
    }
  },
  "11-04": {
    register: 2820 /* 11-04 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-04",
      name: "S-curve Time Setting at Start of Accel",
      range: "0.00~2.50",
      default: "0.20",
      unit: "s",
      page: p4562
    }
  },
  "11-05": {
    register: 2821 /* 11-05 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-05",
      name: "S-curve Time Setting at Stop of Accel",
      range: "0.00~2.50",
      default: "0.20",
      unit: "s",
      page: p4562
    }
  },
  "11-06": {
    register: 2822 /* 11-06 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-06",
      name: "S-curve Time Setting at Start of Decel",
      range: "0.00~2.50",
      default: "0.20",
      unit: "s",
      page: p4562
    }
  },
  "11-07": {
    register: 2823 /* 11-07 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-07",
      name: "S-curve Time Setting at Stop of Decel",
      range: "0.00~2.50",
      default: "0.20",
      unit: "s",
      page: p4562
    }
  },
  "11-08": {
    register: 2824 /* 11-08 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-08",
      name: "Jump Frequency 1",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p4562
    }
  },
  "11-09": {
    register: 2825 /* 11-09 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-09",
      name: "Jump Frequency 2",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p4562
    }
  },
  "11-10": {
    register: 2826 /* 11-10 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-10",
      name: "Jump Frequency 3",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p4562
    }
  },
  "11-11": {
    register: 2827 /* 11-11 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-11",
      name: "Jump Frequency Width",
      range: "0.0~25.5",
      default: "1.0",
      unit: "Hz",
      page: p4562
    }
  },
  "11-12": {
    register: 2828 /* 11-12 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-12",
      name: "Manual Energy Saving Gain",
      range: "0~100",
      default: "80",
      unit: "%",
      page: p4562
    }
  },
  "11-13": {
    register: 2829 /* 11-13 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-13",
      name: "Automatic Return Time",
      range: "0~120",
      default: "60",
      unit: "Sec",
      page: p4562
    }
  },
  "11-18": {
    register: 2834 /* 11-18 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-18",
      name: "Manual Energy Saving Frequency",
      range: "0.0~599.0",
      default: "0.00",
      unit: "Hz",
      page: p4562
    }
  },
  "11-19": {
    register: 2835 /* 11-19 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-19",
      name: "Automatic Energy Saving Function",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p457
    }
  },
  "11-20": {
    register: 2836 /* 11-20 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-20",
      name: "Filter Time of Automatic Energy Saving",
      range: "0~200",
      default: "140",
      unit: "ms",
      page: p457
    }
  },
  "11-21": {
    register: 2837 /* 11-21 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-21",
      name: "Voltage Upper Limit of Energy Saving",
      range: "0~100",
      default: "100",
      unit: "%",
      page: p457
    }
  },
  "11-22": {
    register: 2838 /* 11-22 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-22",
      name: "Adjustment Time of Auto Energy Saving",
      range: "0~5000",
      default: "20",
      unit: "ms",
      page: p457
    }
  },
  "11-23": {
    register: 2839 /* 11-23 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-23",
      name: "Detection Level of Auto Energy Saving",
      range: "0~100",
      default: "10",
      unit: "%",
      page: p457
    }
  },
  "11-24": {
    register: 2840 /* 11-24 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-24",
      name: "Coefficient of Auto Energy Saving",
      range: "0.00~655.34",
      default: "* (see Attachment 1 p.170)",
      unit: "-",
      page: p457
    }
  },
  "11-28": {
    register: 2844 /* 11-28 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-28",
      name: "Frequency Gain of OV Prevention 2",
      range: "1~200",
      default: "100",
      unit: "%",
      page: p457
    }
  },
  "11-29": {
    register: 2845 /* 11-29 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-29",
      name: "Auto De-rating Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p457
    }
  },
  "11-30": {
    register: 2846 /* 11-30 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-30",
      name: "Variable Carrier Freq Max Limit",
      range: "2~16",
      default: "* (see Attachment 1 p.170)",
      unit: "KHz",
      page: p457
    }
  },
  "11-31": {
    register: 2847 /* 11-31 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-31",
      name: "Variable Carrier Freq Min Limit",
      range: "1~16",
      default: "* (see Attachment 1 p.170)",
      unit: "KHz",
      page: p457
    }
  },
  "11-32": {
    register: 2848 /* 11-32 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-32",
      name: "Variable Carrier Freq Prop Gain",
      range: "0~99",
      default: "0",
      unit: "-",
      page: p457
    }
  },
  "11-33": {
    register: 2849 /* 11-33 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-33",
      name: "DC Voltage Filter Rise Amount",
      range: "0.1~10.0",
      default: "0.1",
      unit: "Vdc",
      page: p457
    }
  },
  "11-34": {
    register: 2850 /* 11-34 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-34",
      name: "DC Voltage Filter Fall Amount",
      range: "0.1~10.0",
      default: "5.0",
      unit: "Vdc",
      page: p457
    }
  },
  "11-35": {
    register: 2851 /* 11-35 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-35",
      name: "DC Voltage Filter Dead band Level",
      range: "0.0~99.0",
      default: "10.0",
      unit: "Vdc",
      page: p457
    }
  },
  "11-36": {
    register: 2852 /* 11-36 */,
    kind: ParamKind12.Scaled,
    factor: 0.001,
    meta: {
      group: group12,
      code: "11-36",
      name: "Frequency Gain of OV Prevention",
      range: "0.000~1.000",
      default: "0.050",
      unit: "-",
      page: p457
    }
  },
  "11-37": {
    register: 2853 /* 11-37 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-37",
      name: "Frequency Limit of OV Prevention",
      range: "0.00~599.00",
      default: "5.00",
      unit: "Hz",
      page: p457
    }
  },
  "11-38": {
    register: 2854 /* 11-38 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-38",
      name: "Deceleration Start Voltage of OV Prevention",
      range: "200~400(230V)/400~800(460V)/500~1000(575V)/600~1200(690V)",
      default: "300/700/900/1080",
      unit: "V",
      page: p457
    }
  },
  "11-39": {
    register: 2855 /* 11-39 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-39",
      name: "Deceleration Stop Voltage of OV Prevention",
      range: "300~400(230V)/600~800(460V)/500~1000(575V)/600~1200(690V)",
      default: "350/750/950/1140",
      unit: "V",
      page: p457
    }
  },
  "11-40": {
    register: 2856 /* 11-40 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-40",
      name: "OV Prevention Selection",
      range: "0-3 (0:Disable / 1:Mode1 / 2:Mode2 / 3:Mode3)",
      default: "0",
      unit: "-",
      page: p457
    }
  },
  "11-41": {
    register: 2857 /* 11-41 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-41",
      name: "Selection of Ref Freq Disappearance Detection",
      range: "0-1 (0:Decel stop / 1:Use 11-42 level)",
      default: "0",
      unit: "-",
      page: p458
    }
  },
  "11-42": {
    register: 2858 /* 11-42 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-42",
      name: "Disappearance Level of Reference Frequency",
      range: "0.0~100.0",
      default: "80.0",
      unit: "%",
      page: p458
    }
  },
  "11-43": {
    register: 2859 /* 11-43 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-43",
      name: "Hold Frequency at Start",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p458
    }
  },
  "11-44": {
    register: 2860 /* 11-44 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-44",
      name: "Frequency Hold Time at Start",
      range: "0.0~10.0",
      default: "0.0",
      unit: "s",
      page: p458
    }
  },
  "11-45": {
    register: 2861 /* 11-45 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-45",
      name: "Hold Frequency at Stop",
      range: "0.0~599.0",
      default: "0.0",
      unit: "Hz",
      page: p458
    }
  },
  "11-46": {
    register: 2862 /* 11-46 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-46",
      name: "Frequency Hold Time at Stop",
      range: "0.0~10.0",
      default: "0.0",
      unit: "s",
      page: p458
    }
  },
  "11-47": {
    register: 2863 /* 11-47 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-47",
      name: "KEB Deceleration Time",
      range: "0.0~25.5",
      default: "0.0",
      unit: "s",
      page: p458
    }
  },
  "11-48": {
    register: 2864 /* 11-48 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-48",
      name: "KEB Detection Level",
      range: "190~210(230V)/380~420(460V)/540~570(575V)/540~684(690V)",
      default: "200/400/555/555",
      unit: "V",
      page: p458
    }
  },
  "11-49": {
    register: 2865 /* 11-49 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-49",
      name: "Zero-servo Gain",
      range: "0.01~5.00",
      default: "1.00",
      unit: "-",
      page: p458
    }
  },
  "11-50": {
    register: 2866 /* 11-50 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-50",
      name: "Zero-servo Count",
      range: "0~4096",
      default: "12",
      unit: "-",
      page: p458
    }
  },
  "11-51": {
    register: 2867 /* 11-51 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-51",
      name: "Braking Selection of Zero Speed",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p458
    }
  },
  "11-52": {
    register: 2868 /* 11-52 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-52",
      name: "Droop Control Level",
      range: "0.0~100.0",
      default: "0.0",
      unit: "%",
      page: p458
    }
  },
  "11-53": {
    register: 2869 /* 11-53 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-53",
      name: "Droop Control Delay",
      range: "0.01~2.00",
      default: "0.2",
      unit: "s",
      page: p458
    }
  },
  "11-54": {
    register: 2870 /* 11-54 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-54",
      name: "Initialization of Cumulative Energy",
      range: "0-1 (0:Do not clear / 1:Clear)",
      default: "0",
      unit: "-",
      page: p458
    }
  },
  "11-55": {
    register: 2871 /* 11-55 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-55",
      name: "STOP Key Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "1",
      unit: "-",
      page: p458
    }
  },
  "11-56": {
    register: 2872 /* 11-56 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-56",
      name: "UP/DOWN Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p459
    }
  },
  "11-58": {
    register: 2874 /* 11-58 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-58",
      name: "Record Reference Frequency",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "0",
      unit: "-",
      page: p459
    }
  },
  "11-59": {
    register: 2875 /* 11-59 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: {
      group: group12,
      code: "11-59",
      name: "Gain of Preventing Oscillation",
      range: "0.00~2.50",
      default: "* (see Attachment 1 p.170)",
      unit: "-",
      page: p459
    }
  },
  "11-60": {
    register: 2876 /* 11-60 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-60",
      name: "Upper Limit of Preventing Oscillation",
      range: "0~100",
      default: "* (see Attachment 1 p.170)",
      unit: "%",
      page: p459
    }
  },
  "11-61": {
    register: 2877 /* 11-61 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-61",
      name: "Time Parameter of Preventing Oscillation",
      range: "0~100",
      default: "0",
      unit: "-",
      page: p459
    }
  },
  "11-62": {
    register: 2878 /* 11-62 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-62",
      name: "Selection of Preventing Oscillation",
      range: "0-2 (0:Mode1 / 1:Mode2 / 2:Mode3)",
      default: "1",
      unit: "-",
      page: p459
    }
  },
  "11-63": {
    register: 2879 /* 11-63 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-63",
      name: "Strong Magnetic Selection",
      range: "0-1 (0:Disable / 1:Enable)",
      default: "1",
      unit: "-",
      page: p459
    }
  },
  "11-64": {
    register: 2880 /* 11-64 */,
    kind: ParamKind12.Scaled,
    factor: 0.1,
    meta: {
      group: group12,
      code: "11-64",
      name: "Acceleration Speed Gain Adjustment",
      range: "0.1~10.0",
      default: "1.0",
      unit: "-",
      page: p459
    }
  },
  "11-65": {
    register: 2881 /* 11-65 */,
    kind: ParamKind12.UInt16,
    meta: {
      group: group12,
      code: "11-65",
      name: "Target Main Circuit Voltage",
      range: "200~400(230V)/400~800(460V)/520~1040(575V)/624~1248(690V)",
      default: "370/740/962/1154",
      unit: "-",
      page: p459
    }
  },
  "11-66": {
    register: 2882 /* 11-66 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-66", name: "2 Phase/ 3 Phase PWM Switch Frequency", range: "6.00~60.00", default: "20", unit: "Hz", page: p459 }
  },
  "11-67": {
    register: 2883 /* 11-67 */,
    kind: ParamKind12.UInt16,
    meta: { group: group12, code: "11-67", name: "Soft PWM 2 Frequency Range", range: "0~12000", default: "0", unit: "Hz", page: p459 }
  },
  "11-68": {
    register: 2884 /* 11-68 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-68", name: "Soft PWM 2 Switch Frequency", range: "6.00~60.00", default: "20", unit: "Hz", page: p459 }
  },
  "11-69": {
    register: 2885 /* 11-69 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-69", name: "Gain of Preventing Oscillation 3", range: "0.00~200.00", default: "5.00", unit: "%", page: p459 }
  },
  "11-70": {
    register: 2886 /* 11-70 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-70", name: "Upper Limit of Preventing Oscillation 3", range: "0.01~100.00", default: "5.00", unit: "%", page: p459 }
  },
  "11-71": {
    register: 2887 /* 11-71 */,
    kind: ParamKind12.UInt16,
    meta: { group: group12, code: "11-71", name: "Time Parameter of Preventing Oscillation 3", range: "0~30000", default: "100", unit: "ms", page: p459 }
  },
  "11-72": {
    register: 2888 /* 11-72 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-72", name: "Gain of Preventing Oscillation for Switch Frequency 1", range: "0.01~300.00", default: "30.00", unit: "Hz", page: p459 }
  },
  "11-73": {
    register: 2889 /* 11-73 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-73", name: "Gain of Preventing Oscillation for Switch Frequency 2", range: "0.01~300.00", default: "50.00", unit: "Hz", page: p459 }
  },
  "11-76": {
    register: 2892 /* 11-76 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-76", name: "Droop Frequency Level 1", range: "0.00~599.00", default: "0.00", unit: "Hz", page: p459 }
  },
  "11-77": {
    register: 2893 /* 11-77 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-77", name: "Droop Frequency Level 2", range: "0.00~599.00", default: "0.00", unit: "Hz", page: p459 }
  },
  "11-78": {
    register: 2894 /* 11-78 */,
    kind: ParamKind12.Scaled,
    factor: 0.01,
    meta: { group: group12, code: "11-78", name: "Droop Torque Offset Value", range: "0.00~100.00", default: "0.00", unit: "%", page: p459 }
  }
};
var group11Params = all12;
// src/parameters/group-12.ts
import { ParamKind as ParamKind13 } from "modbus-schema";
var group13 = 12;
var p462 = 462;
var p463 = 463;
var p464 = 464;
var p465 = 465;
var p466 = 466;
var p467 = 467;
var all13 = {
  "12-00": {
    register: 9488 /* 12-00 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-00",
      name: "Display Screen Selection (LED)",
      range: "00000~77777",
      default: "-",
      unit: "-",
      page: p462
    }
  },
  "12-01": {
    register: 3073 /* 12-01 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-01",
      name: "PID Feedback Display Mode (LED)",
      range: "0-2 (0:Integer / 1:1 decimal / 2:2 decimals)",
      default: "0",
      unit: "-",
      page: p462
    }
  },
  "12-02": {
    register: 3074 /* 12-02 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-02",
      name: "PID Feedback Display Unit Setting (LED)",
      range: "0-2 (0:xxxxx / 1:xxxPb / 2:xxxFL)",
      default: "0",
      unit: "-",
      page: p462
    }
  },
  "12-03": {
    register: 3075 /* 12-03 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-03",
      name: "Line Speed Display (LED)",
      range: "0~60000",
      default: "1500",
      unit: "RPM",
      page: p462
    }
  },
  "12-04": {
    register: 3076 /* 12-04 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-04",
      name: "Modes of Line Speed Display (LED)",
      range: "0-4 (0:Output Freq / 1:Integer / 2:1 dec / 3:2 dec / 4:3 dec)",
      default: "0",
      unit: "-",
      page: p462
    }
  },
  "12-05": {
    register: 3077 /* 12-05 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-05",
      name: "Status Display of Digital Input & Output Terminal",
      range: "bit-field (see manual)",
      default: "-",
      unit: "-",
      page: p462
    }
  },
  "12-11": {
    register: 3083 /* 12-11 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-11",
      name: "Output Current of Current Fault",
      range: "read-only",
      default: "-",
      unit: "A",
      page: p463
    }
  },
  "12-12": {
    register: 3084 /* 12-12 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-12",
      name: "Output Voltage of Current Fault",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p463
    }
  },
  "12-13": {
    register: 3085 /* 12-13 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-13",
      name: "Output Frequency of Current Fault",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p463
    }
  },
  "12-14": {
    register: 3086 /* 12-14 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-14",
      name: "DC Voltage of Current Fault",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p463
    }
  },
  "12-15": {
    register: 3087 /* 12-15 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-15",
      name: "Frequency Command of Current Fault",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p463
    }
  },
  "12-16": {
    register: 3088 /* 12-16 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-16",
      name: "Frequency Command",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p463
    }
  },
  "12-17": {
    register: 3089 /* 12-17 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-17",
      name: "Output Frequency",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p463
    }
  },
  "12-18": {
    register: 3090 /* 12-18 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-18",
      name: "Output Current",
      range: "read-only",
      default: "-",
      unit: "A",
      page: p463
    }
  },
  "12-19": {
    register: 3091 /* 12-19 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-19",
      name: "Output Voltage",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p463
    }
  },
  "12-20": {
    register: 3092 /* 12-20 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-20",
      name: "DC Voltage (Vdc)",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p463
    }
  },
  "12-21": {
    register: 3093 /* 12-21 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-21",
      name: "Output Power (kW)",
      range: "read-only",
      default: "-",
      unit: "kW",
      page: p463
    }
  },
  "12-22": {
    register: 3094 /* 12-22 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-22",
      name: "Motor's Rotation Speed (rpm)",
      range: "read-only",
      default: "-",
      unit: "rpm",
      page: p463
    }
  },
  "12-23": {
    register: 3095 /* 12-23 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-23",
      name: "Output Power Factor (Pfo)",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p463
    }
  },
  "12-24": {
    register: 3096 /* 12-24 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-24",
      name: "Control Mode",
      range: "Display only",
      default: "-",
      unit: "-",
      page: p463
    }
  },
  "12-25": {
    register: 3097 /* 12-25 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-25",
      name: "AI1 Input",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-26": {
    register: 3098 /* 12-26 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-26",
      name: "AI2 Input",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-27": {
    register: 3099 /* 12-27 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-27",
      name: "Motor Torque",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-28": {
    register: 3100 /* 12-28 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-28",
      name: "Motor Torque Current (Iq)",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-29": {
    register: 3101 /* 12-29 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-29",
      name: "Motor Excitation Current (Id)",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-30": {
    register: 3102 /* 12-30 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-30",
      name: "ASR Deviation",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p463
    }
  },
  "12-32": {
    register: 3104 /* 12-32 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-32",
      name: "ASR Output",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-33": {
    register: 3105 /* 12-33 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-33",
      name: "PG Feedback",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-34": {
    register: 3106 /* 12-34 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-34",
      name: "PG Pulse Number",
      range: "read-only",
      default: "-",
      unit: "Pulse",
      page: p464
    }
  },
  "12-35": {
    register: 3107 /* 12-35 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-35",
      name: "Zero-servo Pulse Number",
      range: "read-only",
      default: "-",
      unit: "Pulse",
      page: p464
    }
  },
  "12-36": {
    register: 3108 /* 12-36 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-36",
      name: "PID Input",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-37": {
    register: 3109 /* 12-37 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-37",
      name: "PID Output",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-38": {
    register: 3110 /* 12-38 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-38",
      name: "PID Setting",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-39": {
    register: 3111 /* 12-39 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-39",
      name: "PID Feedback",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p464
    }
  },
  "12-41": {
    register: 3113 /* 12-41 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-41",
      name: "Heatsink Temperature",
      range: "read-only",
      default: "-",
      unit: "℃",
      page: p464
    }
  },
  "12-42": {
    register: 3114 /* 12-42 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-42",
      name: "RS-485 Error Code",
      range: "bit-field (CRC/Data len/Function/Parity/Overrun/Framing/Timeout)",
      default: "-",
      unit: "-",
      page: p464
    }
  },
  "12-43": {
    register: 3115 /* 12-43 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-43",
      name: "Inverter Status",
      range: "bit-field (Ready/Running/Zero speed/Speed agree/Fault minor/Fault major)",
      default: "-",
      unit: "-",
      page: p464
    }
  },
  "12-44": {
    register: 3116 /* 12-44 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-44",
      name: "Pulse Input Frequency",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p464
    }
  },
  "12-45": {
    register: 3117 /* 12-45 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-45",
      name: "Recent Fault Message",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-46": {
    register: 3118 /* 12-46 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-46",
      name: "Previous Fault Message",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-47": {
    register: 3119 /* 12-47 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-47",
      name: "Previous Two Fault Messages",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-48": {
    register: 3120 /* 12-48 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-48",
      name: "Previous Three Fault Messages",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-49": {
    register: 3121 /* 12-49 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-49",
      name: "Previous Four Fault Messages",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-50": {
    register: 3122 /* 12-50 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-50",
      name: "DIO Status of Current Fault",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-51": {
    register: 3123 /* 12-51 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-51",
      name: "Inverter Status of Current Fault",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-52": {
    register: 3124 /* 12-52 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-52",
      name: "Trip Time 1 of Current Fault",
      range: "read-only",
      default: "-",
      unit: "Hr",
      page: p465
    }
  },
  "12-53": {
    register: 3125 /* 12-53 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-53",
      name: "Trip Time 2 of Current Fault",
      range: "read-only",
      default: "-",
      unit: "day",
      page: p465
    }
  },
  "12-54": {
    register: 3126 /* 12-54 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-54",
      name: "Frequency Command of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p465
    }
  },
  "12-55": {
    register: 3127 /* 12-55 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-55",
      name: "Output Frequency of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "Hz",
      page: p465
    }
  },
  "12-56": {
    register: 3128 /* 12-56 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-56",
      name: "Output Current of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "A",
      page: p465
    }
  },
  "12-57": {
    register: 3129 /* 12-57 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-57",
      name: "Output Voltage of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p465
    }
  },
  "12-58": {
    register: 3130 /* 12-58 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-58",
      name: "DC Voltage of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "V",
      page: p465
    }
  },
  "12-59": {
    register: 3131 /* 12-59 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-59",
      name: "DIO Status of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-60": {
    register: 3132 /* 12-60 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-60",
      name: "Inverter Status of Previous Fault",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-61": {
    register: 3133 /* 12-61 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-61",
      name: "Trip Time 1 of Last Fault",
      range: "read-only",
      default: "-",
      unit: "Hr",
      page: p465
    }
  },
  "12-62": {
    register: 3134 /* 12-62 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-62",
      name: "Trip Time 2 of Last Fault",
      range: "read-only",
      default: "-",
      unit: "day",
      page: p465
    }
  },
  "12-63": {
    register: 3135 /* 12-63 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-63",
      name: "Recent Warning Messages",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-64": {
    register: 3136 /* 12-64 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-64",
      name: "Previous Warning Message",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p465
    }
  },
  "12-65": {
    register: 3137 /* 12-65 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-65",
      name: "Motor Start Angle",
      range: "0~360",
      default: "-",
      unit: "-",
      page: p466
    }
  },
  "12-66": {
    register: 3138 /* 12-66 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-66",
      name: "Encoder Angle",
      range: "0~360",
      default: "-",
      unit: "-",
      page: p466
    }
  },
  "12-67": {
    register: 3139 /* 12-67 */,
    kind: ParamKind13.Scaled,
    factor: 0.1,
    meta: {
      group: group13,
      code: "12-67",
      name: "Cumulative Energy (kWHr)",
      range: "0.0~999.9",
      default: "-",
      unit: "kWHr",
      page: p466
    }
  },
  "12-68": {
    register: 3140 /* 12-68 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-68",
      name: "Cumulative Energy (MWHr)",
      range: "0~60000",
      default: "-",
      unit: "MWHr",
      page: p466
    }
  },
  "12-76": {
    register: 3148 /* 12-76 */,
    kind: ParamKind13.Scaled,
    factor: 0.1,
    meta: {
      group: group13,
      code: "12-76",
      name: "No-Load Voltage Output",
      range: "0.0~600.0",
      default: "-",
      unit: "V",
      page: p467
    }
  },
  "12-78": {
    register: 3150 /* 12-78 */,
    kind: ParamKind13.SignedScaled,
    factor: 1,
    meta: {
      group: group13,
      code: "12-78",
      name: "Z-Phase Bias Value",
      range: "-9999~9999",
      default: "-",
      unit: "Pulse",
      page: p467
    }
  },
  "12-79": {
    register: 3151 /* 12-79 */,
    kind: ParamKind13.Scaled,
    factor: 0.1,
    meta: {
      group: group13,
      code: "12-79",
      name: "Pulse Input Percentage",
      range: "0.0~100.0",
      default: "-",
      unit: "%",
      page: p467
    }
  },
  "12-80": {
    register: 3152 /* 12-80 */,
    kind: ParamKind13.Scaled,
    factor: 0.1,
    meta: {
      group: group13,
      code: "12-80",
      name: "AI1 Frequency Command",
      range: "0.0~599.0",
      default: "0",
      unit: "Hz",
      page: p467
    }
  },
  "12-82": {
    register: 3154 /* 12-82 */,
    kind: ParamKind13.Scaled,
    factor: 0.1,
    meta: {
      group: group13,
      code: "12-82",
      name: "Motor Load",
      range: "0~200.0",
      default: "-",
      unit: "%",
      page: p467
    }
  },
  "12-85": {
    register: 3157 /* 12-85 */,
    kind: ParamKind13.UInt16,
    meta: {
      group: group13,
      code: "12-85",
      name: "AI3 Input",
      range: "read-only",
      default: "-",
      unit: "%",
      page: p467
    }
  }
};
var group12Params = all13;
// src/parameters/group-13.ts
import { ParamKind as ParamKind14 } from "modbus-schema";
var group14 = 13;
var p468 = 468;
var p469 = 469;
var p470 = 470;
var all14 = {
  "13-00": {
    register: 3328 /* 13-00 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-00",
      name: "Inverter Capacity Selection",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p468
    }
  },
  "13-01": {
    register: 3329 /* 13-01 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-01",
      name: "Software Version",
      range: "0.00~9.99",
      default: "-",
      unit: "-",
      page: p468
    }
  },
  "13-02": {
    register: 3330 /* 13-02 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-02",
      name: "Clear Cumulative Operation Hours",
      range: "0-1 (0:Disable / 1:Clear)",
      default: "0",
      unit: "-",
      page: p468
    }
  },
  "13-03": {
    register: 3331 /* 13-03 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-03",
      name: "Cumulative Operation Hours 1",
      range: "0~23",
      default: "-",
      unit: "hr",
      page: p468
    }
  },
  "13-04": {
    register: 3332 /* 13-04 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-04",
      name: "Cumulative Operation Hours 2",
      range: "0~65534",
      default: "-",
      unit: "day",
      page: p468
    }
  },
  "13-05": {
    register: 3333 /* 13-05 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-05",
      name: "Selection of Cumulative Operation Time",
      range: "0-1 (0:Power on / 1:Operation)",
      default: "0",
      unit: "-",
      page: p468
    }
  },
  "13-06": {
    register: 3334 /* 13-06 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-06",
      name: "Parameters Locked",
      range: "0-2 (0:Read-only / 1:User defined / 2:All writable)",
      default: "2",
      unit: "-",
      page: p468
    }
  },
  "13-07": {
    register: 3335 /* 13-07 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-07",
      name: "Parameter Password Function",
      range: "00000~65534",
      default: "00000",
      unit: "-",
      page: p468
    }
  },
  "13-08": {
    register: 3336 /* 13-08 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-08",
      name: "Restore Factory Setting",
      range: "0-16 (0:No init / 2:2-wire 60Hz 230/460/690V / 4:2-wire 50Hz 220/380V / 6:3-wire 60Hz 230/460/690V / 8:3-wire 50Hz 220/380V / 10:Customized / 12:2-wire 50Hz 200/400V / 14:3-wire 50Hz 200/400V / 16:3-wire 50Hz 220/380V)",
      default: "0",
      unit: "-",
      page: p468
    }
  },
  "13-09": {
    register: 3337 /* 13-09 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-09",
      name: "Fault History Clearance Function",
      range: "0-1 (0:No clearing / 1:Clear)",
      default: "0",
      unit: "-",
      page: p469
    }
  },
  "13-10": {
    register: 3338 /* 13-10 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-10",
      name: "Parameter Password Function 2",
      range: "0~9999",
      default: "0",
      unit: "-",
      page: p469
    }
  },
  "13-11": {
    register: 3339 /* 13-11 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-11",
      name: "C/B CPLD Ver.",
      range: "0.00~9.99",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-12": {
    register: 3340 /* 13-12 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-12",
      name: "PG Card Id",
      range: "0~255",
      default: "0",
      unit: "-",
      page: p469
    }
  },
  "13-13": {
    register: 3341 /* 13-13 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-13",
      name: "PG Card Ver.",
      range: "0.00~9.99",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-14": {
    register: 3342 /* 13-14 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-14",
      name: "Fault Storage Selections",
      range: "0-1 (0:Auto restart not saved / 1:Auto restart saved)",
      default: "0",
      unit: "-",
      page: p469
    }
  },
  "13-21": {
    register: 3349 /* 13-21 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-21",
      name: "Last time Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-22": {
    register: 3350 /* 13-22 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-22",
      name: "Previous two Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-23": {
    register: 3351 /* 13-23 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-23",
      name: "Previous three Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-24": {
    register: 3352 /* 13-24 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-24",
      name: "Previous four Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-25": {
    register: 3353 /* 13-25 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-25",
      name: "Previous five Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-26": {
    register: 3354 /* 13-26 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-26",
      name: "Previous six Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p469
    }
  },
  "13-27": {
    register: 3355 /* 13-27 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-27",
      name: "Previous seven Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-28": {
    register: 3356 /* 13-28 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-28",
      name: "Previous eight Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-29": {
    register: 3357 /* 13-29 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-29",
      name: "Previous nine Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-30": {
    register: 3358 /* 13-30 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-30",
      name: "Previous ten Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-31": {
    register: 3359 /* 13-31 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-31",
      name: "Previous eleven Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-32": {
    register: 3360 /* 13-32 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-32",
      name: "Previous twelve Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-33": {
    register: 3361 /* 13-33 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-33",
      name: "Previous thirteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-34": {
    register: 3362 /* 13-34 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-34",
      name: "Previous fourteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-35": {
    register: 3363 /* 13-35 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-35",
      name: "Previous fifteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-36": {
    register: 3364 /* 13-36 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-36",
      name: "Previous sixteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-37": {
    register: 3365 /* 13-37 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-37",
      name: "Previous seventeen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-38": {
    register: 3366 /* 13-38 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-38",
      name: "Previous eighteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-39": {
    register: 3367 /* 13-39 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-39",
      name: "Previous nineteen Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-40": {
    register: 3368 /* 13-40 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-40",
      name: "Previous twenty Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-41": {
    register: 3369 /* 13-41 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-41",
      name: "Previous twenty one Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-42": {
    register: 3370 /* 13-42 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-42",
      name: "Previous twenty two Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-43": {
    register: 3371 /* 13-43 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-43",
      name: "Previous twenty three Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-44": {
    register: 3372 /* 13-44 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-44",
      name: "Previous twenty four Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-45": {
    register: 3373 /* 13-45 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-45",
      name: "Previous twenty five Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-46": {
    register: 3374 /* 13-46 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-46",
      name: "Previous twenty six Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-47": {
    register: 3375 /* 13-47 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-47",
      name: "Previous twenty seven Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-48": {
    register: 3376 /* 13-48 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-48",
      name: "Previous twenty eight Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-49": {
    register: 3377 /* 13-49 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-49",
      name: "Previous twenty nine Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  },
  "13-50": {
    register: 3378 /* 13-50 */,
    kind: ParamKind14.UInt16,
    meta: {
      group: group14,
      code: "13-50",
      name: "Previous thirty Fault History",
      range: "read-only",
      default: "-",
      unit: "-",
      page: p470
    }
  }
};
var group13Params = all14;
// src/parameters/group-14.ts
import { ParamKind as ParamKind15 } from "modbus-schema";
var group15 = 14;
var p472 = 472;
var all15 = {
  "14-00": {
    register: 3584 /* 14-00 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-00", name: "T1 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-01": {
    register: 3585 /* 14-01 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-01", name: "T1 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-02": {
    register: 3586 /* 14-02 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-02", name: "T2 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-03": {
    register: 3587 /* 14-03 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-03", name: "T2 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-04": {
    register: 3588 /* 14-04 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-04", name: "T3 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-05": {
    register: 3589 /* 14-05 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-05", name: "T3 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-06": {
    register: 3590 /* 14-06 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-06", name: "T4 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-07": {
    register: 3591 /* 14-07 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-07", name: "T4 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-08": {
    register: 3592 /* 14-08 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-08", name: "T5 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-09": {
    register: 3593 /* 14-09 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-09", name: "T5 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-10": {
    register: 3594 /* 14-10 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-10", name: "T6 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-11": {
    register: 3595 /* 14-11 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-11", name: "T6 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-12": {
    register: 3596 /* 14-12 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-12", name: "T7 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-13": {
    register: 3597 /* 14-13 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-13", name: "T7 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-14": {
    register: 3598 /* 14-14 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-14", name: "T8 Set Value 1", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-15": {
    register: 3599 /* 14-15 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-15", name: "T8 Set Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p472 }
  },
  "14-16": {
    register: 3600 /* 14-16 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-16", name: "C1 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-17": {
    register: 3601 /* 14-17 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-17", name: "C2 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-18": {
    register: 3602 /* 14-18 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-18", name: "C3 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-19": {
    register: 3603 /* 14-19 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-19", name: "C4 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-20": {
    register: 3604 /* 14-20 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-20", name: "C5 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-21": {
    register: 3605 /* 14-21 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-21", name: "C6 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-22": {
    register: 3606 /* 14-22 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-22", name: "C7 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-23": {
    register: 3607 /* 14-23 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-23", name: "C8 Set Value", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-24": {
    register: 3608 /* 14-24 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-24", name: "AS1 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-25": {
    register: 3609 /* 14-25 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-25", name: "AS1 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-26": {
    register: 3610 /* 14-26 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-26", name: "AS1 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-27": {
    register: 3611 /* 14-27 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-27", name: "AS2 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-28": {
    register: 3612 /* 14-28 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-28", name: "AS2 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-29": {
    register: 3613 /* 14-29 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-29", name: "AS2 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-30": {
    register: 3614 /* 14-30 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-30", name: "AS3 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-31": {
    register: 3615 /* 14-31 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-31", name: "AS3 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-32": {
    register: 3616 /* 14-32 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-32", name: "AS3 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-33": {
    register: 3617 /* 14-33 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-33", name: "AS4 Set Value 1", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-34": {
    register: 3618 /* 14-34 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-34", name: "AS4 Set Value 2", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-35": {
    register: 3619 /* 14-35 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-35", name: "AS4 Set Value 3", range: "0~65534", default: "0", unit: "-", page: p472 }
  },
  "14-36": {
    register: 3620 /* 14-36 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-36", name: "MD1 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-37": {
    register: 3621 /* 14-37 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-37", name: "MD1 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-38": {
    register: 3622 /* 14-38 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-38", name: "MD1 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-39": {
    register: 3623 /* 14-39 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-39", name: "MD2 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-40": {
    register: 3624 /* 14-40 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-40", name: "MD2 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-41": {
    register: 3625 /* 14-41 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-41", name: "MD2 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-42": {
    register: 3626 /* 14-42 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-42", name: "MD3 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-43": {
    register: 3627 /* 14-43 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-43", name: "MD3 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-44": {
    register: 3628 /* 14-44 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-44", name: "MD3 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-45": {
    register: 3629 /* 14-45 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-45", name: "MD4 Set Value 1", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-46": {
    register: 3630 /* 14-46 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-46", name: "MD4 Set Value 2", range: "0~65534", default: "1", unit: "-", page: p472 }
  },
  "14-47": {
    register: 3631 /* 14-47 */,
    kind: ParamKind15.UInt16,
    meta: { group: group15, code: "14-47", name: "MD4 Set Value 3", range: "0~65534", default: "1", unit: "-", page: p472 }
  }
};
var group14Params = all15;
// src/parameters/group-15.ts
import { ParamKind as ParamKind16 } from "modbus-schema";
var group16 = 15;
var p473 = 473;
var all16 = {
  "15-00": {
    register: 3840 /* 15-00 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-00", name: "T1 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-01": {
    register: 3841 /* 15-01 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-01", name: "T1 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-02": {
    register: 3842 /* 15-02 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-02", name: "T2 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-03": {
    register: 3843 /* 15-03 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-03", name: "T2 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-04": {
    register: 3844 /* 15-04 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-04", name: "T3 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-05": {
    register: 3845 /* 15-05 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-05", name: "T3 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-06": {
    register: 3846 /* 15-06 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-06", name: "T4 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-07": {
    register: 3847 /* 15-07 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-07", name: "T4 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-08": {
    register: 3848 /* 15-08 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-08", name: "T5 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-09": {
    register: 3849 /* 15-09 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-09", name: "T5 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-10": {
    register: 3850 /* 15-10 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-10", name: "T6 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-11": {
    register: 3851 /* 15-11 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-11", name: "T6 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-12": {
    register: 3852 /* 15-12 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-12", name: "T7 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-13": {
    register: 3853 /* 15-13 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-13", name: "T7 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-14": {
    register: 3854 /* 15-14 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-14", name: "T8 Current Value 1", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-15": {
    register: 3855 /* 15-15 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-15", name: "T8 Current Value 2 (Mode 7)", range: "0~9999", default: "0", unit: "-", page: p473 }
  },
  "15-16": {
    register: 3856 /* 15-16 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-16", name: "C1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-17": {
    register: 3857 /* 15-17 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-17", name: "C2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-18": {
    register: 3858 /* 15-18 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-18", name: "C3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-19": {
    register: 3859 /* 15-19 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-19", name: "C4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-20": {
    register: 3860 /* 15-20 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-20", name: "C5 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-21": {
    register: 3861 /* 15-21 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-21", name: "C6 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-22": {
    register: 3862 /* 15-22 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-22", name: "C7 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-23": {
    register: 3863 /* 15-23 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-23", name: "C8 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-24": {
    register: 3864 /* 15-24 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-24", name: "AS1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-25": {
    register: 3865 /* 15-25 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-25", name: "AS2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-26": {
    register: 3866 /* 15-26 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-26", name: "AS3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-27": {
    register: 3867 /* 15-27 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-27", name: "AS4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-28": {
    register: 3868 /* 15-28 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-28", name: "MD1 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-29": {
    register: 3869 /* 15-29 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-29", name: "MD2 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-30": {
    register: 3870 /* 15-30 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-30", name: "MD3 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-31": {
    register: 3871 /* 15-31 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-31", name: "MD4 Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  },
  "15-32": {
    register: 3872 /* 15-32 */,
    kind: ParamKind16.UInt16,
    meta: { group: group16, code: "15-32", name: "TD Current Value", range: "0~65534", default: "0", unit: "-", page: p473 }
  }
};
var group15Params = all16;
// src/parameters/group-16.ts
import { ParamKind as ParamKind17 } from "modbus-schema";
var group17 = 16;
var p474 = 474;
var p475 = 475;
var p476 = 476;
var p477 = 477;
var all17 = {
  "16-00": {
    register: 4096 /* 16-00 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-00", name: "Main Screen Monitoring", range: "5~82", default: "16", unit: "-", page: p474 }
  },
  "16-01": {
    register: 4097 /* 16-01 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-01", name: "Sub-Screen Monitoring 1", range: "5~82", default: "17", unit: "-", page: p474 }
  },
  "16-02": {
    register: 4098 /* 16-02 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-02", name: "Sub-Screen Monitoring 2", range: "5~82", default: "18", unit: "-", page: p474 }
  },
  "16-03": {
    register: 4099 /* 16-03 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-03", name: "Display Unit", range: "0~39999 (0:0.01Hz / 1:0.01% / 2:rpm / 40~9999:XXXX at 100% / 10001~19999:XXX.X / 20001~29999:XX.XX / 30001~39999:X.XXX)", default: "0", unit: "-", page: p474 }
  },
  "16-04": {
    register: 4100 /* 16-04 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-04", name: "Engineering Unit", range: "0~24 (0:none / 1:FPM / 2:CFM / 3:PSI / 4:GPH / 5:GPM / 6:IN / 7:FT / 8:/s / 9:/m / 10:/h / 11:°F / 12:inW / 13:HP / 14:m/s / 15:MPM / 16:CMM / 17:W / 18:KW / 19:m / 20:°C / 21:RPM / 22:Bar / 23:Pa / 24:KPa)", default: "0", unit: "-", page: p474 }
  },
  "16-05": {
    register: 4101 /* 16-05 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-05", name: "LCD Backlight", range: "0~7", default: "5", unit: "-", page: p475 }
  },
  "16-07": {
    register: 4103 /* 16-07 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-07", name: "Copy Function Selection", range: "0-3 (0:Do not copy / 1:Read to operator / 2:Write to inverter / 3:Compare)", default: "0", unit: "-", page: p475 }
  },
  "16-08": {
    register: 4104 /* 16-08 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-08", name: "Selection of Allowing Reading", range: "0-1 (0:Not allow / 1:Allow)", default: "0", unit: "-", page: p475 }
  },
  "16-09": {
    register: 4105 /* 16-09 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-09", name: "Selection of Operator Removed (LCD)", range: "0-1 (0:Keep operating / 1:Display fault)", default: "0", unit: "-", page: p475 }
  },
  "16-10": {
    register: 4106 /* 16-10 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-10", name: "RTC Time Display Setting", range: "0-1 (0:Hide / 1:Display)", default: "0", unit: "-", page: p475 }
  },
  "16-11": {
    register: 4107 /* 16-11 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-11", name: "RTC Date Setting", range: "12.01.01~99.12.31", default: "12.01.01", unit: "-", page: p475 }
  },
  "16-12": {
    register: 4108 /* 16-12 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-12", name: "RTC Time Setting", range: "00:00~23:59", default: "00:00", unit: "-", page: p475 }
  },
  "16-13": {
    register: 4109 /* 16-13 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-13", name: "RTC Timer Function", range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)", default: "0", unit: "-", page: p475 }
  },
  "16-14": {
    register: 4110 /* 16-14 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-14", name: "P1 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p475 }
  },
  "16-15": {
    register: 4111 /* 16-15 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-15", name: "P1 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p475 }
  },
  "16-16": {
    register: 4112 /* 16-16 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-16", name: "P1 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p475 }
  },
  "16-17": {
    register: 4113 /* 16-17 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-17", name: "P1 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p475 }
  },
  "16-18": {
    register: 4114 /* 16-18 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-18", name: "P2 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p475 }
  },
  "16-19": {
    register: 4115 /* 16-19 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-19", name: "P2 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p475 }
  },
  "16-20": {
    register: 4116 /* 16-20 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-20", name: "P2 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p475 }
  },
  "16-21": {
    register: 4117 /* 16-21 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-21", name: "P2 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }
  },
  "16-22": {
    register: 4118 /* 16-22 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-22", name: "P3 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p476 }
  },
  "16-23": {
    register: 4119 /* 16-23 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-23", name: "P3 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p476 }
  },
  "16-24": {
    register: 4120 /* 16-24 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-24", name: "P3 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p476 }
  },
  "16-25": {
    register: 4121 /* 16-25 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-25", name: "P3 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }
  },
  "16-26": {
    register: 4122 /* 16-26 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-26", name: "P4 Start Time", range: "00:00~23:59", default: "08:00", unit: "-", page: p476 }
  },
  "16-27": {
    register: 4123 /* 16-27 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-27", name: "P4 Stop Time", range: "00:00~23:59", default: "18:00", unit: "-", page: p476 }
  },
  "16-28": {
    register: 4124 /* 16-28 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-28", name: "P4 Start Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "1", unit: "-", page: p476 }
  },
  "16-29": {
    register: 4125 /* 16-29 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-29", name: "P4 Stop Date", range: "1-7 (1:Mon 2:Tue 3:Wed 4:Thu 5:Fri 6:Sat 7:Sun)", default: "5", unit: "-", page: p476 }
  },
  "16-30": {
    register: 4126 /* 16-30 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-30", name: "Selection of RTC Offset", range: "0-2 (0:Disable / 1:Enable / 2:Set by DI)", default: "0", unit: "-", page: p476 }
  },
  "16-31": {
    register: 4127 /* 16-31 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-31", name: "RTC Offset Time Setting", range: "00:00~23:59", default: "00:00", unit: "-", page: p476 }
  },
  "16-32": {
    register: 4128 /* 16-32 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-32", name: "Source of Timer 1", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "1", unit: "-", page: p476 }
  },
  "16-33": {
    register: 4129 /* 16-33 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-33", name: "Source of Timer 2", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "2", unit: "-", page: p476 }
  },
  "16-34": {
    register: 4130 /* 16-34 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-34", name: "Source of Timer 3", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "4", unit: "-", page: p476 }
  },
  "16-35": {
    register: 4131 /* 16-35 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-35", name: "Source of Timer 4", range: "0-31 (bit-field: 0:None / 1:P1 / 2:P2 / 4:P3 / 8:P4 / ... / 31:Off+P1+P2+P3+P4)", default: "8", unit: "-", page: p476 }
  },
  "16-36": {
    register: 4132 /* 16-36 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-36", name: "Selection of RTC Speed", range: "0-5 (0:Off / 1:Timer1 / 2:Timer2 / 3:Timer3 / 4:Timer4 / 5:Timer1+2)", default: "0", unit: "-", page: p477 }
  },
  "16-37": {
    register: 4133 /* 16-37 */,
    kind: ParamKind17.UInt16,
    meta: { group: group17, code: "16-37", name: "Selection of RTC Rotation Direction", range: "0~15 (bit-field for direction)", default: "0000b", unit: "-", page: p477 }
  }
};
var group16Params = all17;
// src/parameters/group-17.ts
import { ParamKind as ParamKind18 } from "modbus-schema";
var group18 = 17;
var p478 = 478;
var p479 = 479;
var all18 = {
  "17-00": {
    register: 4352 /* 17-00 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-00", name: "Mode Selection of Automatic Tuning", range: "0-6 (0:Rotation / 1:Static / 2:Stator R / 3:Reserved / 4:Loop / 5:Rot comb(4+2+0) / 6:Static comb(4+2+1))", default: "2 / 6", unit: "-", page: p478 }
  },
  "17-01": {
    register: 4353 /* 17-01 */,
    kind: ParamKind18.Scaled,
    factor: 0.01,
    meta: { group: group18, code: "17-01", name: "Motor Rated Output Power", range: "0.00~600.00", default: "*", unit: "kW", page: p478 }
  },
  "17-02": {
    register: 4354 /* 17-02 */,
    kind: ParamKind18.Scaled,
    factor: 0.1,
    meta: { group: group18, code: "17-02", name: "Motor Rated Current", range: "0.1~1200.0", default: "*", unit: "A", page: p478 }
  },
  "17-03": {
    register: 4355 /* 17-03 */,
    kind: ParamKind18.Scaled,
    factor: 0.1,
    meta: { group: group18, code: "17-03", name: "Motor Rated Voltage", range: "200V:50.0~240.0 / 400V:100.0~480.0 / 575V:150.0~670.0 / 690V:180.0~804.0", default: "220.0 / 440.0 / 575.0 / 690.0", unit: "V", page: p478 }
  },
  "17-04": {
    register: 4356 /* 17-04 */,
    kind: ParamKind18.Scaled,
    factor: 0.1,
    meta: { group: group18, code: "17-04", name: "Motor Rated Frequency", range: "4.8~599.0", default: "50.0 / 60.0", unit: "Hz", page: p478 }
  },
  "17-05": {
    register: 4357 /* 17-05 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-05", name: "Motor Rated Speed", range: "0~24000", default: "*", unit: "rpm", page: p478 }
  },
  "17-06": {
    register: 4358 /* 17-06 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-06", name: "Pole Number of Motor", range: "2~16 (Even)", default: "4", unit: "Pole", page: p478 }
  },
  "17-07": {
    register: 4359 /* 17-07 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-07", name: "PG Pulse Number", range: "0~60000", default: "1024", unit: "ppr", page: p478 }
  },
  "17-08": {
    register: 4360 /* 17-08 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-08", name: "Motor No-load Voltage", range: "200V:50~240 / 400V:100~480 / 575V:420~600 / 690V:504~720", default: "150 / 300 / 575 / 690", unit: "V", page: p478 }
  },
  "17-09": {
    register: 4361 /* 17-09 */,
    kind: ParamKind18.Scaled,
    factor: 0.01,
    meta: { group: group18, code: "17-09", name: "Motor Excitation Current", range: "0.01~600.00", default: "*", unit: "A", page: p478 }
  },
  "17-10": {
    register: 4362 /* 17-10 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-10", name: "Automatic Tuning Start", range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p479 }
  },
  "17-11": {
    register: 4363 /* 17-11 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-11", name: "Error History of Automatic Tuning", range: "0-9 (0:No error / 1:Motor data / 2:Stator R / 3:Leakage L / 4:Rotor R / 5:Mutual L / 6:Encoder / 7:DT / 8:Accel / 9:Warning)", default: "0", unit: "-", page: p479 }
  },
  "17-12": {
    register: 4364 /* 17-12 */,
    kind: ParamKind18.Scaled,
    factor: 0.1,
    meta: { group: group18, code: "17-12", name: "Proportion of Motor Leakage Inductance", range: "0.1~15.0", default: "3.4", unit: "%", page: p479 }
  },
  "17-13": {
    register: 4365 /* 17-13 */,
    kind: ParamKind18.Scaled,
    factor: 0.01,
    meta: { group: group18, code: "17-13", name: "Motor Slip Frequency", range: "0.10~20.00", default: "1.00", unit: "Hz", page: p479 }
  },
  "17-14": {
    register: 4366 /* 17-14 */,
    kind: ParamKind18.UInt16,
    meta: { group: group18, code: "17-14", name: "Selection of Rotation Auto-tuning", range: "0-1 (0:VF Rotation / 1:Vector Rotation)", default: "0", unit: "-", page: p479 }
  }
};
var group17Params = all18;
// src/parameters/group-18.ts
import { ParamKind as ParamKind19 } from "modbus-schema";
var group19 = 18;
var p4792 = 479;
var all19 = {
  "18-00": {
    register: 4608 /* 18-00 */,
    kind: ParamKind19.Scaled,
    factor: 0.01,
    meta: { group: group19, code: "18-00", name: "Slip Compensation Gain at Low Speed", range: "0.00~2.50", default: "0.00 / *", unit: "-", page: p4792 }
  },
  "18-01": {
    register: 4609 /* 18-01 */,
    kind: ParamKind19.SignedScaled,
    factor: 0.01,
    meta: { group: group19, code: "18-01", name: "Slip Compensation Gain at High Speed", range: "-1.00~1.00", default: "0.0", unit: "-", page: p4792 }
  },
  "18-02": {
    register: 4610 /* 18-02 */,
    kind: ParamKind19.UInt16,
    meta: { group: group19, code: "18-02", name: "Slip Compensation Limit", range: "0~250", default: "200", unit: "%", page: p4792 }
  },
  "18-03": {
    register: 4611 /* 18-03 */,
    kind: ParamKind19.Scaled,
    factor: 0.1,
    meta: { group: group19, code: "18-03", name: "Slip Compensation Filter Time", range: "0.0~10.0", default: "1.0", unit: "Sec", page: p4792 }
  },
  "18-04": {
    register: 4612 /* 18-04 */,
    kind: ParamKind19.UInt16,
    meta: { group: group19, code: "18-04", name: "Regenerative Slip Compensation Selection", range: "0-1 (0:Disable / 1:Enable)", default: "0", unit: "-", page: p4792 }
  },
  "18-05": {
    register: 4613 /* 18-05 */,
    kind: ParamKind19.UInt16,
    meta: { group: group19, code: "18-05", name: "FOC Delay Time", range: "1~1000", default: "100", unit: "ms", page: p4792 }
  },
  "18-06": {
    register: 4614 /* 18-06 */,
    kind: ParamKind19.Scaled,
    factor: 0.01,
    meta: { group: group19, code: "18-06", name: "FOC Gain", range: "0.00~2.00", default: "0.1", unit: "-", page: p4792 }
  }
};
var group18Params = all19;
// src/parameters/group-19.ts
import { ParamKind as ParamKind20 } from "modbus-schema";
var group20 = 19;
var p4793 = 479;
var p480 = 480;
var all20 = {
  "19-00": {
    register: 4864 /* 19-00 */,
    kind: ParamKind20.Scaled,
    factor: 0.01,
    meta: { group: group20, code: "19-00", name: "Center Frequency of Wobble Frequency", range: "5.00~100.00", default: "20.00", unit: "%", page: p4793 }
  },
  "19-01": {
    register: 4865 /* 19-01 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-01", name: "Amplitude of Wobble Frequency", range: "0.1~20.0", default: "10.0", unit: "%", page: p4793 }
  },
  "19-02": {
    register: 4866 /* 19-02 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-02", name: "Jump Frequency of Wobble Frequency", range: "0.0~50.0", default: "0.0", unit: "%", page: p4793 }
  },
  "19-03": {
    register: 4867 /* 19-03 */,
    kind: ParamKind20.UInt16,
    meta: { group: group20, code: "19-03", name: "Jump Time of Wobble Frequency", range: "0~50", default: "0", unit: "ms", page: p4793 }
  },
  "19-04": {
    register: 4868 /* 19-04 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-04", name: "Wobble Frequency Cycle", range: "0.0~1000.0", default: "10.0", unit: "Sec", page: p4793 }
  },
  "19-05": {
    register: 4869 /* 19-05 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-05", name: "Wobble Frequency Ratio", range: "0.1~10.0", default: "1.0", unit: "-", page: p4793 }
  },
  "19-06": {
    register: 4870 /* 19-06 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-06", name: "Upper Offset Amplitude of Wobble Frequency", range: "0.0~20.0", default: "0.0", unit: "%", page: p4793 }
  },
  "19-07": {
    register: 4871 /* 19-07 */,
    kind: ParamKind20.Scaled,
    factor: 0.1,
    meta: { group: group20, code: "19-07", name: "Lower Offset Amplitude of Wobble Frequency", range: "0.0~20.0", default: "0.0", unit: "%", page: p480 }
  }
};
var group19Params = all20;
// src/parameters/group-20.ts
import { ParamKind as ParamKind21 } from "modbus-schema";
var group21 = 20;
var p4802 = 480;
var p481 = 481;
var p482 = 482;
var all21 = {
  "20-00": {
    register: 5120 /* 20-00 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-00",
      name: "ASR Gain 1",
      range: "0.00~250.00",
      default: "-",
      unit: "-",
      page: p4802
    }
  },
  "20-01": {
    register: 5121 /* 20-01 */,
    kind: ParamKind21.Scaled,
    factor: 0.001,
    meta: {
      group: group21,
      code: "20-01",
      name: "ASR Integral Time 1",
      range: "0.001~10.000",
      default: "-",
      unit: "Sec",
      page: p4802
    }
  },
  "20-02": {
    register: 5122 /* 20-02 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-02",
      name: "ASR Gain 2",
      range: "0.00~250.00",
      default: "-",
      unit: "-",
      page: p4802
    }
  },
  "20-03": {
    register: 5123 /* 20-03 */,
    kind: ParamKind21.Scaled,
    factor: 0.001,
    meta: {
      group: group21,
      code: "20-03",
      name: "ASR Integral Time 2",
      range: "0.001~10.000",
      default: "-",
      unit: "Sec",
      page: p4802
    }
  },
  "20-04": {
    register: 5124 /* 20-04 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-04",
      name: "ASR Integral Time Limit",
      range: "0~300",
      default: "200",
      unit: "%",
      page: p4802
    }
  },
  "20-05": {
    register: 5125 /* 20-05 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-05",
      name: "ASR Positive Limit",
      range: "0.1~10.0",
      default: "5.0",
      unit: "%",
      page: p4802
    }
  },
  "20-06": {
    register: 5126 /* 20-06 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-06",
      name: "ASR Negative Limit",
      range: "0.1~10.0",
      default: "1.0",
      unit: "%",
      page: p4802
    }
  },
  "20-07": {
    register: 5127 /* 20-07 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-07",
      name: "Selection of Accel/Decel P/PI",
      range: "0-1 (0:PI only constant speed / 1:P during accel/decel)",
      default: "0",
      unit: "-",
      page: p4802
    }
  },
  "20-08": {
    register: 5128 /* 20-08 */,
    kind: ParamKind21.Scaled,
    factor: 0.001,
    meta: {
      group: group21,
      code: "20-08",
      name: "ASR Delay Time",
      range: "0.000~0.500",
      default: "0.004",
      unit: "Sec",
      page: p4802
    }
  },
  "20-09": {
    register: 5129 /* 20-09 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-09",
      name: "Speed Observer P Gain 1",
      range: "0.00~2.55",
      default: "0.61",
      unit: "-",
      page: p4802
    }
  },
  "20-10": {
    register: 5130 /* 20-10 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-10",
      name: "Speed Observer I Time 1",
      range: "0.01~10.00",
      default: "0.05",
      unit: "Sec",
      page: p4802
    }
  },
  "20-11": {
    register: 5131 /* 20-11 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-11",
      name: "Speed Observer P Gain 2",
      range: "0.00~2.55",
      default: "0.61",
      unit: "-",
      page: p4802
    }
  },
  "20-12": {
    register: 5132 /* 20-12 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-12",
      name: "Speed Observer I Time 2",
      range: "0.01~10.00",
      default: "0.06",
      unit: "Sec",
      page: p4802
    }
  },
  "20-13": {
    register: 5133 /* 20-13 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-13",
      name: "Low-pass Filter Time of Speed Feedback 1",
      range: "1~1000",
      default: "4",
      unit: "ms",
      page: p4802
    }
  },
  "20-14": {
    register: 5134 /* 20-14 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-14",
      name: "Low-pass Filter Time of Speed Feedback 2",
      range: "1~1000",
      default: "30",
      unit: "ms",
      page: p4802
    }
  },
  "20-15": {
    register: 5135 /* 20-15 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-15",
      name: "ASR Gain Change Frequency 1",
      range: "0.0~599.0",
      default: "4.0",
      unit: "Hz",
      page: p481
    }
  },
  "20-16": {
    register: 5136 /* 20-16 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-16",
      name: "ASR Gain Change Frequency 2",
      range: "0.0~599.0",
      default: "8.0",
      unit: "Hz",
      page: p481
    }
  },
  "20-17": {
    register: 5137 /* 20-17 */,
    kind: ParamKind21.Scaled,
    factor: 0.01,
    meta: {
      group: group21,
      code: "20-17",
      name: "Torque Compensation Gain at Low Speed",
      range: "0.00~2.50",
      default: "1.00",
      unit: "-",
      page: p481
    }
  },
  "20-18": {
    register: 5138 /* 20-18 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-18",
      name: "Torque Compensation Gain at High Speed",
      range: "-10~10",
      default: "0",
      unit: "%",
      page: p481
    }
  },
  "20-19": {
    register: 5139 /* 20-19 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-19",
      name: "Over Speed (OS) Selection",
      range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)",
      default: "1",
      unit: "-",
      page: p481
    }
  },
  "20-20": {
    register: 5140 /* 20-20 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-20",
      name: "Over Speed (OS) Detection Level",
      range: "0~120",
      default: "115",
      unit: "%",
      page: p481
    }
  },
  "20-21": {
    register: 5141 /* 20-21 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-21",
      name: "Over Speed (OS) Detection Time",
      range: "0.0~2.0",
      default: "0.5",
      unit: "Sec",
      page: p481
    }
  },
  "20-22": {
    register: 5142 /* 20-22 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-22",
      name: "Speed Deviation (DEV) Selection",
      range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)",
      default: "2",
      unit: "-",
      page: p481
    }
  },
  "20-23": {
    register: 5143 /* 20-23 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-23",
      name: "Speed Deviation (DEV) Detection Level",
      range: "0~50",
      default: "10",
      unit: "%",
      page: p481
    }
  },
  "20-24": {
    register: 5144 /* 20-24 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-24",
      name: "Speed Deviation (DEV) Detection Time",
      range: "0.0~10.0",
      default: "0.5",
      unit: "Sec",
      page: p481
    }
  },
  "20-25": {
    register: 5145 /* 20-25 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-25",
      name: "Selection of PG Open",
      range: "0-2 (0:Decel stop / 1:Coast stop / 2:Continue)",
      default: "1",
      unit: "-",
      page: p481
    }
  },
  "20-26": {
    register: 5146 /* 20-26 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-26",
      name: "Detection Time of PG Open",
      range: "0.0~10.0",
      default: "2.0",
      unit: "Sec",
      page: p481
    }
  },
  "20-27": {
    register: 5147 /* 20-27 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-27",
      name: "PG Pulse Number",
      range: "0~9999",
      default: "1024",
      unit: "ppr",
      page: p481
    }
  },
  "20-28": {
    register: 5148 /* 20-28 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-28",
      name: "Selection of PG Rotation Direction",
      range: "0-1 (0:CCW / 1:CW)",
      default: "0",
      unit: "-",
      page: p481
    }
  },
  "20-29": {
    register: 5149 /* 20-29 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-29",
      name: "PG Pulse Dividing Ratio",
      range: "001~132",
      default: "1",
      unit: "-",
      page: p481
    }
  },
  "20-30": {
    register: 5150 /* 20-30 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-30",
      name: "PG Gear Ratio 1",
      range: "1~1000",
      default: "1",
      unit: "-",
      page: p482
    }
  },
  "20-31": {
    register: 5151 /* 20-31 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-31",
      name: "PG Gear Ratio 2",
      range: "1~1000",
      default: "1",
      unit: "-",
      page: p482
    }
  },
  "20-32": {
    register: 5152 /* 20-32 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-32",
      name: "Selection of Specific Encoder",
      range: "0-1 (0:None / 1:Resolver)",
      default: "0",
      unit: "-",
      page: p482
    }
  },
  "20-33": {
    register: 5153 /* 20-33 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-33",
      name: "Detection Level at Constant Speed",
      range: "0.1~5.0",
      default: "1.0",
      unit: "-",
      page: p482
    }
  },
  "20-34": {
    register: 5154 /* 20-34 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-34",
      name: "Compensation Gain of Derating",
      range: "0~25600",
      default: "0",
      unit: "-",
      page: p482
    }
  },
  "20-35": {
    register: 5155 /* 20-35 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-35",
      name: "Compensation Time of Derating",
      range: "0~30000",
      default: "100",
      unit: "ms",
      page: p482
    }
  },
  "20-43": {
    register: 5163 /* 20-43 */,
    kind: ParamKind21.UInt16,
    meta: {
      group: group21,
      code: "20-43",
      name: "MPG Speed Magnification Calculation",
      range: "1~500",
      default: "20",
      unit: "-",
      page: p482
    }
  },
  "20-44": {
    register: 5164 /* 20-44 */,
    kind: ParamKind21.Scaled,
    factor: 0.1,
    meta: {
      group: group21,
      code: "20-44",
      name: "MPG Speed Command Limit",
      range: "0.1~30.0",
      default: "6.0",
      unit: "Hz",
      page: p482
    }
  }
};
var group20Params = all21;
// src/parameters/group-21.ts
import { ParamKind as ParamKind22 } from "modbus-schema";
var group22 = 21;
var p4822 = 482;
var p483 = 483;
var p484 = 484;
var p485 = 485;
var all22 = {
  "21-00": {
    register: 5376 /* 21-00 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-00", name: "Torque Control Selection", range: "0-1 (0:Speed Control / 1:Torque Control)", default: "0", unit: "-", page: p4822 }
  },
  "21-01": {
    register: 5377 /* 21-01 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-01", name: "Filter Time of Torque Reference", range: "0~1000", default: "0", unit: "ms", page: p4822 }
  },
  "21-02": {
    register: 5378 /* 21-02 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-02", name: "Speed Limit Selection", range: "0-2 (0:AI input / 1:21-03 value / 2:Comm 2502H)", default: "0", unit: "-", page: p4822 }
  },
  "21-03": {
    register: 5379 /* 21-03 */,
    kind: ParamKind22.SignedScaled,
    factor: 0.1,
    meta: { group: group22, code: "21-03", name: "Speed Limit Value", range: "-120~120", default: "0", unit: "%", page: p4822 }
  },
  "21-04": {
    register: 5380 /* 21-04 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-04", name: "Speed Limit Bias", range: "0~120", default: "10", unit: "%", page: p4822 }
  },
  "21-05": {
    register: 5381 /* 21-05 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-05", name: "Positive Torque Limit", range: "0~300", default: "* (see Attachment 1 p.170)", unit: "%", page: p4822 }
  },
  "21-06": {
    register: 5382 /* 21-06 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-06", name: "Negative Torque Limit", range: "0~300", default: "* (see Attachment 1 p.170)", unit: "%", page: p4822 }
  },
  "21-07": {
    register: 5383 /* 21-07 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-07", name: "Forward Regenerative Torque Limit", range: "0~300", default: "* (see Attachment 1 p.170)", unit: "%", page: p4822 }
  },
  "21-08": {
    register: 5384 /* 21-08 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-08", name: "Reversal Regenerative Torque Limit", range: "0~300", default: "* (see Attachment 1 p.170)", unit: "%", page: p4822 }
  },
  "21-09": {
    register: 5385 /* 21-09 */,
    kind: ParamKind22.Scaled,
    factor: 0.1,
    meta: { group: group22, code: "21-09", name: "Maximum Frequency of Position Control", range: "0.1~100.0", default: "20.0", unit: "Hz", page: p4822 }
  },
  "21-10": {
    register: 5386 /* 21-10 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-10", name: "Command of Rotation Cycle Number of Section 0", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-11": {
    register: 5387 /* 21-11 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-11", name: "Command of the Pulse Number of Section 0", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-12": {
    register: 5388 /* 21-12 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-12", name: "Command of Rotation Cycle Number of Section 1", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-13": {
    register: 5389 /* 21-13 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-13", name: "Command of the Pulse Number of Section 1", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-14": {
    register: 5390 /* 21-14 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-14", name: "Command of Rotation Cycle Number of Section 2", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-15": {
    register: 5391 /* 21-15 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-15", name: "Command of the Pulse Number of Section 2", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-16": {
    register: 5392 /* 21-16 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-16", name: "Command of Rotation Cycle Number of Section 3", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-17": {
    register: 5393 /* 21-17 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-17", name: "Command of the Pulse Number of Section 3", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-18": {
    register: 5394 /* 21-18 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-18", name: "Command of Rotation Cycle Number of Section 4", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-19": {
    register: 5395 /* 21-19 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-19", name: "Command of the Pulse Number of Section 4", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-20": {
    register: 5396 /* 21-20 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-20", name: "Command of Rotation Cycle Number of Section 5", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-21": {
    register: 5397 /* 21-21 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-21", name: "Command of the Pulse Number of Section 5", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-22": {
    register: 5398 /* 21-22 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-22", name: "Command of Rotation Cycle Number of Section 6", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-23": {
    register: 5399 /* 21-23 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-23", name: "Command of the Pulse Number of Section 6", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-24": {
    register: 5400 /* 21-24 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-24", name: "Command of Rotation Cycle Number of Section 7", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-25": {
    register: 5401 /* 21-25 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-25", name: "Command of the Pulse Number of Section 7", range: "-9999~9999", default: "0", unit: "-", page: p483 }
  },
  "21-26": {
    register: 5402 /* 21-26 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-26", name: "Command of the Pulse Number of Section 8", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-27": {
    register: 5403 /* 21-27 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-27", name: "Command of Rotation Cycle Number of Section 8", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-28": {
    register: 5404 /* 21-28 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-28", name: "Command of the Pulse Number of Section 9", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-29": {
    register: 5405 /* 21-29 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-29", name: "Command of Rotation Cycle Number of Section 9", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-30": {
    register: 5406 /* 21-30 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-30", name: "Command of Rotation Cycle Number of Section 10", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-31": {
    register: 5407 /* 21-31 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-31", name: "Command of the Pulse Number of Section 10", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-32": {
    register: 5408 /* 21-32 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-32", name: "Command of Rotation Cycle Number of Section 11", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-33": {
    register: 5409 /* 21-33 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-33", name: "Command of the Pulse Number of Section 11", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-34": {
    register: 5410 /* 21-34 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-34", name: "Command of Rotation Cycle Number of Section 12", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-35": {
    register: 5411 /* 21-35 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-35", name: "Command of the Pulse Number of Section 12", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-36": {
    register: 5412 /* 21-36 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-36", name: "Command of Rotation Cycle Number of Section 13", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-37": {
    register: 5413 /* 21-37 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-37", name: "Command of the Pulse Number of Section 13", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-38": {
    register: 5414 /* 21-38 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-38", name: "Command of Rotation Cycle Number of Section 14", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-39": {
    register: 5415 /* 21-39 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-39", name: "Command of the Pulse Number of Section 14", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-40": {
    register: 5416 /* 21-40 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-40", name: "Command of Rotation Cycle Number of Section 15", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-41": {
    register: 5417 /* 21-41 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-41", name: "Command of the Pulse Number of Section 15", range: "-9999~9999", default: "0", unit: "-", page: p484 }
  },
  "21-42": {
    register: 5418 /* 21-42 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-42", name: "Pos. Mode Sel", range: "0-1 (0:Switch to pos mode when freq<01-08 / 1:Z Phase Locked)", default: "0", unit: "-", page: p485 }
  },
  "21-43": {
    register: 5419 /* 21-43 */,
    kind: ParamKind22.UInt16,
    meta: { group: group22, code: "21-43", name: "Offset Angle", range: "0~9999", default: "0", unit: "Pulse", page: p485 }
  }
};
var group21Params = all22;
// src/parameters/group-22.ts
import { ParamKind as ParamKind23 } from "modbus-schema";
var group23 = 22;
var p4852 = 485;
var p486 = 486;
var p487 = 487;
var p488 = 488;
var all23 = {
  "22-00": {
    register: 5632 /* 22-00 */,
    kind: ParamKind23.Scaled,
    factor: 0.01,
    meta: {
      group: group23,
      code: "22-00",
      name: "PM Motor Rated Power",
      range: "0.00~600.00",
      default: "* (see Attachment 1 p.170)",
      unit: "kW",
      page: p4852
    }
  },
  "22-01": {
    register: 5633 /* 22-01 */,
    kind: ParamKind23.Scaled,
    factor: 0.1,
    meta: {
      group: group23,
      code: "22-01",
      name: "PM Motor Rated Voltage",
      range: "230V:50.0~240.0 / 460V:100.0~480.0",
      default: "220.0 / 440.0",
      unit: "V",
      page: p4852
    }
  },
  "22-02": {
    register: 5634 /* 22-02 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-02",
      name: "PM Motor Rated Current",
      range: "25%~200% inverter rated",
      default: "* (see Attachment 1 p.170)",
      unit: "A",
      page: p4852
    }
  },
  "22-03": {
    register: 5635 /* 22-03 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-03",
      name: "PM Motor's Pole Number",
      range: "2~96",
      default: "6",
      unit: "poles",
      page: p4852
    }
  },
  "22-04": {
    register: 5636 /* 22-04 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-04",
      name: "PM Motor's Rotation Speed",
      range: "6~60000",
      default: "1500",
      unit: "rpm",
      page: p4852
    }
  },
  "22-05": {
    register: 5637 /* 22-05 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-05",
      name: "PM Motor's Max Rotation Speed",
      range: "6~60000",
      default: "1500",
      unit: "rpm",
      page: p4852
    }
  },
  "22-06": {
    register: 5638 /* 22-06 */,
    kind: ParamKind23.Scaled,
    factor: 0.1,
    meta: {
      group: group23,
      code: "22-06",
      name: "PM Motor Rated Frequency",
      range: "4.8~599.0",
      default: "75.0",
      unit: "Hz",
      page: p4852
    }
  },
  "22-07": {
    register: 5639 /* 22-07 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-07",
      name: "PM Type Selection",
      range: "0-1 (0:SPM / 1:IPM)",
      default: "0",
      unit: "-",
      page: p4852
    }
  },
  "22-08": {
    register: 5640 /* 22-08 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-08",
      name: "PM Encoder Type",
      range: "0-4 (0:Tamagawa Non-WireSaving / 1:Tamagawa WireSaving / 2:Sumtak WireSaving / 3:General Incremental / 4:Sine Wave)",
      default: "0",
      unit: "-",
      page: p4852
    }
  },
  "22-10": {
    register: 5642 /* 22-10 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-10",
      name: "PM SLV Start Current",
      range: "20~200% Motor Rated Current",
      default: "80",
      unit: "%",
      page: p486
    }
  },
  "22-11": {
    register: 5643 /* 22-11 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-11",
      name: "I/F Mode Start Freq Switching Point",
      range: "10~100",
      default: "10",
      unit: "%",
      page: p486
    }
  },
  "22-14": {
    register: 5646 /* 22-14 */,
    kind: ParamKind23.Scaled,
    factor: 0.001,
    meta: {
      group: group23,
      code: "22-14",
      name: "Armature Resistance of PM Motor",
      range: "0.001~30.000",
      default: "1.000",
      unit: "Ω",
      page: p486
    }
  },
  "22-15": {
    register: 5647 /* 22-15 */,
    kind: ParamKind23.Scaled,
    factor: 0.01,
    meta: {
      group: group23,
      code: "22-15",
      name: "D-axis Inductance of PM Motor",
      range: "0.01~300.00",
      default: "10.00",
      unit: "mH",
      page: p486
    }
  },
  "22-16": {
    register: 5648 /* 22-16 */,
    kind: ParamKind23.Scaled,
    factor: 0.01,
    meta: {
      group: group23,
      code: "22-16",
      name: "Q-axis Inductance of PM Motor",
      range: "0.01~300.00",
      default: "10.00",
      unit: "mH",
      page: p486
    }
  },
  "22-17": {
    register: 5649 /* 22-17 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-17",
      name: "PM No-Load Voltage",
      range: "200V:0~200 / 400V:0~400",
      default: "150 / 300",
      unit: "V",
      page: p486
    }
  },
  "22-18": {
    register: 5650 /* 22-18 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-18",
      name: "Flux-Weakening Limit",
      range: "0~100",
      default: "0",
      unit: "%",
      page: p486
    }
  },
  "22-20": {
    register: 5652 /* 22-20 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-20",
      name: "Offset Angle of Magnetic Pole and PG Origin",
      range: "0~360",
      default: "0",
      unit: "deg",
      page: p487
    }
  },
  "22-21": {
    register: 5653 /* 22-21 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-21",
      name: "PM Motor Tuning",
      range: "0-3 (0:Not active / 1:Param auto-tune / 2:Mag pole align+loop adjust / 3:Mag pole alignment)",
      default: "0",
      unit: "-",
      page: p487
    }
  },
  "22-22": {
    register: 5654 /* 22-22 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-22",
      name: "Fault History of PM Motor Tuning",
      range: "0-11 (0:No Error / 1:Static Mag Alignment / 2:No PG / 3:Rot Pole forced stop / 4:Encoder feedback dir / 5:Loop timeout / 6:Encoder error / 7:Other / 8:Current abn during align / 9:Current abn during loop / 10:Reserved / 11:Stator R timeout)",
      default: "0",
      unit: "-",
      page: p487
    }
  },
  "22-25": {
    register: 5657 /* 22-25 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-25",
      name: "Detection Mode Selection of Initial Magnetic Pole",
      range: "0-2 (0:Angle before stopping / 1:Mode1 / 2:Mode2)",
      default: "2",
      unit: "-",
      page: p487
    }
  },
  "22-26": {
    register: 5658 /* 22-26 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-26",
      name: "Estimator Mode",
      range: "0-1",
      default: "0",
      unit: "-",
      page: p487
    }
  },
  "22-27": {
    register: 5659 /* 22-27 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-27",
      name: "Voltage Command of Mode 2",
      range: "5~120",
      default: "50",
      unit: "%",
      page: p487
    }
  },
  "22-28": {
    register: 5660 /* 22-28 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-28",
      name: "Divider Ratio of Mode 2",
      range: "0~8",
      default: "2",
      unit: "-",
      page: p487
    }
  },
  "22-29": {
    register: 5661 /* 22-29 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-29",
      name: "Flux-weakening Voltage Command Restriction",
      range: "80~110",
      default: "95",
      unit: "%",
      page: p488
    }
  },
  "22-30": {
    register: 5662 /* 22-30 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-30",
      name: "SPM Speed Estimation Gain",
      range: "1~100",
      default: "85",
      unit: "%",
      page: p488
    }
  },
  "22-31": {
    register: 5663 /* 22-31 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-31",
      name: "SPM Speed Estimation Filter Value",
      range: "1~2000",
      default: "60",
      unit: "Hz",
      page: p488
    }
  },
  "22-32": {
    register: 5664 /* 22-32 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-32",
      name: "MTPA Selection",
      range: "0-3 (0:Disabled / 1:Mode1 / 2:Mode2 / 3:Mode3)",
      default: "2",
      unit: "-",
      page: p488
    }
  },
  "22-33": {
    register: 5665 /* 22-33 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-33",
      name: "MTPA Gain",
      range: "0~400",
      default: "200",
      unit: "%",
      page: p488
    }
  },
  "22-34": {
    register: 5666 /* 22-34 */,
    kind: ParamKind23.Scaled,
    factor: 0.1,
    meta: {
      group: group23,
      code: "22-34",
      name: "IPM Estimator Gain",
      range: "0.1~500.0",
      default: "30.0",
      unit: "-",
      page: p488
    }
  },
  "22-35": {
    register: 5667 /* 22-35 */,
    kind: ParamKind23.UInt16,
    meta: {
      group: group23,
      code: "22-35",
      name: "IPM Estimator Compensation",
      range: "0~300",
      default: "50",
      unit: "%",
      page: p488
    }
  }
};
var group22Params = all23;
// src/TecoInverterService.ts
import {
  ParamKind as ParamKind24,
  fromConfig
} from "modbus-schema";
var paramDefault = (config) => {
  const raw = Number(config.meta.default);
  if (Number.isNaN(raw))
    return 0;
  switch (config.kind) {
    case ParamKind24.UInt16:
    case ParamKind24.Enum:
      return raw;
    case ParamKind24.Scaled:
    case ParamKind24.SignedScaled:
      return Math.round(raw / config.factor);
    case ParamKind24.Bitfield:
    case ParamKind24.Lookup:
      return raw;
  }
};
var allParamGroups = [
  group00Params,
  group01Params,
  group02Params,
  group03Params,
  group04Params,
  group05Params,
  group06Params,
  group07Params,
  group08Params,
  group09Params,
  group10Params,
  group11Params,
  group12Params,
  group13Params,
  group14Params,
  group15Params,
  group16Params,
  group17Params,
  group18Params,
  group19Params,
  group20Params,
  group21Params,
  group22Params
];
var paramRegisterDefs = allParamGroups.flatMap((group24) => Object.values(group24).map((config) => ({
  address: config.register,
  default: paramDefault(config)
})));

class TecoInverterService extends Effect.Service()("TecoInverterService", {
  scoped: Effect.fnUntraced(function* (safeShutdown = true) {
    const transport = yield* SerialTransportService;
    const deviceCache = new Set;
    const cacheDevice = (device) => deviceCache.add(device);
    const readHolding = (address, decode) => Effect.fnUntraced(function* (deviceId) {
      cacheDevice(deviceId);
      const client = yield* transport.withClient(deviceId);
      const [raw] = yield* client.readHoldingRegisters({
        address,
        quantity: 1
      });
      return yield* decode(raw);
    });
    const makeReadModifyWrite = (address, decode, encode, merge) => (deviceId) => {
      const read = () => readHolding(address, decode)(deviceId);
      const update = Effect.fnUntraced(function* (patch) {
        const current = yield* read();
        const merged = merge(current, patch);
        const encoded = yield* encode(merged);
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);
        yield* client.writeSingleRegister({ address, value: encoded });
      });
      return { read, update };
    };
    const makeReadWrite = (address, decode, encode) => (deviceId) => {
      const read = () => readHolding(address, decode)(deviceId);
      const update = Effect.fnUntraced(function* (value) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);
        const encoded = yield* encode(value);
        yield* client.writeSingleRegister({ address, value: encoded });
      });
      return { read, update };
    };
    const makeMonitor = (address, decode) => (deviceId) => ({
      read: () => readHolding(address, decode)(deviceId)
    });
    const makeParamOpsFromConfig = (config) => {
      const { decode, encode } = fromConfig(config);
      const ops = makeReadWrite(config.register, decode, encode);
      return Object.assign((deviceId) => ops(deviceId), {
        meta: config.meta
      });
    };
    const makeGroupParamOps = (configs) => {
      const entries = Object.keys(configs).map((key) => [key, makeParamOpsFromConfig(configs[key])]);
      return Record.fromEntries(entries);
    };
    const operationCommand = makeReadModifyWrite(9473 /* OPERATION_COMMAND */, decodeCommandWord, encodeCommandWord, mergeCommandWordPatch);
    const frequencyCommand = makeReadWrite(9474 /* FREQUENCY_COMMAND */, decodeFrequencyCommand, encodeFrequencyCommand);
    const torqueCommand = makeReadWrite(9475 /* TORQUE_COMMAND */, decodeTorqueCommand, encodeTorqueCommand);
    const speedLimitCommand = makeReadWrite(9476 /* SPEED_LIMIT_COMMAND */, decodeSpeedLimitCommand, encodeSpeedLimitCommand);
    const analogOut1Command = makeReadWrite(9477 /* ANALOG_OUT_1_COMMAND */, decodeAnalogOut1Command, encodeAnalogOut1Command);
    const analogOut2Command = makeReadWrite(9478 /* ANALOG_OUT_2_COMMAND */, decodeAnalogOut2Command, encodeAnalogOut2Command);
    const digitalOutCommand = makeReadModifyWrite(9479 /* DIGITAL_OUT_COMMAND */, decodeDigitalOutCommand, encodeDigitalOutCommand, mergeDigitalOutCommandPatch);
    const stateMonitor = makeMonitor(9504 /* STATE_MONITOR */, decodeStateMonitor);
    const errorDescriptionMonitor = makeMonitor(9505 /* ERROR_DESCRIPTION_MONITOR */, decodeErrorDescriptionMonitor);
    const digitalInStateMonitor = makeMonitor(9506 /* DIGITAL_IN_STATE_MONITOR */, decodeDigitalInStateMonitor);
    const frequencyCommandMonitor = makeMonitor(9507 /* FREQUENCY_COMMAND_MONITOR */, decodeFrequencyCommandMonitor);
    const outputFrequencyMonitor = makeMonitor(9508 /* OUTPUT_FREQUENCY_MONITOR */, decodeOutputFrequencyMonitor);
    const dcBusVoltageCommandMonitor = makeMonitor(9510 /* DC_VOLTAGE_COMMAND_MONITOR */, decodeDCBusVoltageCommandMonitor);
    const outputCurrentMonitor = makeMonitor(9511 /* OUTPUT_CURRENT_MONITOR */, decodeOutputCurrentMonitor);
    const warningDescriptionMonitor = makeMonitor(9512 /* WARNING_DESCRIPTION_MONITOR */, decodeWarningDescriptionMonitor);
    const digitalOutStateMonitor = makeMonitor(9513 /* DIGITAL_OUTPUT_STATE_MONITOR */, decodeDigitalOutStateMonitor);
    const analogOut1Monitor = makeMonitor(9514 /* ANALOG_OUT_1_MONITOR */, decodeAnalogOut1Monitor);
    const analogOut2Monitor = makeMonitor(9515 /* ANALOG_OUT_2_MONITOR */, decodeAnalogOut2Monitor);
    const analogIn1Monitor = makeMonitor(9516 /* ANALOG_IN_1_MONITOR */, decodeAnalogIn1Monitor);
    const analogIn2Monitor = makeMonitor(9517 /* ANALOG_IN_2_MONITOR */, decodeAnalogIn2Monitor);
    const a510CheckMonitor = makeMonitor(9519 /* A510_CHECK_MONITOR */, decodeA510CheckMonitor);
    if (safeShutdown) {
      yield* Effect.addFinalizer(() => Effect.forEach(deviceCache, (deviceId) => {
        return operationCommand(deviceId).update(new CommandWordPatch({ run: false })).pipe(Effect.catchAll((err) => Effect.logWarning("Error while stopping fan on exit: ", err).pipe(Effect.asVoid)));
      }));
    }
    return {
      operationCommand,
      frequencyCommand,
      torqueCommand,
      speedLimitCommand,
      analogOut1Command,
      analogOut2Command,
      digitalOutCommand,
      stateMonitor,
      errorDescriptionMonitor,
      digitalInStateMonitor,
      frequencyCommandMonitor,
      outputFrequencyMonitor,
      dcBusVoltageCommandMonitor,
      outputCurrentMonitor,
      warningDescriptionMonitor,
      digitalOutStateMonitor,
      analogOut1Monitor,
      analogOut2Monitor,
      analogIn1Monitor,
      analogIn2Monitor,
      a510CheckMonitor,
      parameters: {
        group00: makeGroupParamOps(group00Params),
        group01: makeGroupParamOps(group01Params),
        group02: makeGroupParamOps(group02Params),
        group03: makeGroupParamOps(group03Params),
        group04: makeGroupParamOps(group04Params),
        group05: makeGroupParamOps(group05Params),
        group06: makeGroupParamOps(group06Params),
        group07: makeGroupParamOps(group07Params),
        group08: makeGroupParamOps(group08Params),
        group09: makeGroupParamOps(group09Params),
        group10: makeGroupParamOps(group10Params),
        group11: makeGroupParamOps(group11Params),
        group12: makeGroupParamOps(group12Params),
        group13: makeGroupParamOps(group13Params),
        group14: makeGroupParamOps(group14Params),
        group15: makeGroupParamOps(group15Params),
        group16: makeGroupParamOps(group16Params),
        group17: makeGroupParamOps(group17Params),
        group18: makeGroupParamOps(group18Params),
        group19: makeGroupParamOps(group19Params),
        group20: makeGroupParamOps(group20Params),
        group21: makeGroupParamOps(group21Params),
        group22: makeGroupParamOps(group22Params)
      }
    };
  })
}) {
  static mockDevice(deviceId) {
    return {
      unitId: deviceId,
      coils: [],
      discreteInputs: [],
      holdingRegisters: [
        ...Object.values(COMMAND_REGISTERS).filter((v) => typeof v === "number").map((address) => ({ address, default: 0 })),
        ...Object.values(MONITOR_REGISTERS).filter((v) => typeof v === "number").map((address) => ({ address, default: 0 })),
        ...paramRegisterDefs
      ],
      inputRegisters: []
    };
  }
}
// src/utils.ts
var bit = (n) => 1 << n;
export {
  readOnlyEncodeFailure,
  mergeDigitalOutCommandPatch,
  mergeCommandWordPatch,
  formattedWarningDescriptionMonitor,
  formattedTorqueCommand,
  formattedStateMonitor,
  formattedSpeedLimitCommand,
  formattedOutputFrequencyMonitor,
  formattedOutputCurrentMonitor,
  formattedFrequencyCommandMonitor,
  formattedFrequencyCommand,
  formattedErrorDescriptionMonitor,
  formattedDigitalOutStateMonitor,
  formattedDigitalOutCommand,
  formattedDigitalInStateMonitor,
  formattedDCBusVoltageCommandMonitor,
  formattedCommandWord,
  formattedAnalogOut2Monitor,
  formattedAnalogOut2Command,
  formattedAnalogOut1Monitor,
  formattedAnalogOut1Command,
  formattedAnalogIn2Monitor,
  formattedAnalogIn1Monitor,
  formattedA510CheckMonitor,
  encodeTorqueCommand,
  encodeSpeedLimitCommand,
  encodeFrequencyCommand,
  encodeDigitalOutCommand,
  encodeCommandWord,
  encodeAnalogOut2Command,
  encodeAnalogOut1Command,
  decodeWarningDescriptionMonitor,
  decodeTorqueCommand,
  decodeStateMonitor,
  decodeSpeedLimitCommand,
  decodeOutputFrequencyMonitor,
  decodeOutputCurrentMonitor,
  decodeFrequencyCommandMonitor,
  decodeFrequencyCommand,
  decodeErrorDescriptionMonitor,
  decodeDigitalOutStateMonitor,
  decodeDigitalOutCommand,
  decodeDigitalInStateMonitor,
  decodeDCBusVoltageCommandMonitor,
  decodeCommandWord,
  decodeAnalogOut2Monitor,
  decodeAnalogOut2Command,
  decodeAnalogOut1Monitor,
  decodeAnalogOut1Command,
  decodeAnalogIn2Monitor,
  decodeAnalogIn1Monitor,
  decodeA510CheckMonitor,
  commandWord,
  bit,
  WarningDescriptionMonitorSchema,
  WarningDescriptionMonitor,
  Voltage,
  UInt16,
  TorquePercent,
  TorqueCommandSchema,
  TecoInverterService,
  StateMonitorSchema,
  StateMonitorFlags,
  SpeedLimitPercent,
  SpeedLimitCommandSchema,
  OutputFrequencyMonitorSchema,
  OutputCurrentMonitorSchema,
  MONITOR_REGISTERS,
  Int16,
  GROUP_22_PM_Motor_Parameters,
  GROUP_21_Torque_And_Position_Control_Parameters,
  GROUP_20_Speed_Control_Parameters,
  GROUP_19_Wobble_Frequency_Parameters,
  GROUP_18_Slip_Compensation_Parameters,
  GROUP_17_Automatic_Tuning_Parameters,
  GROUP_16_LCD_Parameters,
  GROUP_15_PLC_Monitoring_Parameters,
  GROUP_14_PLC_Parameters,
  GROUP_13_Maintenance_Parameters,
  GROUP_12_Monitoring_Parameters,
  GROUP_11_Auxiliary_Parameters,
  GROUP_10_PID_Parameters,
  GROUP_09_Communication_Parameters,
  GROUP_08_Protection_Parameters,
  GROUP_07_Start_Stop_Parameters,
  GROUP_06_Automatic_Program_Operation_Parameters,
  GROUP_05_Multi_Speed_Parameters,
  GROUP_04_External_Analog_Input_and_Output_Parameters,
  GROUP_03_External_Digital_Input_and_Output_Parameters,
  GROUP_02_IM_Motor_Parameters,
  GROUP_01_VF_Control_Parameters,
  GROUP_00_Basic_Parameters,
  FrequencyHz,
  FrequencyCommandSchema,
  FrequencyCommandMonitorSchema,
  ErrorDescriptionMonitorSchema,
  ErrorDescriptionMonitor,
  DigitalOutStateMonitorSchema,
  DigitalOutStateMonitorFlags,
  DigitalOutCommandSchema,
  DigitalOutCommandPatch,
  DigitalOutCommandFlags,
  DigitalInStateMonitorSchema,
  DigitalInStateMonitorFlags,
  DCBusVoltageCommandMonitorSchema,
  DCBusVoltage,
  CurrentAmps,
  CommandWordSchema,
  CommandWordPatch,
  CommandWordFlags,
  COMMAND_REGISTERS,
  AnalogOut2MonitorSchema,
  AnalogOut2CommandSchema,
  AnalogOut1MonitorSchema,
  AnalogOut1CommandSchema,
  AnalogInputPercent,
  AnalogIn2MonitorSchema,
  AnalogIn1MonitorSchema,
  A510CheckMonitorSchema,
  A510CheckMonitor
};
