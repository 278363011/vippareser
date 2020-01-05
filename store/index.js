import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "", 
		searchResult:Object,
		urls:[]
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		search(state,searchName){
			uni.showLoading({
			    title: '加载中'
			});
			uni.request({
			    url: 'http://www.codebaobao.cn/vip/search', //仅为示例，并非真实接口地址。
			    data: {
			        searchTeString: searchName
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
					uni.showToast({
						 title: '加载成功',
						  duration: 2000
					})
					
					console.log(res.data)
					state.searchResult=res.data
					uni.hideLoading();
			    },
				error:()=>{
					uni.showToast({
						 title: '加载失败',
						  duration: 2000
					})
					uni.hideLoading();
				}
			});
		},
		// getUrls(state){
		// 	uni.request({
		// 	    url: 'http://www.codebaobao.cn/vip/geturls', //仅为示例，并非真实接口地址。
		// 	    data: {
		// 	    },
		// 	    header: {
		// 	        'custom-header': 'hello' //自定义请求头信息
		// 	    },
		// 	    success: (res) => {
		// 			console.log(res.data)
		// 			state.urls=res.data.split("|")
		// 	    }
		// 	});
		// }
		
    }
,
	getters:{
	}




})

export default store
