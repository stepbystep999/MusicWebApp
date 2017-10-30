import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

// 使得body上面所有按鈕的点击都没有300ms延时
fastclick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    render: h => h(App)
})
