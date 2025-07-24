/**
 * Returns a new array with elements from the first array that are not present in the second array.
 *
 * @template T The type of array elements.
 * @param array The source array.
 * @param values The values to exclude.
 * @returns A new array excluding the specified values.
 *
 * @example
 * difference([1, 2, 3, 4], [2, 4]); // [1, 3]
 */

export function difference<T>(array: T[], values: T[]): T[] {
    const set = new Set(values);
    return array.filter(item => !set.has(item));
}