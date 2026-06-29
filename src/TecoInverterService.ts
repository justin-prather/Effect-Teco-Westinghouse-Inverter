import { Effect } from "effect";
import {
  AsciiTransportService,
  RtuTransportService,
  TcpTransportService,
} from "effect-modbus-rs";
import { Registers } from "./Registers";
import {
  CommandWordPatch,
  decodeCommandWord,
  encodeCommandWord,
  mergeCommandWordPatch,
} from "./schemas";

export class TecoInverterService extends Effect.Service<TecoInverterService>()(
  "TecoInverterService",
  {
    scoped: Effect.fnUntraced(function* (
      transportVariant: "Rtu" | "Ascii" | "Tcp",
    ) {
      let transport:
        | RtuTransportService
        | AsciiTransportService
        | TcpTransportService;

      if (transportVariant === "Rtu") {
        transport = yield* RtuTransportService;
      } else if (transportVariant === "Ascii") {
        transport = yield* AsciiTransportService;
      } else if (transportVariant === "Tcp") {
        transport = yield* TcpTransportService;
      }

      const deviceCache = new Set<number>();
      const cacheDevice = (device: number) => deviceCache.add(device);

      const readOperationRegister = Effect.fnUntraced(function* (
        deviceId: number,
      ) {
        cacheDevice(deviceId);
        const client = yield* transport.withClient(deviceId);

        const [raw] = yield* client.readHoldingRegisters({
          address: Registers.OPERATION_COMMAND,
          quantity: 1,
        });

        const decoded = yield* decodeCommandWord(raw);

        return decoded;
      });

      return {
        readOperationRegister,
        updateOperationRegister: Effect.fnUntraced(function* (
          deviceId: number,
          patch: CommandWordPatch,
        ) {
          const current = yield* readOperationRegister(deviceId);
          const updated = mergeCommandWordPatch(current, patch);
          const encoded = yield* encodeCommandWord(updated);

          const client = yield* transport.withClient(deviceId);
          yield* client.writeSingleRegister({
            address: Registers.OPERATION_COMMAND,
            value: encoded,
          });
        }),
      };
    }),
  },
) {}
