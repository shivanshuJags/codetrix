/**
 * Checks if a number is odd.
 *
 * @param num The number to check.
 * @returns `true` if the number is odd, otherwise `false`.
 *
 * @example
 * isOdd(3); // true
 * isOdd(4); // false
 */
export function isOdd(num: number): boolean {
    return num % 2 !== 0;
}