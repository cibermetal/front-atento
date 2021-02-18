<template>
  <div class="vue-template">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <img src="../public/img/david.png" width="30%">
        <a class="navbar-brand float-left" href="http://www.unefm.edu.ve" target="_blank">
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Información</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/signup">Registrarse</router-link>
          </li>
          <isLogIn></isLogIn>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
            <div style="background: #202847">
                      <img src="../public/img/logo-uni.png" width="80%">
            </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isLogIn from './components/botones/isLogIn'
export default {
  name: 'App',
  components: {
    isLogIn
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
