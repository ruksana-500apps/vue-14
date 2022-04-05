<template>

<div>

<form>

<p>Data:{{data}}</p>

<p>{{data.length-1}}</p>
<label for="textarea" >Enter Text</label><br>

<textarea name="data" v-model="data">
</textarea>

</form>

</div>

</template>

<script>

export default{

name:"queS2",

data(){

     return{

         data:" "

    }

  }

}

</script>



