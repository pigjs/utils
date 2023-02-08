import React from 'react';
import { useEvent } from '../useEvent';

/** 只在组件 unmount 时执行的 hook */
export function useUnmount(fn: () => void) {
    const fnEvent = useEvent(fn);

    React.useEffect(() => {
        return fnEvent();
    });
}
