import { setUrlParams } from '../index';

describe('setUrlParams', () => {
    it('test setUrlParams', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;
        setUrlParams({ name: 'pig', age: 22 });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/home?name=pig&age=22');
    });

    it('The undefined null string should be filtered when setting the parameter', () => {
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?name=pigjs&age=24');
        const fn = jest.fn();
        window.history.replaceState = fn;

        setUrlParams({ name: '', version: 'v1', age: null, sex: '' });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(null, '', '/home?version=v1');
    });
});
