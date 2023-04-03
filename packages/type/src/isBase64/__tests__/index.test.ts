import { isBase64 } from '../index';

describe('isBase64', () => {
    it('should return `true` for base64', () => {
        const base64 = btoa(unescape(encodeURIComponent('你好啊')));
        expect(isBase64(base64)).toBe(true);
    });

    it('should return `false` for non-base64 encoded string', () => {
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
        expect(isBase64('Hello, world!')).toBe(false);
    });
    it('should return `false` for base64 with invalid characters', () => {
        expect(isBase64('+/=')).toBe(false); // 包含 "+" 符号
        expect(isBase64('AA==AA==')).toBe(false); // 包含 "==" 字符
        expect(isBase64('AAAA\nAAAAA')).toBe(false); // 包含换行符
    });
    it('should return `true` for mixed-case base64', () => {
        const base64 = 'SGVsbG8sIHdvcmxkIQ=='; // "Hello, world!" 的 mixed-case 编码
        expect(isBase64(base64)).toBe(true);
    });
});
