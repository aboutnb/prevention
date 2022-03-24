/*
 * @Author: XiaoBo
 * @Date: 2022-03-23 21:57:12
 * @LastEditors: XiaoBo
 * @LastEditTime: 2022-03-24 11:04:36
 * @FilePath: \prevention\store\index.js
 * @Description: 
 * @aboutnanbo@163.com
 */

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userInfo: null, // 用户信息
    },
    getters: {},
    mutations: {
      userInfo(state, data) {}
    },
    actions: {}
  })
}
export default createStore
