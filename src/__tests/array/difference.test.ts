import { difference } from "../../array";

describe('difference', () => {
    it('returns values in arr1 not in arr2', () => {
        expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });
});
