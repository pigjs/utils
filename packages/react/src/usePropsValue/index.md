---
title: usePropsValue
group:
    title: react
    path: /react
---

# usePropsValue

数据双向绑定

## API

```ts
const [value, setValue] = usePropsValue(props);
```

### Params

#### Props

| 参数         | 说明                       | 类型                               | 默认值 |
| ------------ | -------------------------- | ---------------------------------- | ------ |
| value        | 数据源，没有则内部管理状态 | any                                | -      |
| onChange     | 数据发生变化时触发         | (value: T, ...args: any[]) => void | -      |
| defaultValue | 初始默认值                 | any                                | -      |
