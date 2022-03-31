<template>

<div>


<h3>Index {{indexOfO}}</h3>


<button @click="forindex()">ClickIndex</button>

</div>

</template>

<script>

export default {
    name:"indexOf",

data(){

return{

users:[ { id: 20, name: 'Captain Piett' },

{ id: 24, name: 'General Veers' },

{ id: 56, name:'Admiral Ozzel' },

{ id: 88, name: 'Commander Jerjerrod' } ],

indexOfO:''

}

},

methods:

{

forindex() {

this.indexOfO=this.users.findIndex((data)=>{

return data.id == '24'

})

},

}

}
</script>/ 