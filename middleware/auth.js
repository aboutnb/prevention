/*
 * @Author: XiaoBo
 * @Date: 2022-03-24 13:58:35
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-24 14:19:11
 * @FilePath: \prevention\middleware\auth.js
 * @Description: 
 * @aboutnanbo@163.com
 */
import getCookie from "@/uitls/getCookie";

export default function ({
  route,
  req,
  res,
  redirect
}) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  var token, path;

  // 在服务端
  if (isServer) {
    // 获取服务端cookie
    let cookies = getCookie.getcookiesInServer(req)
    // 获取当前服务端cookie中是否含有token字段
    token = cookies.token ? cookies.token : ''
  }
  // 在客户端
  if (isClient) {
    // 获取客户端（本地）cookie中的token字段
    token = getCookie.getcookiesInClient('token')
  }

  // 判断是否获取到token
  // 未获取到，重定向到登陆页面
  if (!token) {
    $nuxt.$Message.success("您尚未登录账户，请登录！");
    setTimeout(() => {
      redirect(redirectURL)
    }, 1000);
  }
}
