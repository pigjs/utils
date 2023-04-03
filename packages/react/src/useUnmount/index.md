---
title: useUnmount 组件unmount时执行
group:
    title: react
    path: /react
---

# useUnmount Hook

只在组件 unmount 时执行的 hook。这个 hook 可以帮助您在组件卸载时执行清理工作，如取消请求、移除事件监听器等。

#### 例子

```ts
useUnmount(() => {
    console.log('Component unmounted');
});
```

#### 参数

| 参数 |         说明         |   类型   | 默认值 |
| :--: | :------------------: | :------: | :----: |
|  fn  | 组件卸载时的执行方法 | ()=>void |   -    |
