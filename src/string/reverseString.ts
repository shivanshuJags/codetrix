/**
 * Reverses a given string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 *
 * @example
 * reverseString('hello'); // 'olleh'
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}  