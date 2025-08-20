import { tokenize } from "./text";

/**
 * Splits text into chunks of approximately `size` words.
 * Useful for embedding storage, vector DBs, and AI context management.
 *
 * @param str - The input text
 * @param size - Maximum words per chunk
 * @returns Array of text chunks
 *
 * @example
 * chunkText("This is a long text...", 5);
 */
export function chunkText(str: string, size: number): string[] {
    const words = tokenize(str);
    const chunks: string[] = [];

    for (let i = 0; i < words.length; i += size) {
        chunks.push(words.slice(i, i + size).join(" "));
    }
    return chunks;
}

/**
 * Computes the average vector (centroid).
 * Useful for clustering embeddings or document representation.
 *
 * @param vectors - Array of vectors
 * @returns The average vector
 *
 * @example
 * vectorAverage([[1,2],[3,4]]); // [2,3]
 */
export function vectorAverage(vectors: number[][]): number[] {
    if (vectors.length === 0) return [];
    const dim = vectors[0].length;
    const sum = new Array(dim).fill(0);

    for (const v of vectors) {
        v.forEach((val, i) => (sum[i] += val));
    }

    return sum.map((s) => s / vectors.length);
}

