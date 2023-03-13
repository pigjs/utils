/**
 * 把属性连接到 组件上
 *
 * @example
 *
 *  attachPropertiesToComponent(Form,{Item,Group})
 */
export function attachPropertiesToComponent<C, P extends Record<string, any>>(component: C, properties: P): C & P {
    const ret = component as any;
    for (const key in properties) {
        if (properties.hasOwnProperty(key)) {
            ret[key] = properties[key];
        }
    }
    return ret;
}
