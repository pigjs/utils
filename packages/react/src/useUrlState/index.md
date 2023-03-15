---
title: useUrlState 管理url参数状态
group:
    title: react
    path: /react
---

# useUrlState

管理 url 参数状态 的 hook 自动删除 'undefined' 'null' '空字符串'

#### 例子

```ts
const [state, setState] = useUrlState({ count: 0 });

setState({ count: 1 }, (state) => xxx);
setState((state) => ({ ...state, count: 22 }));
```

#### 参数

|     参数     |  说明  |  类型  | 默认值 |
| :----------: | :----: | :----: | :----: |
| initialState | 初始值 | object |   -    |
