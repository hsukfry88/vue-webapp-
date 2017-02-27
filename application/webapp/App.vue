<template>
		<div id="app">
			<div class="header">
					<span @click="change('/policy',0,0)">宏观政策</span>
				  <span @click="change('/money',1,0)">资金扶持</span>
				  <span @click="change('/reduce',2,0)">减免减收</span>
				  <span @click="change('/qualification',3,0)">资质认证</span>
				  <span @click="change('/reader',4,0)">政策解读</span>
			</div>

		  <!-- 路由出口 -->
		  <!-- 路由匹配到的组件将渲染在这里 -->
		  <router-view></router-view>
		</div>
</template>
<script>
		export default{
			  name:'app',
	  		methods:{
	  			change(link,type,start){
	  				this.$router.push({ path:link, query: { type: type,start:start}})
	  			}
	  		}
		}
</script>
<style src="./assets/common.css"></style>