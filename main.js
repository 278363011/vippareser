import Vue from 'vue'
import App from './App'

import store from './store'

import Request from './js_sdk/luch-request/request.js'

Vue.config.productionTip = false

Vue.prototype.$store = store


const http = new Request();
Vue.prototype.$http = http


App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
