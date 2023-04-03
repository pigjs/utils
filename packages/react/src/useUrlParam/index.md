---
title: useUrlParam 获取url参数
group:
    title: react
    path: /react
---

# useUrlParam Hook

获取 url 参数 hook，内部会监听 url 参数，如果 url 参数变化，会重新获取 url 参数

#### 例子

```ts
const id = useUrlParam('id');
```

#### 参数

| 参数 |              说明               |  类型  | 默认值 |
| :--: | :-----------------------------: | :----: | :----: |
| key  | 需要从 URL 参数上获取的字段名称 | string |   -    |

#### 返回值

返回类型为 string，表示从 URL 中获取到的参数值。如果参数不存在或者参数名不合法，则返回空字符串。
