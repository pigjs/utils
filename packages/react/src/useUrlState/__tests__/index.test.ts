import { setUrlParams } from '@pigjs/browser-utils';
import { act, renderHook } from '@testing-library/react';
import { useUrlState } from '../index';

describe('useUrlState', () => {
    const setUp = <T extends Record<string, any>>(initialState: T) => {
        // useUrlState 会合并 url上的 params,所以先置空一下之前的params
        setUrlParams({}, () => ({}));
        return renderHook(() => {
            const [state, setState] = useUrlState<T>(initialState);
            return {
                state,
                setState
            } as const;
        });
    };

    it('initial values should be supported', () => {
        const hook = setUp({ name: 'pig' });
        expect(hook.result.current.state).toEqual({ name: 'pig' });
    });

    it('state modification should be supported', () => {
        const hook = setUp({ age: 22 });
        act(() => hook.result.current.setState({ age: 22 }));
        expect(hook.result.current.state).toEqual({ age: 22 });
    });

    it('the change state should support function changes', () => {
        const hook = setUp({ count: 0 });
        act(() => hook.result.current.setState((state) => ({ ...state, count: 1 })));
        expect(hook.result.current.state).toEqual({ count: 1 });
    });

    it('callback should be supported', () => {
        const hook = setUp({ sex: '22' });
        const fn = jest.fn();
        act(() => hook.result.current.setState({ sex: '22' }, fn));
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith({ sex: '22' });
    });
});
