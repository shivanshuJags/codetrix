/**
 * Removes duplicate values from an array.
 *
 * @template T The type of array elements.
 * @param array The array to process.
 * @returns A new array with only unique values.
 *
 * @example
 * unique([1, 2, 2, 3]); // [1, 2, 3]
 */

export function unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}