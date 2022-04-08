<template>

<div>


<b-table :items="Names" ></b-table>

<b-form-input id="id"  v-model="text" placeholder="FirstName" ></b-form-input>

<b-form-input id="id1"  v-model="text" placeholder="LastName"></b-form-input>

<b-button @click="add()"> ADD</b-button><br><br>

<b-button @click="remove()">DELETE</b-button>

</div>

</template>

<script>

export default{

name:"queS3",

data(){

return{

Names : [],

fields:['firstname','lastname'],

}

},

methods: {

add(){

this.Names.push({firstname:(document.getElementById("id").value),lastname:(document.getElementById("id1").value)});

},

remove(){

this.Names.pop();

}

}

}

</script>








