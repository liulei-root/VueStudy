const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  //搭建本地服务器
  devServer: {
    contentBase: './dist',
    inline: true //实时监听
  }
})