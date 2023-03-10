import { isEmptyObject, isUndefined } from '@pigjs/type-utils';

/**
 * 对象安全取值
 *
 * @example
 *
 *  getObjectValue({a:{b:{c:1}}},'a.b.c'); //=> 1
 *  getObjectValue({a:{b:{c:1}}},'a.b.d'); //=> undefined
 *  getObjectValue(data, 'a.b.c.d'); //=> undefined
 */
export function getObjectValue(data: Record<any, any>, key: string) {
    if (isEmptyObject(data)) {
        return undefined;
    }

    const namespace = key.toString().split('.');
    let clone = { ...data };
    let value,
        i = 0;
    const len = namespace.length;
    for (; i < len; i++) {
        value = clone[namespace[i]];
        if (isUndefined(value)) {
            return undefined;
        }
        clone = value;
    }
    return value;
}
