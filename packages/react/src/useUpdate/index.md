---
title: useUpdate 强制组件重新渲染
group:
    title: react
    path: /react
---

# useUpdate Hook

返回一个函数，调用该函数会强制组件重新渲染。当您需要在没有状态变化的情况下强制更新组件时，此 hook 非常有用。

#### 例子

```ts
const update = useUpdate();
```
