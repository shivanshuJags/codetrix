import { camelCase } from "../../string";

describe('camelCase', () => {
    it('converts strings to camelCase', () => {
        expect(camelCase('hello world')).toBe('helloWorld');
        expect(camelCase('hello_world')).toBe('helloWorld');
        expect(camelCase('hello-world')).toBe('helloWorld');
    });

    it('should return correct value when trailing separator exists (blank condition)', () => {
        const input = 'hello-';
        const output = camelCase(input);
        expect(output).toBe('hello');
    });

    it('should convert initial uppercase character to lowercase', () => {
        const input = 'Hello-world';
        const output = camelCase(input);
        expect(output).toBe('helloWorld');
    });
});
