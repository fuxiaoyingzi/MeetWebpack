<!--  -->
<template>
  <div id="app">
    <header-view></header-view>
    <div>hello shadow.hello vue.hello wrold</div>
  </div>
</template>

<script>
import Header from "./component/Header";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { "header-view": Header },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style scoped></style>
