---
title: useSetState
group:
    title: react
    path: /react
---

# useSetState

和 class this.setState 功能相同

## API

```ts
const [state,setState] = useSetState({count:0})
setState({count:1},(state)=>xxx)
setState((state)=>{...state,count:2})
```

### Params

| 参数         | 说明   | 类型   | 默认值 |
| ------------ | ------ | ------ | ------ |
| initialState | 初始值 | object | -      |
