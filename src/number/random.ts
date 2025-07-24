/**
 * Generates a random floating-point number between the given min (inclusive) and max (exclusive).
 *
 * @param min - The minimum value (inclusive). Defaults to 0.
 * @param max - The maximum value (exclusive). Defaults to 1.
 * @returns A random float between min (inclusive) and max (exclusive).
 *
 * @example
 * random(1, 5); // Might return 3.1415
 */

export function random(min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer between the given min and max (inclusive).
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 *
 * @example
 * randomInt(1, 10); // Might return 4
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random integer with the specified number of digits.
 *
 * @param digits - The number of digits for the random number. Must be greater than 0.
 * @returns A random integer with the specified digit length.
 * @throws Will throw an error if digits is less than or equal to 0.
 *
 * @example
 * randomByDigits(3); // Might return 527
 */
export function randomByDigits(digits: number): number {
    if (digits <= 0) {
        throw new Error('Number of digits must be greater than 0');
    }

    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}