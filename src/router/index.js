import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/components/Live'
import Voice from '@/components/Voice'
import Found from '@/components/Found'
import Follow from '@/components/Follow'
import Homepage from '@/page/Homepage'
import Hot from '@/components/Hot'
import Music from '@/components/Music'
import Erciyuan from '@/components/Erciyuan'
import Emotion from '@/components/Emotion'
import Happy from '@/components/Happy'
import Classification from '@/components/Classification'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'live',
      component: Live,
      redirect: '/live/Hot'
    },
    {
      path: '/live',
      name: 'live',
      component: Live,
      children:[
        { path: '/live/Hot', component: Hot},
        { path: '/live/Music', component: Music},
        { path: '/live/Erciyuan', component: Erciyuan},
        { path: '/live/Emotion', component: Emotion},
        { path: '/live/Happy', component: Happy}
    ]
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
