import { getUrlParam } from '@pigjs/browser-utils';
import { isArray, isString } from '@pigjs/type-utils';
import React from 'react';

/** 获取url参数 */
export function useUrlParams<T extends string>(keys: T | T[]) {
    return React.useMemo(() => {
        if (isString(keys)) {
            return getUrlParam(keys);
        }
        if (isArray(keys)) {
            return keys.reduce((data, key) => {
                return {
                    ...data,
                    key: getUrlParam(key)
                };
            }, {});
        }
        return null;
    }, []);
}
