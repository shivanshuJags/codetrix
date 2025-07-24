/**
 * Converts a string to kebab-case format.
 *
 * @param str - The input string.
 * @returns The kebab-cased string.
 *
 * @example
 * kebabCase('Hello World!'); // 'hello-world'
 */
export function kebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .toLowerCase();
}