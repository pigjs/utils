---
title: omit
group:
    title: 实用函数
    path: /practical
---

# omit

忽略对象属性

#### 例子

```ts
omit({ age: 22, name: 'pigjs' }, ['name']); //=> {age:22}
```

#### 参数

| 参数 | 说明           | 类型             | 默认值 |
| ---- | -------------- | ---------------- | ------ |
| data | 需要忽略的对象 | Record<any, any> | -      |
| keys | 需要忽略的 key | string[]         | -      |
