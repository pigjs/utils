import { isArray } from '../isArray';

/**
 * 检查输入的值是否为 空数组
 *
 * @example
 *
 *  isEmptyArray([]); //=>true
 *  isEmptyArray(Object([])); //=>true
 *  isEmptyArray([0]); //=>false
 *  isEmptyArray({length:0}); //=>false
 */
export function isEmptyArray(value: any) {
    return isArray(value) && value.length === 0;
}
