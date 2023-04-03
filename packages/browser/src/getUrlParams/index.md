---
title: getUrlParams 获取url所有参数
group:
    title: 浏览器
    path: /browser
---

# getUrlParams

获取 url 所有参数，并以键值对对象的形式返回。

#### 例子

```ts
// 假设当前 URL 为：https://www.example.com/home?name=pigjs&age=24
const params = getUrlParams(); //=> { name: 'pigjs', age: '24' }
```
