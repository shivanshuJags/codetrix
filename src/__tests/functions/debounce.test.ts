import { debounce } from '../../functions/debounce';

jest.useFakeTimers();

describe('debounce', () => {
    it('should call the function after the specified delay', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn('test');
        expect(fn).not.toBeCalled();

        jest.advanceTimersByTime(199);
        expect(fn).not.toBeCalled();

        jest.advanceTimersByTime(1);
        expect(fn).toBeCalledWith('test');
    });

    it('should only call the function once if called multiple times within delay', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 300);

        debouncedFn('first');
        debouncedFn('second');
        debouncedFn('third');

        jest.advanceTimersByTime(299);
        expect(fn).not.toBeCalled();

        jest.advanceTimersByTime(1);
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith('third');
    });

    it('should not call the function if not enough time has passed', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 150);

        debouncedFn('a');
        debouncedFn('b');
        jest.advanceTimersByTime(100);
        expect(fn).not.toBeCalled();
    });

    it('should handle rapid calls and only call with last arguments', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 50);

        debouncedFn('one');
        jest.advanceTimersByTime(25);
        debouncedFn('two');
        jest.advanceTimersByTime(25);
        debouncedFn('three');
        jest.advanceTimersByTime(50);

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith('three');
    });
});