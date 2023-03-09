import { isObject } from '../index';

describe('isObject', () => {
    it('should return `true` for object', () => {
        expect(isObject({})).toBe(true);
        expect(isObject(Object({}))).toBe(true);
        expect(isObject(Object({ length: 0 }))).toBe(true);
    });

    it('should return `false` for non-object', () => {
        expect(isObject([1, 2, 3])).toBe(false);
        expect(isObject(0)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(new Date())).toBe(false);
        expect(isObject(new Error())).toBe(false);
        expect(isObject(/a/)).toBe(false);
        expect(isObject('0')).toBe(false);
        expect(isObject(Symbol)).toBe(false);
        expect(isObject(() => {})).toBe(false);
        expect(isObject(Object(0))).toBe(false);
        expect(isObject(Object('0'))).toBe(false);
        expect(isObject(Object(false))).toBe(false);
        expect(isObject(Object([]))).toBe(false);
    });
});
