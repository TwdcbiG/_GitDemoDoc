// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router/routerIndex.js'
import axios from 'axios'
import store from './vux/vuexIndex.js'


// 安装ElementUI
Vue.use(ElementUI);
// 声明使用axios
Vue.prototype.axios = axios;



Vue.config.productionTip = false

// vue路由钩子函数 - 在每次路由跳转之前触发
router.beforeEach((to,from,next)=>{
	let isLogin = sessionStorage.getItem('isLogin');
	
	if(to.path=='/logout'){
		/* 如果登出的话，清空状态并跳转登录页 */
		sessionStorage.clear();
		next({path:'/'})
	}else if(to.path=='/'){
		/* 如果是登录页，看看是不是已经记录了登录状态，如果记录了，直接跳转主页 */
		if(isLogin!=null){
			next({path:'/main/gsdfg'})
		}
	}else if(isLogin==null){
		next({path:'/'})
	}
	
	next();
})

/* eslint-disable no-new */
new Vue({
  el: '#indexApp',
  router,
	store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
