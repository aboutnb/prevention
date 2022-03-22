<template>
  <div class="container">
    <div class="tabBar">
      <Nuxt />
      <nuxt-link to="home">
        <div class="tabOne">
          <img src="@/static/img/icon/one.png" alt />
        </div>
      </nuxt-link>
      <nuxt-link to="health">
        <div class="tabTwo">
          <img src="@/static/img/icon/two.png" alt />
        </div>
      </nuxt-link>
      <nuxt-link to="mine">
        <div class="tabThree">
          <img src="@/static/img/icon/three.png" alt />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "indexPage",
  data() {
    return {};
  },
  mounted() { },
  methods: {},
};
</script>
 
<style scoped lang="less">
// 引入初始化文件
@import "@/static/resets/resets.css";
//@import '~/assets/css/img/xxx.less';
.container {
  .tabBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "tabOne tabTwo tabThree";
    justify-items: center;
    align-items: center;
    border-top: 1px solid #ccc;
    img {
      width: 5vh;
      height: 5vh;
    }
    .tabOne {
      grid-area: tabOne;
    }
    .tabTwo {
      grid-area: tabTwo;
    }
    .tabThree {
      grid-area: tabThree;
    }
  }
}
</style>
