<template>
  <div class="research">
      <h2>Research</h2>
      <br>
      <input type="search" placeholder="Search" v-model="searchQuery">
      <br>
      <br>
      <ul>
        <li v-for="item in filteredItems" :key="item">{{ item.metadata.contributors[0].name + ":  " + item.metadata.title }}</li>
      </ul>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'research',
    data: function() {
         return  {
            searchQuery: '',
            items: []
         }
    },
    computed: {
      filteredItems: function() {
        var that = this
        return that.items.filter(function(item) {
          return item.metadata.title.indexOf(that.searchQuery) !== -1
        })
      }
    },
    created: function() {
      const that = this
      axios.get('https://api.myjson.com/bins/hh97m') //https://localhost:5000/api/records/?prettyprint=1')
        .then(function(response) {
          that.items = response.data.hits.hits
          console.log(that.items)
        })
    }
}
</script>

<style scoped>

</style>