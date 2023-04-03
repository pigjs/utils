import { isString } from '../isString';

/**
 * 检查输入的值是否为 空字符串
 *
 * @example
 *
 *  isEmptyString(''); //=>true
 *  isEmptyString(Object('')); //=>true
 *  isEmptyString('0'); //=>false
 *  isEmptyString(' '); //=>true
 */
export function isEmptyString(value: any) {
    return isString(value) && value.toString().trim() === '';
}
