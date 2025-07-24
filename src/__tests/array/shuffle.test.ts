import { shuffle } from "../../array";

describe('shuffle', () => {
    test('returns array with same values (ignoring order)', () => {
        const original = [1, 2, 3, 4];
        const shuffled = shuffle(original);
        expect(shuffled).toHaveLength(original.length);
        expect(shuffled.sort()).toEqual([...original].sort()); // Same elements
    });
});
