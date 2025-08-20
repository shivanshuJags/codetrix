/**
 * Normalizes text by lowercasing, trimming, and removing punctuation.
 * Useful for search, embeddings, and text preprocessing.
 *
 * @param str - The input string
 * @returns A cleaned/normalized string
 *
 * @example
 * normalizeText("Hello, World!"); // "hello world"
 */
export function normalizeText(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, ""); // remove punctuation
}

/**
 * Splits a string into tokens (words). Supports simple word tokenization.
 *
 * @param str - The input string
 * @returns An array of tokens
 *
 * @example
 * tokenize("AI is amazing!"); // ["ai", "is", "amazing"]
 */
export function tokenize(str: string): string[] {
    return normalizeText(str).split(/\s+/).filter(Boolean);
}

/**
 * Computes cosine similarity between two vectors.
 * Useful for embeddings, search, and AI ranking.
 *
 * @param a - First numeric vector
 * @param b - Second numeric vector
 * @returns A similarity score between -1 and 1
 *
 * @example
 * similarity([1,2,3], [1,2,3]); // 1
 * similarity([1,0], [0,1]); // 0
 */
export function similarity(a: number[], b: number[]): number {
    if (a.length !== b.length) throw new Error("Vectors must be the same length");

    const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));

    return magA && magB ? dot / (magA * magB) : 0;
}

/**
 * Calculates Levenshtein distance (edit distance) between two strings.
 * Useful for fuzzy search, spellcheck, and autocomplete.
 *
 * @param a - First string
 * @param b - Second string
 * @returns The edit distance (number of changes needed)
 *
 * @example
 * levenshteinDistance("kitten", "sitting"); // 3
 */
export function levenshteinDistance(a: string, b: string): number {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[a.length][b.length];
}
