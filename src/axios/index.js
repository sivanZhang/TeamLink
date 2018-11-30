import axios from 'axios'
import store from '@/store'
import qs from 'qs'
const isPro = Object.is(process.env.NODE_ENV, 'production')
let Ajax = axios.create({
    baseURL: isPro ? 'https://www.chidict.com/' : 'api/',
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
export default Ajax;