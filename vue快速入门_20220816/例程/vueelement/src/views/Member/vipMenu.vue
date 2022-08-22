<template>
	<div>
		这里是尊贵的vip领域,使用props传递参数<br>
		<br>
		还有一个点是：在路由处配置了【:参数名】，则传递的参数会被显示在url中。<br>
		如下两个链接vip，vip_2都是使用完全相同的props，:to(传递对象)传递方式传递参数。<br>		
		props接受到的参数是head={{$route.params.head}},d={{$route.params.d}}<br>
		点击vip，则url上只是路由信息<br>
		点击vip_2,则url上不止路由信息，还出现了参数信息。<br>
	</div>
</template>

<script>
	export default{
		prop:["head"],
		name:"VipMenu"
	}
</script>

<style>
</style>
