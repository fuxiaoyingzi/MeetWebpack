const webpack = require("webpack");
//js文件压缩插件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.webpack.config");

module.exports = WebpackMerge.merge(baseConfig, {
  plugins: [
    //webpack 自带的 版权说明插件，会在dist目录中生成bundle.js.LICENSE.txt 文本文件
    new webpack.BannerPlugin("最终版权归付小影子所有"),
    new UglifyJsPlugin(),
  ],
});
