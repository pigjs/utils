---
title: useMemo
group:
    title: react
    path: /react
---

# useMemo

缓存计算结果，自定义更新

## API

```ts
const data = useMemo(()=>count,[count](prev,next)=>prev !== next)
```

### Params

| 参数         | 说明       | 类型                                          | 默认值 |
| ------------ | ---------- | --------------------------------------------- | ------ |
| fn           | 计算结果   | () => Value                                   | -      |
| condition    | 依赖项     | Condition                                     | -      |
| shouldUpdate | 自定义更新 | (prev: Condition, next: Condition) => boolean | -      |
