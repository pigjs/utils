import { isEmpty } from '../index';

describe('isEmpty', () => {
    it('should return `true` for null undefined "" [] {}', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty({})).toBe(true);
    });

    it('should return `false` for non-empty', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty(0)).toBe(false);
        expect(isEmpty({ '0': 1, length: 1 })).toBe(false);
        expect(isEmpty(new Date())).toBe(false);
        expect(isEmpty(new Error())).toBe(false);
        expect(isEmpty(/a/)).toBe(false);
        expect(isEmpty('0')).toBe(false);
        expect(isEmpty(Symbol)).toBe(false);
    });
});
