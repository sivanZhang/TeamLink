// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import vueCookie from 'vue-cookie'
import router from './router'
import 'jquery'
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'
/* 注册全局组件 */
import footeMenu from './components/footeMenu'
/* import '../static/font-awesome/css/font-awesome.min.css' */
Vue.use(VueAxios, axios, vueCookie)
Vue.prototype.$cookie = vueCookie
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.component('foote-menu', footeMenu)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
