import { isFunction } from '../index';

describe('isFunction', () => {
    it('should return `true` for function', () => {
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(Object(() => {}))).toBe(true);
        expect(isFunction(new Function())).toBe(true);
        expect(isFunction(eval('()=>{}'))).toBe(true);
    });

    it('should return `false` for non-function', () => {
        expect(isFunction([1, 2, 3])).toBe(false);
        expect(isFunction(0)).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(new Date())).toBe(false);
        expect(isFunction(new Error())).toBe(false);
        expect(isFunction(/a/)).toBe(false);
        expect(isFunction('0')).toBe(false);
    });
});
