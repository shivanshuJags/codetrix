/**
 * Converts radians to degrees.
 *
 * @param radians - The angle in radians.
 * @returns The angle in degrees.
 */
export function radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
}

/**
 * Converts degrees to radians.
 *
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 */
export function degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

/**
 * Converts degrees to radians.
 * Duplicate of `degreesToRadians`, included for naming flexibility.
 *
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 */
export function degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees.
 * Duplicate of `radiansToDegrees`, included for naming flexibility.
 *
 * @param radians - The angle in radians.
 * @returns The angle in degrees.
 */
export function radToDeg(radians: number): number {
    return radians * (180 / Math.PI);
}

/**
 * Normalizes a degree angle to the range [0, 360).
 *
 * @param degrees - The input angle in degrees.
 * @returns The normalized angle between 0 and 359.999...
 */
export function normalizeDegrees(degrees: number): number {
    return ((degrees % 360) + 360) % 360;
}

/**
 * Calculates the smallest difference between two angles (in degrees).
 *
 * @param a - The first angle in degrees.
 * @param b - The second angle in degrees.
 * @returns The smallest angle difference in degrees.
 */
export function angleDifference(a: number, b: number): number {
    const diff = Math.abs(normalizeDegrees(a) - normalizeDegrees(b));
    return diff > 180 ? 360 - diff : diff;
}

/**
 * Checks if an angle lies between two other angles, supporting wrap-around.
 *
 * @param angle - The angle to check.
 * @param start - The start of the angle range.
 * @param end - The end of the angle range.
 * @returns True if angle is within the range, accounting for wrap-around.
 */
export function isAngleBetween(angle: number, start: number, end: number): boolean {
    angle = normalizeDegrees(angle);
    start = normalizeDegrees(start);
    end = normalizeDegrees(end);

    if (start < end) return angle >= start && angle <= end;
    return angle >= start || angle <= end;
}
