import { isPrime } from "../../number";

describe('isPrime', () => {
    it('should return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(13)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(10)).toBe(false);
        expect(isPrime(15)).toBe(false);
    });
});
