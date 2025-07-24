import { deepClone } from "../../objects";

describe('deepClone', () => {
    it('should create a deep copy of an object', () => {
        const original = { a: 1, b: { c: 2 } };
        const clone = deepClone(original);

        expect(clone).toEqual(original);
        expect(clone).not.toBe(original); // Different reference
        expect(clone.b).not.toBe(original.b);
    });
});
