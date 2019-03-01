<template>
  <div id="app">


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Open Data Plataform</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/research">Research</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/upload">Upload</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    <router-view/>
  </div>


</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

 @import url(http://fonts.googleapis.com/css?family=Merriweather:400);
 @import url(http://fonts.googleapis.com/css?family=Merriweather:400italic);
 @import url(http://fonts.googleapis.com/css?family=Merriweather:700);
 @import url(http://fonts.googleapis.com/css?family=Merriweather:700italic);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:400);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:300);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:300italic);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:400italic);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:700italic);
 @import url(http://fonts.googleapis.com/css?family=Merriweather+Sans:700);

#app {
  font-family:'Merriweather', serif;
  color: #2A2A2A;
  text-align: left;
  margin: 0px;
}
</style>
