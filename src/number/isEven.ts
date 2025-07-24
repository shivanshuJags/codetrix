/**
 * Checks if a number is even.
 *
 * @param num The number to check.
 * @returns `true` if the number is even, otherwise `false`.
 *
 * @example
 * isEven(4); // true
 * isEven(5); // false
 */
export function isEven(num: number): boolean {
    return num % 2 === 0;
}