import { getUrlParams, setUrlParams } from '@pigjs/browser-utils';
import { isFunction, isNil } from '@pigjs/type-utils';
import { useEvent } from '../useEvent';
import { useMount } from '../useMount';
import { useSetState } from '../useSetState';

import type { SetMergeStateType } from '../useSetState';

/**
 * 管理url参数状态 的 hook
 * 自动删除 'undefined' 'null' '空字符串'
 * @example
 *
 *  const [state,setState] = useUrlState({count:0})
 *
 *  setState({count:1},(state)=>xxx)
 *  setState((state)=>({...state,count:22}))
 */
export function useUrlState<T extends Record<string, any>>(initialState?: T | (() => T)) {
    const [state, setState] = useSetState(() => {
        const params = getUrlParams();

        if (isFunction(initialState)) {
            return { ...params, ...initialState() };
        }
        return { ...params, ...initialState };
    });

    useMount(() => {
        // 有初始值的情况，首次需要更新一下 url params
        if (!isNil(initialState)) {
            setUrlParams(state);
        }
    });

    const _setState: SetMergeStateType<T> = useEvent((patch, callback) => {
        const _callback = (state) => {
            setUrlParams(state);
            callback?.(state);
        };
        setState(patch, _callback);
    });

    return [state, _setState];
}
