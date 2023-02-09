---
nav:
    path: /type
---

# isArray

是否是数组

## API

```ts
isArray([]);
// => true
isArray(Object([]));
// => true
isArray({});
// => false
isArray(null);
// => false
isArray(() => {});
// => false
isArray(new Date());
// => false
isArray(new Error());
// => false
```

### Params

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 要判断的数据 | any  | -      |
