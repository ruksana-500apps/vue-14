<template>    
  <div>
  <Employeelist/>    
  <table1/>
  <table2/>
  </div>
</template>    
<script>    
import Employeelist from './components/Employeedata.vue';   
import table1 from './components/table.vue' 
import table2 from '../src/components/tabless.vue'
export default {    
  name: 'App',    
  components: {    
    Employeelist,
    table1,
    table2
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
  margin-top: 10px;    
}    
</style>     