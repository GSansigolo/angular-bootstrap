import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import upload from '@/components/upload'
import filepage from '@/components/filepage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/filepage',
      name: 'filepage',
      component: filepage
    }
  ]
})
