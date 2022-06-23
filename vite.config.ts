import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // 插件配置
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          vant: [
            'Toast', // import { Toast } from 'vant'
            'Dialog', // import { Dialog } from 'vant'
          ],
        },
      ],
      dts: './src/types/auto-imports.d.ts',
    }),
  ],
  //设置的别名
  resolve: {
    // 如果报错__dirname找不到，需要安装node,
    // 执行npm i @types/node --save-dev
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 服务配置
  server: {
    port: 3000, // 端口号
    open: true, // 自动在浏览器打开
    https: false, // 是否开启 https
  },
  // css 处理
  css: {
    preprocessorOptions: {
      scss: {
        /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
        // additionalData: `@import "./src/styles/css/global.scss";`,
      },
    },
  },
  //  生产环境
  build: {
    //指定输出路径
    assetsDir: './',
    minify: 'terser',
    // 指定输出文件路径
    outDir: 'dist',
    // 代码压缩配置
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
