import { useCallback, useRef } from 'react';

/** 返回一个函数，自动 useCallback 解决闭包陷阱  */
export function useEvent(callback: (...args: any[]) => void): (...args: any[]) => void {
    const callbackRef = useRef<any>(null);

    callbackRef.current = callback;

    return useCallback((...args: any[]) => {
        return callbackRef.current(...args);
    }, []);
}
