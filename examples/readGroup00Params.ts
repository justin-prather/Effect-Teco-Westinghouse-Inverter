import { Console, Effect, Layer, Logger, LogLevel, Pretty } from "effect";
import { TecoInverterService } from "../src/TecoInverterService";
import { RtuTransportService } from "effect-modbus-rs";
import { BunRuntime } from "@effect/platform-bun";
import * as P from "../src/parameters";

const deviceId = 1;

const typedEntries = <T extends Record<string, unknown>>(obj: T) =>
  Object.entries(obj) as {
    [K in keyof T]-?: [K, T[K]];
  }[keyof T][];

const program = Effect.gen(function* () {
  const inverter = yield* TecoInverterService;
  const params = inverter.parameters.group00;

  const dunno = yield* params["00-00"](deviceId).read();

  const reads: Record<string, Effect.Effect<any, any, any>> = {};
  for (const [key, param] of typedEntries(params)) {
    reads[key] = param(deviceId).read();
  }

  const values = yield* Effect.all(reads, { concurrency: "unbounded" });

  yield* Console.log("=== Group 00: Basic Parameters ===");
  for (const [key, entry] of Object.entries(P.group00.group00Params)) {
    // @ts-expect-error - entry.schema is a union type; all schemas work with Pretty at runtime
    yield* Console.log(`  ${key}: ${Pretty.make(entry.schema)(values[key])}`);
  }
});

const TecoLayer = TecoInverterService.Default("Rtu");
const RtuLayer = RtuTransportService.Default({
  portPath: "/dev/tty.usbserial-A10OFLK2",
  baudRate: 19200,
  stopBits: 1,
  dataBits: 8,
  parity: "None",
});

const layerLive = Layer.provideMerge(TecoLayer, RtuLayer);

program.pipe(
  Effect.provide(layerLive),
  // @ts-ignore
  Logger.withMinimumLogLevel(LogLevel.Debug),
  BunRuntime.runMain,
);
