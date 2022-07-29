// 导入 vue 模块，用来安装插件
import Vue from 'vue'
import Vuex from 'vuex'

// 调用 Vue.use() 函数，把 Vuex 实例安装给 vue 插件 [往后每个模块中都能使用 Vuex]
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
