import { isAfter, isBefore, isLeapYear, isSameDay, isWeekend } from "../../date";

describe("isAfter", () => {

    test('should return true if first date is after second', () => {
        expect(isAfter(new Date('2025-01-02'), new Date('2025-01-01'))).toBe(true);
    });

    test('should return false if first date is not after second', () => {
        expect(isAfter(new Date('2025-01-01'), new Date('2025-01-02'))).toBe(false);
    });
});


describe("isBefore", () => {

    test('should return true if first date is before second', () => {
        expect(isBefore(new Date('2024-01-01'), new Date('2024-12-31'))).toBe(true);
    });

    test('should return false if first date is not before second', () => {
        expect(isBefore(new Date('2025-01-01'), new Date('2024-12-31'))).toBe(false);
    });
});


describe("isSameDay", () => {

    test('should return true for same day', () => {
        expect(isSameDay(new Date('2024-05-01'), new Date('2024-05-01'))).toBe(true);
    });

    test('should return false for different day', () => {
        expect(isSameDay(new Date('2024-05-01'), new Date('2024-05-02'))).toBe(false);
    });
});


describe("isWeekend", () => {

    test('should return true for Sunday', () => {
        expect(isWeekend(new Date('2024-05-12'))).toBe(true);
    });

    test('should return false for Wednesday', () => {
        expect(isWeekend(new Date('2024-05-15'))).toBe(false);
    });
});


describe("isLeapYear", () => {

    test('should return true for leap year 2024', () => {
        expect(isLeapYear(2024)).toBe(true);
    });

    test('should return false for non-leap year 2023', () => {
        expect(isLeapYear(2023)).toBe(false);
    });
});
