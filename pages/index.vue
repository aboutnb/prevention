<!--
 * @Author: XiaoBo
 * @Date: 2022-03-23 21:57:12
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-23 22:23:12
 * @FilePath: \prevention\pages\index.vue
 * @Description: 
 * aboutnanbo@163.com
-->
<template>
  <div class="container"></div>
</template>
 
<script>
export default {
  // layout: "default",
  name: "indexPage",
  data() {
    return {

    };
  },
  mounted() {
    // 判断用户是否登录
    window.localStorage.getItem("token") ? this.$router.push("/home") : this.$router.push("/login");
  },
  methods: {

  },
};
</script>
 
<style scoped lang="less">
// 引入初始化文件
@import "@/static/resets/resets.css";
</style>
