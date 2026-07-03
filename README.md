# Effect-Teco-Westinghouse-Inverter

Bidirectional schema transformers for Teco/Westinghouse A510 inverter Modbus parameters, built with [Effect](https://effect.website).

## Overview

This library provides typed, runtime-validated schemas for every parameter in the A510 instruction manual (Groups 00–22). Each schema can decode raw Modbus register values into meaningful domain types and encode domain values back to wire format, with proper scaling factors applied (×0.001, ×0.01, ×0.1, signed Int16, etc.).

## Quickstart

```sh
bun install
bun run typecheck   # Type-check the project
bun run test        # Run tests
bun run build       # Build to ./dist
bun run index.ts    # Run the application
```

## Project Structure

```
.
├── index.ts                          — Entry point (re-exports core modules)
├── src/
│   ├── Registers.ts                  — Modbus register address enums
│   ├── schemas.ts                    — Command/monitor wire schemas (bit-field flags, scaled values)
│   ├── TecoInverterService.ts        — Effect service for read/write operations
│   ├── errors.ts                     — Error utilities
│   ├── utils.ts                      — Bit helpers
│   └── parameters/
│       ├── param-utils.ts            — Factory functions (makeParam, makeScaledParam, etc.)
│       ├── param-utils.test.ts       — Tests for param utilities
│       ├── schemas.test.ts           — Tests for schemas
│       ├── index.ts                  — Re-exports all parameter groups
│       └── group-00.ts ... group-22.ts — Parameter schemas per group
├── examples/
│   ├── readOpsRegister.ts            — Read operation registers example
│   ├── readAllRegisters.ts            — Read all monitor registers example
│   ├── readAllRegistersMock.ts       — Mocked read all registers example
│   └── readGroup00Params.ts          — Read group 00 parameters example
└── documentation/
    └── pdf_references/               — A510 manuals and addenda (PDF + markdown)
```

## Parameter Groups

| Group | Name | Pages |
|-------|------|-------|
| 00 | Basic Parameters | 4-19 – 4-22 |
| 01 | Frequency Parameters | 4-37 – 4-38 |
| 02 | Accel/Decel Parameters | 4-39 – 4-43 |
| 03 | Multi-Function Input | 4-44 – 4-52 |
| 04 | Multi-Function Digital Output | 4-53 – 4-59 |
| 05 | Multi-Step/Speed | 4-60 – 4-66 |
| 06 | VFD Protection | 4-67 – 4-71 |
| 07 | Start/Stop | 4-72 – 4-74 |
| 08 | Protection | 4-75 – 4-79 |
| 09 | Communication | 4-80 |
| 10 | PID Control | 4-81 – 4-84 |
| 11 | Auxiliary Functions | 4-85 – 4-88 |
| 12 | Monitoring | 4-62 – 4-67 |
| 13 | Maintenance | 4-68 – 4-71 |
| 14 | PLC Setting | 4-72 |
| 15 | PLC Monitoring | 4-73 |
| 16 | LCD Function | 4-74 – 4-77 |
| 17 | Automatic Tuning | 4-78 – 4-79 |
| 18 | Slip Compensation | 4-79 |
| 19 | Wobble Frequency | 4-79 – 4-80 |
| 20 | Speed Control | 4-80 – 4-82 |
| 21 | Torque & Position Control | 4-82 – 4-85 |
| 22 | PM Motor | 4-85 – 4-88 |

## Schema Factories

Four factory functions in `src/parameters/param-utils.ts`:

- **`makeParam(register, meta)`** — Simple UInt16 pass-through
- **`makeScaledParam(register, factor, meta)`** — Scaled value (e.g., 0.01 Hz)
- **`makeSignedScaledParam(register, factor, meta)`** — Signed Int16 with scaling
- **`makeEnumParam(register, labels, meta)`** — Labeled selection values

Each param carries structured metadata (`ParamMeta`) with group, code, name, range, default, unit, and manual page reference — exposed via Effect's `Schema.annotations()` as a human-readable description.

## Usage Example

```typescript
import { Effect, Layer } from "effect";
import { TecoInverterService } from "./src/TecoInverterService";
import { RtuTransportService } from "effect-modbus-rs";
import { BunRuntime } from "@effect/platform-bun";

const deviceId = 1;

const program = Effect.gen(function* () {
  const inverter = yield* TecoInverterService;
  const params = inverter.parameters.group00;

  // Read a single parameter
  const value = yield* params.p00_01(deviceId).read();
  yield* Console.log(`Parameter 00-01 value: ${value}`);
});

const TecoLayer = TecoInverterService.Default("Rtu");
const RtuLayer = RtuTransportService.Default({
  portPath: "/dev/tty.usbserial-XXXXX",
  baudRate: 19200,
  stopBits: 1,
  dataBits: 8,
  parity: "None",
});

program.pipe(
  Effect.provide(Layer.provideMerge(TecoLayer, RtuLayer)),
  BunRuntime.runMain,
);
```

## Register Map

Command and monitor registers are defined as TypeScript enums in `Registers.ts`:

- `COMMAND_REGISTERS` — 0x2501–0x2507 (operation, frequency, torque, analog/digital out)
- `MONITOR_REGISTERS` — 0x2520–0x252F (state, error, frequency, current, etc.)
- `GROUP_00_Basic_Parameters` through `GROUP_22_PM_Motor_Parameters` — 0x0000–0x1623

## Service Layer

`TecoInverterService` provides an Effect service for Modbus communication:

```typescript
const service = yield* TecoInverterService({ transportVariant: "Rtu" });

// Read frequency command
const freq = yield* service.frequencyCommand(deviceId).read();

// Update frequency command
yield* service.frequencyCommand(deviceId).update(50.0);

// Access parameter groups
const group00 = service.parameters.group00;
const value = yield* group00.p00_01(deviceId).read();
```

## Mock Generator (`effect-modbus-rs`)

For testing without hardware or a serial port, use `RtuTransportService.makeMockTransport` with `TecoInverterService.mockDevice()` — a built-in generator that produces a full `SlaveDeviceDefinition` for the A510 inverter.

### How it works

`mockDevice(deviceId)` registers all A510 registers with default value `0`:

| Register range | Description |
|---------------|-------------|
| `0x2501–0x2507` | Command registers (operation, frequency, torque, analog/digital out) |
| `0x2520–0x252F` | Monitor registers (state, error, frequency, current, etc.) |
| `0x0000–0x1623` | Parameter group registers (Groups 00–22) |

### Full example

```typescript
import { Console, Effect, Layer, Logger, LogLevel } from "effect";
import { TecoInverterService } from "./src/TecoInverterService";
import { RtuTransportService } from "effect-modbus-rs";
import { BunRuntime } from "@effect/platform-bun";

const deviceId = 1;

const program = Effect.gen(function* () {
  const inverter = yield* TecoInverterService;

  // Read — returns factory default (0 / stopped state)
  const opCmd = yield* inverter.operationCommand(deviceId).read();
  yield* Console.log(`Operation Command: ${opCmd}`);

  // Write — mock persists the value in memory
  yield* inverter.frequencyCommand(deviceId).update(50);
  const freqCmd = yield* inverter.frequencyCommand(deviceId).read();
  yield* Console.log(`Frequency Command: ${freqCmd}`);

  // Read a parameter register (group 00, param 00-00)
  const param00 = yield* inverter.parameters.group00["00-00"](deviceId).read();
  yield* Console.log(`00-00 Control Mode: ${param00}`);
});

// Build mock transport with one or more devices
const mockLayer = RtuTransportService.makeMockTransport([
  TecoInverterService.mockDevice(1),
  TecoInverterService.mockDevice(2),
])({
  portPath: "/dev/null",  // ignored by mock transport
  baudRate: 9600,
  stopBits: 1,
  dataBits: 8,
  parity: "None",
});

program.pipe(
  Effect.provide(Layer.provideMerge(TecoInverterService.Default("Rtu"), mockLayer)),
  Logger.withMinimumLogLevel(LogLevel.Debug),
  BunRuntime.runMain,
);
```

### Running the mock example

```sh
bun run examples/readAllRegistersMock.ts
```

### Customizing mock register values

`mockDevice()` returns a standard `SlaveDeviceDefinition` from `effect-modbus-rs`. You can override individual register defaults before passing to `makeMockTransport`:

```typescript
import { RtuTransportService } from "effect-modbus-rs";

const device = TecoInverterService.mockDevice(1);

// Override specific holding registers
const customHoldingRegisters = device.holdingRegisters.map((reg) => {
  if (reg.address === 0x2501) return { address: reg.address, default: 5 }; // Running
  if (reg.address === 0x2502) return { address: reg.address, default: 500 }; // 50.0 Hz
  return reg;
});

const mockLayer = RtuTransportService.makeMockTransport([{
  ...device,
  holdingRegisters: customHoldingRegisters,
}])({
  portPath: "/dev/null",
  baudRate: 9600,
  stopBits: 1,
  dataBits: 8,
  parity: "None",
});
```

### SlaveDeviceDefinition schema

| Property | Type | Description |
|----------|------|-------------|
| `unitId` | `number` | Modbus slave/unit ID (required) |
| `coils` | `{ address: number, default: boolean }[]` | Coil registers |
| `discreteInputs` | `{ address: number, default: boolean }[]` | Discrete input registers |
| `holdingRegisters` | `{ address: number, default: number }[]` | Holding registers (command + monitor + params) |
| `inputRegisters` | `{ address: number, default: number }[]` | Input registers |

See `examples/readAllRegistersMock.ts` for a complete runnable example.
