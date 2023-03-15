---
title: isNil 是否为null或undefined
group:
    title: 类型
---

# isNil

检查输入值是否为 'null' 或 'undefined'

#### 例子

```ts
isNil(null); //=> true
isNil(undefined); //=> true
isNil('0'); //=> false
isNil([]); //=> false
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
