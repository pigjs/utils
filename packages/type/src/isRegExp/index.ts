import { getType } from '../getType';

/** 是否是 正则 */
export function isRegExp(data: any): data is RegExp {
    return getType(data) === 'RegExp';
}
