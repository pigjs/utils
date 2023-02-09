import { isNull } from '../index';

describe('isNull', () => {
    it('should return `true` for null', () => {
        expect(isNull(null)).toBe(true);
    });

    it('should return `false` for non-null', () => {
        expect(isNull([1, 2, 3])).toBe(false);
        expect(isNull(0)).toBe(false);
        expect(isNull(undefined)).toBe(false);
        expect(isNull({})).toBe(false);
        expect(isNull(new Date())).toBe(false);
        expect(isNull(new Error())).toBe(false);
        expect(isNull(/a/)).toBe(false);
        expect(isNull('0')).toBe(false);
        expect(isNull(Symbol)).toBe(false);
    });
});
