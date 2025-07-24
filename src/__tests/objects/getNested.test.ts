import { getNested } from "../../objects";

describe('getNested', () => {
    const data = { a: { b: { c: 42 } } };

    it('should return nested value by path', () => {
        expect(getNested(data, 'a.b.c')).toBe(42);
    });

    it('should return undefined for invalid path', () => {
        expect(getNested(data, 'a.x.c')).toBeUndefined();
    });
});
