import { setDay, setMonth, setTime, setToStartOfDay, setYear } from "../../date";

describe("setYear", () => {

    test('should set year correctly', () => {
        const result = setYear(new Date('2020-07-23'), 2025);
        expect(result.getFullYear()).toBe(2025);
    });
});

describe("setMonth", () => {

    test('should set month correctly (1-12)', () => {
        const result = setMonth(new Date('2020-07-23'), 12);
        expect(result.getMonth()).toBe(11); // December
    });
});

describe("setDay", () => {

    test('should set day of the month correctly', () => {
        const result = setDay(new Date('2020-07-23'), 15);
        expect(result.getDate()).toBe(15);
    });
});

describe('setTime', () => {
    const baseDate = new Date('2023-01-01T12:34:56.789Z');

    it('should set time to 00:00:00.000 using all defaults', () => {
        const result = setTime(baseDate);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should set only hours (rest default)', () => {
        const result = setTime(baseDate, 10);
        expect(result.getHours()).toBe(10);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should set hours and minutes (rest default)', () => {
        const result = setTime(baseDate, 10, 30);
        expect(result.getHours()).toBe(10);
        expect(result.getMinutes()).toBe(30);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should set hours, minutes and seconds (ms default)', () => {
        const result = setTime(baseDate, 10, 30, 45);
        expect(result.getHours()).toBe(10);
        expect(result.getMinutes()).toBe(30);
        expect(result.getSeconds()).toBe(45);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should set full time (no defaults)', () => {
        const result = setTime(baseDate, 23, 59, 59, 999);
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(59);
        expect(result.getSeconds()).toBe(59);
        expect(result.getMilliseconds()).toBe(999);
    });
});

describe("setToStartOfDay", () => {

    test('should reset time to start of the day', () => {
        const date = new Date('2025-07-23T13:45:30.500Z');
        const result = setToStartOfDay(date);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });
});

