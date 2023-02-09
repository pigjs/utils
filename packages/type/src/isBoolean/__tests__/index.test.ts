import { isBoolean } from '../index';

describe('isBoolean', () => {
    it('should return `true` for booleans', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(Object(true))).toBe(true);
        expect(isBoolean(Object(false))).toBe(true);
    });

    it('should return `false` for non-booleans', () => {
        expect(isBoolean([1, 2, 3])).toBe(false);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean(1)).toBe(false);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean({})).toBe(false);
        expect(isBoolean(new Date())).toBe(false);
        expect(isBoolean(new Error())).toBe(false);
        expect(isBoolean(/a/)).toBe(false);
        expect(isBoolean('0')).toBe(false);
        expect(isBoolean('1')).toBe(false);
        expect(isBoolean(Symbol)).toBe(false);
    });
});
