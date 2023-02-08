import { useCallback, useState } from 'react';

/** 返回一个函数，调用该函数会强制组件重新渲染 */
export function useUpdate() {
    const [, setState] = useState({});

    return useCallback(() => setState({}), []);
}
