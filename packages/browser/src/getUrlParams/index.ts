/**
 * 获取 URL 中所有参数，并返回一个对象
 *
 * @example
 *
 *  getUrlParams(); //=> {key: value}
 *  getUrlParams('https://example.com/?id=123&name=foo'); //=> {id: '123', name: 'foo'}
 */
export function getUrlParams(url?: string): Record<string, string> {
    const str =
        new URL(url ?? location.href).search ||
        new URL(url ?? location.href).hash.substring(location.hash.search(/\?/) + 1);
    const urlSearchParams = new URLSearchParams(str);
    const params: Record<string, string> = {};

    for (const [key, value] of urlSearchParams.entries()) {
        params[key] = value;
    }

    return params;
}
