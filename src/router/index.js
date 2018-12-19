import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { routes } from "./routers";
import { Toast } from "mint-ui";
Vue.use(Router);
const ROUTER = new Router({
    routes
});
//未登录跳转登录页
ROUTER.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            Toast({
                message: "Please login first",
                position: "bottom",
                duration: 3000
            });
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})

export default ROUTER;