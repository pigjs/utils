import { isFunction } from '@pigjs/type-utils';
import React from 'react';
import { useEvent } from '../useEvent';

export type SetMergeStateType<T> = (state: T | ((state) => T), callback?: (state: T) => void) => void;

/**
 * 和 class this.setState 功能相同
 *
 * @example
 *
 *  const [state,setState] = useSetState({count:0})
 *  setState({count:1},(state)=>xxx)
 *  setState((state)=>{...state,count:2})
 */
export function useSetState<T extends object>(
    initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>), callback?: (prevState: T) => void) => void] {
    const [state, setState] = React.useState(initialState);
    const callbackRef = React.useRef(null);

    React.useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(state);
            callbackRef.current = null;
        }
    }, [state]);

    const setMergeState: SetMergeStateType<T> = useEvent(
        (patch: Partial<T> | ((prevState: T) => Partial<T>), callback?: (prevState: T) => void) => {
            setState((prevState) => ({ ...prevState, ...(isFunction(patch) ? patch(prevState) : patch) }));
            if (callback) {
                callbackRef.current = callback;
            }
        }
    );

    return [state, setMergeState];
}
