import { isString } from '../index';

describe('isString', () => {
    it('should return `true` for string', () => {
        expect(isString('0')).toBe(true);
        expect(isString(Object('0'))).toBe(true);
    });

    it('should return `false` for non-string', () => {
        expect(isString([1, 2, 3])).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString(new Date())).toBe(false);
        expect(isString(new Error())).toBe(false);
        expect(isString(/a/)).toBe(false);
        expect(isString(0)).toBe(false);
        expect(isString(Symbol)).toBe(false);
    });
});
