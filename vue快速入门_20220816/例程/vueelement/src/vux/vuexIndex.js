import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// state，getters,mutations,actions是固定写法,不能改变
// 一个全局state对象，用于保存所有组件的公共数据
/* 这里是原始版state1.0，为了解决vue刷新后页面保存的数据都小时了，需要用监听和赋值的方式保存和恢复state的值，就改为了后续state2.0
const state = {
 	usersInfo:{
 		name:''
 	}
};
*/

/*
// state2.0
// state2.0也保不住。这里是一个示例，直接以对象写了。实际应用中由于数据很多，必然还是要分类，也就是模块化。打包写进vux/modules/userInfo.js
// 在此处引用就可以了。
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
	usersInfo: {
		name: ''
	}
};
// 取值
const getters = {
	getUserInfo() {
		return state.usersInfo;
	}
};
// 设置值。这时唯一可以修改state值的方法
// 注意：mutations是一个同步方法，是阻塞的
const mutations = {
	updateUserInfo(state, userInfo) {
		state.usersInfo = userInfo;
	}
};
// 异步执行mutations方法
const actions = {
	asyncUpdateUserInfo(context, userInfo) {
		context.commit("updateUserInfo", userInfo);
	}
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
*/

import userInfo from './modules/userInfo.js'

export default new Vuex.Store({
	modules:{
		userInfo
	}
})
