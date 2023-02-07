import { getType } from '../getType';

/** 是否是 Blob */
export function isBlob(data: any): data is Blob {
    return getType(data) === 'Blob';
}
