/*
 * @Author: XiaoBo
 * @Date: 2022-03-24 14:00:49
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-24 14:00:49
 * @FilePath: \prevention\uitls\getCookie.js
 * @Description: 获取cookie
 * @aboutnanbo@163.com
 */
import Cookie from 'js-cookie'

export default {
  //获取服务端cookie
  getcookiesInServer: function (req) {
    let service_cookie = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
      let parts = val.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    return service_cookie;
  },
  //获取客户端cookie
  getcookiesInClient: function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  }
}
