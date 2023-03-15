---
title: mergeProps 合并props
group:
    title: 实用函数
    path: /practical
---

# mergeProps

合并默认值和 props

#### 例子

```ts
mergeProps({ age: 24 }, { name: 'pigjs' }); //=> {name:'pigjs',age:24}
mergeProps({ age: 24, name: 'pigjs' }, { age: 22, name: null }); //=> {age:22,name:null}
```

#### 参数

|     参数     |       说明       |       类型       | 默认值 |
| :----------: | :--------------: | :--------------: | :----: |
| defaultProps |   默认值 props   | Record<any, any> |   -    |
|    props     | 需要合并的 props | Record<any, any> |   -    |
