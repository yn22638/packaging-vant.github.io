# PackagingVant

## 介绍

- h5 项目
- 主要采用 vue+vite+ts
- ui 框架采用 vant3
- echrts 采用 antv

## 自动生成图片

[地址](https://picsum.photos/)

```
易于使用，时尚的占位符
只需在我们的 URL 后添加您想要的图像尺寸（宽度和高度），您就会得到一张随机图像。
https://picsum.photos/200/300

要获得方形图像，只需添加大小。
https://picsum.photos/200
```

## 启动

1.  pnpm i
2.  pnpm run dev
3.  打开 http://localhost:3000/

## windi css

[地址](https://windicss.org/)

- ⚡️ 速度快- 比 Vite 上的 Tailwind 快 20~100 倍
- 🧩 按需 CSS 实用程序（与 Tailwind CSS v2 完全兼容）
- 📦 按需原生元素样式重置（预检）
- 🔥 热模块更换 (HMR)
- 🍃 加载配置 tailwind.config.js
- 🤝 与框架无关 - Vue、React、Svelte 和 vanilla！
- 📄 CSS @apply/@screen 指令转换（也适用于 Vue SFC 的<style>）
- 🎳 支持变体组 - 例如 bg-gray-200 hover:(bg-gray-100 text-red-300)
- 😎 “在 Devtools 中设计” - 如果您在传统的 Tailwind 中以这种方式工作，我们没有理由不能！

> 查看 Vite 上 Windi CSS 和 Tailwind CSS 之间的速度比较。 [go](https://twitter.com/antfu7/status/1361398324587163648)

## auto-import

- 使用 auto-import 在 vite.config 里面配置好倒入的内容，这样的好处我们在代码里就不需要任何引入
  如

```js
// import { ref } from 'vue'
// 无需引入 我们也可以使用
const count = ref(9)
// 还有一些vant组建，无须自己全局导入或者按需导入，直接配置在auto-import就可以直接使用，auto import内部也是采用按需倒入原理
```

## vueuse

## pinia

## @commitlint/config-conventional

- packjson 里面 scripts 指定了运行脚本命令的 npm 命令行来安装 git 提交规范，
  **"preinstall": "npm install -g commitizen cz-conventional-changelog @commitlint/cli @commitlint/config-conventional"**

```js
// 安装完成以后要生成一个commitlint.config.js配置文件
// 这样就好了，当然还有其他的配置方式和不同的插件种类就不多做讲解了
module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

## @bryanadamss/drawing-board

- 自己封装了一个全局组建，也就是签字画板，具体可以去页面查看

## 特技

1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
