import { isFunction, isObject } from '@pigjs/type-utils';
import React from 'react';
import { useEvent } from '../useEvent';

export type SetMergeStateType<T> = (state: T | ((state: T) => T), callback?: (state: T) => void) => void;

/**
 * 和 class this.setState 功能相同
 *
 * @example
 *
 *  const [state,setState] = useSetState({count:0})
 *  setState({count:1},(state)=>xxx)
 *  setState((state)=>{...state,count:2})
 */
export function useSetState<T>(initialState: T = {} as T): [T, SetMergeStateType<T>] {
    const [state, setState] = React.useState(initialState);
    const callbackRef = React.useRef(null);

    React.useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(state);
            callbackRef.current = null;
        }
    }, [state]);

    const setMergeState: SetMergeStateType<T> = useEvent((patch, callback) => {
        setState((prevState) => {
            const value = isFunction(patch) ? patch(prevState) : patch;
            // 如果上一次的值 和 当前需要修改的值都是 对象的话，就会合并，反之就会替换
            if (isObject(prevState) && isObject(value)) {
                return { ...prevState, ...value };
            }
            return value;
        });
        if (callback) {
            callbackRef.current = callback;
        }
    });

    return [state, setMergeState];
}
