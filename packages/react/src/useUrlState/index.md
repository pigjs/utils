---
title: useUrlState
group:
    title: react
    path: /react
---

# useUrlState

管理 url params 来管理 state 的 Hook 自动删除 'undefined' 'null' '空字符串'

## API

```ts
const [state, setState] = useUrlState({ count: 0 });

setState({ count: 1 }, (state) => xxx);
setState((state) => ({ ...state, count: 22 }));
```

### Params

| 参数         | 说明   | 类型   | 默认值 |
| ------------ | ------ | ------ | ------ |
| initialState | 初始值 | object | -      |
