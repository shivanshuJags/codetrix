import { countOccurrence } from "../../string";

describe('countOccurrences', () => {
    it('counts character occurrences', () => {
        expect(countOccurrence('banana', 'a')).toBe(3);
        expect(countOccurrence('hello', 'l')).toBe(2);
    });
});
