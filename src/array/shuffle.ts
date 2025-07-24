/**
 * Randomly shuffles the elements of an array (Fisher-Yates algorithm).
 *
 * @template T The type of array elements.
 * @param array The array to shuffle.
 * @returns A new array with the elements shuffled.
 *
 * @example
 * shuffle([1, 2, 3]); // e.g. [3, 1, 2]
 */

export function shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}