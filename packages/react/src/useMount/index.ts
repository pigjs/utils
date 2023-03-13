import React from 'react';

/**
 * 只在组件 mount 时执行的 hook
 *
 * @example
 *
 *  useMount(fn)
 */
export function useMount(fn: () => void) {
    React.useEffect(() => {
        fn();
    }, []);
}
