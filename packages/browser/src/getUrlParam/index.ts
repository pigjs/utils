import { isNull } from '@pigjs/type-utils';

/** 获取url参数 */
export function getUrlParam(name: string): null | string {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r =
        window.location.search.substr(1).match(reg) ||
        window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(reg);
    if (!isNull(r)) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
