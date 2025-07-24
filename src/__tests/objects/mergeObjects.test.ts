import { mergeObjects } from "../../objects";

describe('mergeObjects', () => {
    it('should merge two objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const merged = mergeObjects<Record<string, any>>(obj1, obj2);

        expect(merged).toEqual({ a: 1, b: 2 });
    });

    it('should override keys in case of conflict', () => {
        const merged = mergeObjects({ a: 1 }, { a: 5 });
        expect(merged).toEqual({ a: 5 });
    });
});
