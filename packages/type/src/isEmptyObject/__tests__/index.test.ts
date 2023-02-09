import { isEmptyObject } from '../index';

describe('isEmptyObject', () => {
    it('should return `true` for emptyObject', () => {
        expect(isEmptyObject({})).toBe(true);
        expect(isEmptyObject(Object({}))).toBe(true);
    });

    it('should return `false` for non-emptyObject', () => {
        expect(isEmptyObject([1, 2, 3])).toBe(false);
        expect(isEmptyObject(0)).toBe(false);
        expect(isEmptyObject(undefined)).toBe(false);
        expect(isEmptyObject({ 0: [], length: 1 })).toBe(false);
        expect(isEmptyObject(new Date())).toBe(false);
        expect(isEmptyObject(new Error())).toBe(false);
        expect(isEmptyObject(/a/)).toBe(false);
        expect(isEmptyObject('0')).toBe(false);
        expect(isEmptyObject(Symbol)).toBe(false);
    });
});
