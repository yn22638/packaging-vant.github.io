# 线上地址

点击即可预览效果[Go](https://yn22638.github.io/packaging-vant.github.io/)
>Tip:注意是h5端

**主要针对现有的 ui 框架内容 可能有些地方做的还是不够好，就自己进行二次封装个，还有些就是自己练手去做 `ui` 库里面的内容，因为现在参与开发次数越来越多，所以还是站在开发的角度去做一些组件，也当是自己练手啦**

[预览地址](https://yn22638.github.io/packaging-vant.github.io/)

### 说明
* 大家如果合适的组件那么直接拿走去用就好了
* 有不足点随时提出哈
* 具体组件文档还为写，但是可以加我`vx`与我沟通

### 技术栈

**具体用到的技术栈，主要有**

- vue3
- vant3
- Vite
- TypeScript
- AntV
- Pinia
- Windicss
- Moment
- Vueuse
- Volar

### 插件

**接下来说一说用到了哪些插件，及为什么使用，带来了哪些好处**

1. unplugin-auto-import
   📝

   - 用了这个以后就直接解放双手，自动导入` composition api`` 和 生成全局 `typescript`说明 主要实现 `
   - 好处就是以后每个 `vue` 文件里面用到的 `api`，都不需要手动引入了，你用了，他会帮你自动引入，很节省效率,包括一个很明显的例子，就是我用到了 vant，我第一次引入是全局引入，后来觉得不妥，就采用按需引入（也需要自己手动引入用到的插件，在配置到 main 里，很麻烦），但是后来发现这个插件，就直接用了这个插件，三俩下配置下就好了，
   - 具体配置就是在 ` vite.config.ts`` 里面配置，先去引入对应的实例，然后在 `defineConfig`里面配置 `AutoImport`，我的配置在下面，然后具体配置请看[文档](https://github.com/antfu/unplugin-auto-import)

   ```TypeScript
   import vue from '@vitejs/plugin-vue'
   import AutoImport from 'unplugin-auto-import/vite'
   AutoImport({
      imports: [
        'vue',
        {
          vant: [
            // 像 Notify 需要在此处引入，要不打包以后没作用
            'Toast', // import { Toast } from 'vant'
            'Dialog', // import { Dialog } from 'vant'
          ],
        },
      ],
      dts: './src/types/auto-imports.d.ts', // 生成 auto-import.d.ts 全局声明
    }),
   ```

2. unplugin-vue-components
   [地址](https://github.com/antfu/unplugin-vue-components)

#### 启动

1.  pnpm i
2.  pnpm run dev
3.  打开 http://localhost:3000/

#### 打包

- pnpm build
- 本地会生成一个 dist 文件，由于 vite\

### 在线预览

- 我这里是使用的 http-server
  > cd dist -> http-server

### 自动生成图片

[地址](https://picsum.photos/)

```
易于使用，时尚的占位符
只需在我们的 URL 后添加您想要的图像尺寸（宽度和高度），您就会得到一张随机图像。
https://picsum.photos/200/300

要获得方形图像，只需添加大小。
https://picsum.photos/200
```

### windi css

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

#### 特技

1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

#### 结尾

具体的介绍都在这里，如果您感觉这些内容对您有帮助的话，麻烦点个 star(⭐️) 吧
