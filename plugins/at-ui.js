/*
 * @Author: XiaoBo
 * @Date: 2022-03-22 11:50:21
* @LastEditors: XiaoBo
* @LastEditTime: 2022-03-23 22:42:41
* @FilePath: \prevention\plugins\at-ui.js
 * @Description: 
 * @aboutnanbo@163.com
 */

import Vue from 'vue'
import 'at-ui-style' // 引入组件样式
import AtComponents from 'at-ui'
import zhLocale from 'at-ui/dist/locale/zh-CN'
Vue.use(AtComponents, {
  zhLocale
})
