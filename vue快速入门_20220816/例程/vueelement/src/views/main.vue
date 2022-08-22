<template>
	<div>
		<h1>这里是主页</h1>
		<div>
			<el-container>
				<el-aside width="200px">
					<el-menu :default-openeds="['1']">
						<el-submenu index='1'>
							<template slot="title"><i class="el-icon-message"></i>会员管理</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">
									<router-link to="/member/level/1">会员等级</router-link>									
								</el-menu-item>
								<el-menu-item index="1-2">
									<router-link :to="{name:'MemberLevelurl_obj',params:{v:'vvv',r:'rrr'}}">会员等级_obj</router-link>									
								</el-menu-item>
								<el-menu-item index="1-3">
									<!-- <router-link to="/member/list/dfd到底20">会员列表</router-link> -->
									<router-link to="/member/list/type:1">会员列表</router-link>
									<!-- 转义写法 <router-link :to="{name:'MemberListurl',params:{rvsw_2:&quot;dfasd_20&quot;}}">会员列表</router-link> -->
								</el-menu-item>
								<el-menu-item index="1-4">
								<router-link :to="{name:'MemberListurl',params:{rvsw_2:'type2',aesf:'乱打的个传递参数名'}}">会员列表_2</router-link>
									<!-- 转义写法 <router-link :to="{name:'MemberListurl',params:{rvsw_2:&quot;dfasd_20&quot;}}">会员列表</router-link> -->
								</el-menu-item>
								<el-menu-item index="1-5">
									<router-link :to="{name:'VIPMenuurl',params:{head:'a哈哈哈',d:33}}">VIP</router-link>
								</el-menu-item>
								<el-menu-item index="1-6">
									<router-link :to="{name:'VIPMenuurl_2',params:{head:'a哈哈哈',d:33}}">VIP_2</router-link>
								</el-menu-item>
								<el-menu-item index="1-7">
									<router-link :to="{name:'goMain',params:{username:'a哈哈哈'}}">回到首页</router-link>
									<!-- <router-link to="/goMain/sasSD地方">回到首页</router-link> -->
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>

						<el-submenu index='2'>
							<template slot="title"><i class="el-icon-message"></i>商品管理</template>
							<el-menu-item-group>
								<el-menu-item index="2-1">商品分类</el-menu-item>
								<el-menu-item index="2-2">商品列表</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>

				<el-container>
					<el-header style="text-align: right; font-size: 12px">
						<el-dropdown>
							<i class="el-icon-setting" style="margin-right: 15px"></i>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>用户中心</el-dropdown-item>
								<el-dropdown-item>
									<router-link to="/main">退出登录</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						<!-- 这里是通过路由获取的参数，下面是通过vuex获取的参数 <span>{{$route.params.username}}</span> -->
						<!-- 这里是本来都写在外面当对象时的获取vuex参数的方式<span>{{$store.getters.getUserInfo.name}}</span> 下面时把vuex数据模块化后的获取方式，才是一般使用的方式。 -->
						<span>{{$store.getters.getUserInfo.name}}</span>
					</el-header>

					<el-main>
						<router-view></router-view>
					</el-main>
				</el-container>
			</el-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myMain'
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>
