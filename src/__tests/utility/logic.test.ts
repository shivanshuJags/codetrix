import { isEmpty } from "../../objects";
import { ifElse, isBoolean, isFunction, isNil, isObject, isPromise, once } from "../../utility";

describe('logic utilities', () => {
    test('isNil', () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
        expect(isNil(0)).toBe(false);
        expect(isNil('')).toBe(false);
    });

    test('isEmpty', () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty({})).toBe(true);
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty('text')).toBe(false);
        expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('ifElse', () => {
        expect(ifElse(true, 'yes', 'no')).toBe('yes');
        expect(ifElse(false, 'yes', 'no')).toBe('no');
    });

    test('isFunction', () => {
        expect(isFunction(() => { })).toBe(true);
        expect(isFunction(function () { })).toBe(true);
        expect(isFunction('not a function')).toBe(false);
    });

    test('isObject', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject('text')).toBe(false);
    });

    test('isBoolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean('true')).toBe(false);
    });

    test('isPromise', () => {
        expect(isPromise(Promise.resolve())).toBe(true);
        expect(isPromise({ then: () => { } })).toBe(true); // duck typing
        expect(isPromise(null)).toBe(false);
        expect(isPromise({})).toBe(false);
    });

    test('once', () => {
        let count = 0;
        const fn = once(() => ++count);
        expect(fn()).toBe(1);
        expect(fn()).toBe(1);
        expect(fn()).toBe(1);
        expect(count).toBe(1);
    });
});
