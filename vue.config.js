const { defineConfig } = require('@vue/cli-service')
const pageName = '黑马面面'
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost'
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = pageName;
        return args;
      })
  }
})
