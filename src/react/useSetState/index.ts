import React from 'react';
import { isFunction } from '../../type/isFunction';
import { useEvent } from '../useEvent';

/** 和 class this.setState 功能相同 */
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

    const setMergeState = useEvent(
        (patch: Partial<T> | ((prevState: T) => Partial<T>), callback?: (prevState: T) => void) => {
            setState((prevState) => ({ ...prevState, ...(isFunction(patch) ? patch(prevState) : patch) }));
            if (callback) {
                callbackRef.current = callback;
            }
        }
    );

    return [state, setMergeState];
}
