/** 是否是一个布尔值 */
export function isBoolean(data: any): data is boolean {
    return typeof data === 'boolean';
}
