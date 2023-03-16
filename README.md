# @pigjs/utils

一款面向业务场景的前端实用 utils 库

目前已经支持：

-   浏览器
    -   getUrlParam 获取 url 参数
    -   getUrlParams 获取 url 所有参数
    -   setUrlParams 设置 url 参数
-   实用函数
    -   digitUppercase 金额中文大写
    -   formatMoney 金额添加千分号
    -   getObjectValue 对象安全取值
    -   mergeProps 合并默认值和 props
    -   omit 忽略对象属性
    -   sleep 睡眠函数
-   react 相关
    -   attachPropertiesToComponent 把属性连接到 组件上 + useEvent 返回一个函数，自动 useCallback 解决闭包陷阱
    -   useMemo 缓存计算结果，自定义更新
    -   useMount 只在组件 mount 时执行的 hook
    -   usePropsValue 数据双向绑定
    -   useSetState 和 class this.setState 功能相同
    -   useUnmount 只在组件 unmount 时执行的 hook
    -   useUpdate 返回一个函数，调用该函数会强制组件重新渲染
    -   useUrlParam 获取 url 参数 hook
    -   useUrlState 管理 url 参数状态的 hook
    -   withNativeProps 合并 props 的 className、style 和 element 的 className、style
    -   withStopPropagation 阻止组件事件冒泡
-   类型
    -   isArray 检查输入值是否为 数组
    -   isBase64 检查输入值是否为 base64 字符串
    -   isBlob 检查输入值是否为 Blob
    -   isBoolean 检查输入值是否为 布尔值
    -   isEmpty 检查输入的值是否为空
    -   isEmptyArray 检查输入的值是否为 空数组
    -   isEmptyObject 检查输入的值是否为 空对象
    -   isEmptyString 检查输入的值是否为 空字符串
    -   isFile 检查输入的值是否为 File
    -   isFunction 检查输入的值是否为 function
    -   isNil 检查输入值是否为 'null' 或 'undefined'
    -   isNull 检查输入的值是否为 null
    -   isNumber 检查输入的值是否为 数字 不包括 NaN
    -   isObject 检查输入的值是否为 对象
    -   isRegExp 检查输入的值是否为 正则
    -   isString 检查输入的值是否为 字符串
    -   isUndefined 检查输入的值是否为 undefined

查看我们的网站[@pigjs/utils](http://utils.pigjs.com/)了解更多信息
