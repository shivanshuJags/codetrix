/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value The number to clamp.
 * @param min The lower boundary.
 * @param max The upper boundary.
 * @returns The clamped number.
 *
 * @example
 * clamp(5, 1, 10); // 5
 * clamp(-5, 0, 100); // 0
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}