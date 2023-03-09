import { getType } from '../_getType';

/**
 * 检查输入值是否为 Blob
 *
 * @example
 *
 *  isBlob(new Blob()); //=>true
 */
export function isBlob(value: any): value is Blob {
    return getType(value) === 'Blob';
}
