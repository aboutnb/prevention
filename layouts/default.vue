<!--
 * @Author: XiaoBo
 * @Date: 2022-03-23 10:29:18
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-28 21:25:21
 * @FilePath: \prevention\layouts\default.vue
 * @Description: layout默认布局
 * aboutnanbo@163.com
-->
<template>
    <div class="container">
        <Nuxt />
        <div class="tabBar">
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
    layout: 'default',
    name: "default",
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
//@import '~/assets/css/img/xxx.less';
.container {
    .tabBar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 8vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-template-areas: "tabOne tabTwo tabThree";
        justify-items: center;
        align-items: center;
        border-top: 1px solid #ccc;
        background-color: #fff;
        img {
            width: 2rem;
            height: 2rem;
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

