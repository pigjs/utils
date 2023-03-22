import { getType } from '../_getType';

/**
 * 检查输入值是否为 Map
 *
 * @example
 *
 *  isMap(new Map()); //=> true
 */
export function isMap(value: any): value is Map<any, any> {
    return getType(value) === 'Map';
}
