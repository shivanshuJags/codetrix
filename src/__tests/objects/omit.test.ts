import { omit } from "../../objects";

describe('omit', () => {
    it('should remove specified keys from object', () => {
        const original = { a: 1, b: 2, c: 3 };
        expect(omit(original, ['b'])).toEqual({ a: 1, c: 3 });
    });
});
