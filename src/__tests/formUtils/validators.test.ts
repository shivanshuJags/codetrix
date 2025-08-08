import { isEqual, isNumeric, isRequired, matchesPattern, maxLength, minLength } from "../../formUtils";

describe('Form Helper Validations', () => {

    describe('isRequired', () => {
        it('should return true for non-empty values', () => {
            expect(isRequired('test')).toBe(true);
            expect(isRequired(0)).toBe(true);
            expect(isRequired(false)).toBe(true);
        });

        it('should return false for null, undefined, and empty string', () => {
            expect(isRequired('')).toBe(false);
            expect(isRequired(null)).toBe(false);
            expect(isRequired(undefined)).toBe(false);
        });
    });

    describe('minLength', () => {
        it('should return true when the value has equal length', () => {
            expect(minLength('hello', 5)).toBe(true);
        });

        it('should return true when the value has more than required length', () => {
            expect(minLength('hello world', 5)).toBe(true);
        });

        it('should return false when the value has less length', () => {
            expect(minLength('hi', 5)).toBe(false);
        });

        it('should return false when value is empty string', () => {
            expect(minLength('', 1)).toBe(false);
        });

        it('should return false when value is undefined', () => {
            expect(minLength(undefined as unknown as string, 5)).toBe(false);
        });

        it('should return false when value is null', () => {
            expect(minLength(null as unknown as string, 5)).toBe(false);
        });
    });

    describe('maxLength', () => {
        it('should return true when value is shorter than length', () => {
            expect(maxLength('abc', 5)).toBe(true);
        });

        it('should return true when value length equals length', () => {
            expect(maxLength('abcde', 5)).toBe(true);
        });

        it('should return false when value exceeds length', () => {
            expect(maxLength('abcdef', 5)).toBe(false);
        });

        it('should return false when value is undefined', () => {
            expect(maxLength(undefined as any, 5)).toBe(false);
        });

        it('should return false when value is null', () => {
            expect(maxLength(null as any, 5)).toBe(false);
        });
    });

    describe('matchesPattern', () => {
        it('should return true for valid pattern match', () => {
            expect(matchesPattern('abc123', /^[a-z0-9]+$/)).toBe(true);
        });

        it('should return false for invalid pattern match', () => {
            expect(matchesPattern('abc!', /^[a-z0-9]+$/)).toBe(false);
        });
    });

    describe('isNumeric', () => {
        it('should return true if string contains only numbers', () => {
            expect(isNumeric('123456')).toBe(true);
        });

        it('should return false for non-numeric strings', () => {
            expect(isNumeric('abc123')).toBe(false);
            expect(isNumeric('')).toBe(false);
        });
    });

    describe('isEqual', () => {
        it('should return true if both values are strictly equal', () => {
            expect(isEqual('123', '123')).toBe(true);
            expect(isEqual(1, 1)).toBe(true);
        });

        it('should return false if values are not equal', () => {
            expect(isEqual('123', 123)).toBe(false);
            expect(isEqual(true, false)).toBe(false);
        });
    });

});
