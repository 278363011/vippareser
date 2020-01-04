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
		searchResult:Object
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
			uni.request({
			    url: 'http://localhost:8080/search', //仅为示例，并非真实接口地址。
			    data: {
			        searchTeString: searchName
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
					state.searchResult=res.data
			    }
			});
		}
		
    }
,
	getters:{
		// calcuteResult(state, getters){
		// 	let tempResult= state.searchResult;
		// 	tempResult
			
		// }
	}



})

export default store
