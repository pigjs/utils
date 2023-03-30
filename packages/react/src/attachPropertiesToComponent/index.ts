/**
 * 把属性连接到 组件上
 *
 * @example
 *
 *  attachPropertiesToComponent(Form,{Item,Group})
 */
export function attachPropertiesToComponent<ComponentType, PropertiesType extends Record<string, any>>(
    component: ComponentType,
    properties: PropertiesType
): ComponentType & PropertiesType {
    const ret = component as any;
    Object.entries(properties).forEach(([key, value]) => {
        Object.defineProperty(ret, key, {
            value,
            writable: false,
            enumerable: true,
            configurable: false
        });
    });
    return ret;
}
