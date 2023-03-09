import { getType } from '../_getType';

/**
 * 检查输入值是否为 布尔值
 *
 * @example
 *
 *  isBoolean(true); //=>true
 *  isBoolean(false); //=>true
 *  isBoolean(Object(true)); //=>true
 *  isBoolean(Object(false)); //=>true
 */
export function isBoolean(value: any): value is boolean {
    return getType(value) === 'Boolean';
}
