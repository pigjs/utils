---
title: isEmptyString 是否为空字符串
group:
    title: 类型
---

# isEmptyString

检查输入的值是否为 空字符串

#### 例子

```ts
isEmptyString(''); //=>true
isEmptyString(Object('')); //=>true
isEmptyString('0'); //=>false
isEmptyString(' '); //=>false
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
