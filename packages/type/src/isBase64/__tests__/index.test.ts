import { isBase64 } from '../index';

describe('isBase64', () => {
    it('should return `true` for base64', () => {
        const base64 = btoa(unescape(encodeURIComponent('你好啊')));
        expect(isBase64(base64)).toBe(true);
    });

    it('should return `false` for non-base64', () => {
        expect(isBase64([1, 2, 3])).toBe(false);
        expect(isBase64(0)).toBe(false);
        expect(isBase64(undefined)).toBe(false);
        expect(isBase64(null)).toBe(false);
        expect(isBase64({})).toBe(false);
        expect(isBase64(new Date())).toBe(false);
        expect(isBase64(new Error())).toBe(false);
        expect(isBase64(/a/)).toBe(false);
        expect(isBase64('0')).toBe(false);
        expect(isBase64(Symbol)).toBe(false);
        expect(isBase64(new Blob())).toBe(false);
    });
});
