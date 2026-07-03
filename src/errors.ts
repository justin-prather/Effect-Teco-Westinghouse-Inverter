/**
 * @fileoverview Error utilities for the Teco/Westinghouse A510 inverter library.
 * @module
 */

import { Effect, ParseResult } from "effect";

/**
 * Constructs a read-only encode failure `Effect` for monitor registers that cannot
 * be written back to the inverter.
 *
 * @param registerName - Human-readable name of the register (used in the error message)
 * @param actual - The actual value that was passed during encode (used for debugging)
 * @param ast - The Effect `AST` node describing the expected type
 * @returns An Effect that fails with a `ParseResult.Type` error
 */
export const readOnlyEncodeFailure = (
  registerName: string,
  actual: unknown,
  ast: ConstructorParameters<typeof ParseResult.Type>[0],
) =>
  Effect.fail(
    new ParseResult.Type(ast, actual, `${registerName} is read only`),
  );
