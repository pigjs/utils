/** 是否是一个方法 */
export function isFunction(data:any): data is (...args:any[])=>any{
    return typeof data === 'function'
}