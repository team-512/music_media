import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/:authToken',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
