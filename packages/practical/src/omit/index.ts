/**
 * 忽略对象属性
 *
 * @example
 *
 *  omit({age:22,name:'pigjs'},['name']); //=> {age:22}
 */
export function omit<T extends Record<string | number, any>, K extends keyof T>(
    obj: T,
    keys: (K | string)[] // string 为了某些没有声明的属性被omit
): Omit<T, K> {
    const clone = {
        ...obj
    };
    keys.forEach((key) => {
        if ((key as K) in clone) {
            delete clone[key as K];
        }
    });
    return clone;
}
