/**
 * Flattens a nested array into a single-level array.
 *
 * @template T The type of array elements.
 * @param array The nested array to flatten.
 * @returns A new flattened array.
 *
 * @example
 * flatten([1, [2, [3, 4]], 5]); // [1, 2, [3, 4], 5]
 */

export function flatten<T>(array: any[]): T[] {
    return array.reduce<T[]>(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten<T>(val) : val),
        []
    );
}