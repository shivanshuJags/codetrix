import { capitalize } from "../../string/capitalize"

describe("capitalize", () => {
    it("should capitalize the first lowercase letter", () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    it('should return the same string if first letter is already capital', () => {
        expect(capitalize('World')).toBe('World');
    });

    it('should return empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });
    it('should handle non-alpha starting chars', () => {
        expect(capitalize('123abc')).toBe('123abc');
    });

    it('should work with single characters', () => {
        expect(capitalize('a')).toBe('A');
        expect(capitalize('A')).toBe('A');
    });
})