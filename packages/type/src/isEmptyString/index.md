---
title: isEmptyString
group:
    title: 类型
    path: /type
---

# isEmptyString

检查输入的值是否为 空字符串

## API

```ts
isEmptyString(''); //=>true
isEmptyString(Object('')); //=>true
isEmptyString('0'); //=>false
isEmptyString(' '); //=>false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
