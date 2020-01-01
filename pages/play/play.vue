<template>
	<view  class="content-list">
		<view style="color: red;font-size: 14px;">
			郑重提示：本系统为本人兴趣学习所研发，仅供学习交流，禁止用于商业用途，禁止传播给第三方，如大肆传播违反相关版权方权益的情况下，自行承担所犯法律责任;并请于下载本软件后24小时内删除
		</view>
		<view>
			<web-view :webview-styles="webviewStyles" style="width: 100%;height: 100%;margin-top: 68px;" src="http://api.baiyug.vip/index.php?url=https://www.iqiyi.com/v_19rvh2ahsw.html?src=focustext_1_20130410_1"></web-view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
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
