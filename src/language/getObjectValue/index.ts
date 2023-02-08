import { isEmptyObject } from '../../type/isEmptyObject';
import { isUndefined } from '../../type/isUndefined';

/** 对象安全取值 getObjectValue(data,'a.b.c') */
export function getObjectValue(data: Record<any, any>, key: string, emptyValue?: any) {
    if (isEmptyObject(data)) {
        return emptyValue;
    }

    const namespace = key.toString().split('.');
    let clone = { ...data };
    let value,
        i = 0;
    const len = namespace.length;
    for (; i < len; i++) {
        value = clone[namespace[i]];
        if (isUndefined(value)) {
            return emptyValue;
        }
        clone = value;
    }
    return value;
}
