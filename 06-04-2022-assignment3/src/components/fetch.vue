<template>
<div id="app">
  <!--<b-table striped hover :items="info" :fields="fields">
  </b-table>-->
  
  <table>
    <thead>
      <tr>
        <th>API</th>
        <th>Description</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data1 in info.data.entries" :key="data1.id">
        <td>{{data1.API}}</td>
        <td>{{data1.Description}}</td>
        <td>{{data1.Category}}</td>
      </tr>
    </tbody>
    </table>
    {{ info }}
</div>
</template>
<script>
var axios = require("axios").default;
export default{
  name:"fetchS",
  data () {
    return {
      info:' ',
      fields:["API","Description","Category"]
      
    }
},
  mounted () {
    axios
      .get("https://api.publicapis.org/entries")
      .then(response => (this.info = response))
  }
}

</script>
