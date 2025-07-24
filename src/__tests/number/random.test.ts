import { random, randomByDigits, randomInt } from "../../number";

describe('random', () => {
    it('should return a float between 0 and 1 by default', () => {
        const result = random();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(1);
    });

    it('should return a float between given min and max', () => {
        const min = 5;
        const max = 10;
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThan(max);
    });

    it('should return the min value if min == max', () => {
        const result = random(7, 7);
        expect(result).toBe(7);
    });
});

describe('randomInt', () => {
    it('should return an integer between min and max inclusive', () => {
        for (let i = 0; i < 10; i++) {
            const result = randomInt(10, 15);
            expect(Number.isInteger(result)).toBe(true);
            expect(result).toBeGreaterThanOrEqual(10);
            expect(result).toBeLessThanOrEqual(15);
        }
    });
});

describe('randomByDigits', () => {
    it('should generate a number with the specified digit length', () => {
        const digits = 4;
        const result = randomByDigits(digits);
        expect(result.toString().length).toBe(digits);
    });

    it('should throw an error for digits <= 0', () => {
        expect(() => randomByDigits(0)).toThrow();
        expect(() => randomByDigits(-1)).toThrow();
    });
});
