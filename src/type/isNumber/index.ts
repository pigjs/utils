import { getType } from "../getType";

/** 是否是 一个数字 */
export function isNumber(data:any): data is number{
    return getType(data) === 'Number' && data === data
}