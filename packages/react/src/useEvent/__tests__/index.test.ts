import { act, renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useEvent } from '../index';

describe('useEvent', () => {
    it('test useEvent', () => {
        const fn = jest.fn();
        const hook = renderHook(() => {
            const [count, setCount] = useState(0);
            const fnEvent = useEvent(() => fn(count));
            useEffect(() => {
                return () => {
                    fnEvent();
                };
            }, []);
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
