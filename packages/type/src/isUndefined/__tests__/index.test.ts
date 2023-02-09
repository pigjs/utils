import { isUndefined } from '../index';

describe('isUndefined', () => {
    it('should return `true` for undefined', () => {
        expect(isUndefined(undefined)).toBe(true);
    });

    it('should return `false` for non-undefined', () => {
        expect(isUndefined([1, 2, 3])).toBe(false);
        expect(isUndefined(0)).toBe(false);
        expect(isUndefined(null)).toBe(false);
        expect(isUndefined({})).toBe(false);
        expect(isUndefined(new Date())).toBe(false);
        expect(isUndefined(new Error())).toBe(false);
        expect(isUndefined(/a/)).toBe(false);
        expect(isUndefined('0')).toBe(false);
        expect(isUndefined(Symbol)).toBe(false);
    });
});
