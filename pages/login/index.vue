<!--
 * @Author: XiaoBo
 * @Date: 2022-03-22 13:01:40
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-22 16:38:33
 * @FilePath: \prevention\pages\login\index.vue
 * @Description: 登录注册页面
 * aboutnanbo@163.com
-->
<template>
    <div class="container">
        <div class="textArea">
            <at-input v-model="userName" type="text" placeholder="请输入账号"></at-input>
            <at-input v-model="password" type="password" placeholder="请输入密码"></at-input>
            <div class="buttonArea">
                <at-button type="primary" @click="checkField">登录</at-button>
                <at-button type="primary">注册</at-button>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "loginPage",
    data() {
        return {
            userName: null,
            password: null,
        };
    },
    mounted() {

    },
    methods: {
        checkField() {
            let regName = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
            // 8-20 位，字母、数字、英文特殊字符
            let regPwd = /^[A-Za-z0-9!@#$%^&*\\\\(\\\\)?><\":/.,';{}]{7,20}$/;
            console.info({ username: this.userName, password: this.password });
        },
    }
};
</script>
 
<style scoped lang="less">
@import "./login.less";
</style>

