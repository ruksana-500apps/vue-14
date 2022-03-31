<template>
  <div id="app">
    <scrap/>
  </div>
</template>

<script>
import scrap from './components/Scrap_data.vue'
export default {
  name: 'App',
  components:{
    scrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
