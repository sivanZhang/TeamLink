import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import qs from 'qs'
import $ from 'jquery'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '@/theme.css'
import 'animate.css'
// 解决移动端300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale });
import 'iview/dist/styles/iview.css';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
//注册全局组件
import loading from '@/components/loading'
Vue.component('loading', loading)
import footerMenu from './components/footeMenu'
Vue.component('footer-menu', footerMenu);
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
const isPro = Object.is(process.env.NODE_ENV, 'production')
axios.defaults.baseURL = isPro ? 'https://www.chidict.com/' : 'api/'
axios.interceptors.request.use(
    config => {
        let token = store.state.token;
        if (token) {
            console.log(token);
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
Vue.use(VueAxios, axios);
//vue 实例化
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});