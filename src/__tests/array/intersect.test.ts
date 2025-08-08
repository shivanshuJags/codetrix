import { intersect } from "../../array";

describe('intersect', () => {
    it('should return common elements from multiple arrays', () => {
        expect(intersect([1, 2, 3], [2, 3, 4], [3, 2, 5])).toEqual([2, 3]);
    });

    it('should return empty array when there is no common element', () => {
        expect(intersect([1, 2], [3, 4])).toEqual([]);
    });

    it('should return empty array when called with no arguments', () => {
        expect(intersect()).toEqual([]);
    });

    it('should return first array when only one array is passed', () => {
        expect(intersect([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays inside arguments', () => {
        expect(intersect([1, 2], [], [2, 3])).toEqual([]);
    });
});
