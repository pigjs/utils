import { isMap } from '../index';

describe('isMap', () => {
    it('should return `true` for Map', () => {
        expect(isMap(new Map())).toBe(true);
    });

    it('should return `false` for non-Map', () => {
        expect(isMap([1, 2, 3])).toBe(false);
        expect(isMap(0)).toBe(false);
        expect(isMap(undefined)).toBe(false);
        expect(isMap(null)).toBe(false);
        expect(isMap({})).toBe(false);
        expect(isMap(new Date())).toBe(false);
        expect(isMap(new Error())).toBe(false);
        expect(isMap(/a/)).toBe(false);
        expect(isMap('0')).toBe(false);
        expect(isMap(Symbol)).toBe(false);
    });
});
