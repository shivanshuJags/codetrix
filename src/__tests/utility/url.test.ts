import { getQueryParam, isValidUrl, removeQueryParam, setQueryParam } from "../../utility";

describe('URL Utilities', () => {
    const sampleUrl = 'https://example.com/page?name=chatgpt&lang=en';

    test('getQueryParam returns correct value', () => {
        expect(getQueryParam(sampleUrl, 'name')).toBe('chatgpt');
        expect(getQueryParam(sampleUrl, 'lang')).toBe('en');
        expect(getQueryParam(sampleUrl, 'missing')).toBeNull();
    });

    test('setQueryParam adds a new parameter', () => {
        const updatedUrl = setQueryParam(sampleUrl, 'new', '123');
        expect(getQueryParam(updatedUrl, 'new')).toBe('123');
    });

    test('setQueryParam updates existing parameter', () => {
        const updatedUrl = setQueryParam(sampleUrl, 'name', 'openai');
        expect(getQueryParam(updatedUrl, 'name')).toBe('openai');
    });

    test('removeQueryParam deletes specified parameter', () => {
        const updatedUrl = removeQueryParam(sampleUrl, 'lang');
        expect(getQueryParam(updatedUrl, 'lang')).toBeNull();
        expect(getQueryParam(updatedUrl, 'name')).toBe('chatgpt'); // remains
    });

    test('isValidUrl returns true for valid URLs', () => {
        expect(isValidUrl('https://example.com')).toBe(true);
        expect(isValidUrl('http://localhost:3000')).toBe(true);
    });

    test('isValidUrl returns false for invalid URLs', () => {
        expect(isValidUrl('not a url')).toBe(false);
        expect(isValidUrl('')).toBe(false);
    });
});
