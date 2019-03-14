import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import research from '@/components/research'
import upload from '@/components/upload'

import progBar from '@/components/upload-comp/progress-bar'
import uploInput from '@/components/upload-comp/upload-input'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/research',
      name: 'research',
      component: research
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload, progBar, uploInput
    }
  ]
})
