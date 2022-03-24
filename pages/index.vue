<!--
 * @Author: XiaoBo
 * @Date: 2022-03-23 21:57:12
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-24 14:21:10
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
  middleware: 'auth',
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
 
<style scoped lang="less">
// 引入初始化文件
@import "@/static/resets/resets.css";
</style>
