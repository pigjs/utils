import { getType } from '../_getType';

/**
 * 检查输入的值是否为 正则
 *
 * @example
 *
 *  isRegExp(/a/); //=>true
 *  isRegExp(new RegExp(/a/)); //=>true
 */
export function isRegExp(value: any): value is RegExp {
    return getType(value) === 'RegExp';
}
