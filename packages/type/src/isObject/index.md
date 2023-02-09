---
nav:
    path: /type
---

# isObject

是否是对象

## API

```ts
isObject({});
// => true
isObject(Object({}));
// => true
isObject([1, 2, 3]);
// => false
isObject(null);
// => false
isObject(Object([1, 2, 3]));
// => false
isObject(() => {});
// => false
isObject(new Date());
// => false
isObject(new Error());
// => false
```

### Params

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 要判断的数据 | any  | -      |
