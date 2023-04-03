import { getUrlParam } from '@pigjs/browser-utils';
import { isString } from '@pigjs/type-utils';
import React from 'react';
import { useEvent } from '../useEvent';

/**
 * 获取 url 参数 hook
 *
 * @example
 *
 *  const id = useUrlParam('id') // 返回 URL 中名为 'id' 的参数值，如果不存在或者参数名不合法，则返回空字符串
 *
 */
export function useUrlParam(key: string) {
    const [value, setValue] = React.useState<string>(() => {
        if (!isString(key)) {
            return '';
        }
        return getUrlParam(key);
    });

    const handlePopState = useEvent(() => {
        const newValue = getUrlParam(key);
        if (newValue !== value) {
            setValue(newValue);
        }
    });

    // 监听 url 变化，如果 key 对应的值发生变化，更新 state
    React.useEffect(() => {
        handlePopState();
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [key]);

    return value;
}
