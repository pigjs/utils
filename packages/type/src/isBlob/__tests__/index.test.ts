import { isBlob } from '../index';

describe('isBlob', () => {
    it('should return `true` for blob', () => {
        expect(isBlob(new Blob())).toBe(true);
    });

    it('should return `false` for non-blob', () => {
        expect(isBlob([1, 2, 3])).toBe(false);
        expect(isBlob(0)).toBe(false);
        expect(isBlob(undefined)).toBe(false);
        expect(isBlob(null)).toBe(false);
        expect(isBlob({})).toBe(false);
        expect(isBlob(new Date())).toBe(false);
        expect(isBlob(new Error())).toBe(false);
        expect(isBlob(/a/)).toBe(false);
        expect(isBlob('0')).toBe(false);
        expect(isBlob(Symbol)).toBe(false);
    });
});
