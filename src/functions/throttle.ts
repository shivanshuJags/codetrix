/**
 * Creates a throttled function that only invokes `fn` at most once per `interval` milliseconds.
 *
 * @template T - The function type
 * @param fn - The function to throttle
 * @param interval - The number of milliseconds to throttle invocations to
 * @returns A new throttled function
 *
 * @example
 * const log = throttle((msg: string) => console.log(msg), 1000);
 * log("Hello"); // Executes immediately
 * log("World"); // Ignored if within 1000ms
 */
export function throttle<T extends (...args: any[]) => void>(
    fn: T,
    interval: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn(...args);
        }
    };
}
