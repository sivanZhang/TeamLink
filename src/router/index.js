import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import benaa from '@/components/home/benaa'
import mapExplore from '@/components/home/mapExplore'
import filters from '@/components/home/filters'
import collections from '@/views/collections/collectionList'
import discover from '@/components/discover/discover'
import waiting from '@/components/waiting'
import userCenter from '@/components/user_center/userCenter'
import change from '@/components/user_center/change'
import selectRegion from '@/components/user_center/selectRegion'
import settings from '@/components/user_center/settings'
import feedback from '@/components/user_center/feedback'
import login from '@/views/login/login'
import signUp from '@/components/login/signUp'
import forgot from '@/components/login/forgot'
import inbox from '@/views/inbox/inbox'
import iframe from '@/components/Iframe'
import agent from '@/views/agent/agent'

Vue.use(Router);
const routes = [{
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/benaa/:pid',
        name: 'benaa',
        component: benaa
    },
    {
        path: '/mapExplore/:tid',
        name: 'mapExplore',
        component: mapExplore
    },
    {
        path: '/filters',
        name: 'filters',
        component: filters,
        meta: {
            animation: true
        }
    },
    {
        path: '/agent',
        name: 'agent',
        component: agent
    },
    {
        path: '/collections',
        name: 'collections',
        component: collections
    },
    {
        path: '/inbox',
        name: 'inbox',
        component: inbox
    },
    {
        path: '/user_center/settings',
        name: 'settings',
        component: settings
    },
    {
        path: '/user_center/feedback',
        name: 'feedback',
        component: feedback
    },
    {
        path: '/user_center/select_region',
        name: 'selectRegion',
        component: selectRegion
    },
    {
        path: '/discover',
        name: 'discover',
        component: discover
    },
    {
        path: '/user_center',
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: userCenter
    },
    {
        path: '/iframe',
        name: 'Iframe',
        component: iframe
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
    }, {
        path: '*',
        redirect: '/home' //匹配不到 默认跳转
    }
];
export default new Router({
    routes
})