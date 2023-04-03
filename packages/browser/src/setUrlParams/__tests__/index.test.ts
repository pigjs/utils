import { setUrlParams } from '../index';

describe('setUrlParams', () => {
    it('sets parameters on the current URL correctly', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;
        setUrlParams({ name: 'pig', age: 22 });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/home?name=pig&age=22');
    });

    it('filters out undefined, null, and empty string parameters', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;

        setUrlParams({ name: '', version: 'v1', age: null, sex: '' });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/home?version=v1');
    });

    it('can accept a custom filter function to filter parameters', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;

        const filter = (params) => {
            const filteredParams = { ...params };
            delete filteredParams.age;
            return filteredParams;
        };

        setUrlParams({ name: 'pig', age: 22 }, filter);

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/home?name=pig');
    });

    it('can accept a custom URL to set parameters on', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;

        const url = 'https://www.pigjs.com/about';
        setUrlParams({ name: 'pig', age: 22 }, null, url);

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/about?name=pig&age=22');
    });
});
