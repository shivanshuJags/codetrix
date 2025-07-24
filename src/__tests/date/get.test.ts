import { getDay, getDaysInMonth, getMonth, getTimeParts, getWeekNumber, getYear } from "../../date";

describe("getDay", () => {

    test('should return day of the month', () => {
        expect(getDay(new Date('2025-07-23'))).toBe(23);
    });
})

describe("getMonth", () => {

    test('should return month of the year (1-12)', () => {
        expect(getMonth(new Date('2025-07-23'))).toBe(7);
    });
});


describe("getYear", () => {

    test('should return full year', () => {
        expect(getYear(new Date('2025-07-23'))).toBe(2025);
    });
});


describe("getWeekNumber", () => {

    test('should return correct ISO week number', () => {
        expect(getWeekNumber(new Date('2025-01-01'))).toBe(1);
        expect(getWeekNumber(new Date('2025-12-30'))).toBe(1); // belongs to ISO week 1 of 2026
        expect(getWeekNumber(new Date('2025-12-22'))).toBe(52); // earlier in last full week
    });
});


describe("getDaysInMonth", () => {

    test('should return number of days in given month', () => {
        expect(getDaysInMonth(new Date('2024-02-01'))).toBe(29); // Leap year
        expect(getDaysInMonth(new Date('2025-02-01'))).toBe(28); // Non-leap
    });
});


describe("getTimeParts", () => {

    test('should return all time parts of the date', () => {
        const date = new Date('2025-07-23T13:45:30.123Z');
        const parts = getTimeParts(date);
        expect(parts.hours).toBe(date.getHours());
        expect(parts.minutes).toBe(date.getMinutes());
        expect(parts.seconds).toBe(date.getSeconds());
        expect(parts.milliseconds).toBe(date.getMilliseconds());
    });
});