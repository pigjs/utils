import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useUnmount } from '../index';

describe('useUnmount', () => {
    it('should call the function only once when unmounting', () => {
        const fn = jest.fn();
        const hook = renderHook(() => useUnmount(fn));
        expect(fn).toBeCalledTimes(0);
        hook.rerender();
        expect(fn).toBeCalledTimes(0);
        hook.unmount();
        expect(fn).toBeCalledTimes(1);
    });

    it('should have the updated state within the function when unmounting', () => {
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

    it('should handle asynchronous operations within the unmount function', async () => {
        const asyncFn = jest.fn(async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
        });
        const hook = renderHook(() => useUnmount(asyncFn));
        hook.unmount();
        expect(asyncFn).toHaveBeenCalledTimes(1);
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 150));
        });
    });
});
