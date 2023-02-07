/** 获取类型 */
export function getType(data: any) {
    return Object.prototype.toString.call(data).slice(8, -1);
}
