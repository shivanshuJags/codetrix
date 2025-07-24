/**
 * Converts a string to camelCase format.
 *
 * @param str - The string to convert.
 * @returns The camelCased string.
 *
 * @example
 * camelCase('hello world'); // 'helloWorld'
 */
export function camelCase(str: string): string {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
        .replace(/^[A-Z]/, (match) => match.toLowerCase());
}  