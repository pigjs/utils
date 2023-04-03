import { getUrlParam } from '../index';

describe('getUrlParam', () => {
    // 保存原始 window.location
    const originalWindowLocation = window.location;

    // 在每个测试用例之前重置 window.location
    beforeEach(() => {
        // @ts-ignore
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home');
    });

    // 在所有测试用例结束后恢复原始 window.location
    afterAll(() => {
        window.location = originalWindowLocation;
    });

    it('the url parameter should be fetched normally', () => {
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');

        expect(getUrlParam('id')).toBe('');
        expect(getUrlParam('name')).toBe('pigjs');
    });

    it('should handle special characters in parameter values', () => {
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?city=New%20York&symbol=%2B');

        expect(getUrlParam('city')).toBe('New York');
        expect(getUrlParam('symbol')).toBe('+');
    });

    it('should handle empty parameter values', () => {
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=&age=24');

        expect(getUrlParam('name')).toBe('');
    });

    test('get parameters from a specific URL', () => {
        const url = 'https://example.com/?page=2#section1?lang=zh-CN';
        expect(getUrlParam('page', url)).toBe('2');
        expect(getUrlParam('lang', url)).toBe('zh-CN');
        expect(getUrlParam('name', url)).toBe(''); // URL 中没有 name 参数
    });

    test('handle empty parameter name', () => {
        expect(getUrlParam('')).toBe('');
        expect(getUrlParam('   ')).toBe('');
    });
});
