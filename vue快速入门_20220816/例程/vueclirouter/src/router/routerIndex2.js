/* 稍微详细的介绍router加载过程 */

// 1.引入vue，vue-router包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter);

// 2.引入跳转对象
import component1 from '../components/new_file1.vue'
import component2 from '../components/new_file2.vue'

// 3.创建路由对象，配置映射关系
const routes=[
  {
    name:'file1',
    path:'/newfile1',
    component:component1
  },
  {
    name:'file2',
    path:'/newfile2',
    component:component2
  }
]
const router = new VueRouter({
  routes
})

// 4.暴露路由对象
export default router
