import { TimeParts } from '../type/date.type';

/**
 * Returns the day of the month from a given date.
 *
 * @param date - The date object to extract the day from.
 * @returns Day of the month (1-31).
 *
 * @example
 * getDay(new Date(2025, 6, 23)); // 23
 */
export function getDay(date: Date): number {
    return date.getDate();
}

/**
 * Returns the month number from a given date.
 *
 * @param date - The date object to extract the month from.
 * @returns Month number (1-12).
 *
 * @example
 * getMonth(new Date(2025, 6, 23)); // 7 (July)
 */
export function getMonth(date: Date): number {
    return date.getMonth() + 1; // Month is 0-based in JS
}

/**
 * Returns the full year from a given date.
 *
 * @param date - The date object to extract the year from.
 * @returns Full year (e.g., 2025).
 *
 * @example
 * getYear(new Date(2025, 6, 23)); // 2025
 */
export function getYear(date: Date): number {
    return date.getFullYear();
}

/**
 * Calculates the ISO week number for a given date.
 *
 * @param date - The date object to calculate the week number from.
 * @returns ISO week number (1–53).
 *
 * @example
 * getWeekNumber(new Date(2025, 6, 23)); // e.g., 30
 */
export function getWeekNumber(date: Date): number {
    const tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    const week1 = new Date(tempDate.getFullYear(), 0, 4);
    return (
        1 +
        Math.round(
            ((tempDate.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) /
            7
        )
    );
}

/**
 * Returns the number of days in the month of the given date.
 *
 * @param date - The date object to check.
 * @returns Number of days in that month.
 *
 * @example
 * getDaysInMonth(new Date(2025, 1, 1)); // 28 or 29 depending on year
 */
export function getDaysInMonth(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns an object containing hours, minutes, seconds, and milliseconds from a date.
 *
 * @param date - The date object to extract time parts from.
 * @returns TimeParts object.
 *
 * @example
 * getTimeParts(new Date(2025, 6, 23, 14, 30)); 
 * // { hours: 14, minutes: 30, seconds: 0, milliseconds: 0 }
 */
export function getTimeParts(date: Date): TimeParts {
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
    };
}