import { getType } from "../getType"

/** 是否是一个数组 */
export function isArray(data:any): data is any[] {
    return getType(data) === 'Array'
}