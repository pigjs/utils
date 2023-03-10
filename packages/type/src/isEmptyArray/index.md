---
title: isEmptyArray
group:
    title: 类型
    path: /type
---

# isEmptyArray

检查输入的值是否为 空数组

## API

```ts
isEmptyArray([]); //=>true
isEmptyArray(Object([])); //=>true
isEmptyArray([0]); //=>false
isEmptyArray({ length: 0 }); //=>false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
