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

    it('should handle controlled components correctly', () => {
        const fn = jest.fn();
        const hook = setUp({ value: 22, onChange: (value) => fn(value) });
        expect(hook.result.current.value).toBe(22);
        act(() => hook.result.current.setValue(23));
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(23);
        hook.rerender({ value: 23, onChange: (value) => fn(value) });
        expect(hook.result.current.value).toBe(23);
    });
    it('should handle uncontrolled components correctly', () => {
        const fn = jest.fn();
        const hook = setUp({ onChange: (value) => fn(value) });

        expect(hook.result.current.value).toBeUndefined();

        act(() => hook.result.current.setValue(22));

        expect(hook.result.current.value).toBe(22);
        expect(fn).toBeCalledTimes(1);
        expect(fn).toHaveBeenCalledWith(22);
    });

    it('should support default values', () => {
        const hook = setUp({ defaultValue: 22 });
        expect(hook.result.current.value).toBe(22);
    });

    it('should support function updates', () => {
        const hook = setUp({ defaultValue: 22 });
        act(() => hook.result.current.setValue((state) => state + 1));
        expect(hook.result.current.value).toBe(23);
    });

    it('should support undefined as a default value', () => {
        const hook = setUp({ defaultValue: undefined });

        expect(hook.result.current.value).toBeUndefined();
    });
});
