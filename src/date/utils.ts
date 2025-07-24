/**
 * Returns a cloned copy of the given date.
 *
 * @param date - The original date.
 * @returns A new cloned Date instance.
 *
 * @example
 * cloneDate(new Date()); // → a new identical Date object
 */
export function cloneDate(date: Date): Date {
    return new Date(date.getTime());
}

/**
 * Calculates the number of full days between two dates.
 *
 * @param start - The start date.
 * @param end - The end date.
 * @returns Number of days between the two dates.
 *
 * @example
 * daysBetween(new Date('2025-07-01'), new Date('2025-07-10')); // → 9
 */
export function daysBetween(start: Date, end: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffTime = end.getTime() - start.getTime();
    return Math.floor(diffTime / msPerDay);
}

/**
 * Converts a date to an ISO 8601 date-only string (YYYY-MM-DD).
 *
 * @param date - The input date.
 * @returns ISO date string.
 *
 * @example
 * toISODate(new Date('2025-07-23T12:34:56Z')); // → '2025-07-23'
 */
export function toISODate(date: Date): string {
    return date.toISOString().split('T')[0];
}

/**
 * Adds a specified number of days to a date.
 *
 * @param date - The input date.
 * @param days - The number of days to add.
 * @returns A new Date with days added.
 *
 * @example
 * addDays(new Date('2025-07-23'), 5); // → 2025-07-28
 */
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Subtracts a specified number of days from a date.
 *
 * @param date - The input date.
 * @param days - The number of days to subtract.
 * @returns A new Date with days subtracted.
 *
 * @example
 * subDays(new Date('2025-07-23'), 3); // → 2025-07-20
 */
export function subDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}  