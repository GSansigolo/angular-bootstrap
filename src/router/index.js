import Vue from 'vue'
import Router from 'vue-router'

//Pages
import home from '@/view/pages/home'
import upload from '@/view/pages/upload'
import dados from '@/view/pages/dados'
import modelos from '@/view/pages/modelos'

//Pages Components
import header from '@/view/components/portal/header'
import footer from '@/view/components/portal/footer'
import listDatasets from '@/view/components/home/listDatasets'
import tagTree from '@/view/components/home/tagTree'
import map from '@/view/components/data/map'
import aboutDataset from '@/view/components/data/aboutDataset'
import filesDataset from '@/view/components/data/filesDataset'
import dataAPIS from '@/view/components/data/dataAPIS'
import descrDataset from '@/view/components/data/descrDataset'
import libraryModels from '@/view/components/models/libraryModels'
import machineLearning from '@/view/components/models/machineLearning'
import spatialAnalisys from '@/view/components/models/spatialAnalisys'

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
      path: '/publicacao/:id/dados',
      name: 'dados',
      component: dados
    },
    {
      path: '/publicacao/:id/modelos',
      name: 'modelos',
      component: modelos
    }
  ]
})
