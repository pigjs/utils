import React from 'react';

interface Cache<Value, Condition> {
    condition?: Condition;
    value?: Value;
}

/**
 * 缓存计算结果，自定义更新
 *
 * @example
 *
 *  const data = useMemo(()=>count,[count],(prev,next)=>prev !== next)
 */

export function useMemo<Value, Condition = any[]>(
    getValue: () => Value,
    condition: Condition,
    shouldUpdate: (prev: Condition, next: Condition) => boolean
) {
    const cacheRef = React.useRef<Cache<Value, Condition>>({});

    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }

    return cacheRef.current.value;
}
