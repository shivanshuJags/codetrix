/**
 * Creates an object without the specified keys.
 *
 * @param obj - The source object.
 * @param keys - The keys to omit.
 * @returns A new object without the specified keys.
 *
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}  