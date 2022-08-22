import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import component1 from '../components/new_file1.vue'
import component2 from '../components/new_file2.vue'

export default new VueRouter({
  routes:[
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
})