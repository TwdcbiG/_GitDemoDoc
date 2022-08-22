// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' /* 完整写法：import Vue from "../node_modules/vue/dist/vue.js"; */
import AppVue from './App' /* 完整写法：import AppVue from "./App.vue"; */
/**
 * 很多常用的模块是可以省略的，比如vue，axios，less等，
 * 具体哪些可以省略哪些不可以，好像也没啥规律
 */
// import router from './router' 完整写法import router from './router/index.js'.想要能够省略，则router中的文件必须名为index.js,若如下是其他名称，就必须写完整。否则会报错：Module not found: Error: Can't resolve './router' in 'F:\HBuilderProjects\vueclirouter\src'
// import router from './router/routerIndex.js'
import router from './router/routerIndex2.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#htmlApp',
  router,
  components: {
    AppVue:AppVue /* 完整写法，这里原省略为AppVue */
  },
  template: '<AppVue>dfasd</AppVue>'
})
