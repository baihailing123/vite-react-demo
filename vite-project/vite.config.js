import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({ targets: ['chrome < 60', 'edge < 15'], renderLegacyChunks: true, }),],
  // 根路径，也就是项目的基础路径
  base: '/',
  // 服务器配置
  server: {
    // 服务器主机名，默认是 localhost
    host: 'localhost',
    // 端口号，默认是 3000
    port: 3000,
    // 是否开启 https
    https: false,
    // 服务器代理配置
    cors: true,
    proxy: {
      // 如果请求的路径符合该正则表达式，则会被代理到 target 中
      // 例如请求 /api/user 会被代理到 http://localhost:8888/api/user
      '^/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), //根据实际情况修改
      },
    },
    // 自定义中间件
    middleware: [],
    // 是否开启自动刷新
    hmr: true,
    // 是否开启自动打开浏览器
    open: true,
  },
  // 构建配置
  build: {
    // 输出目录，默认是 dist
    outDir: 'dist',
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    assetsInlineLimit: 4096, // (4kb)
    // 是否开启 sourcemap
    sourcemap: false,
    // // 是否开启压缩
    minify: 'terser', // 可选值：'terser' | 'esbuild'
    // // 是否开启 brotli 压缩
    // brotli: true,
    // 是否将模块提取到单独的 chunk 中，默认是 true
    chunkSizeWarningLimit: 500,
    // 是否提取 CSS 到单独的文件中
    cssCodeSplit: true,
    // 是否开启 CSS 压缩
    cssMinify: true,
    // 启用/禁用 esbuild 的 minification，如果设置为 false 则使用 Terser 进行 minification
    // target: 'es2015', // 可选值：'esnext' | 'es2020' | 'es2019' | 'es2018' | 'es2017' | 'es2016' | 'es2015' | 'es5'
    // 是否开启 Rollup 的代码拆分功能
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },

    // 是否开启增量式构建
    // https://vitejs.dev/guide/build.html#incremental-build
    // https://vitejs.dev/config/#build-incremental
    // https://github.com/vitejs/vite/issues/4645
    incremental: false,
  },
  // 环境变量配置
  define: {
    'process.env': {},
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       math: 'parens-division',
  //     },
  //   },
  // },
  // 优化配置
  optimizeDeps: {
    // 是否将 Vue、React、@vueuse/core 和 @vueuse/head 作为外部依赖提取出来
    include: ['vue', 'react', '@vueuse/core', '@vueuse/head'],
    // 是否开启预构建，将预构建后的代码提前注入到浏览器缓存中，以减少首次加载的时间
    prebuild: false,
  },
})
