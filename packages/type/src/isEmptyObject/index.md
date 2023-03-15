---
title: isEmptyObject 是否为空对象
group:
    title: 类型
---

# isEmptyObject

检查输入的值是否为 空对象

#### 例子

```ts
isEmptyObject({}); //=>true
isEmptyObject(Object({})); //=>true
isEmptyObject({ length: 0 }); //=>false
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
