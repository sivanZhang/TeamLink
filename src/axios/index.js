import axios from 'axios'
import store from '@/store'
import qs from 'qs'
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
Ajax.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });
export default Ajax;