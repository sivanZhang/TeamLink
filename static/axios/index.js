import router from '@/router';
import iView from 'iview';
import axios from 'axios';
import qs from 'qs';
import baseUrl from './config';
import VueCookie from 'vue-cookie'
axios.defaults.baseURL = baseUrl.BASE_URL
// axios.defaults.withCredentials = true

// axios.defaults.transformRequest = function(data) {
//   return qs.stringify(data)
// };

// http请求拦截器
axios.interceptors.request.use((config) => {
  if (!!VueCookie.get('t')) {
    config.headers.common["Authorization"] = "Bearer " + VueCookie.get('t');
  }

  return config
}, (error) => {
  return error
})

// http响应拦截器  根据返回码统一处理msg
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    // 普通错误
    iView.Message.error(res.data.error.message);
  }

  return res
}, (error) => {

  let errmsg = "服务器响应错误";
  if (!error.response.data.success) {
    errmsg = error.response.data.error.message
    // 服务器返回错误码
    // switch (error.response.status) {
    //   case 401:
    //     errmsg = "请登录后操作";
    //     router.replace("/login");
    //     break;
    //   case 404:
    //     ``
    //     errmsg = "找不到页面";
    //     router.replace("/404");
    //     break;
    // }
  }
  iView.Message.error(errmsg);
  return error
})

export default axios