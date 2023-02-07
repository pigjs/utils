import { isArray } from "../isArray";

/** 是否是一个空数组 */
export function isEmptyArray(data:any){
    return isArray(data) && data.length === 0
}