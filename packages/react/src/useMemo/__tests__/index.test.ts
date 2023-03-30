import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useMemo } from '../index';

describe('useMemo', () => {
    it('test useMemo', () => {
        let prevValue, nextValue;
        const hook = renderHook(() => {
            const [count, setCount] = useState(10);

            const value = useMemo(
                () => {
                    return count;
                },
                [count],
                (prev, next) => {
                    prevValue = prev[0];
                    nextValue = next[0];
                    return prev[0] > next[0];
                }
            );
            return {
                count,
                setCount,
                value
            };
        });
        expect(hook.result.current.value).toBe(10);
        act(() => hook.result.current.setCount(9));
        expect(hook.result.current.value).toBe(9);
        act(() => hook.result.current.setCount(11));
        expect(hook.result.current.value).toBe(9);
        expect(prevValue).toBe(9);
        expect(nextValue).toBe(11);
    });
    it('should not recompute the value when dependencies do not change', () => {
        let computeCount = 0;
        const hook = renderHook(() => {
            const [count, setCount] = useState(10);

            const value = useMemo(() => {
                computeCount++;
                return count;
            }, [count]);
            return {
                count,
                setCount,
                value
            };
        });

        expect(hook.result.current.value).toBe(10);
        expect(computeCount).toBe(1);

        act(() => hook.result.current.setCount(10));

        expect(hook.result.current.value).toBe(10);
        expect(computeCount).toBe(1);
    });
});
