import axios from 'axios'
const isPro = Object.is(process.env.NODE_ENV, 'production')
axios.defaults.baseURL = isPro ? 'https://www.chidict.com/' : 'api/'
axios.interceptors.request.use(
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