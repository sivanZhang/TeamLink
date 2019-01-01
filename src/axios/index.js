import axios from 'axios'
import store from '@/store'
import qs from 'qs'
import router from '@/router'
import { Toast } from "vant";


const isPro = Object.is(process.env.NODE_ENV, 'production')
let Ajax = axios.create({
    //生产环境API
    baseURL: isPro ? 'https://tl.chidict.com' : 'api/', //https://www.chidict.com
    timeout: 10000,
    ransformRequest: [data => {
        // 对 data 进行任意转换处理
        return qs.stringify(data);
    }]
});
//把API放到store中，以便将来给图片等服务器资源加前缀
store.commit('setBASE_URL', 'https://tl.chidict.com');
Ajax.interceptors.request.use(
    config => {
        if (store.state.token || localStorage.getItem('token')) {
            config.headers.Authorization = store.state.token;
            console.log(store.state.token, '加TOKEN'); /*  */
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });


Ajax.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    // 返回 403 清除token信息并跳转到登录页面
                    Toast({
                        message: "Please login first",
                    });
                    store.commit('setToken');
                    console.log(store.state.token, '删除TOKEN');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });
export default Ajax;