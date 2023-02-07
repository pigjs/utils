import { isObject } from "../isObject";

/** 是否是空对象 */
export function isEmptyObject(data:any){
    return isObject(data) && Object.keys(data).length === 0
}