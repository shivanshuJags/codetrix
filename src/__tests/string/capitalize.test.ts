import { capitalize } from "../../string";

describe('capitalize', () => {
    it('capitalizes the first letter', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
    });

    it('returns empty string for empty input', () => {
        expect(capitalize('')).toBe('');
    });
});
