/*
 * @Author: XiaoBo
 * @Date: 2022-03-22 11:50:21
* @LastEditors: XiaoBo
* @LastEditTime: 2022-03-23 23:08:18
* @FilePath: \prevention\plugins\at-ui.js
 * @Description: 
 * @aboutnanbo@163.com
 */

import Vue from 'vue'
import 'at-ui-style' // 引入组件样式
import {
  Button,
  Input,
  Message,
  LoadingBar,
  Dialog,
} from 'at-ui'
const Components = [Button, Input, ];
import zhLocale from 'at-ui/dist/locale/zh-CN'
const AtUI = {
  install(Vue) {
    Components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
Vue.prototype.$Notify = Notification
Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Modal = Dialog
Vue.prototype.$Message = Message

Vue.use(AtUI, {
  zhLocale
})
