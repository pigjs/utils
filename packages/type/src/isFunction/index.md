---
title: isFunction
group:
    title: 类型
    path: /type
---

# isFunction

检查输入的值是否为 function

## API

```ts
isFunction(() => {}); //=>true
isFunction(Object(() => {})); //=>true
isFunction(new Function()); //=>true
isFunction(eval('()=>{}')); //=>true
```

### Params

| 参数  | 说明   | 类型 | 默认值 |
| ----- | ------ | ---- | ------ |
| value | 输入值 | any  | -      |
