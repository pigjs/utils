---
nav:
    path: /type
---

# isObject

检查输入的值是否为 对象

## API

```ts
isObject({}); //=>true
isObject({ length: 0 }); //=>true
isObject(null); //=>false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
