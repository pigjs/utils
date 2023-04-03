/**
 * 获取 URL 参数
 *
 * @param {string} name 要从 URL 中获取的参数名称
 * @param {string|undefined} url 可选参数，要解析的 URL 字符串
 *
 * @example
 *
 *  getUrlParam('id'); //=> id
 *  getUrlParam('name'); //=> ''
 *  getUrlParam('page', 'https://example.com/?page=2'); //=> '2'
 */
export function getUrlParam(name: string, url?: string): string {
    if (!name?.trim()) {
        return '';
    }

    const targetUrl = new URL(url ?? window.location.href);
    const searchParams = new URLSearchParams(targetUrl.search);
    const hashParams = new URLSearchParams(targetUrl.hash.substring(targetUrl.hash.search(/\?/) + 1));

    const searchValue = searchParams.get(name);
    const hashValue = hashParams.get(name);

    return searchValue ?? hashValue ?? '';
}
