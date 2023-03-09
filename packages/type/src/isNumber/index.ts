import { getType } from '../_getType';

/**
 * 检查输入的值是否为 数字 不包括 NaN
 *
 * @example
 *
 *  isNumber(0); //=>true
 *  isNumber(Object(0)); //=>true
 *  isNumber(NaN); //=>false
 */
export function isNumber(value: any): value is number {
    return getType(value) === 'Number' && value === value;
}
