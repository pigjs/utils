import { getType } from '../_getType';

/**
 * 检查输入值是否为 数组
 *
 * @example
 *
 *  isArray([]); //=>true
 *  isArray({length:0}); //=>false
 */
export function isArray(value: any): value is any[] {
    return getType(value) === 'Array';
}
