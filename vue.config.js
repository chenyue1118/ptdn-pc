'use strict'
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    devServer: {
      host: '0.0.0.0',
      port: 6001
    }
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     filename: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),//匹配文件名
    //     threshold: 10240, //对10K以上的数据进行压缩
    //     minRatio: 0.8,
    //     deleteOriginalAssets: false //是否删除源文件
    //   })
    // ]
  },
  chainWebpack (config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
