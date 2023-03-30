---
title: useEvent 解决闭包陷阱
group:
    title: react
    path: /react
---

# useEvent Hook

useEvent 是一个用于解决闭包陷阱的 React Hook。它接收一个回调函数，并返回一个自动使用 useCallback 包装的函数。这使得回调在每次渲染时都保持相同的引用。

#### 例子

```ts
useEvent(fn);
```

#### 参数

| 参数 |       说明       |           类型           | 默认值 |
| :--: | :--------------: | :----------------------: | :----: |
|  fn  | 要包装的回调函数 | (...args: any[]) => void |   -    |

#### 返回值

-   返回一个使用 useCallback 包装的函数，它在每次渲染时都保持相同的引用。这有助于避免闭包陷阱。
