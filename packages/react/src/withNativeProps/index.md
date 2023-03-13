---
title: withNativeProps
group:
    title: react
    path: /react
---

# withNativeProps

合并 props 的 className、style 和 element 的 className、style

## API

```ts
withNativeProps(
    props,
    <div className='xxx' style={{ width: 100 }}>
        xx
    </div>
);
```

### Params

| 参数    | 说明       | 类型         | 默认值 |
| ------- | ---------- | ------------ | ------ |
| props   | props 参数 | object       | -      |
| element | 元素       | ReactElement | -      |
