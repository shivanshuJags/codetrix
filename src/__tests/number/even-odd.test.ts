import { isEven, isOdd } from "../../number";

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(100)).toBe(true);
    });

    it('should return false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
    });
});

describe('isOdd', () => {
    it('should return true for odd numbers', () => {
        expect(isOdd(3)).toBe(true);
    });

    it('should return false for even numbers', () => {
        expect(isOdd(8)).toBe(false);
    });
});
