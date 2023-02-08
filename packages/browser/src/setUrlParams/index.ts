import { isEmptyString, isNull, isUndefined } from '@pigjs/type-utils';
import qs from 'qs';
import { getUrlParams } from '../getUrlParams';

/** 设置url参数 合并url上参数后会自动忽略 空字符串 null undefined，也可以自定义 filter 忽略 */
export function setUrlParams(data: Record<any, any> = {}, filter?: (params: Record<any, any>) => Record<any, any>) {
    let params = getUrlParams();
    params = { ...params, ...data };
    if (filter) {
        params = filter(params);
    } else {
        params = Object.keys(params)
            .filter((key) => {
                const value = params[key];
                if (isEmptyString(value)) {
                    return false;
                }
                if (isNull(value)) {
                    return false;
                }
                if (isUndefined(value)) {
                    return false;
                }
                return true;
            })
            .reduce((data, key) => {
                return {
                    ...data,
                    key: params[key]
                };
            }, {});
    }
    const paramsStr = qs.stringify(params);
    const pathname = location.hash || location.pathname;
    const [url] = pathname.split('?');
    history.replaceState(null, '', `${url}?${paramsStr}`);
}
