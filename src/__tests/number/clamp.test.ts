import { clamp } from "../../number";

describe('clamp', () => {
    it('should return number within the range', () => {
        expect(clamp(5, 1, 10)).toBe(5);
    });

    it('should return min if number is less than min', () => {
        expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('should return max if number is greater than max', () => {
        expect(clamp(15, 0, 10)).toBe(10);
    });
});
