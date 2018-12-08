import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { Toast } from "mint-ui";
Vue.use(Router);
const routes = [{
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home/home'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/benaa/:pid',
        name: 'benaa',
        component: () =>
            import ('@/views/home/benaa')
    },
    {
        path: '/mapExplore/:tid',
        name: 'mapExplore',
        component: () =>
            import ('@/views/home/mapExplore'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/filters',
        name: 'filters',
        component: () =>
            import ('@/views/home/filters'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/agent',
        name: 'agent',
        component: () =>
            import ('@/views/agent/agent')
    },
    {
        path: '/agentDetail/:aid',
        name: 'agentDetail',
        component: () =>
            import ('@/views/agent/agentDetail')
    },
    {
        path: '/collections',
        name: 'collections',
        component: () =>
            import ('@/views/collections/collectionList')
            /* ,
                    meta: {
                        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                    } */
    },
    {
        path: '/inbox',
        name: 'inbox',
        component: () =>
            import ('@/views/inbox/inbox'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/user_center/settings',
        name: 'settings',
        component: () =>
            import ('@/views/user_center/settings')
    },
    {
        path: '/user_center/feedback',
        name: 'feedback',
        component: () =>
            import ('@/views/user_center/feedback')
    },
    {
        path: '/user_center/select_region',
        name: 'selectRegion',
        component: () =>
            import ('@/views/user_center/selectRegion')
    },
    {
        path: '/discover',
        name: 'discover',
        component: () =>
            import ('@/views/discover/discover'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/user_center',
        meta: {
            requireAuth: true
        },
        component: () =>
            import ('@/views/user_center/userCenter')
    },
    {
        path: '/iframe',
        name: 'Iframe',
        component: () =>
            import ('@/components/Iframe')
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/login')
    },
    {
        path: '/signup',
        component: () =>
            import ('@/views/login/signUp')
    },
    {
        path: '/forgot',
        component: () =>
            import ('@/views/login/forgot')
    },
    {
        path: '/change',
        component: () =>
            import ('@/views/user_center/change')
    },
    {
        path: '/version',
        component: () =>
            import ('@/components/version')
    },
    {
        path: '/services',
        component: () =>
            import ('@/components/services')
    },
    {
        path: '/waiting',
        component: () =>
            import ('@/components/waiting')
    },
    {
        path: '*',
        redirect: '/home' //匹配不到 默认跳转
    }
];
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