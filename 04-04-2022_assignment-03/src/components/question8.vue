<template>

<div>

<p @click="func()">

p tag : Mantra Technologies

</p>


<textarea id="id">



</textarea>

</div>

</template>


<script>

export default {

name: "queS8",


data() {

return {

textdata: "",

};

},


methods: {

func() {

this.textdata = "" + document.getElementById("id").value;


document.write(this.textdata);

},

},

};

</script>




