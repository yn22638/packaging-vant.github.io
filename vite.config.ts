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
      // vant-UI自动解析
      resolvers: [VantResolver()],
      // 配置自动注入路径
      dirs: ['src/components', 'src/views/components'],
      // 指派全局组件声明文件位置
      dts: './src/components.d.ts',
      extensions: ['vue', 'tsx'],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          '@/stores': ['useUserStore'],
          vant: [
            // 像 Notify 需要在此处引入，要不打包以后没作用
            'Toast', // import { Toast } from 'vant'
            'Dialog', // import { Dialog } from 'vant'
          ],
        },
      ],
      dts: './src/types/auto-imports.d.ts', // 生成 auto-import.d.ts 全局声明
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
    proxy: {
      '/api/pc': {
        // 正式环境
        // target: XXXX,
        // 测试环境
        target: '',
        changeOrigin: true,
      },
    },
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
