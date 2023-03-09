import { getType } from '../_getType';

/**
 * 检查输入的值是否为 字符串
 *
 * @example
 *
 *  isString('0'); //=>true
 *  isString(Object('0')); //=>true
 */
export function isString(value: any): value is string {
    return getType(value) === 'String';
}
