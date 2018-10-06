import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import search from '@/components/home/search'
import collections from '@/components/collections/collectionList'
import discover from '@/components/discover/discover'
import waiting from '@/components/waiting'
import userCenter from '@/components/user-center/userCenter'
import change from '@/components/user-center/change'
import settings from '@/components/user-center/settings'
import login from '@/components/login/login'
import signUp from '@/components/login/signUp'
import forgot from '@/components/login/forgot'

Vue.use(Router);
const routes = [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/collections',
        name: 'collections',
        component: collections
    },
    {
        path: '/user-center/settings',
        name: 'settings',
        component: settings
    },
    {
        path: '/discover',
        name: 'discover',
        component: discover
    },
    {
        path: '/user-center',
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: userCenter
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signUp
    },
    {
        path: '/forgot',
        component: forgot
    },
    {
        path: '/change',
        component: change
    },
    {
        path: '/waiting',
        component: waiting
    }
];
export default new Router({
    routes
})