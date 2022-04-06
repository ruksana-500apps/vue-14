<template>

<div id="class">
<form>

Firstname:<input type="text" v-model="firstname"/><br/>

Lastname:<input type="text" v-model="lastname"/><br/>
</form>

<button @click="func()">Click</button>
 
<h3>{{firstname}}{{lastname}}</h3>

<p id='id'></p>

</div>

</template>

<script>

export default{

name:"queS5",

data(){

return{
firstname:'',
lastname:'',
fullname:''

}

},

methods:{

func(){

this.firstname="mantra"

this.lastname="technologies"

this.fullname=this.firstname+" "+this.lastname

//document.getElementById('id').innerHTML= this.fullname
return this.fullname

}


},
computed:{
    getname:function(firstname,lastname){
        return firstname+lastname
    }
}

}


</script>





