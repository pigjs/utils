---
title: getObjectValue 对象安全取值
group:
    title: 实用函数
    path: /practical
---

# getObjectValue

对象安全取值

#### 例子

```ts
getObjectValue({ a: { b: { c: 1 } } }, 'a.b.c'); //=> 1
getObjectValue({ a: { b: { c: 1 } } }, 'a.b.d'); //=> undefined
getObjectValue(data, 'a.b.c.d'); //=> undefined
```

#### 参数

| 参数 |     说明     |       类型       | 默认值 |
| :--: | :----------: | :--------------: | :----: |
| data | 用取值的对象 | Record<any, any> |   -    |
| key  |   取值 str   |      string      |   -    |
