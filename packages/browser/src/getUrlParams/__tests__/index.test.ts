import { setUrlParams } from '../../setUrlParams';
import { getUrlParams } from '../index';

describe('getUrlParams', () => {
    it('data modified by setUrlParams should be supported', () => {
        setUrlParams({ count: 1 });
        expect(getUrlParams()).toEqual({ count: '1' });
    });

    it('the url parameter should be fetched normally', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        expect(getUrlParams()).toEqual({ name: 'pigjs', age: '24' });
    });

    it('an empty object should be returned if no argument can be found', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home');
        expect(getUrlParams()).toEqual({});
    });
});
