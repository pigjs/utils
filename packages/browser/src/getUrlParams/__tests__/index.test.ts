import { getUrlParams } from '../index';

describe('getUrlParams', () => {
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
        expect(getUrlParams()).toEqual({ name: 'pigjs', age: '24' });
    });

    it('an empty object should be returned if no argument can be found', () => {
        expect(getUrlParams()).toEqual({});
    });

    it('returns an object with URL parameters when a valid URL is passed as argument', () => {
        const url = 'https://example.com/?id=123&name=foo';
        expect(getUrlParams(url)).toEqual({ id: '123', name: 'foo' });
    });
});
