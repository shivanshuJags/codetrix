import { isEmpty } from "../../objects/isEmpty"

describe('isEmpty', () => {
    describe('isEmpty - value check', () => {
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
    });

    describe('isEmpty - Map and Set checks', () => {
        test('should return true for an empty Map', () => {
            const emptyMap = new Map();
            expect(isEmpty(emptyMap)).toBe(true); // ✅ value.size === 0
        });

        test('should return false for a non-empty Map', () => {
            const map = new Map([['key', 'value']]);
            expect(isEmpty(map)).toBe(false); // ❌ value.size !== 0
        });

        test('should return true for an empty Set', () => {
            const emptySet = new Set();
            expect(isEmpty(emptySet)).toBe(true); // ✅ value.size === 0
        });

        test('should return false for a non-empty Set', () => {
            const set = new Set(['value']);
            expect(isEmpty(set)).toBe(false); // ❌ value.size !== 0
        });
    });
})
