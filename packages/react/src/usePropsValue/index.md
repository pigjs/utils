---
title: usePropsValue 数据双向绑定
group:
    title: react
    path: /react
---

# usePropsValue Hook

usePropsValue 是一个用于数据双向绑定的 React Hook。它可以处理受控和非受控组件，并在数据发生变化时触发 onChange 回调。

#### 例子

```ts
const [value, setValue] = usePropsValue(props);
```

#### 参数

|     参数     |                    说明                    |                类型                | 默认值 |
| :----------: | :----------------------------------------: | :--------------------------------: | :----: |
|    value     | 数据源。如果未提供，则由 Hook 内部管理状态 |                any                 |   -    |
|   onChange   |        数据发生变化时触发的回调函数        | (value: T, ...args: any[]) => void |   -    |
| defaultValue |                 初始默认值                 |                any                 |   -    |

#### 返回值

-   返回一个数组，包含以下元素：
    -   value: 当前值。如果提供了外部数据源（`value` prop），则为外部数据源的值；否则为内部状态的值。
    -   setValue: 更新值的函数。在受控模式下，将触发 `onChange` 回调；在非受控模式下，将更新内部状态并触发 `onChange` 回调。
