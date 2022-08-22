<template>
  <div>
    这里是嵌套路由控制的 - 会员列表<br>
	<br>
	这里验证的是同一个路由，在路由中配置了【:参数名】 。则路径匹配的两种方式都可以完成参数传递<br>
	点击会员列表<br>
	to的方式进行跳转成功，rvsw_2={{$route.params.rvsw_2}},aesf={{$route.params.aesf}}<br>	
	点击会员列表—_2<br>
	:to(传递对象)的方式进行跳转成功，rvsw_2={{$route.params.rvsw_2}},aesf={{$route.params.aesf}}。还可以在路由配置的参数的基础上传递其他参数。
  </div>
</template>

<script>
  export default {
    name:'memberList'
  }
</script>

<style>
</style>