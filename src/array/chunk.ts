/**
 * Splits an array into chunks of a specified size.
 *
 * @template T The type of array elements.
 * @param array The array to chunk.
 * @param size The number of items per chunk.
 * @returns An array of chunks (each chunk is an array).
 *
 * @example
 * chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 */

export function chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}