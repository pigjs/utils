---
title: useSetState 模拟this.setState
group:
    title: react
    path: /react
---

# useSetState Hook

和 class this.setState 功能相同，state 默认是 {}，同时也支持对象外的其他类型

#### 例子

```ts
const [state, setState] = useSetState({ count: 0 });
const [dataSource, setDataSource] = useSetState([]);

setState({ count: 1 }, (state) => console.log(state));
setState((state) => ({ ...state, count: 2 }));

setDataSource(['叶小秋']);
```

#### 参数

|     参数     |              说明              | 类型 | 默认值 |
| :----------: | :----------------------------: | :--: | :----: |
| initialState | 可以是任意类型，不仅仅限于对象 |  T   |   {}   |

#### 返回值

state - 当前状态 setState - 更新状态的函数，可以接收一个对象或一个基于当前状态的函数作为参数。可选的第二个参数是一个回调函数，在状态更新后执行。注意：setState 函数如果上一次的值和当前要修改的值都是对象的话，可以合并对象，否则就是替换整个状态。
