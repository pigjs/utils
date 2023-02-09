import { isEmptyArray } from '../index';

describe('isEmptyArray', () => {
    it('should return `true` for emptyArray', () => {
        expect(isEmptyArray([])).toBe(true);
        expect(isEmptyArray(Object([]))).toBe(true);
    });

    it('should return `false` for non-emptyArray', () => {
        expect(isEmptyArray([1, 2, 3])).toBe(false);
        expect(isEmptyArray(0)).toBe(false);
        expect(isEmptyArray(undefined)).toBe(false);
        expect(isEmptyArray({ 0: [], length: 1 })).toBe(false);
        expect(isEmptyArray(new Date())).toBe(false);
        expect(isEmptyArray(new Error())).toBe(false);
        expect(isEmptyArray(/a/)).toBe(false);
        expect(isEmptyArray('0')).toBe(false);
        expect(isEmptyArray(Symbol)).toBe(false);
    });
});
