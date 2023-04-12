import { act, renderHook } from '@testing-library/react';
import { useSetState } from '../index';

describe('useSetState', () => {
    const setUp = (initialValue) => {
        return renderHook(() => {
            const [state, setState] = useSetState(initialValue);
            return {
                state,
                setState
            } as const;
        });
    };

    it('empty object as initial value', () => {
        const hook = setUp({});
        expect(hook.result.current.state).toEqual({});
    });

    it('null as initial value', () => {
        const hook = setUp(null);
        expect(hook.result.current.state).toEqual(null);
    });

    it('nested object as initial value or state update', () => {
        const hook = setUp({ info: { name: 'pigjs', age: 24 } });
        expect(hook.result.current.state).toEqual({ info: { name: 'pigjs', age: 24 } });

        act(() => hook.result.current.setState({ info: { name: 'pigjs-updated', age: 25 } }));
        expect(hook.result.current.state).toEqual({ info: { name: 'pigjs-updated', age: 25 } });
    });

    it('multiple keys update', () => {
        const hook = setUp({ age: 24, name: 'pigjs' });
        expect(hook.result.current.state).toEqual({ age: 24, name: 'pigjs' });

        act(() => hook.result.current.setState({ age: 25, name: 'pigjs-updated' }));
        expect(hook.result.current.state).toEqual({ age: 25, name: 'pigjs-updated' });
    });

    it('initial values should be supported', () => {
        const hook = setUp({ age: 24 });
        expect(hook.result.current.state).toEqual({ age: 24 });
    });

    it('status updates should be supported', () => {
        const hook = setUp({ age: 24 });
        act(() => hook.result.current.setState({ age: 22 }));
        expect(hook.result.current.state).toEqual({ age: 22 });
    });
    it('object merging should be supported when updating', () => {
        const hook = setUp({ age: 24 });
        act(() => hook.result.current.setState({ name: 'pigjs' }));
        expect(hook.result.current.state).toEqual({ name: 'pigjs', age: 24 });
        act(() => hook.result.current.setState({ age: 22 }));
        expect(hook.result.current.state).toEqual({ name: 'pigjs', age: 22 });
    });

    it('function incoming should be supported when updating', () => {
        const hook = setUp({ age: 24 });
        act(() => hook.result.current.setState((state) => ({ ...state, age: state.age + 1 })));
        expect(hook.result.current.state).toEqual({ age: 25 });
    });

    it('callback should be supported', () => {
        const hook = setUp({ age: 24 });
        const fn = jest.fn();
        act(() => hook.result.current.setState({ age: 25 }, (state) => fn(state)));
        expect(fn).toBeCalledTimes(1);
        expect(fn).toHaveBeenCalledWith({ age: 25 });
    });

    it('State override should be supported when it is not an object', () => {
        // number
        const hook = setUp(0);
        act(() => hook.result.current.setState(2));
        expect(hook.result.current.state).toBe(2);
        // boolean
        const hook2 = setUp(false);
        act(() => hook2.result.current.setState(true));
        expect(hook2.result.current.state).toBe(true);
        // array
        const hook3 = setUp([1, 2]);
        act(() => hook3.result.current.setState([4, 5]));
        expect(hook3.result.current.state).toEqual([4, 5]);
        // string
        const hook4 = setUp('叶小秋');
        act(() => hook4.result.current.setState('pigjs'));
        expect(hook4.result.current.state).toBe('pigjs');
    });
});
