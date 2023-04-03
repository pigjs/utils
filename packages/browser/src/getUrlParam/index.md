---
title: getUrlParam 获取url参数
group:
    title: 浏览器
---

# getUrlParam

获取 URL 参数。

#### 例子

```ts
getUrlParam('id'); // 假设 URL 为: https://example.com/?id=123 则返回 '123'
getUrlParam('name'); // 如果 URL 中没有 'name' 参数，则返回 ''
getUrlParam('page', 'https://example.com/?page=2'); // 返回 '2'
```

#### 参数

| 参数 |             说明              |  类型  |  默认值  |
| :--: | :---------------------------: | :----: | :------: |
| name |   要从 URL 中获取的参数名称   | string | 不能为空 |
| url  | 可选参数，要解析的 URL 字符串 | string | 当前 URL |

#### 返回值

获取到的参数值，若未找到则返回空字符串。
