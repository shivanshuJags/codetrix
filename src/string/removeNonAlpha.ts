/**
 * Removes all non-alphabetical characters from a string.
 *
 * @param str - The string to clean.
 * @returns A string with only alphabetic characters.
 *
 * @example
 * removeNonAlpha('Hello123!'); // 'Hello'
 */
export function removeNonAlpha(str: string): string {
    return str.replace(/[^a-zA-Z]/g, '');
}  