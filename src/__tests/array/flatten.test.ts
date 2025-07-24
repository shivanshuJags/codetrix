import { flatten } from "../../array";

describe('flatten', () => {
    it('flattens nested arrays', () => {
        expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    });
});
