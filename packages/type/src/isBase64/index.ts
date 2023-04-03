import { isFunction } from '../isFunction';
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
    if (value.length % 4 !== 0) {
        return false;
    }
    try {
        if (isFunction(btoa) && isFunction(atob)) {
            // 浏览器环境
            const str = value.substring(value.indexOf(',') + 1);
            return btoa(atob(str)) === str;
        } else {
            // node 环境
            const buffer = Buffer.from(value, 'base64');
            return buffer.toString('base64') === value;
        }
    } catch (err) {
        return false;
    }
}
