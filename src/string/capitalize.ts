/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 *
 * @example
 * capitalize('hello'); // 'Hello'
 */
export function capitalize(str: string): string {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}  