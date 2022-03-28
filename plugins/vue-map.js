/*
 * @Author: XiaoBo
 * @Date: 2022-03-28 21:32:49
* @LastEditors: XiaoBo
* @LastEditTime: 2022-03-28 22:44:50
* @FilePath: \prevention\plugins\vue-map.js
 * @Description: 高德地图配置
 * @Email: aboutnanbo@163.com
 */
import Vue from 'vue';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
if (!Vue.prototype.$isServer) {
  VueAMap.initAMapApiLoader({
    // 高德的key
    key: '9f3e37d7631b7bd80888a397895dc3ed',
    // 插件集合
    plugin: ['AMap.Geolocation', 'AMap.Marker'],
    uiVersion: '1.0', // 版本号
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
  });
}
