<template>
	<view class="content">
		<view class="first">
			<view style="flex: 1.5;" class="checkLine"><text class="checkLineBtn" @click="checkoutline">切换线路</text></view>
			<uni-search-bar placeholder="搜索您想看的电影名" style="flex: 6.5;" @confirm="searchConfirm" @input="searchInput" @cancel="searchCancel"></uni-search-bar>
		</view>
		<uni-drawer :visible="drawvisible" @close="checkclose" mode="right">
			<view style="padding:30rpx;">
				<!-- 显示Switch -->
				<uni-list>
					<uni-list-item
						:indexid="1"
						@switchChange="itemswitch"
						title="线路一"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
				<uni-list>
					<uni-list-item
						:indexid="2"
						@switchChange="itemswitch"
						title="线路二"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
				<uni-list>
					<uni-list-item
						:indexid="3"
						@switchChange="itemswitch"
						title="线路三"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
				<uni-list>
					<uni-list-item
						:indexid="4"
						@switchChange="itemswitch"
						title="线路四"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
				<uni-list>
					<uni-list-item
						:indexid="5"
						@switchChange="itemswitch"
						title="线路五"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
				<uni-list>
					<uni-list-item
						:indexid="6"
						@switchChange="itemswitch"
						title="线路六"
						note="切换线路一"
						:show-extra-icon="true"
						:extra-icon="{ color: '#4cd964', size: '22', type: 'spinner' }"
						:show-switch="true"
						:show-arrow="false"
					></uni-list-item>
				</uni-list>
			</view>
		</uni-drawer>

		<scroll-view scroll-y="true" scroll-top class="content-list">
			<view  class="fragment-header">爱奇艺</view>
			<view id="aiqiyi" class="fragment">
				<button class="fragment-item">1</button>
				<button class="fragment-item">2</button>
				<button class="fragment-item">3</button>
				<button class="fragment-item">10</button>
				<button class="fragment-item">11</button>
				<button class="fragment-item">38</button>
				<button class="fragment-item">第一集</button>
				<button class="fragment-item">第二集</button>
				<button class="fragment-item">第三集</button>
				<button class="fragment-item">1</button>
				<button class="fragment-item">2</button>
				<button class="fragment-item">3</button>
				<button class="fragment-item">第一集</button>
				<button class="fragment-item">第二集</button>
				<button class="fragment-item">第三集</button>
				<button class="fragment-item">1</button>
				<button class="fragment-item">2</button>
				<button class="fragment-item">3</button>
				<button class="fragment-item">第一集</button>
				<button class="fragment-item">第二集</button>
				<button class="fragment-item">第三集</button>
				<button class="fragment-item">1</button>
				<button class="fragment-item">2</button>
				<button class="fragment-item">3</button>
				<button class="fragment-item">第一集</button>
				<button class="fragment-item">第二集</button>
				<button class="fragment-item">第三集</button>
			</view>
			<view id="tengxun">
				<view  class="fragment-header">腾讯视频</view>
				<uni-tag text="无资源"></uni-tag>
			</view>
			<view id="manggo">
				<view  class="fragment-header">芒果TV</view>
				<uni-tag text="无资源"></uni-tag>
			</view>
			<view id="youku">
				<view  class="fragment-header">优酷</view>
				<uni-tag text="无资源"></uni-tag>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue';
import uniDrawer from '@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue';
import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue';
import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue';
import uniCard from '@dcloudio/uni-ui/lib/uni-card/uni-card.vue';
import uniTag from '@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue';

export default {
	data() {
		return {
			drawvisible: false
		};
	},
	components: {
		uniList,
		uniListItem,
		uniSearchBar,
		uniDrawer,
		uniCard,
		uniTag
	},
	computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
	onLoad() {
		console.log("加载初始化")
		this.$http.get('http://www.baidu.com', {params: {userName: 'name', password: '123456'}}).then(res => {
		console.log(res)
		}).catch(err => {
		
		})
		
		
		
		//      if (!this.hasLogin) {
		//          uni.showModal({
		//              title: '未登录',
		//              content: '您未登录，需要登录后才能继续',
		//              /**
		//               * 如果需要强制登录，不显示取消按钮
		//               */
		//              showCancel: !this.forcedLogin,
		//              success: (res) => {
		//                  if (res.confirm) {
		// /**
		//  * 如果需要强制登录，使用reLaunch方式
		//  */
		//                      if (this.forcedLogin) {
		//                          uni.reLaunch({
		//                              url: '../login/login'
		//                          });
		//                      } else {
		//                          uni.navigateTo({
		//                              url: '../login/login'
		//                          });
		//                      }
		//                  }
		//              }
		//          });
		//      }
	},
	methods: {
		searchConfirm() {
			console.log('searchConfirm');
		},
		searchInput() {
			console.log('searchInput');
		},
		searchCancel() {
			console.log('searchCancel');
		},
		checkoutline() {
			console.log('click checkout');
			this.drawvisible = true;
			console.log(this.drawvisible);
		},
		checkclose() {
			this.drawvisible = false;
		},
		itemclick(e) {
			console.log(e);
		},
		itemswitch(e, a) {
			console.log(e);
		}
	}
};
</script>

<style>
.content-list {
	height: 100%;
	background: #ffffff;
}
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: #efeff4;
	padding: 0upx;
}
.first {
	display: flex;
	flex-direction: row;
	background-color: #efeff4;
	padding: 0upx;
	height: 52px;
}
.checkLine {
	background: #ffffff;
	height: 52px;
	line-height: 52px;
	text-align: center;
	padding: 0px;
}
.checkLineBtn {
	background: #ffffff;
	height: 25px;
	line-height: 25px;
	font-size: 14px;
	padding: 4px;
	color: #b0b0b0;
	border: 1px solid #b0b0b0;
	border-radius: 12px;
}

.fragment{
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}
.fragment-header{
	font-size: 16px;
	margin: 20px;
	border-bottom: 1px solid #B0B0B0;
	padding-bottom: 10px;
}


.fragment-item{
	margin: 5px;
	background: #007AFF;
	color: #FFFFFF;
}


</style>
