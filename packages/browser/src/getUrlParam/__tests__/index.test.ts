import { getUrlParam } from '../index';

describe('getUrlParam', () => {
    it('the url parameter should be fetched normally', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');

        expect(getUrlParam('id')).toBeNull();
        expect(getUrlParam('name')).toBe('pigjs');
    });
});
