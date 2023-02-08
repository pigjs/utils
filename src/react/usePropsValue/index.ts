import { useRef } from 'react';
import { isFunction } from '../../type/isFunction';
import { useEvent } from '../useEvent';
import { useUpdate } from '../useUpdate';

/** 数据双向绑定 */
export function usePropsValue<T extends any>(options: {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, ...args: any[]) => void;
}): [T, (value: T, ...args: any[]) => void] {
    const { value, defaultValue, onChange } = options;

    const update = useUpdate();

    // 是否受控
    const controlled = options.hasOwnProperty('value');

    const stateRef = useRef(controlled ? value : defaultValue);
    if (controlled) {
        stateRef.current = value;
    }

    const setState = useEvent((v, ...args) => {
        const val = isFunction(v) ? v(stateRef.current) : v;
        if (!controlled) {
            stateRef.current = val;
            update();
        }
        onChange?.(val, ...args);
    });
    return [stateRef.current, setState];
}
