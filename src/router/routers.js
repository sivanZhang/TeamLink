/* 
 *
 *meta.keepAlive {Boolean}  是否缓存页面
 *meta.requireAuth {Boolean}  是否拦截登录
 *meta.title {String}  网页title
 *
 */


export const routes = [{
        path: '/map',
        name: 'MAP',
        component: () =>
            import ('@/views/home/gmap'),
        meta: {
            keepAlive: true,
        }
    },
    {
        path: '/inspection',
        name: 'inspection',
        meta: {
            title: 'TeamLink Inspection'
        },
        component: () =>
            import ('@/views/discover/inspection')

    },
    {
        path: '/user_center/settings/planer',
        name: 'Planer',
        component: () =>
            import ('@/views/user_center/Planer'),
        meta: {
            keepAlive: true,
            title: 'TeamLink Planer',
        }
    }, {
        path: '/user_center/settings/notifications',
        name: 'notifications',
        component: () =>
            import ('@/views/user_center/Notifications'),
        meta: {
            keepAlive: true,
            title: 'TeamLink Notifications',
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home/home'),
        meta: {
            keepAlive: true,
            title: 'TeamLink Home',
        }
    },
    {
        path: '/property/:pid',
        name: 'property',
        component: () =>
            import ('@/views/home/property'),
        meta: {
            title: 'TeamLink Property',
        },
    },
    {
        path: '/home/property/enquiry',
        name: 'enquiry',
        component: () =>
            import ('@/views/home/enquiry'),
        meta: {
            title: 'TeamLink Enquiry',
        }
    },
    {
        path: '/home/mapExplore/:tid',
        name: 'mapExplore',
        component: () =>
            import ('@/views/home/mapExplore'),
        meta: {
            keepAlive: true,
            title: 'TeamLink MapExplore',
        },
    },
    {
        path: '/home/mapExploreList/:tid',
        name: 'mapExploreList',
        component: () =>
            import ('@/views/home/mapExploreList'),
        meta: {
            title: 'TeamLink mapExploreList',
        },
    },
    {
        path: '/filters',
        name: 'filters',
        component: () =>
            import ('@/views/home/filters'),
        meta: {
            keepAlive: true,
            title: 'TeamLink Filters',
        },
    },
    {
        path: '/agent',
        name: 'agent',
        component: () =>
            import ('@/views/discover/agent'),
        meta: {
            title: 'TeamLink Agent',
            keepAlive: true,
        },
    },
    {
        path: '/agentDetail/:aid',
        name: 'agentDetail',
        component: () =>
            import ('@/views/discover/agentDetail'),
        meta: {
            title: 'TeamLink AgentDetail',
            keepAlive: true,
        },
    },
    {
        path: '/collections',
        name: 'collections',
        component: () =>
            import ('@/views/collections/collectionList'),
        meta: {
            title: 'TeamLink Collections',
            requireAuth: true,
        },
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: () =>
            import ('@/views/inbox/inbox'),
        meta: {
            requireAuth: true,
            title: 'TeamLink Inbox'
        },
    },
    {
        path: '/inboxDetails',
        name: 'inboxDetails',
        component: () =>
            import ('@/views/inbox/inboxDetails'),
        meta: {
            requireAuth: true,
            title: 'TeamLink Inbox',
            keepAlive: true,
        },
    },
    {
        path: '/user_center/settings',
        name: 'settings',
        component: () =>
            import ('@/views/user_center/settings'),
        meta: {
            title: 'TeamLink Settings',
        },
    },
    {
        path: '/user_center/feedback',
        name: 'feedback',
        component: () =>
            import ('@/views/user_center/feedback'),
        meta: {
            title: 'TeamLink Feedback',
        },
    },
    {
        path: '/user_center/select_region',
        name: 'selectRegion',
        component: () =>
            import ('@/views/user_center/selectRegion'),
        meta: {
            requireAuth: true,
            title: 'TeamLink SelectRegion',
        },
    },
    {
        path: '/discover',
        name: 'discover',
        component: () =>
            import ('@/views/discover/discover'),
        meta: {
            keepAlive: true,
            title: 'TeamLink Discover',
        },
    },
    {
        path: '/user_center',
        meta: {
            requireAuth: true,
            title: 'TeamLink UserCenter',
        },
        component: () =>
            import ('@/views/user_center/userCenter'),
    },
    {
        path: '/iframe',
        name: 'Iframe',
        component: () =>
            import ('@/components/Iframe'),
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/login'),
        meta: {
            title: 'TeamLink Login',
        },
    },
    {
        path: '/signup',
        component: () =>
            import ('@/views/login/signUp'),
    },
    {
        path: '/forgot',
        component: () =>
            import ('@/views/login/forgot'),
    },
    {
        path: '/change',
        component: () =>
            import ('@/views/user_center/change'),
        meta: {
            title: 'TeamLink Change',
        },
    },
    {
        path: '/version',
        component: () =>
            import ('@/views/user_center/version'),
        meta: {
            title: 'TeamLink Version',
        },
    },
    {
        path: '/googlemap',
        component: () =>
            import ('@/views/user_center/googlemap'),
        meta: {
            title: 'Map View',
        },
    },
    {
        path: '/services',
        component: () =>
            import ('@/views/user_center/services'),
        meta: {
            title: 'TeamLink Services',
        },
    },
    {
        path: '/waiting',
        component: () =>
            import ('@/components/waiting'),
        meta: {
            title: 'TeamLink Waiting',
        },
    },
    {
        path: '*',
        redirect: '/home' //匹配不到 默认跳转
    }
];