import { truncate } from "../../string";

describe('truncate', () => {
    it('truncates string with ellipsis', () => {
        expect(truncate('Hello world!', 5)).toBe('Hello...');
    });

    it('returns original if within length', () => {
        expect(truncate('Hi', 5)).toBe('Hi');
    });
});
