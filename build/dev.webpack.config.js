const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.webpack.config");

module.exports = WebpackMerge.merge(baseConfig, {
  devServer: {
    contentBase: "./dist", // 服务器访问的文件目录
    open: true, //是否是立即打开
    port: 8080, //端口号
    host: "localhost", //链接地址
  },
});
