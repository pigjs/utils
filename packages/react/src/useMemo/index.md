---
title: useMemo 自定义更新缓存
group:
    title: react
    path: /react
---

# useMemo Hook

缓存计算结果，自定义更新

#### 例子

```ts
const data = useMemo(
    () => count,
    [count],
    (prev, next) => prev !== next
);
```

#### 参数

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| computeValue | 用于计算缓存值的函数 | () => Value | - |
| dependencies | 用于比较的依赖项 | Dependencies | - |
| shouldUpdate | 自定义依赖项比较的函数 | (prevDependencies: Dependencies, nextDependencies: Dependencies) => boolean | - |
