import { normalizeText, tokenize, similarity, levenshteinDistance } from '../../ai/text';

describe('normalizeText', () => {
    it('should lowercase and remove punctuation', () => {
        expect(normalizeText('Hello, World!')).toBe('hello world');
    });

    it('should trim whitespace', () => {
        expect(normalizeText('  Trim me!  ')).toBe('trim me');
    });

    it('should handle empty string', () => {
        expect(normalizeText('')).toBe('');
    });

    it('should remove multiple punctuation marks', () => {
        expect(normalizeText('Hi!!! How are you???')).toBe('hi how are you');
    });
});

describe('tokenize', () => {
    it('should split normalized text into words', () => {
        expect(tokenize('AI is amazing!')).toEqual(['ai', 'is', 'amazing']);
    });

    it('should handle multiple spaces', () => {
        expect(tokenize('  spaced   out  ')).toEqual(['spaced', 'out']);
    });

    it('should return empty array for empty string', () => {
        expect(tokenize('')).toEqual([]);
    });

    it('should handle punctuation', () => {
        expect(tokenize('Hello, world!')).toEqual(['hello', 'world']);
    });
});

describe('similarity', () => {
    it('should return 1 for identical vectors', () => {
        expect(similarity([1, 2, 3], [1, 2, 3])).toBeCloseTo(1);
    });

    it('should return 0 for orthogonal vectors', () => {
        expect(similarity([1, 0], [0, 1])).toBeCloseTo(0);
    });

    it('should throw error for different length vectors', () => {
        expect(() => similarity([1, 2], [1])).toThrow('Vectors must be the same length');
    });

    it('should handle zero vectors', () => {
        expect(similarity([0, 0], [0, 0])).toBe(0);
    });
});

describe('levenshteinDistance', () => {
    it('should return 0 for identical strings', () => {
        expect(levenshteinDistance('test', 'test')).toBe(0);
    });

    it('should calculate correct distance', () => {
        expect(levenshteinDistance('kitten', 'sitting')).toBe(3);
        expect(levenshteinDistance('flaw', 'lawn')).toBe(2);
    });

    it('should handle empty strings', () => {
        expect(levenshteinDistance('', 'abc')).toBe(3);
        expect(levenshteinDistance('abc', '')).toBe(3);
    });

    it('should handle completely different strings', () => {
        expect(levenshteinDistance('abc', 'xyz')).toBe(3);
    });
});