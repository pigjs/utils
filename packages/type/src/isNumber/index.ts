import { getType } from '../getType';

/** 是否是 一个数字 不包括 NaN */
export function isNumber(data: any): data is number {
    return getType(data) === 'Number' && data === data;
}
