import { isEmpty } from "../../objects/isEmpty"

describe('isEmpty', () => {
    it("should return true for empty object", () => {
        expect(isEmpty({})).toBe(true);
    })
    it("should return true for empty object", () => {
        expect(isEmpty([])).toBe(true);
    })
    it('should return true for null or undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });
    it('should return false for non-empty string', () => {
        expect(isEmpty('hello')).toBe(false);
    });

    it('should return false for number or boolean', () => {
        expect(isEmpty(0)).toBe(false);
        expect(isEmpty(false)).toBe(false);
    });
})