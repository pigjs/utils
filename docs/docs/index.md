---
title: 快速上手
nav:
    title: 文档
    path: /docs
    order: 1
---

# @pigjs/utils

@pigjs/utils 是一款面向业务场景的前端实用 utils 库，由 @pigjs/type-utils、@pigjs/browser-utils、@pigjs/practical-utils、@pigjs/react-utils 包共同构成，可以根据自己的需要，自行组合或独立使用

# 安装

```
npm i --save @pigjs/utils
```

# 使用

```ts
import { isNull } from '@pigjs/utils';
```

# 按需加载

@pigjs/utils 默认支持基于 ES modules 的 tree shaking，直接引入 import {isNull} from '@pigjs/utils' 就会有按需加载的效果
