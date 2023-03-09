import { isNil } from '../index';

describe('isNil', () => {
    it('should return `true` for `null` `nil`', () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
    });

    it('should return `false` for non-null non-nil', () => {
        expect(isNil(true)).toBe(false);
        expect(isNil(0)).toBe(false);
        expect(isNil([])).toBe(false);
        expect(isNil({ length: 0 })).toBe(false);
        expect(isNil(new Date())).toBe(false);
        expect(isNil(new Error())).toBe(false);
        expect(isNil(/a/)).toBe(false);
        expect(isNil('0')).toBe(false);
        expect(isNil(Symbol)).toBe(false);
    });
});
