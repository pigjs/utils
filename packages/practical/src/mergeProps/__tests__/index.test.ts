import { mergeProps } from '../index';

describe('mergeProps', () => {
    const defaultProps = { name: 'pigjs', age: 24 };
    const props1 = { name: 'Jack', age: 20, email: 'jack@example.com' };
    const props2 = { name: 'Tom', height: 180 };
    const props3 = { name: null, age: null };

    it('should merge objects with default values', () => {
        expect(mergeProps(defaultProps, props1)).toEqual(props1);
    });

    it('should override default values with provided values', () => {
        expect(mergeProps(defaultProps, props2)).toEqual({ name: 'Tom', age: 24, height: 180 });
    });

    it('should handle null and undefined values', () => {
        expect(mergeProps(defaultProps, props3)).toEqual({ name: null, age: null });
    });

    it('should handle multiple objects', () => {
        expect(mergeProps(defaultProps, props1, props2)).toEqual({
            name: 'Tom',
            age: 20,
            email: 'jack@example.com',
            height: 180
        });
    });
});
