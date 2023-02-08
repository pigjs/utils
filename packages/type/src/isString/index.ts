import { getType } from '../getType';

/** 是否是一个字符串 */
export function isString(data: any): data is string {
    return getType(data) === 'String';
}
