---
title: isNumber 是否为 数字
group:
    title: 类型
---

# isNumber

检查输入的值是否为 数字 不包括 NaN

#### 例子

```ts
isNumber(0); //=>true
isNumber(Object(0)); //=>true
isNumber(NaN); //=>false
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
