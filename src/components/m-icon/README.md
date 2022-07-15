# m-icon

## Web Components

通过使用 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 实现图标展示

[IconPark 图标在线链接(Web Component)功能使用指南](https://bytedance.feishu.cn/wiki/wikcnJZV45hM71QgI60iwkzvXob)

## 图标属性

` Web component` 作为 `web` 组件 的标准，也支持通过为组件设置属性，达成不同的功能/展示效果。（如果接触过 `React / Vue` 等前端框架的话，一定对组件的概念比较熟悉，不熟悉的同学建议阅读下 介绍`web component` 的`MDN`文档）。下方表格里是目前阶段生成的图标代码在使用时 需要/可以 设置的属性。

| 属性                            | 值类型  | 是否必传 | 说明                                                                                                                                                                                                                              |
| ------------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon-id                         | string  | 否       | iconpark 图标 id，填写代码打包时项目中包含的图标 id 值                                                                                                                                                                            |
| name                            | string  | 否       | 图标自定义标识（**使用时 name 和 icon-id 至少要有一个, icon-id 优先级更高**）                                                                                                                                                     |
| size                            | string  | 否       | 表示所渲染的 svg 图形宽高，默认 1em，有效值的格式参考 svg 元素的宽度/高度取值。如果图标比例非 1:1，建议略过此值，直接设置 width，height                                                                                           |
| width                           | string  | 否       | 表示所渲染的 svg 图形宽度，默认 1em，优先级高于 size                                                                                                                                                                              |
| height                          | string  | 否       | 表示所渲染的 svg 图形高度，默认 1em，优先级高于 size                                                                                                                                                                              |
| color                           | string  | 否       | 表示所渲染的 svg 图形中需要变色区域的颜色。有效值的格式参考 svg 元素的 stroke/fill 取值                                                                                                                                           |
| stroke                          | string  | 否       | 表示所渲染的 svg 图形中需要变色区域的 stroke 颜色，优先级高于 color 。                                                                                                                                                            |
| fill                            | string  | 否       | 表示所渲染的 svg 图形中需要变色区域的 fill 颜色，优先级高于 color 。                                                                                                                                                              |
| style                           | string  | 否       | html 元素的 style，只不过 style 的值被应用在 svg 元素的外层容器而非元素自身，可以用来设置图标背景、调整 svg 在容器中的布局。未设置此值时，svg 的外层容器布局为 display: inline-flex; align-items: center;justify-content: center; |
| class                           | string  | 否       | html 元素的 class, 与 style 类似，class 中的样式应用在 svg 元素的外层容器而非元素自身                                                                                                                                             |
| rtl                             | boolean | 否       | 表示是否将 svg 图标从右到左渲染(镜像)，默认为 false。与一般 html 标签一致，标签上存在 rtl 属性即认为 true，例如<iconpark-icon rtl="false" icon-id="xxx"></iconpark-icon> 图标也会从右到左渲染。                                   |
| spin                            | boolean | 否       | 表示是否为 svg 添加旋转动画（旋转动画为无限循环），默认为 false。与一般 html 标签一致，标签上存在 spin 属性即认为 true，例如<iconpark-icon spin="false" icon-id="xxx"></iconpark-icon> 图标也会旋转。                             |
| ...其它 html 元素原生支持的属性 |
