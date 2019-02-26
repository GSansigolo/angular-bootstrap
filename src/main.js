// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet'; 
import 'leaflet/dist/leaflet.css'
import 'vue2-leaflet'
import 'jquery'

Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
