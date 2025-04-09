import { chunk } from "../../array/chunk"

describe("chunk", () => {
    it("should chunk array into correct parts", () => {
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    })
    it("should return empty array if input is empty", () => {
        expect(chunk([], 2)).toEqual([]);
    })
    it('should handle chunk size larger than array', () => {
        expect(chunk([1, 2], 10)).toEqual([[1, 2]]);
    });
    it('should returrn empty array if size of chunk is less/equal to 0', () => {
        expect(chunk([1, 2], 0)).toEqual([]);
    });
})