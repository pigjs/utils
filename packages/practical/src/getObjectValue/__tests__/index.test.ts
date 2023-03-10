import { getObjectValue } from '../index';

describe('getObjectValue', () => {
    const data = { a: { b: { c: 22 } } };

    it('data can be obtained normally', () => {
        expect(getObjectValue(data, 'a.b.c')).toBe(22);
        expect(getObjectValue(data, 'a.b')).toEqual({ c: 22 });
    });

    it('data not available should be returned undefined', () => {
        expect(getObjectValue(data, 'a.d')).toBeUndefined();
        expect(getObjectValue(data, 'a.b.e')).toBeUndefined();
        expect(getObjectValue(data, 'a.b.c.d')).toBeUndefined();
    });
});
