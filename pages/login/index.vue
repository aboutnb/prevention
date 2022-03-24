<!--
 * @Author: XiaoBo
 * @Date: 2022-03-22 13:01:40
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-24 14:30:16
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
            // 判断账号密码是否为空并验证格式
            // if (this.userName == null || this.password == null) {
            //     this.$Message.warning("账号或密码不能为空");
            //     return;
            // }
            // if (!regName.test(this.userName)) {
            //     this.$Message.warning("账号格式不正确");
            //     return;
            // }
            // if (!regPwd.test(this.password)) {
            //     this.$Message.warning("密码格式不正确");
            //     return;
            // }
            // 发送Axios请求
            this.$axios("/login", {
                method: "post",
                data: {
                    username: this.userName,
                    password: this.password,
                }
            }).then(res => {
                console.log(res, 'res.status');
                if (res.status == 200) {
                    // 存储用户信息到vuex
                    this.$store.commit("userInfo", res.data);
                    // 存储用户信息到localStorage
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    localStorage.setItem("user_name", JSON.stringify(res.data.user_name));
                    // 1.获取
                    // Cookie.get(key)
                    // 2.设置
                    Cookie.set('userinfo', res.data.token, { expires: expires })
                    // 3.删除
                    // Cookie.remove("name")
                    // 设置cookie过期时间
                    let seconds = 3600;     // 过期时间 /秒
                    let expires = new Date(new Date() * 1 + seconds * 1000);

                    console.log(res.data.msg);
                    setTimeout(() => {
                        this.$router.push("/home");
                    }, 1000);
                    this.$Message.success(res.data.msg);
                } else {
                    this.$Message.error(res.data.msg);
                }
            })
                .catch(err => {
                    this.$Message.error("登录失败");
                });
        },
    }
};
</script>
 
<style scoped lang="less">
@import "./login.less";
</style>

