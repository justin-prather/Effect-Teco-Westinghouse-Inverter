import { Effect, ParseResult } from "effect";

/**
 * Constructs a failure `Effect` for monitor registers that cannot be written.
 *
 * Monitor registers are read-only. Calling `update()` on a monitor will fail
 * with a `ParseResult.Type` error whose message indicates the register is read-only.
 *
 * @param registerName - Human-readable name of the register.
 * @param actual - The value that was passed during encode.
 * @param ast - The Effect `AST` describing the expected type.
 */
export const readOnlyEncodeFailure = (
  registerName: string,
  actual: unknown,
  ast: ConstructorParameters<typeof ParseResult.Type>[0],
) =>
  Effect.fail(
    new ParseResult.Type(ast, actual, `${registerName} is read only`),
  );
