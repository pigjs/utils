---
title: formatMoney
group:
    title: 实用函数
    path: /practical
---

# formatMoney

金额添加千分号

#### 例子

```ts
formatMoney(1000); //=> 1,000
formatMoney(99999999); //=> 99,999,999
formatMoney(999.99); //=> 999.99
formatMoney(-1000); //=> -1,000
formatMoney(-99999999); //=> -99,999,999
formatMoney(-999.99); //=> -999.99
formatMoney(0); //=> 0
```

#### 参数

| 参数  | 说明   | 类型             | 默认值 |
| ----- | ------ | ---------------- | ------ |
| value | 输入值 | number \| string | -      |
