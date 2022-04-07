<template>
  <div id="app">
    <router-view/>
  

  <!--<ques6 ref="name" name="Mantra Technologies">{{name}}</ques6>-->
  </div>
</template>


<script>
//import ques6 from './components/question6.vue'

export default {
  name: 'App',
  components: {
   // ques6 
  },
  mounted:function() {
         this.$refs.ques6.name
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
</style>-
