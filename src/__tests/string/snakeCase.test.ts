import { snakeCase } from "../../string";

describe('snakeCase', () => {
    it('converts string to snake_case', () => {
        expect(snakeCase('helloWorld')).toBe('hello_world');
        expect(snakeCase('Hello World')).toBe('hello_world');
        expect(snakeCase('hello-world')).toBe('hello_world');
    });
});
