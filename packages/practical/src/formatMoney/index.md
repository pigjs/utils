---
title: formatMoney 金额添加千分号
group:
    title: 实用函数
    path: /practical
---

# formatMoney

将数字或字符串转换成带千分号的金额格式。

#### 例子

```ts
formatMoney(123456.789); //=> "123,456.789"
formatMoney('123456.789'); //=> "123,456.789"
formatMoney(null); //=> undefined
formatMoney(undefined); //=> undefined
try {
    formatMoney('invalid'); //=> Error: Invalid input "invalid", expected number or string
} catch (err) {
    console.log(err);
}
```

#### 参数

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| value | 要转换的数字或字符串。必须是数字或能被转换为数字的字符串类型。如果输入的是无效值，返回值为 undefined。如果输入的是非数字字符串，会抛出异常 | number \| string | - |

#### 返回值

转换后的字符串，带千分号，如果原值有小数，则保留小数位。如果输入的是无效值，返回值为 undefined。

#### 注意事项

当输入的小数位超过 14 位时，会存在精度问题，因此不推荐对精度要求极高的场景使用本函数。
