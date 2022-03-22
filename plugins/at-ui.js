/*
 * @Author: XiaoBo
 * @Date: 2022-03-22 11:50:21
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-22 15:47:16
 * @FilePath: \prevention\plugins\at-ui.js
 * @Description: 
 * @aboutnanbo@163.com
 */

import Vue from 'vue'
import 'at-ui-style' // 引入组件样式
import {
  Button,
  Input,
  LoadingBar,
  Dialog,
  Message,
} from 'at-ui'
const components = [Button, Input, ];
import zhLocale from 'at-ui/dist/locale/zh-CN'
const AtUI = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
Vue.prototype.$Notify = Notification
Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Modal = Dialog
Vue.prototype.$Message = Message
// import 'at-ui-style/src/index.scss'      // 或者引入未构建版本的 scss 样式

Vue.use(AtUI, {
  zhLocale
})
