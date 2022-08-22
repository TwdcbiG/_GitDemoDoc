import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import Login from '../views/login.vue'
import Main from '../views/main.vue'
import MemberList from '../views/Member/MemberList.vue'
import MemberLevel from '../views/Member/MemberLevel.vue'
import VIPMenu from '../views/Member/vipMenu.vue'
import Error404 from '../views/error.vue'

export default new VueRouter({
	mode:'history',
  routes:[
    {
      name:'login',
      path:'/',
      component:Login
    },
    {
      name:'main',
      path:'/main/:username',
      component:Main,
      // 在Main中使用的路由，所以在这里配置子路由（也就是嵌套路由）
      children:[
        {
          name:'MemberLevelurl',
		  path:'/member/level/:id',
          component:MemberLevel
        },
		{
		  name:'MemberLevelurl_obj',
		  path:'/member/level',
		  component:MemberLevel
		},
        {
          name:'MemberListurl',
          path:'/member/list/:rvsw_2',
          component:MemberList
        },	
		{
		  name:'VIPMenuurl',
		  path:'/member/vip',
		  // path:'/member/vip',
		  component:VIPMenu,
		  props:true
		},	
		{
		  name:'VIPMenuurl_2',
		  path:'/member/vip/:d:head',
		  // path:'/member/vip',
		  component:VIPMenu,
		  props:true
		}
      ]
    },
		{/* 配置重定向 */
			name:'goMain',
			path:'/goMain/:username',
			redirect:'/main/:username'
		},
		{
			name:'error404',
			path:'*',
			component:Error404
		}
  ]
})
