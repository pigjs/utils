import { getType } from '../_getType';

/**
 * 检查输入的值是否为 对象
 *
 * @example
 *
 *  isObject({}); //=>true
 *  isObject(Object({})); //=>true
 *  isObject({length:0}); //=>true
 *  isObject(null); //=>false
 */
export function isObject(value: any): value is Record<string, any> {
    return getType(value) === 'Object';
}
