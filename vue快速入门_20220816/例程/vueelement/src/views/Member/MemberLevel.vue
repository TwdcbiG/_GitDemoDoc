<template>
	<div>
		本页由嵌套路由控制<br>
		<br>
		“会员等级”链接<br>
		验证路由参数传递方式-路径匹配中to传递了参数id={{$route.params.id}},<br>
		$route.params是固定写法，id就是我们在路由中配置的属性名。必须配置，不配置无法传递数据。<br>
		点击会员等级，这里的值会被填充
		<br>
		<br>
		“会员等级_obj”链接<br>
		验证路由参数传递方式-路径匹配:to(传递对象)传递了r={{$route.params.r}},v={{$route.params.v}}<br>
		路由中是没有配置r，v这些属性名的。想配置也可以配置，配置了依旧正常传递数据。<br>
		点击会员等级_obj，这里的值会被填充
	</div>
</template>

<script>
  export default {
    name:'memberLevel',
		beforeRouteEnter:(to,from,next)=>{
			/*
			next()是什么？
			类似与拦截器，当前处理完，去调用下一个拦截器，或下一个请求或页面。next会让你跳转到下一个钩子函数，或下一个要去的路由。
			to是什么？
			我们将要去哪一个组件
			from是什么？
			我们从哪一个组件过来的
			*/
			console.log("beforeRouteEnter - 进入会员等级页面");
			
			/*
			使用axios。
			首先要记住，我们这里是路由钩子函数，也就是在进入页面之前使用的函数，也就是页面中的内容实际还没有加载完成。
			next()函数中增加一个vm，相当于是一个回调。是一个实例。
			有了这个实例，我们就可以去调用axios的请求
			*/
			next(obj=>{
				
			});
		},
		beforeRouteLeave:(to,from,next)=>{
			console.log("beforeRouteLeave - 离开会员等级页面");
			next();
		},
		methods:{
			getData:function(){
				this.axios({
					method:'get',
					url:'http://localhost:8080/data.json'
				}).then(function(repos){
					console.log(repos);
				}).catch(function(error){
					console.log(error);
				});
			}
		}
  }
</script>

<style>
</style>