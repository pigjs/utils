---
title: isEmptyObject
group:
    title: 类型
    path: /type
---

# isEmptyObject

检查输入的值是否为 空对象

## API

```ts
isEmptyObject({}); //=>true
isEmptyObject(Object({})); //=>true
isEmptyObject({ length: 0 }); //=>false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
