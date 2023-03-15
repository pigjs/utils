---
title: withStopPropagation 阻止组件事件冒泡
group:
    title: react
    path: /react
---

# withStopPropagation

阻止组件事件冒泡

#### 例子

```ts
withStopPropagation(<div>xxx</div>, ['click']);
```

#### 参数

|  参数   | 说明 |     类型     | 默认值 |
| :-----: | :--: | :----------: | :----: |
| element | 元素 | ReactElement |   -    |
| events  | 事件 |   string[]   |   -    |
