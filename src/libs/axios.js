import axios from 'axios'
import store from '@/store/index.js'
const isPro = Object.is(process.env.NODE_ENV, 'production')
const Ajax = axios.create({
    baseURL: isPro ? 'https://www.chidict.com/' : 'api/',
    timeout: 10000
});
Ajax.interceptors.request.use(
    config => {
        let token = store.state.token;
        if (token) {
            config.headers.Authorization = token;
            console.log(`setToken`, config.headers.Authorization);
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
export default Ajax;