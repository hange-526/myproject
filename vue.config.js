const { defineConfig } = require('@vue/cli-service');
const path=require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
     resolve:{
      alias:{
        "styles":path.join(__dirname,"src/assets/styles")
      }
     },
     devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/mock'
          }
        },
      }
    },
 }
})
