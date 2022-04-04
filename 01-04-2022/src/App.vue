<template>
<div>   
    <tables/>
  </div>
  <div>
    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Food</th>
          <th>Checked</th>
          </tr>
        </thead>
    </table>
  </div>
</template>

<script>

import tables from './components/res.vue'

export default {
  name: 'App',
  components: {
    tables
  },
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
