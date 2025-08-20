import { chunkText, vectorAverage } from "../../ai/data";

// Mock tokenize function for chunkText
jest.mock("../../ai/text", () => ({
    tokenize: (str: string) => str.split(/\s+/).filter(Boolean),
}));

describe("chunkText", () => {
    it("splits text into chunks of given size", () => {
        const text = "The quick brown fox jumps over the lazy dog";
        expect(chunkText(text, 3)).toEqual([
            "The quick brown",
            "fox jumps over",
            "the lazy dog",
        ]);
    });

    it("returns empty array for empty string", () => {
        expect(chunkText("", 5)).toEqual([]);
    });

    it("handles chunk size larger than word count", () => {
        const text = "Hello world";
        expect(chunkText(text, 10)).toEqual(["Hello world"]);
    });

    it("handles chunk size of 1", () => {
        const text = "a b c";
        expect(chunkText(text, 1)).toEqual(["a", "b", "c"]);
    });
});

describe("vectorAverage", () => {
    it("computes average of vectors", () => {
        const vectors = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(vectorAverage(vectors)).toEqual([4, 5, 6]);
    });

    it("returns empty array for empty input", () => {
        expect(vectorAverage([])).toEqual([]);
    });

    it("handles single vector", () => {
        expect(vectorAverage([[10, 20]])).toEqual([10, 20]);
    });

    it("handles vectors with negative numbers", () => {
        const vectors = [
            [-1, -2],
            [1, 2],
        ];
        expect(vectorAverage(vectors)).toEqual([0, 0]);
    });

    it("handles vectors with decimals", () => {
        const vectors = [
            [1.5, 2.5],
            [2.5, 3.5],
        ];
        expect(vectorAverage(vectors)).toEqual([2, 3]);
    });
});