/**
 * Creates a memoized version of `fn`. The result of each call is cached
 * based on the arguments provided.
 *
 * @template T - The function type
 * @param fn - The function to memoize
 * @returns A new memoized function
 *
 * @example
 * const slowFn = (x: number) => x * 2;
 * const memoized = memoize(slowFn);
 * memoized(2); // Computed
 * memoized(2); // Retrieved from cache
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return ((...args: Parameters<T>) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key)!;
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
}
