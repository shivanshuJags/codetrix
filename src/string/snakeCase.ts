/**
 * Converts a string to snake_case format.
 *
 * @param str - The string to convert.
 * @returns The snake_cased string.
 *
 * @example
 * snakeCase('Hello World'); // 'hello_world'
 */
export function snakeCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .toLowerCase();
}  