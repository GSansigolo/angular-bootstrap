import Vue from 'vue';
import App from './App.vue';
import Datasets from './components/Datasets.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import progressBar from './components/progess-bar.vue'
import uploadInput from './components/upload-input.vue'
import Upload from './components/Upload.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
