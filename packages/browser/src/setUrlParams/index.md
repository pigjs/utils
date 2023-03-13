---
title: setUrlParams
group:
    title: 浏览器
    path: /browser
---

# setUrlParams

设置 url 参数

## API

```ts
setUrlParams({ name: 'xxx' });
setUrlParams({ name: 'xxx' }, (params) => params);
```

### Params

| 参数   | 说明           | 类型                                            | 默认值 |
| ------ | -------------- | ----------------------------------------------- | ------ |
| data   | 需要修改的数据 | Record<string, any>                             | -      |
| filter | 自定义忽略属性 | (params: Record<any, any>) => Record<any, any>) | -      |

注意 修改 url 参数时，默认会删除值为 undefined null 空字符串 的 属性，如果不想这种效果的话，可以使用 filter 自定义忽略
