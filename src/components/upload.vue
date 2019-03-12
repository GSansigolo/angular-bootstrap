<template>
  <div class="upload">

      <h2>Upload</h2>
      <br>
      Title: <input v-model="title" placeholder="">
      <br>
      <br>
      Contributors Name:  <input v-model="name" placeholder=""><br>
      <br>
      <button v-on:click="input_form">Submit</button>
      
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'upload',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // define methods under the `methods` object
  methods: {
    input_form: function (event) {
      if (event) {
        axios.get('https://localhost:5000/api/records/?prettyprint=1', 
                  200, 
                  { 'headers': { 'Content-Type': application/json }}, 
                  {'data': '{"title":"' + title + '", "contributors": [{"name": "'+ name + '"}]}'} 
        )
        .then(function(response) {
          alert('Dados entrados com sucesso!')
        })        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>







