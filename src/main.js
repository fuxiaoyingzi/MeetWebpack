import Vue from "vue";
import App from "./APP";

//使用commonJs的模块化规范
const { add, mul } = require("./js/MathUtil");
console.log("hello");
console.log(add(1, 2));
console.log(mul(1, 2));

//使用es6的模块化规范
import { name, age, address } from "./js/useInfo";
console.log(name);
console.log(age);
console.log(address);

//把css 文件当成 模块导入
require("./style/main.css");

//依赖less文件
require("./style/normal.less");

//方式1
new Vue({
  el: "#app", //在index.html，创建div 设置id为app
  components: { App },
  template: "<App/>",
});

//方式2
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
