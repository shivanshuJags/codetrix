/**
 * Sets the year of the given date and returns a new Date instance.
 *
 * @param date - The original date.
 * @param year - The year to set.
 * @returns A new Date with the updated year.
 *
 * @example
 * setYear(new Date('2024-07-23'), 2025); // → 2025-07-23
 */
export function setYear(date: Date, year: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    return newDate;
}

/**
 * Sets the month of the given date (1-based, e.g. 1 = January) and returns a new Date instance.
 *
 * @param date - The original date.
 * @param month - The month to set (1–12).
 * @returns A new Date with the updated month.
 *
 * @example
 * setMonth(new Date('2025-01-01'), 12); // → 2025-12-01
 */
export function setMonth(date: Date, month: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(month - 1); // JavaScript months are 0-based
    return newDate;
}

/**
 * Sets the day of the month and returns a new Date instance.
 *
 * @param date - The original date.
 * @param day - The day of the month to set.
 * @returns A new Date with the updated day.
 *
 * @example
 * setDay(new Date('2025-01-01'), 15); // → 2025-01-15
 */
export function setDay(date: Date, day: number): Date {
    const newDate = new Date(date);
    newDate.setDate(day);
    return newDate;
}

/**
 * Sets the time (hour, minute, second, millisecond) of the given date and returns a new Date instance.
 *
 * @param date - The original date.
 * @param hours - The hour to set (default: 0).
 * @param minutes - The minutes to set (default: 0).
 * @param seconds - The seconds to set (default: 0).
 * @param milliseconds - The milliseconds to set (default: 0).
 * @returns A new Date with the updated time.
 *
 * @example
 * setTime(new Date(), 10, 30); // → today at 10:30 AM
 */
export function setTime(
    date: Date,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    milliseconds: number = 0
): Date {
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, seconds, milliseconds);
    return newDate;
}

/**
 * Sets the time of the given date to the start of the day (00:00:00.000).
 *
 * @param date - The original date.
 * @returns A new Date at the start of the same day.
 *
 * @example
 * setToStartOfDay(new Date()); // → today at 00:00:00.000
 */
export function setToStartOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}  