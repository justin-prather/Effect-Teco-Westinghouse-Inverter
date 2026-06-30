import { Effect } from "effect";
import { AsciiTransportService, RtuTransportService } from "effect-modbus-rs";
import { COMMAND_REGISTERS, MONITOR_REGISTERS } from "./Registers";
import {
  CommandWordPatch,
  DigitalOutCommandFlags,
  FrequencyHz,
  SpeedLimitPercent,
  TorquePercent,
  Voltage,
  decodeAnalogOut1Command,
  decodeAnalogOut2Command,
  decodeCommandWord,
  decodeDigitalOutCommand,
  decodeFrequencyCommand,
  decodeSpeedLimitCommand,
  decodeTorqueCommand,
  decodeA510CheckMonitor,
  decodeAnalogIn1Monitor,
  decodeAnalogIn2Monitor,
  decodeAnalogOut1Monitor,
  decodeAnalogOut2Monitor,
  decodeDCBusVoltageCommandMonitor,
  decodeDigitalInStateMonitor,
  decodeDigitalOutStateMonitor,
  decodeErrorDescriptionMonitor,
  decodeFrequencyCommandMonitor,
  decodeOutputCurrentMonitor,
  decodeOutputFrequencyMonitor,
  decodeStateMonitor,
  decodeWarningDescriptionMonitor,
  encodeAnalogOut1Command,
  encodeAnalogOut2Command,
  encodeCommandWord,
  encodeDigitalOutCommand,
  encodeFrequencyCommand,
  encodeSpeedLimitCommand,
  encodeTorqueCommand,
  mergeCommandWordPatch,
} from "./schemas";

export class TecoInverterService extends Effect.Service<TecoInverterService>()(
  "TecoInverterService",
  {
    scoped: Effect.fnUntraced(function* (transportVariant: "Rtu" | "Ascii") {
      let transport: RtuTransportService | AsciiTransportService;

      if (transportVariant === "Rtu") {
        transport = yield* RtuTransportService;
      } else if (transportVariant === "Ascii") {
        transport = yield* AsciiTransportService;
      }

      const deviceCache = new Set<number>();
      const cacheDevice = (device: number) => deviceCache.add(device);

      const readOperationRegister = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.OPERATION_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeCommandWord(raw);

        return decoded;
      });

      const readFrequencyCommand = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.FREQUENCY_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeFrequencyCommand(raw);

        return decoded;
      });

      const readTorqueCommand = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.TORQUE_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeTorqueCommand(raw);

        return decoded;
      });

      const readSpeedLimitCommand = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.SPEED_LIMIT_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeSpeedLimitCommand(raw);

        return decoded;
      });

      const readAnalogOut1Command = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.ANALOG_OUT_1_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogOut1Command(raw);

        return decoded;
      });

      const readAnalogOut2Command = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.ANALOG_OUT_2_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogOut2Command(raw);

        return decoded;
      });

      const readDigitalOutCommand = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: COMMAND_REGISTERS.DIGITAL_OUT_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeDigitalOutCommand(raw);

        return decoded;
      });

      const readStateMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.STATE_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeStateMonitor(raw);

        return decoded;
      });

      const readErrorDescriptionMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.ERROR_DESCRIPTION_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeErrorDescriptionMonitor(raw);

        return decoded;
      });

      const readDigitalInStateMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.DIGITAL_IN_STATE_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeDigitalInStateMonitor(raw);

        return decoded;
      });

      const readFrequencyCommandMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.FREQUENCY_COMMAND_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeFrequencyCommandMonitor(raw);

        return decoded;
      });

      const readOutputFrequencyMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.OUTPUT_FREQUENCY_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeOutputFrequencyMonitor(raw);

        return decoded;
      });

      const readDCBusVoltageCommandMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.DC_VOLTAGE_COMMAND_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeDCBusVoltageCommandMonitor(raw);

        return decoded;
      });

      const readOutputCurrentMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.OUTPUT_CURRENT_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeOutputCurrentMonitor(raw);

        return decoded;
      });

      const readWarningDescriptionMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.WARNING_DESCRIPTION_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeWarningDescriptionMonitor(raw);

        return decoded;
      });

      const readDigitalOutStateMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.DIGITAL_OUTPUT_STATE_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeDigitalOutStateMonitor(raw);

        return decoded;
      });

      const readAnalogOut1Monitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.ANALOG_OUT_1_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogOut1Monitor(raw);

        return decoded;
      });

      const readAnalogOut2Monitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.ANALOG_OUT_2_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogOut2Monitor(raw);

        return decoded;
      });

      const readAnalogIn1Monitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.ANALOG_IN_1_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogIn1Monitor(raw);

        return decoded;
      });

      const readAnalogIn2Monitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.ANALOG_IN_2_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeAnalogIn2Monitor(raw);

        return decoded;
      });

      const readA510CheckMonitor = Effect.fnUntraced(function* (deviceId: number) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readInputRegisters({
          address: MONITOR_REGISTERS.A510_CHECK_MONITOR,
          quantity: 1,
        });

        const decoded = yield* decodeA510CheckMonitor(raw);

        return decoded;
      });

      return {
        operationCommand: (deviceId: number) => ({
          read: readOperationRegister(deviceId),
          update: Effect.fnUntraced(function* (patch: CommandWordPatch) {
            const current = yield* readOperationRegister(deviceId);
            const updated = mergeCommandWordPatch(current, patch);
            const encoded = yield* encodeCommandWord(updated);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.OPERATION_COMMAND,
              value: encoded,
            });
          }),
        }),
        frequencyCommand: (deviceId: number) => ({
          read: readFrequencyCommand(deviceId),
          update: Effect.fnUntraced(function* (frequencyHz: FrequencyHz) {
            const encoded = yield* encodeFrequencyCommand(frequencyHz);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.FREQUENCY_COMMAND,
              value: encoded,
            });
          }),
        }),
        torqueCommand: (deviceId: number) => ({
          read: readTorqueCommand(deviceId),
          update: Effect.fnUntraced(function* (torquePercent: TorquePercent) {
            const encoded = yield* encodeTorqueCommand(torquePercent);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.TORQUE_COMMAND,
              value: encoded,
            });
          }),
        }),
        speedLimitCommand: (deviceId: number) => ({
          read: readSpeedLimitCommand(deviceId),
          update: Effect.fnUntraced(function* (percent: SpeedLimitPercent) {
            const encoded = yield* encodeSpeedLimitCommand(percent);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.SPEED_LIMIT_COMMAND,
              value: encoded,
            });
          }),
        }),
        analogOut1Command: (deviceId: number) => ({
          read: readAnalogOut1Command(deviceId),
          update: Effect.fnUntraced(function* (voltage: Voltage) {
            const encoded = yield* encodeAnalogOut1Command(voltage);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.ANALOG_OUT_1_COMMAND,
              value: encoded,
            });
          }),
        }),
        analogOut2Command: (deviceId: number) => ({
          read: readAnalogOut2Command(deviceId),
          update: Effect.fnUntraced(function* (voltage: Voltage) {
            const encoded = yield* encodeAnalogOut2Command(voltage);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.ANALOG_OUT_2_COMMAND,
              value: encoded,
            });
          }),
        }),
        digitalOutCommand: (deviceId: number) => ({
          read: readDigitalOutCommand(deviceId),
          update: Effect.fnUntraced(function* (flags: DigitalOutCommandFlags) {
            const encoded = yield* encodeDigitalOutCommand(flags);

            const client = yield* transport.withClient(deviceId);
            yield* client.writeSingleRegister({
              address: COMMAND_REGISTERS.DIGITAL_OUT_COMMAND,
              value: encoded,
            });
          }),
        }),
        stateMonitor: (deviceId: number) => ({
          read: readStateMonitor(deviceId),
        }),
        errorDescriptionMonitor: (deviceId: number) => ({
          read: readErrorDescriptionMonitor(deviceId),
        }),
        digitalInStateMonitor: (deviceId: number) => ({
          read: readDigitalInStateMonitor(deviceId),
        }),
        frequencyCommandMonitor: (deviceId: number) => ({
          read: readFrequencyCommandMonitor(deviceId),
        }),
        outputFrequencyMonitor: (deviceId: number) => ({
          read: readOutputFrequencyMonitor(deviceId),
        }),
        dcBusVoltageCommandMonitor: (deviceId: number) => ({
          read: readDCBusVoltageCommandMonitor(deviceId),
        }),
        outputCurrentMonitor: (deviceId: number) => ({
          read: readOutputCurrentMonitor(deviceId),
        }),
        warningDescriptionMonitor: (deviceId: number) => ({
          read: readWarningDescriptionMonitor(deviceId),
        }),
        digitalOutStateMonitor: (deviceId: number) => ({
          read: readDigitalOutStateMonitor(deviceId),
        }),
        analogOut1Monitor: (deviceId: number) => ({
          read: readAnalogOut1Monitor(deviceId),
        }),
        analogOut2Monitor: (deviceId: number) => ({
          read: readAnalogOut2Monitor(deviceId),
        }),
        analogIn1Monitor: (deviceId: number) => ({
          read: readAnalogIn1Monitor(deviceId),
        }),
        analogIn2Monitor: (deviceId: number) => ({
          read: readAnalogIn2Monitor(deviceId),
        }),
        a510CheckMonitor: (deviceId: number) => ({
          read: readA510CheckMonitor(deviceId),
        }),
      };
    }),
  },
) {}
