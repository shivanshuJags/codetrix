import { pick } from "../../objects";

describe('pick', () => {
    it('should return a new object with only specified keys', () => {
        const original = { a: 1, b: 2, c: 3 };
        expect(pick(original, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });
});
