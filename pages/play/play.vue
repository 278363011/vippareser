<template>
	<view  class="content-list">
		<view style="color: red;font-size: 14px;">
			郑重提示：本系统为本人兴趣学习所研发，仅供学习交流，禁止用于商业用途，禁止传播给第三方，如大肆传播违反相关版权方权益的情况下，自行承担所犯法律责任;并请于下载本软件后24小时内删除
		</view>
		<view>
			<web-view   style="width: 750upx;height: 300px;margin-top: 68px;" :src=url></web-view>
		</view> 
	</view> 

</template> 

<script>
	export default {
		data() {
			return {
				url:""
			}
		},
		onLoad(options){
			let  uls="https://jx.688ing.com/?search=";
			console.log(uls+options.url)
			this.url=uls+options.url
		},
		methods: {
			
		}
	}
</script>

<style>
.content-list{
	height: 100%;
	background: #ffffff;
}
</style>
