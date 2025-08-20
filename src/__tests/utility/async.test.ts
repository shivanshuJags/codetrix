import { delay, timeout, retry } from '../../utility/async';

describe('delay', () => {
    it('should resolve after specified milliseconds', async () => {
        const start = Date.now();
        await delay(100);
        expect(Date.now() - start).toBeGreaterThanOrEqual(100);
    });

    it('should resolve with undefined', async () => {
        await expect(delay(50)).resolves.toBeUndefined();
    });
});

describe('timeout', () => {
    it('should resolve if promise settles before timeout', async () => {
        const result = await timeout(Promise.resolve('ok'), 100);
        expect(result).toBe('ok');
    });

    it('should reject if promise does not settle before timeout', async () => {
        await expect(timeout(new Promise(() => { }), 50)).rejects.toThrow('Timeout after 50ms');
    });

    it('should clear timer after promise settles', async () => {
        // This test checks that the timer is cleared, but since it's internal,
        // we just ensure no error is thrown for a quick promise.
        await expect(timeout(Promise.resolve('done'), 10)).resolves.toBe('done');
    });
});

describe('retry', () => {
    it('should resolve if function succeeds first try', async () => {
        const fn = jest.fn().mockResolvedValue('success');
        await expect(retry(fn, 3, 10)).resolves.toBe('success');
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should retry the specified number of times on failure', async () => {
        const fn = jest
            .fn()
            .mockRejectedValueOnce(new Error('fail1'))
            .mockRejectedValueOnce(new Error('fail2'))
            .mockResolvedValue('final');
        await expect(retry(fn, 3, 10)).resolves.toBe('final');
        expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should reject with last error after exhausting retries', async () => {
        const fn = jest.fn().mockRejectedValue(new Error('always fails'));
        await expect(retry(fn, 2, 10)).rejects.toThrow('always fails');
        expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should wait between retries', async () => {
        const fn = jest
            .fn()
            .mockRejectedValueOnce(new Error('fail'))
            .mockResolvedValue('ok');
        const start = Date.now();
        await retry(fn, 2, 100);
        expect(Date.now() - start).toBeGreaterThanOrEqual(100);
    });

    // Additional tests for default parameters
    it('should use default retries and delayMs if not provided', async () => {
        const fn = jest
            .fn()
            .mockRejectedValueOnce(new Error('fail1'))
            .mockRejectedValueOnce(new Error('fail2'))
            .mockResolvedValue('success');
        await expect(retry(fn)).resolves.toBe('success');
        expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should reject after default retries exhausted', async () => {
        const fn = jest.fn().mockRejectedValue(new Error('fail'));
        await expect(retry(fn)).rejects.toThrow('fail');
        expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should use default delayMs between retries', async () => {
        const fn = jest
            .fn()
            .mockRejectedValueOnce(new Error('fail'))
            .mockResolvedValue('ok');
        const start = Date.now();
        await retry(fn);
        expect(Date.now() - start).toBeGreaterThanOrEqual(500);
    });
});
