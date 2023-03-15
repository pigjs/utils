---
title: isEmptyArray 是否为空数组
group:
    title: 类型
---

# isEmptyArray

检查输入的值是否为 空数组

#### 例子

```ts
isEmptyArray([]); //=>true
isEmptyArray(Object([])); //=>true
isEmptyArray([0]); //=>false
isEmptyArray({ length: 0 }); //=>false
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
