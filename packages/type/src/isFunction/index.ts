/**
 * 检查输入的值是否为 function
 *
 * @example
 *
 *  isFunction(() => {}); //=>true
 *  isFunction(Object(() => {})); //=>true
 *  isFunction(new Function()); //=>true
 *  isFunction(eval('()=>{}')); //=>true
 */
export function isFunction(value: any): value is (...args: any[]) => any {
    return typeof value === 'function';
}
