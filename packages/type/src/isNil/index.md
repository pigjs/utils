---
title: isNil
group:
    title: 类型
    path: /type
---

# isNil

检查输入值是否为 'null' 或 'undefined'

## API

```ts
isNil(null); //=> true
isNil(undefined); //=> true
isNil('0'); //=> false
isNil([]); //=> false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
