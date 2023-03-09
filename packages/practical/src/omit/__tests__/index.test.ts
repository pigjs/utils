import { omit } from '../index';

describe('omit', () => {
    const object = { a: 1, b: 2, c: 3 };

    it('should omit a key over a path', () => {
        expect(omit(object, ['a'])).toEqual({ b: 2, c: 3 });
    });

    it('should not mutate `object`', () => {
        const obj = { a: 1, b: 2 };
        omit(obj, ['a']);
        expect(obj).toEqual({ a: 1, b: 2 });
    });
});
