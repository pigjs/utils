/**
 * 检查输入的值是否为 undefined
 *
 * @example
 *
 *  isUndefined(undefined); //=>true
 *  isUndefined(null); //=>false
 */
export function isUndefined(value: any): value is string {
    return value === undefined;
}
