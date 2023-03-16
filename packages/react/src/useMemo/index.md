---
title: useMemo 自定义更新缓存
group:
    title: react
    path: /react
---

# useMemo

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

|     参数     |    说明    |                     类型                      | 默认值 |
| :----------: | :--------: | :-------------------------------------------: | :----: |
|      fn      |  计算结果  |                  () => Value                  |   -    |
|  condition   |   依赖项   |                   Condition                   |   -    |
| shouldUpdate | 自定义更新 | (prev: Condition, next: Condition) => boolean |   -    |
