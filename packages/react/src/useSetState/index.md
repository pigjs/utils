---
title: useSetState 模拟this.setState
group:
    title: react
    path: /react
---

# useSetState Hook

和 class this.setState 功能相同

#### 例子

```ts
const [state,setState] = useSetState({count:0})
setState({count:1},(state)=>xxx)
setState((state)=>{...state,count:2})
```

#### 参数

|     参数     |       说明       |       类型       | 默认值 |
| :----------: | :--------------: | :--------------: | :----: |
| initialState | 初始状态（可选） | T extends object |   {}   |

#### 返回值

state - 当前状态 setState - 更新状态的函数，可以接收一个对象或一个基于当前状态的函数作为参数。可选的第二个参数是一个回调函数，在状态更新后执行。注意：setState 函数可以合并对象，而不是替换整个状态。
