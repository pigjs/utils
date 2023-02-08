import React from 'react';
import { getUrlParam } from '../../browser/getUrlParam';
import { isArray } from '../../type/isArray';
import { isString } from '../../type/isString';

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
