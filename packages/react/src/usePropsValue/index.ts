import { isFunction } from '@pigjs/type-utils';
import { useRef } from 'react';
import { useEvent } from '../useEvent';
import { useUpdate } from '../useUpdate';

interface UsePropsValueOptions<T> {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T, ...args: any[]) => void;
}

/**
 * 数据双向绑定
 *
 * @example
 *
 * const [value,setValue] = usePropsValue(props)
 */
export function usePropsValue<T>(options: UsePropsValueOptions<T> = {}): [T, (value: T, ...args: any[]) => void] {
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
        if (stateRef.current === val) {
            return;
        }
        if (!controlled) {
            stateRef.current = val;
            update();
        }
        onChange?.(val, ...args);
    });
    return [stateRef.current, setState];
}
