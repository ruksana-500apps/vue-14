<template>

<div id="app">

<que7 @tableData="assignData" />

<table align="center" class="table table-bordered mt-5" border="2px solid">

<thead>

<tr>

<th>email</th>

<th>id</th>

<th>name</th>

<th>status</th>

</tr>

<tr v-for="tableD in tableData" :key="tableD.status">

<td>{{tableD.email}}</td>

<td>{{tableD.id}}</td>


<td>{{tableD.name}}</td>


<td>{{tableD.status}}</td>


</tr>

</thead>

<tbody>


</tbody>

</table>

</div>

</template>


<script>

import que7 from './components/question7-2.vue'


export default {

name: 'App',

components: {

que7,

},

data(){

return{

email:" ",

id:"",

name:" ",

status:" ",

tableData:[],


}

},

methods:{

assignData(data){

this.tableData=data;

},

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




