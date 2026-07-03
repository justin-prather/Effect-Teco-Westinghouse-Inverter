/**
 * @fileoverview Bit manipulation utilities for the Teco/Westinghouse A510 inverter library.
 * @module
 */

/**
 * Creates a bitmask for a single bit at position `n`.
 *
 * @param n - Zero-based bit position (0 = least-significant bit)
 * @returns A unsigned 16-bit integer with only bit `n` set
 *
 * @example
 * bit(0)  // 0b0001 = 1
 * bit(5)  // 0b0010_0000 = 32
 * bit(15) // 0b1000_0000_0000_0000 = 32768
 */
export const bit = (n: number) => 1 << n;
