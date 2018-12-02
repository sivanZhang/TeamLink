import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import $ from 'jquery'
import '@/plugins/message/jquery.message'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme.css'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
// 解决移动端300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
//iView框架
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale });
import 'iview/dist/styles/iview.css';
//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
//注册全局组件
import loading from '@/components/loading'
Vue.component('loading', loading)
import footerMenu from './components/footeMenu'
Vue.component('footer-menu', footerMenu);
//axios
import axios from '@/axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
//vue 实例化
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')