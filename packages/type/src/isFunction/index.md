---
nav:
    path: /type
---

# isFunction

是否是函数

## API

```ts
isFunction(() => {});
// => true
isFunction(Object(() => {}));
// => true
isFunction({});
// => false
isFunction(null);
// => false
isFunction([]);
// => false
isFunction(0);
// => false
isFunction('');
// => false
```

### Params

| 参数  | 说明         | 类型 | 默认值 |
| ----- | ------------ | ---- | ------ |
| value | 要判断的数据 | any  | -      |
