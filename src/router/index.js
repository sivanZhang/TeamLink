import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import home from '@/views/home/home'
import benaa from '@/views/home/benaa'
import mapExplore from '@/views/home/mapExplore'
import filters from '@/views/home/filters'
import collections from '@/views/collections/collectionList'
import discover from '@/views/discover/discover'
import waiting from '@/components/waiting'
import userCenter from '@/views/user_center/userCenter'
import change from '@/views/user_center/change'
import selectRegion from '@/views/user_center/selectRegion'
import settings from '@/views/user_center/settings'
import feedback from '@/views/user_center/feedback'
import login from '@/views/login/login'
import signUp from '@/views/login/signUp'
import forgot from '@/views/login/forgot'
import inbox from '@/views/inbox/inbox'
import iframe from '@/components/Iframe'
import agent from '@/views/agent/agent'
import agentDetail from '@/views/agent/agentDetail'

Vue.use(Router);
const routes = [{
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            keepAlive: true // 需要被缓存
        }
    },
    {
        path: '/benaa/:pid',
        name: 'benaa',
        component: benaa
    },
    {
        path: '/mapExplore/:tid',
        name: 'mapExplore',
        component: mapExplore,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/filters',
        name: 'filters',
        component: filters,
        meta: {
            animation: true,
            keepAlive: true // 需要被缓存
        }
    },
    {
        path: '/agent',
        name: 'agent',
        component: agent
    },
    {
        path: '/agentDetail/:aid',
        name: 'agentDetail',
        component: agentDetail
    },
    {
        path: '/collections',
        name: 'collections',
        component: collections,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/inbox',
        name: 'inbox',
        component: inbox,
        meta: {
            requireAuth: true
        }
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