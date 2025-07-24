/**
 * Checks if a number is a prime number.
 *
 * @param num The number to check.
 * @returns `true` if the number is prime, otherwise `false`.
 *
 * @example
 * isPrime(7); // true
 * isPrime(10); // false
 */
export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}