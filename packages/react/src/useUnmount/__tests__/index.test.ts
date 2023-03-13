import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useUnmount } from '../index';

describe('useUnmount', () => {
    it('test unmount', () => {
        const fn = jest.fn();
        const hook = renderHook(() => useUnmount(fn));
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
        hook.unmount();
        expect(fn).toBeCalledTimes(1);
    });

    it('the status within function should be up to date', () => {
        const fn = jest.fn();
        const hook = renderHook(() => {
            const [count, setCount] = useState(0);
            useUnmount(() => fn(count));
            return {
                count,
                setCount
            } as const;
        });
        act(() => {
            hook.result.current.setCount(1);
        });
        expect(hook.result.current.count).toBe(1);
        hook.unmount();
        expect(fn).toHaveBeenCalledWith(1);
    });
});
