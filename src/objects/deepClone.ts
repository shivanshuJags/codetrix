/**
 * Creates a deep clone of a value (supports arrays and objects).
 *
 * @param value - The value to clone.
 * @returns A deep cloned copy of the input value.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 */
export function deepClone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}