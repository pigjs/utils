import { isNull } from '../isNull';
import { isUndefined } from '../isUndefined';

/** 检查输入值是否为 'null' 或 'undefined'
 *
 * @example
 *
 *  isNil(null); //=> true
 *  isNil(undefined); //=> true
 *  isNil('0'); //=> false
 *  isNil([]); //=> false
 */
export function isNil(value: any) {
    if (isUndefined(value) || isNull(value)) {
        return true;
    }
    return false;
}
