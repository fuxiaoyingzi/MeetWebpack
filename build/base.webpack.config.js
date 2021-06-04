const path = require("path");
//vue加载插件
const { VueLoaderPlugin } = require("vue-loader");
//生成HTML文件插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //入口文件
  entry: "./src/main.js",
  //出口文件
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    // publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader 只负责讲css文件进行加载
        //style-loader 负责将样式添加到dom中
        //使用多个loader时，依次加载顺序从右边到左边
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片 小于limit时8k 会将图片编译Base64字符串形式
              //当加载的图片 大于limit时8k 需要使用file-loader模块进行加载
              limit: 8192, //限制大小可以修改
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    //导入文件 省略扩展后缀名
    extensions: [".js", ".css", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@style": path.resolve(__dirname, "../src/style"),
      "@img": path.resolve(__dirname, "../src/img"),
      "@component": path.resolve(__dirname, "../src/component"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 打包后的文件名，默认是index.html
      template: path.resolve(__dirname, "../src/index.html"), // 导入被打包的文件模板
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
};
