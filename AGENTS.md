# effect-teco-westinghouse-inverter

## Stack

- **Runtime**: Bun only — never use Node, npm, pnpm, yarn, or vite.
- **Language**: TypeScript 6 (ESNext, `verbatimModuleSyntax`, bundler resolution, `module: "Preserve"`).
- **Core lib**: `effect` (^3.21.4), `effect-modbus-rs` (linked).
- **LSP**: `@effect/language-service` plugin in `tsconfig.json` `compilerOptions.plugins`.
- **License**: GPL-3.0.

## Commands

| Action     | Command             |
| ---------- | ------------------- |
| Install    | `bun install`       |
| Type-check | `bun run typecheck` |
| Build      | `bun run build`     |

## Source layout

```
index.ts                     — Re-exports all public API from src/
src/
  errors.ts                  — Data.TaggedError types + toModbusError converter
shared-transport.ts        — Generic scoped transport lifecycle management
src/TecoInverterTransportService.ts — Scoped Effect.Service wrapping AsyncTecoInverterTransport
examples/
  tc-basic.ts               — TC usage pattern
```

## Architecture

## Conventions

- Follow `effect` idioms: `Effect`, `Layer`, `Schema`, `Scope`, `Data.TaggedError` throughout.
- Use `Bun.test` / `import { test, expect } from "bun:test"` for tests.
- Always `import type` for type-only imports (`verbatimModuleSyntax`).
- Don't use `dotenv` — Bun loads `.env` automatically.

## Tooling

- **Fallow MCP** is configured via `opencode.json` (`bunx fallow-mcp`). The `.fallowrc.json` entry covers `index.ts`, `src/`, and `examples/`. Run `fallow audit` for pre-commit quality checks on changed code.

## Referencing upstream libraries

Shallow clones of upstream libraries exist under `references/` for offline browsing (gitignored; re-clone if stale):

| Reference | Local path                    | Useful subdirectory                                              |
| --------- | ----------------------------- | ---------------------------------------------------------------- |
| effect    | `references/effect`           | `packages/effect/src/` for core types                            |
| modbus-rs | `references/effect-modbus-rs` | `mbus-ffi/nodejs/` (`index.d.ts` for types, `index.js` for impl) |
