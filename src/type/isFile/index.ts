import { getType } from '../getType';

/** 是否是 File */
export function isFile(data: any): data is File {
    return getType(data) === 'File';
}
