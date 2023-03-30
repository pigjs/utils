---
title: attachPropertiesToComponent 把属性连接到组件上
group:
    title: react
    path: /react
---

# attachPropertiesToComponent

把属性连接到 组件上

#### 例子

```ts
attachPropertiesToComponent(Form, { Item, Group });
```

#### 参数

|    参数    |        说明        |        类型         | 默认值 |
| :--------: | :----------------: | :-----------------: | :----: |
| component  |  要附加属性的组件  |    ComponentType    |   -    |
| properties | 要连接到组件的属性 | Record<string, any> |   -    |
