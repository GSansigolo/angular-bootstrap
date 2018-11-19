import Vue from 'vue'
import Router from 'vue-router'

import home from '@/view/pages/home'
import upload from '@/view/pages/upload'
import notebook from '@/view/pages/notebook'

import filepage from '@/view/components/data/filepage'
import header from '@/view/components/portal/header'
import footer from '@/view/components/portal/footer'
import listfiles from '@/view/components/home/listfiles'
import map from '@/view/components/data/map'
import document from '@/view/components/data/document'
import download from '@/view/components/data/download'


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
      path: '/notebook',
      name: 'notebook',
      component: notebook
    }
  ]
})
