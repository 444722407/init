import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import postCssPxToRem  from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 换算基数，
          rootValue: 75,
          //允许REM单位增长到的十进制数字,小数点后保留的位数
          unitPrecision: 5,
          propList: ['*'],
          //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          exclude: /(node_module)/,
          //（布尔值）允许在媒体查询中转换px。
          mediaQuery: false,
          //要忽略并保留为px的选择器，本项目我是用的vant ui框架，所以忽略他
          selectorBlackList: ['van','body','html'],
          //设置要替换的最小像素值
          minPixelValue: 1,
        }),
      ],
    },
  },
  server: { 
    host: true,
    proxy: {
      "/api": {
        target: 'http://www.baidu.com',//后端的地址
        changeOrigin: true,//开启跨域访问
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
   },
 }
})
