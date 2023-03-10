---
title: isEmpty
group:
    title: 类型
    path: /type
---

# isEmpty

检查输入的值是否为空 包括 '空数组' '空对象' '空字符串' 'undefined' 'null'

## API

```ts
isEmpty(null); //=> true
isEmpty(undefined); //=> true
isEmpty([]); //=> true
isEmpty({}); //=> true
isEmpty(''); //=> true
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
