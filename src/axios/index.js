import axios from 'axios'
import store from '@/store'
import qs from 'qs'
import router from '@/router'
const isPro = Object.is(process.env.NODE_ENV, 'production')
let Ajax = axios.create({
    baseURL: isPro ? 'https://www.chidict.com' : 'api/',
    timeout: 10000,
    ransformRequest: [data => {
        // 对 data 进行任意转换处理
        return qs.stringify(data);
    }]
});

Ajax.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = store.state.token;
            console.log(store.state.token, '加TOKEN');
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