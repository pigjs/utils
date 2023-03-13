import { getUrlParam } from '@pigjs/browser-utils';
import { isString } from '@pigjs/type-utils';
import React from 'react';

/**
 * 获取url参数
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
