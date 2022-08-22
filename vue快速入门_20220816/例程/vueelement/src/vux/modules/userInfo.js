const user = {
	state : sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
		usersInfo: {
			name: ''
		}
	},
	// 取值
	getters : {
		getUserInfo(state) {
			return state.usersInfo;
		}
	},
	// 设置值。这时唯一可以修改state值的方法
	// 注意：mutations是一个同步方法，是阻塞的
	mutations : {
		updateUserInfo(state, userInfo) {
			state.usersInfo = userInfo;
		}
	},
	// 异步执行mutations方法
	actions : {
		asyncUpdateUserInfo(context, userInfo) {
			context.commit("updateUserInfo", userInfo);
		}
	},
	
}

export default user;