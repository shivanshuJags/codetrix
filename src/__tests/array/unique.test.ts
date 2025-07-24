import { unique } from "../../array";

describe('unique', () => {
    it('removes duplicates', () => {
        expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});
