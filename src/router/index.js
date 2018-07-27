import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/components/Live'
import Voice from '@/components/Voice'
import Found from '@/components/Found'
import Follow from '@/components/Follow'
import Homepage from '@/components/Homepage'
import Classification from '@/components/Classification'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'live',
      component: Live
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/classification',
      name: 'classification',
      component: Classification
    },
    {
      path: '/voice',
      name: 'voice',
      component: Voice
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    },
    {
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    }
  ]
})
