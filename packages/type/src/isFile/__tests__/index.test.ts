import { isFile } from '../index';

describe('isFile', () => {
    it('should return `true` for File', async () => {
        const blob = new Blob(['file'], { type: 'text/plain;charset=utf-8' });
        const file = new window.File([blob], 'file', { type: 'text/plain' });
        expect(isFile(file)).toBe(true);
    });

    it('should return `false` for non-File', () => {
        expect(isFile([1, 2, 3])).toBe(false);
        expect(isFile(0)).toBe(false);
        expect(isFile(undefined)).toBe(false);
        expect(isFile({ 0: [], length: 1 })).toBe(false);
        expect(isFile(new Date())).toBe(false);
        expect(isFile(new Error())).toBe(false);
        expect(isFile(/a/)).toBe(false);
        expect(isFile('0')).toBe(false);
        expect(isFile(Symbol)).toBe(false);
    });
});
