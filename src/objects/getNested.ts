/**
 * Safely retrieves a nested value from an object using a path.
 *
 * @param obj - The object to query.
 * @param path - The path to the nested property (dot-separated).
 * @param fallback - The fallback value if the path doesn't exist.
 * @returns The value at the nested path or the fallback.
 *
 * @example
 * getNested({ a: { b: 2 } }, 'a.b'); // 2
 * getNested({ a: { b: 2 } }, 'a.c', 0); // 0
 */
export function getNested<T = any>(obj: any, path: string, fallback?: T): T | undefined {
    return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;
}  