export const routes = [{
        path: '/map',
        name: 'MAP',
        component: () =>
            import ('@/views/home/gmap'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/inspection',
        name: 'inspection',
        component: () =>
            import ('@/views/discover/inspection'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/user_center/settings/planer',
        name: 'Planer',
        component: () =>
            import ('@/views/user_center/Planer'),
        meta: {
            keepAlive: true
        }
    }, {
        path: '/user_center/settings/notifications',
        name: 'notifications',
        component: () =>
            import ('@/views/user_center/Notifications'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home/home'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/property/:pid',
        name: 'property',
        component: () =>
            import ('@/views/home/property')
    },
    {
        path: '/home/property/enquiry',
        name: 'enquiry',
        component: () =>
            import ('@/views/home/enquiry')
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
            import ('@/views/discover/agent')
    },
    {
        path: '/agentDetail/:aid',
        name: 'agentDetail',
        component: () =>
            import ('@/views/discover/agentDetail')
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
            import ('@/views/user_center/version')
    },
    {
        path: '/services',
        component: () =>
            import ('@/views/user_center/services')
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