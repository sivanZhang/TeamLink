import Vue from 'vue'
import Router from 'vue-router'
/*
import home from '@/components/home'
import workspace from '@/components/workspace'
import waiting from '@/components/waiting'
import userCenter from '@/components/user-center/userCenter'
import change from '@/components/user-center/change'
import login from '@/components/login/login'
import signUp from '@/components/login/signUp'
import forgot from '@/components/login/forgot'
*/
const home = r => require.ensure([], () => r(require('@/components/home')), 'home')
const workspace = r => require.ensure([], () => r(require('@/components/workspace')), 'workspace')
const waiting = r => require.ensure([], () => r(require('@/components/waiting')), 'waiting')
const userCenter = r => require.ensure([], () => r(require('@/components/user-center/userCenter')), 'userCenter')
const change = r => require.ensure([], () => r(require('@/components/user-center/change')), 'change')
const login = r => require.ensure([], () => r(require('@/components/login/login')), 'login')
const signUp = r => require.ensure([], () => r(require('@/components/login/signUp')), 'signUp')
const forgot = r => require.ensure([], () => r(require('@/components/login/forgot')), 'forgot')

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'home',
  component: home
},
{
  path: '/workspace',
  name: 'workspace',
  component: workspace
},
{
  path: '/user-center',
  meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
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
}]
export default new Router({
  routes
})
