import { useCallback, useRef } from 'react';

/**
 * 返回一个函数，自动 useCallback 解决闭包陷阱
 *
 * @example
 *
 *  useEvent(fn)
 */
export function useEvent<T extends (...args: any[]) => any>(callback: T): T {
    const callbackRef = useRef<any>(null);

    callbackRef.current = callback;

    return useCallback((...args: Parameters<T>) => {
        return callbackRef.current(...args);
    }, []) as T;
}
