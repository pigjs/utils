/**
 * 检查输入的值是否为 null
 *
 * @example
 *
 *  isNull(null); //=>true
 *  isNull(undefined); //=>false
 */
export function isNull(value: any): value is null {
    return value === null;
}
