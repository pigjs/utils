import React from 'react';

interface Cache<Value, Condition> {
    condition?: Condition;
    value?: Value;
}

function shallowEqual(arr1: readonly any[], arr2: readonly any[]): boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/**
 * 缓存计算结果，自定义更新
 *
 * @example
 *
 *  const data = useMemo(()=>count,[count],(prev,next)=>prev !== next)
 */

export function useMemo<Value, Dependencies extends readonly unknown[]>(
    computeValue: () => Value,
    dependencies: Dependencies,
    shouldUpdate: (prevDependencies: Dependencies, nextDependencies: Dependencies) => boolean = shallowEqual
) {
    const cacheRef = React.useRef<Cache<Value, Dependencies>>({});

    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, dependencies)) {
        cacheRef.current.value = computeValue();
        cacheRef.current.condition = dependencies;
    }

    return cacheRef.current.value;
}
