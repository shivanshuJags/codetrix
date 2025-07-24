/**
 * Truncates a string to a specified length, adding a suffix if needed.
 *
 * @param str - The string to truncate.
 * @param length - The maximum allowed length.
 * @param suffix - The suffix to add (default is '...').
 * @returns The truncated string.
 *
 * @example
 * truncate('Hello World', 5); // 'Hello...'
 */
export function truncate(str: string, length: number, suffix = '...'): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + suffix;
}  