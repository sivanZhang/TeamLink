import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import vueCookie from 'vue-cookie'
import router from './router'
import $ from 'jquery'
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'

Vue.use(VueAxios, axios)
Vue.prototype.$cookie = vueCookie
Vue.prototype.$qs = qs

Vue.config.productionTip = false

import footeMenu from './components/footeMenu'
Vue.component('foote-menu', footeMenu) //注册全局组件
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})

axios.defaults.baseURL = 'https://www.chidict.com/';
axios.interceptors.request.use(
    config => {
        var token = localStorage.token
        if (token) {
            console.log('set token')
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 这里写清除token的代码
                    console.log('remove token');
                    localStorage.removeItem('token');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });