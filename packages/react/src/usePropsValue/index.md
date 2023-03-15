---
title: usePropsValue 数据双向绑定
group:
    title: react
    path: /react
---

# usePropsValue

数据双向绑定

#### 例子

```ts
const [value, setValue] = usePropsValue(props);
```

#### 参数

#### Props

|     参数     |            说明            |                类型                | 默认值 |
| :----------: | :------------------------: | :--------------------------------: | :----: |
|    value     | 数据源，没有则内部管理状态 |                any                 |   -    |
|   onChange   |     数据发生变化时触发     | (value: T, ...args: any[]) => void |   -    |
| defaultValue |         初始默认值         |                any                 |   -    |
