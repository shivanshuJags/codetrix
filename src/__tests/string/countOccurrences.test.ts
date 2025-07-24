import { countOccurrences } from "../../string";

describe('countOccurrences', () => {
    it('counts character occurrences', () => {
        expect(countOccurrences('banana', 'a')).toBe(3);
        expect(countOccurrences('hello', 'l')).toBe(2);
    });
});
