import { removeNonAlpha } from "../../string";

describe('removeNonAlpha', () => {
    it('removes non-alphabet characters', () => {
        expect(removeNonAlpha('a1b2c3!@#')).toBe('abc');
    });
});
