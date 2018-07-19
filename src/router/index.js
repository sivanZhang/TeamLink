import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import create from '@/components/create'
import userCenter from '@/components/userCenter'

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
}]
export default new Router({
  routes
})
