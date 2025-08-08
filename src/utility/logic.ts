/**
 * Checks if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined.
 */
export function isNil(value: any): boolean {
    return value === null || value === undefined;
}

/**
 * Returns one of two values based on a condition.
 * @param condition - Boolean condition to evaluate.
 * @param ifTrue - Value to return if condition is true.
 * @param ifFalse - Value to return if condition is false.
 * @returns The selected value.
 */
export function ifElse<T>(condition: boolean, ifTrue: T, ifFalse: T): T {
    return condition ? ifTrue : ifFalse;
}

/**
 * Checks if a value is a function.
 * @param value - The value to check.
 * @returns True if it's a function.
 */
export function isFunction(value: any): boolean {
    return typeof value === 'function';
}

/**
 * Checks if a value is a plain object.
 * @param value - The value to check.
 * @returns True if it's a non-null object and not an array.
 */
export function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Checks if the given value is a boolean.
 * @param value - The value to check.
 * @returns True if it's a boolean.
 */
export function isBoolean(value: any): boolean {
    return typeof value === 'boolean';
}

/**
 * Checks if a value is a Promise.
 * @param value - The value to check.
 * @returns True if it's a Promise.
 */
export function isPromise(value: any): boolean {
    return value instanceof Promise ||
        (value !== null && typeof value === 'object' && typeof value.then === 'function');
}

/**
 * Creates a function that is invoked only once.
 * Useful for initialization logic.
 * @param fn - The function to wrap.
 * @returns A new function that runs only once.
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
    let called = false;
    let result: ReturnType<T>;

    return function (...args: Parameters<T>) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    } as T;
}
