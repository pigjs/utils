import React from 'react';

/** 只在组件 mount 时执行的 hook */
export function useMount(fn: () => void) {
    React.useEffect(() => {
        fn();
    }, []);
}
