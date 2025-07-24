import { compact } from "../../array";

describe('compact', () => {
    it('removes falsy values', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });
});
