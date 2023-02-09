import { isNumber } from '../index';

describe('isNumber', () => {
    it('should return `true` for number', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(Object(0))).toBe(true);
    });

    it('should return `false` for non-number', () => {
        expect(isNumber([1, 2, 3])).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(new Date())).toBe(false);
        expect(isNumber(new Error())).toBe(false);
        expect(isNumber(/a/)).toBe(false);
        expect(isNumber('0')).toBe(false);
        expect(isNumber(Symbol)).toBe(false);
        expect(isNumber(NaN)).toBe(false);
    });
});
