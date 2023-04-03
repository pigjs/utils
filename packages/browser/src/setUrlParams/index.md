---
title: setUrlParams 设置url参数
group:
    title: 浏览器
    path: /browser
---

# setUrlParams

用于设置 URL 参数。合并 URL 上的参数后，将自动忽略值为 undefined、null 或空字符串的属性。也可以使用 filter 参数自定义忽略。

#### 例子

```ts
setUrlParams({ name: 'xxx' });
setUrlParams({ name: 'xxx' }, (params) => params);
setUrlParams({ name: 'pig', age: 22 }, null, 'https://www.pigjs.com/about');
```

#### 参数

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| data | 需要修改的参数 | Record<string, any> | - |
| filter | 自定义忽略的属性 | (params: Record<any, any>) => Record<any, any>) | - |
| url | 可选。要设置参数的 URL。如果未提供，则使用当前 URL | string | - |

注意：修改 URL 参数时，默认会删除值为 undefined、null 或空字符串的属性。如果不想实现此功能，可以使用 filter 参数自定义忽略。
