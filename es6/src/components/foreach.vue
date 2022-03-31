<template>
<div>
    <h3>Foreach:{{foreachs}}</h3>
  <button @click="func()">clickforeach</button>
</div>
</template>

<script>
export default{
    name:"forEach",
    data(){
        return{
            array:["red","blue","black","yellow"],
            foreachs:" "
        }
    },
    methods:{
        func(){
           this.foreachs= this.array.forEach((value,index)=>{console.log(value,index)})
        }
    }
}
</script>