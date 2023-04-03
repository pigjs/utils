import { isEmptyString } from '../index';

describe('isEmptyString', () => {
    it('should return `true` for emptyString', () => {
        expect(isEmptyString('')).toBe(true);
        expect(isEmptyString('  ')).toBe(true);
        expect(isEmptyString(Object(''))).toBe(true);
    });

    it('should return `false` for non-emptyString', () => {
        expect(isEmptyString([1, 2, 3])).toBe(false);
        expect(isEmptyString(0)).toBe(false);
        expect(isEmptyString(undefined)).toBe(false);
        expect(isEmptyString({ 0: [], length: 1 })).toBe(false);
        expect(isEmptyString(new Date())).toBe(false);
        expect(isEmptyString(new Error())).toBe(false);
        expect(isEmptyString(/a/)).toBe(false);
        expect(isEmptyString('0')).toBe(false);
        expect(isEmptyString(Symbol)).toBe(false);
    });
});
