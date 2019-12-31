<template>
    <view class="content">
		<view class="first">
		
		<view style="flex: 1;"  class="checkLine"><text  class="checkLineBtn">切换线路</text></view>
		<uni-search-bar placeholder="搜索您想看的电影名" 
		style="flex: 7;"
		@confirm="searchConfirm"
		@input="searchInput"
		@cancel="searchCancel"
		></uni-search-bar>
		</view>
		
	</view>
	
</template>

<script>
    import {
        mapState
    } from 'vuex'
	import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue' 
	import uniDrawer from '@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue' 
 
    export default {
		components:{
			uniSearchBar,
			uniDrawer
		},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		methods:{
			
			searchConfirm(){
				console.log("searchConfirm")
			},
			searchInput(){
				console.log("searchInput")
			},
			searchCancel(){
				console.log("searchCancel")
			}
		}
		
		
    }
</script>

<style>
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 0upx;
	}
	.first{
		display: flex;
		flex-direction:row;
		background-color: #efeff4;
		padding: 0upx;
		height: 52px;
		
	}
	.checkLine{
		border: 1px solid #efeff4 ;
		font-size: 10px;
		background: #FFFFFF;
		height: 21px;
		line-height: 21px;
		text-align: center;
		padding: 0px;
	}
	.checkLineBtn{
		background: #FFFFFF;
		height: 52px;
		line-height: 52px;
	}

   
</style>
