import { addDays, cloneDate, daysBetween, subDays, toISODate } from "../../date";

describe("cloneDate", () => {

    test('clones a date object correctly', () => {
        const original = new Date();
        const clone = cloneDate(original);
        expect(clone).not.toBe(original);
        expect(clone.getTime()).toBe(original.getTime());
    });
});

describe("daysBetween", () => {

    test('calculates days between two dates', () => {
        const d1 = new Date('2025-01-01');
        const d2 = new Date('2025-01-10');
        expect(daysBetween(d1, d2)).toBe(9);
    });
});

describe("toISODate", () => {

    test('converts to ISO date string without time', () => {
        const result = toISODate(new Date('2025-07-23T10:20:30Z'));
        expect(result).toBe('2025-07-23');
    });
});

describe("addDays", () => {

    test('adds days correctly', () => {
        const result = addDays(new Date('2025-07-23'), 5);
        expect(result.getDate()).toBe(28);
    });
});

describe("subDays", () => {

    test('subtracts days correctly', () => {
        const result = subDays(new Date('2025-07-23'), 5);
        expect(result.getDate()).toBe(18);
    });
});
