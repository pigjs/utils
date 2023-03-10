import { mergeProps } from '../index';

describe('mergeProps', () => {
    const defaultProps = { name: 'pigjs', age: 24 };
    it('props properties that do not exist should use the default', () => {
        expect(mergeProps(defaultProps, {})).toEqual(defaultProps);
        expect(mergeProps(defaultProps, { name: null })).toEqual({ name: null, age: 24 });
    });
});
