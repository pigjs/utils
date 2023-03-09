import { getType } from '../_getType';

/**
 * 检查输入的值是否为 File
 *
 * @example
 *
 *  isFile(file); //=>true
 */
export function isFile(value: any): value is File {
    return getType(value) === 'File';
}
