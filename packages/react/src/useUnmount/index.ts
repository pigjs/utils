import React from 'react';
import { useEvent } from '../useEvent';

/**
 * 只在组件 unmount 时执行的 hook
 *
 * @example
 *
 *  useUnmount(()=>{})
 */
export function useUnmount(fn: () => void) {
    // useEvent Hook 创建了一个具有稳定引用的事件处理器，
    // 这有助于在依赖项数组中避免不必要的更新。
    const fnEvent = useEvent(fn);

    React.useEffect(() => {
        return () => {
            fnEvent();
        };
    }, []);
}
