/**
 * Creates a promise that resolves after the specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to wait before resolving
 * @returns A promise that resolves after the given delay
 *
 * @example
 * await delay(1000); // waits 1 second
 * console.log("Done!");
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wraps a promise with a timeout. If the promise does not settle within the given time,
 * it will reject with an error.
 *
 * @template T - The type of the resolved promise value
 * @param promise - The promise to wrap with a timeout
 * @param ms - The number of milliseconds before timing out
 * @returns A promise that resolves or rejects within the timeout period
 *
 * @throws {Error} If the promise takes longer than the timeout
 *
 * @example
 * const fetchWithTimeout = timeout(fetch("https://api.com/data"), 2000);
 * await fetchWithTimeout; // throws error if request exceeds 2 seconds
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    let timer: NodeJS.Timeout;
    const timeoutPromise = new Promise<never>((_, reject) =>
        (timer = setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms))
    );
    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}

/**
 * Retries a given async function a specified number of times with a delay between attempts.
 *
 * @template T - The type of the resolved promise value
 * @param fn - The async function to retry
 * @param retries - The maximum number of retry attempts (default: 3)
 * @param delayMs - The delay in milliseconds between retries (default: 500)
 * @returns A promise that resolves with the function result or rejects after exhausting retries
 *
 * @throws The last error thrown by the function if all retries fail
 *
 * @example
 * const fetchData = async () => {
 *   const res = await fetch("https://api.com/data");
 *   if (!res.ok) throw new Error("Failed");
 *   return res.json();
 * };
 *
 * const data = await retry(fetchData, 3, 1000);
 */
export async function retry<T>(
    fn: () => Promise<T>,
    retries: number = 3,
    delayMs: number = 500
): Promise<T> {
    let error: any;
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            error = err;
            if (i < retries - 1) await delay(delayMs);
        }
    }
    throw error;
}

