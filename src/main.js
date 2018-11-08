import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import router from './router'
import store from './store'
import $ from 'jquery'
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'
import 'animate.css'
import FastClick from 'fastclick' // 解决移动端300毫秒延迟
FastClick.attach(document.body);
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale });
import 'iview/dist/styles/iview.css';
Vue.use(VueAxios, axios);
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
//注册全局组件
import loading from '@/components/loading'
Vue.component('loading', loading)
import footerMenu from './components/footeMenu'
Vue.component('footer-menu', footerMenu);
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});

axios.defaults.baseURL = 'https://www.chidict.com/';
axios.interceptors.request.use(
    config => {
        let token = store.state.token;
        if (token) {
            console.log('set token');
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
                    this.$store.commit('setToken', "")
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });