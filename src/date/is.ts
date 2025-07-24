/**
 * Checks if the first date is after the second date.
 *
 * @param date1 - The first date.
 * @param date2 - The second date to compare.
 * @returns `true` if `date1` is after `date2`.
 *
 * @example
 * isAfter(new Date('2025-01-02'), new Date('2025-01-01')); // true
 */
export function isAfter(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
}

/**
 * Checks if the first date is before the second date.
 *
 * @param date1 - The first date.
 * @param date2 - The second date to compare.
 * @returns `true` if `date1` is before `date2`.
 *
 * @example
 * isBefore(new Date('2025-01-01'), new Date('2025-01-02')); // true
 */
export function isBefore(date1: Date, date2: Date): boolean {
    return date1.getTime() < date2.getTime();
}

/**
 * Checks if two dates fall on the same calendar day (ignores time).
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns `true` if both dates fall on the same day.
 *
 * @example
 * isSameDay(new Date('2025-01-01'), new Date('2025-01-01T23:59:59')); // true
 */
export function isSameDay(date1: Date, date2: Date): boolean {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

/**
 * Checks if the given date is on a weekend.
 *
 * @param date - The date to check.
 * @returns `true` if the date is Saturday or Sunday.
 *
 * @example
 * isWeekend(new Date('2025-07-20')); // true (Sunday)
 */
export function isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
}

/**
 * Checks if a given year is a leap year.
 *
 * @param year - The year to check.
 * @returns `true` if the year is a leap year.
 *
 * @example
 * isLeapYear(2024); // true
 */
export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}  