<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to= "/">Home</router-link>
    <router-link to="/params/1/vue is very good">params</router-link>
    <router-link to="/gohome">goHome</router-link>
     <router-link to="/goParams/22/li li li">goParams</router-link>
    <router-view/>
   <!-- <router-view name="left" style="float:left; width:50%;height:200px;background-color: #eee" ></router-view> 
   <router-view name="right" style="float:right; width:50%;height:200px;background-color: #f0e"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
