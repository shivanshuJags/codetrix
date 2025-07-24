/**
 * Rounds a number to a specific number of decimal places.
 *
 * @param value The number to round.
 * @param decimals The number of decimal places.
 * @returns The rounded number.
 *
 * @example
 * roundTo(3.14159, 2); // 3.14
 */
export function roundTo(value: number, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}