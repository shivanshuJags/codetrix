import { reverseString } from "../../string";

describe('reverseString', () => {
    it('reverses the string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});
