import { act, renderHook } from '@testing-library/react';
import { usePropsValue } from '../index';

describe('usePropsValue', () => {
    const setUp = (initialProps?: any) => {
        return renderHook((props) => {
            const [value, setValue] = usePropsValue(props || initialProps);
            return {
                value,
                setValue
            } as const;
        });
    };

    it('should support controlled', () => {
        const fn = jest.fn();
        const hook = setUp({ value: 22, onChange: (value) => fn(value) });
        expect(hook.result.current.value).toBe(22);
        act(() => hook.result.current.setValue(23));
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(23);
        hook.rerender({ value: 23, onChange: (value) => fn(value) });
        expect(hook.result.current.value).toBe(23);
    });
    it('uncontrolled should be supported', () => {
        const hook = setUp();
        const fn = jest.fn();
        hook.rerender({ onChange: () => fn() });
        expect(hook.result.current.value).toBeUndefined();
        act(() => hook.result.current.setValue(22));
        expect(hook.result.current.value).toBe(22);
        expect(fn).toBeCalledTimes(1);
    });

    it('default values should be supported', () => {
        const hook = setUp({ defaultValue: 22 });
        expect(hook.result.current.value).toBe(22);
    });

    it('function updates should be supported', () => {
        const hook = setUp({ defaultValue: 22 });
        act(() => hook.result.current.setValue((state) => state + 1));
        expect(hook.result.current.value).toBe(23);
    });
});
