---
title: digitUppercase
group:
    title: 实用函数
    path: /practical
---

# digitUppercase

金额中文大写

#### 例子

```ts
digitUppercase(128888); //=> 壹拾贰万捌仟捌佰捌拾捌元整
digitUppercase(1288.88); //=> 壹仟贰佰捌拾捌元捌角捌分
digitUppercase(0.88); //=> 捌角捌分
digitUppercase(0); //=>零元整
```

#### 参数

| 参数  | 说明   | 类型             | 默认值 |
| ----- | ------ | ---------------- | ------ |
| value | 输入值 | number \| string | -      |
