import { isString } from '../isString';

/**
 * 检查输入值是否为 base64字符串
 *
 * @example
 *
 *  isBase64(base64); //=>true
 */
export function isBase64(value: any) {
    if (!isString(value)) {
        return false;
    }
    try {
        const str = value.substring(value.indexOf(',') + 1);
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}
