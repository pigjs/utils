---
nav:
    path: /type
---

# isBoolean

是否是布尔值

## API

```ts
isBoolean(true);
// => true
isBoolean(Object(false));
// => true
isBoolean({});
// => false
isBoolean(null);
// => false
isBoolean(() => {});
// => false
isBoolean(0);
// => false
isBoolean('');
// => false
```

### Params

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 要判断的数据 | any  | -      |
