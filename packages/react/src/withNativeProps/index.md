---
title: withNativeProps 合并 组件和元素的className、style
group:
    title: react
    path: /react
---

# withNativeProps

合并 props 的 className、style 和 element 的 className、style

#### 例子

```ts
withNativeProps(
    props,
    <div className='xxx' style={{ width: 100 }}>
        xx
    </div>
);
```

#### 参数

|  参数   |    说明    |     类型     | 默认值 |
| :-----: | :--------: | :----------: | :----: |
|  props  | props 参数 |    object    |   -    |
| element |    元素    | ReactElement |   -    |
