import Vue from 'vue'
import Router from 'vue-router'

//Pages
import home from '@/view/pages/home'
import upload from '@/view/pages/upload'
import dados from '@/view/pages/dados'

//Pages Components
import header from '@/view/components/portal/header'
import footer from '@/view/components/portal/footer'
import listDatasets from '@/view/components/home/listDatasets'

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
      path: '/data',
      name: 'dados',
      component: dados
    }
  ]
})
