import { isUndefined } from '@pigjs/type-utils';
import assign from 'lodash/assign';
import assignWith from 'lodash/assignWith';

/**
 * 合并props
 *
 * @example
 *
 *  mergeProps({age:24},{name:'pigjs'}); //=> {name:'pigjs',age:24}
 *  mergeProps({age:24,name:'pigjs'},{age:22,name:null}); //=> {age:22,name:null}
 */
export function mergeProps<A, B>(...items: any[]): B & A {
    function customizer(objValue: any, srcValue: any) {
        return isUndefined(srcValue) ? objValue : srcValue;
    }

    let ret = assign({}, items[0]);
    for (let i = 1; i < items.length; i++) {
        ret = assignWith(ret, items[i], customizer);
    }
    return ret;
}
