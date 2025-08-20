/**
 * Creates a debounced function that delays invoking `fn` until after `delay` milliseconds
 * have elapsed since the last time the debounced function was called.
 *
 * @template T - The function type
 * @param fn - The function to debounce
 * @param delay - The number of milliseconds to delay
 * @returns A new debounced function
 *
 * @example
 * const log = debounce((msg: string) => console.log(msg), 300);
 * log("Hello"); // Will run only if 300ms pass without another call
 */
export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}
