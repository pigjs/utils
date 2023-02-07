import { isString } from '../isString';

/** 是否是一个空字符串 */
export function isEmptyString(data: any) {
    return isString(data) && data === '';
}
