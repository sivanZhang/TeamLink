import axios from 'axios'
import store from '@/store'
const isPro = Object.is(process.env.NODE_ENV, 'production')
let Ajax = axios.create();
Ajax.defaults.baseURL = isPro ? 'https://www.chidict.com/' : 'api/'
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