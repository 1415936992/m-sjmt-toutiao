// 导入 vue 模块，用来安装插件
import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 调用 Vue.use() 函数，把 VueRouter 实例安装给 vue 插件
Vue.use(VueRouter)

// 路由规则
const routes = []

const router = new VueRouter({
  // 挂载路由规则
  routes
})

// 向外共享路由实例
export default router
