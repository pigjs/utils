import { getType } from "../getType";

/** 是否是对象 */
export function isObject(data:any): data is {[key:string]:any} {
    return getType(data) === 'Object'
}