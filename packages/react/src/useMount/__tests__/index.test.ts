import { renderHook } from '@testing-library/react';
import { useMount } from '../index';

describe('useMount', () => {
    it('test mount', () => {
        const fn = jest.fn();

        const hook = renderHook(() => useMount(fn));
        expect(fn).toBeCalledTimes(1);
        hook.rerender();
        expect(fn).toBeCalledTimes(1);
        hook.unmount();
        expect(fn).toBeCalledTimes(1);

        renderHook(() => useMount(fn)).unmount();
        expect(fn).toBeCalledTimes(2);
    });
});
