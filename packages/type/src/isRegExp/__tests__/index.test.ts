import { isRegExp } from '../index';

describe('isRegExp', () => {
    it('should return `true` for regExp', () => {
        expect(isRegExp(/a/)).toBe(true);
        expect(isRegExp(new RegExp(/a/))).toBe(true);
    });

    it('should return `false` for non-regExp', () => {
        expect(isRegExp([1, 2, 3])).toBe(false);
        expect(isRegExp(null)).toBe(false);
        expect(isRegExp(undefined)).toBe(false);
        expect(isRegExp({})).toBe(false);
        expect(isRegExp(new Date())).toBe(false);
        expect(isRegExp(new Error())).toBe(false);
        expect(isRegExp('0')).toBe(false);
        expect(isRegExp(Symbol)).toBe(false);
        expect(isRegExp(0)).toBe(false);
    });
});
