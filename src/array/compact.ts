/**
 * Removes all falsy values (`false`, `0`, `''`, `null`, `undefined`, `NaN`) from an array.
 *
 * @template T The type of array elements.
 * @param array The array to compact.
 * @returns A new array with only truthy values.
 *
 * @example
 * compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
 */

export function compact<T>(array: T[]): T[] {
    return array.filter(Boolean);
}