---
title: digitUppercase 金额中文大写
group:
    title: 实用函数
    path: /practical
---

# digitUppercase

金额中文大写，支持传入 带千分号的金额

#### 例子

```ts
digitUppercase(128888); //=> 壹拾贰万捌仟捌佰捌拾捌元整
digitUppercase(1288.88); //=> 壹仟贰佰捌拾捌元捌角捌分
digitUppercase(0); //=>零元整
digitUppercase('1000,0'); //=>零元整
digitUppercase('123,456,789.01'); //=> 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零壹分
```

#### 参数

| 参数  |  说明  |       类型       | 默认值 |
| :---: | :----: | :--------------: | :----: |
| value | 输入值 | number \| string |   -    |

#### 注意事项

因为 js 精度问题，最大处理到 99999999999.99，超过这个数值的不处理，返回空字符串
