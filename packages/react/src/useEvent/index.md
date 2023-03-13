---
title: useEvent
group:
    title: react
    path: /react
---

# useEvent

返回一个函数，自动 useCallback 解决闭包陷阱

## API

```ts
useEvent(fn);
```

### Params

| 参数 | 说明 | 类型                     | 默认值 |
| ---- | ---- | ------------------------ | ------ |
| fn   | 方法 | (...args: any[]) => void | -      |
