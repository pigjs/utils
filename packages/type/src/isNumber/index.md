---
nav:
    path: /type
---

# isNumber

检查输入的值是否为 数字 不包括 NaN

## API

```ts
isNumber(0); //=>true
isNumber(Object(0)); //=>true
isNumber(NaN); //=>false
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
