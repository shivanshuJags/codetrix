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

describe("setTime", () => {

    test('should set time correctly', () => {
        const date = new Date('2025-07-23T00:00:00.000Z');
        const result = setTime(date, 10, 30, 45, 123);
        expect(result.getHours()).toBe(10);
        expect(result.getMinutes()).toBe(30);
        expect(result.getSeconds()).toBe(45);
        expect(result.getMilliseconds()).toBe(123);
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

