import { kebabCase } from "../../string";

describe('kebabCase', () => {
    it('converts string to kebab-case', () => {
        expect(kebabCase('helloWorld')).toBe('hello-world');
        expect(kebabCase('Hello World')).toBe('hello-world');
        expect(kebabCase('hello_world')).toBe('hello-world');
    });
});
