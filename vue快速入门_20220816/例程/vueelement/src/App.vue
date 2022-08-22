<template>
  <div id="app">
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  name: 'App',
	mounted() {
		// 监听页面刷新的钩子函数
		window.addEventListener('unload',this.saveState);
	},
	methods:{
		saveState(){
			// 保存state对象的方法
			sessionStorage.setItem('state',JSON.stringify(this.$store.state.userInfo))
		}
	}
}
</script>

<style>
#app {

}
</style>
