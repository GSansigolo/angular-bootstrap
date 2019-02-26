<template>
  <div class="research">

      <h1>Research</h1>
      <br>
      <input type="search" placeholder="Search" v-model="searchQuery">
      <br>
      <br>
      <ul>
        <li v-for="item in filteredItems" :key="item">{{ item.title }}</li>
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
          return item.title.indexOf(that.searchQuery) !== -1
        })
      }
    },
    created: function() {
      const that = this
      axios.get('https://qiita.com/api/v2/items')
        .then(function(response) {
          console.log(response.data)
          that.items = response.data
        })
    }
}
</script>

<style scoped>


</style>