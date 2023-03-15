import { getUrlParam } from '@pigjs/browser-utils';
import { isString } from '@pigjs/type-utils';
import React from 'react';

/**
 * 获取 url 参数 hook
 *
 * @example
 *
 *  const id = useUrlParam('id')
 */
export function useUrlParam(key: string): string | null {
    return React.useMemo(() => {
        if (isString(key)) {
            return getUrlParam(key);
        }
        return null;
    }, []);
}
