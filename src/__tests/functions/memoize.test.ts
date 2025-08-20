import { memoize } from '../../functions/memoize';

describe('memoize', () => {
    it('should return the same result as the original function', () => {
        const fn = (x: number, y: number) => x + y;
        const memoized = memoize(fn);
        expect(memoized(2, 3)).toBe(5);
        expect(memoized(10, 20)).toBe(30);
    });

    it('should cache results for the same arguments', () => {
        const fn = jest.fn((x: number) => x * 2);
        const memoized = memoize(fn);

        expect(memoized(4)).toBe(8);
        expect(memoized(4)).toBe(8);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple arguments', () => {
        const fn = jest.fn((a: number, b: number, c: number) => a + b + c);
        const memoized = memoize(fn);

        expect(memoized(1, 2, 3)).toBe(6);
        expect(memoized(1, 2, 3)).toBe(6);
        expect(fn).toHaveBeenCalledTimes(1);

        expect(memoized(2, 3, 4)).toBe(9);
        expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should treat different arguments as different cache keys', () => {
        const fn = jest.fn((x: number) => x * 2);
        const memoized = memoize(fn);

        expect(memoized(1)).toBe(2);
        expect(memoized(2)).toBe(4);
        expect(memoized(1)).toBe(2);
        expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should work with functions returning objects', () => {
        const fn = jest.fn((x: number) => ({ val: x }));
        const memoized = memoize(fn);

        const result1 = memoized(5);
        const result2 = memoized(5);
        expect(result1).toEqual({ val: 5 });
        expect(result2).toEqual({ val: 5 });
        expect(result1).toBe(result2); // Should be the same reference
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should handle no arguments', () => {
        const fn = jest.fn(() => 'hello');
        const memoized = memoize(fn);

        expect(memoized()).toBe('hello');
        expect(memoized()).toBe('hello');
        expect(fn).toHaveBeenCalledTimes(1);
    });
});