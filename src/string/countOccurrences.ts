/**
 * Counts how many times a character appears in a string.
 *
 * @param str - The string to search.
 * @param char - The character to count.
 * @returns The number of occurrences.
 *
 * @example
 * countOccurrence('hello world', 'l'); // 3
 */
export function countOccurrence(str: string, char: string): number {
    return str.split(char).length - 1;
}  