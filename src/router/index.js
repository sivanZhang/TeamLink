import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import create from '@/components/create'
import userCenter from '@/components/user-center/userCenter'
import change from '@/components/user-center/change'
import login from '@/components/login/login'
import signUp from '@/components/login/signUp'
import forgot from '@/components/login/forgot'

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'home',
  component: home
},
{
  path: '/create',
  name: 'create',
  component: create
},
{
  path: '/user-center',
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
}]
export default new Router({
  routes
})