---
title: isFunction 是否为function
group:
    title: 类型
---

# isFunction

检查输入的值是否为 function

#### 例子

```ts
isFunction(() => {}); //=>true
isFunction(Object(() => {})); //=>true
isFunction(new Function()); //=>true
isFunction(eval('()=>{}')); //=>true
```

#### 参数

| 参数  |  说明  | 类型 | 默认值 |
| :---: | :----: | :--: | :----: |
| value | 输入值 | any  |   -    |
