import { intersect } from "../../array";

describe('intersect', () => {
    it('returns common values in both arrays', () => {
        expect(intersect([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });
});
