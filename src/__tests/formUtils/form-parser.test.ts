import { extractFormValues, trimFormValues } from "../../formUtils";

describe('extractFormValues', () => {
    it('should extract values from form object', () => {
        const form = {
            name: { value: 'Alice' },
            age: { value: 30 },
            email: { value: 'alice@example.com' }
        };
        const result = extractFormValues(form);
        expect(result).toEqual({
            name: 'Alice',
            age: 30,
            email: 'alice@example.com'
        });
    });

    it('should return empty object for empty form', () => {
        expect(extractFormValues({})).toEqual({});
    });

    it('should handle null or undefined values gracefully', () => {
        const form = {
            name: { value: null },
            age: { value: undefined }
        };
        const result = extractFormValues(form);
        expect(result).toEqual({ name: null, age: undefined });
    });
});

describe('trimFormValues', () => {
    it('should trim all string values', () => {
        const values = {
            name: ' Alice ',
            email: ' alice@example.com ',
            age: 30
        };
        const result = trimFormValues(values);
        expect(result).toEqual({
            name: 'Alice',
            email: 'alice@example.com',
            age: 30
        });
    });

    it('should not modify non-string values', () => {
        const values = {
            age: 25,
            isMember: true,
            metadata: { source: 'referral' }
        };
        const result = trimFormValues(values);
        expect(result).toEqual(values);
    });

    it('should return empty object if input is empty', () => {
        expect(trimFormValues({})).toEqual({});
    });
});
