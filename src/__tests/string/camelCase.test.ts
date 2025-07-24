import { camelCase } from "../../string";

describe('camelCase', () => {
    it('converts strings to camelCase', () => {
        expect(camelCase('hello world')).toBe('helloWorld');
        expect(camelCase('hello_world')).toBe('helloWorld');
        expect(camelCase('hello-world')).toBe('helloWorld');
    });
});
