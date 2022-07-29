// 导入 vue 模块，创建 SPA
import Vue from 'vue'
// 导入带渲染的根组件
import App from './App.vue'
// 导入路由模块
import router from './router'
// 导入状态管理模块
import store from './store'
// 导入全局样式表
import '@/styles/index.less'
// 是否再终端显示 vue 提示信息
Vue.config.productionTip = false

new Vue({
  // 全局挂载路由
  router,
  // 全局挂载状态管理
  store,
  // render 函数指定要渲染的根组件
  render: h => h(App)
}).$mount('#app') // 指定要渲染页面中的哪个区域
