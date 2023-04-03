import { isEmptyString, isNull, isUndefined } from '@pigjs/type-utils';
import qs from 'qs';
import { getUrlParams } from '../getUrlParams';

/**
 * 设置url参数
 * 合并url上参数后会自动忽略 空字符串 null undefined，
 * 也可以自定义 filter 忽略
 *
 * @example
 *
 *  setUrlParams({name:'xxx'})
 *  setUrlParams({name:'xxx'},(params)=>params)
 */
export function setUrlParams(
    data: Record<string, any> = {},
    filter?: (params: Record<any, any>) => Record<any, any>,
    url?: string
) {
    const _url = new URL(url ?? location.href);
    const params = { ...getUrlParams(url), ...data };
    const filteredParams = filter
        ? filter(params)
        : Object.entries(params)
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .filter(([_, value]) => !(isEmptyString(value) || isNull(value) || isUndefined(value)))
              .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    const paramsStr = qs.stringify(filteredParams);
    const currentUrl = _url.hash || _url.pathname;
    const [baseUrl] = currentUrl.split('?');
    history.replaceState(null, '', `${baseUrl}?${paramsStr}`);
}
