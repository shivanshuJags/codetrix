import { throttle } from '../../functions/throttle';

jest.useFakeTimers();

describe('throttle', () => {
    it('should call the function immediately on first invocation', () => {
        const fn = jest.fn();
        const throttled = throttle(fn, 1000);

        throttled('first');
        expect(fn).toHaveBeenCalledWith('first');
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should not call the function again within the interval', () => {
        const fn = jest.fn();
        const throttled = throttle(fn, 1000);

        throttled('first');
        throttled('second');
        throttled('third');
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should call the function again after the interval', () => {
        const fn = jest.fn();
        const throttled = throttle(fn, 1000);

        throttled('first');
        jest.advanceTimersByTime(1000);
        throttled('second');
        expect(fn).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenLastCalledWith('second');
    });

    it('should work with different intervals', () => {
        const fn = jest.fn();
        const throttled = throttle(fn, 500);

        throttled('first');
        jest.advanceTimersByTime(400);
        throttled('second');
        expect(fn).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(100);
        throttled('third');
        expect(fn).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenLastCalledWith('third');
    });

    it('should pass all arguments to the original function', () => {
        const fn = jest.fn();
        const throttled = throttle(fn, 1000);

        throttled('a', 1, true);
        expect(fn).toHaveBeenCalledWith('a', 1, true);
    });
});