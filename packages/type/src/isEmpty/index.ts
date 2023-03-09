import { isEmptyArray } from '../isEmptyArray';
import { isEmptyObject } from '../isEmptyObject';
import { isEmptyString } from '../isEmptyString';
import { isNull } from '../isNull';
import { isUndefined } from '../isUndefined';

/**
 * 检查输入的值是否为空 包括 '空数组' '空对象' '空字符串' 'undefined' 'null'
 *
 * @example
 *
 *  isEmpty(null); //=> true
 *  isEmpty(undefined); //=> true
 *  isEmpty([]); //=> true
 *  isEmpty({}); //=> true
 *  isEmpty(''); //=> true
 */
export function isEmpty(value: any) {
    if (isNull(value)) {
        return true;
    }
    if (isUndefined(value)) {
        return true;
    }
    if (isEmptyArray(value)) {
        return true;
    }
    if (isEmptyObject(value)) {
        return true;
    }
    if (isEmptyString(value)) {
        return true;
    }
    return false;
}
