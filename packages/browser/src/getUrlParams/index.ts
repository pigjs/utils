/**
 * 获取url所有参数
 *
 * @example
 *
 *  getUrlParams(); //=> {[key]:value}
 */
export function getUrlParams<T extends Record<any, string>>() {
    const url = location.search || location.hash.substring(location.hash.search(/\?/) + 1); // 获取url中"?"符后的字串
    const params: Record<any, string> = {};
    const str = url.indexOf('?') !== -1 ? url.substr(1) : url;
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].split('=')[1]) {
            params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
        }
    }
    return params as T;
}
