const { defineConfig } = require('@vue/cli-service');
const path=require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
     resolve:{
      alias:{
        "styles":path.join(__dirname,"src/assets/styles")
      }
     }
 }
})
