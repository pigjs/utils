import { isObject } from '../isObject';

/**
 * 检查输入的值是否为 空对象
 *
 * @example
 *
 * isEmptyObject({}); //=>true
 * isEmptyObject(Object({})); //=>true
 * isEmptyObject({length:0}); //=>false
 */
export function isEmptyObject(value: any) {
    return isObject(value) && Object.keys(value).length === 0;
}
