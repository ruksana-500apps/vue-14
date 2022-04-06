<template>
    <div>
        <p>DATE</p>
     <button @click="func()">click</button>
    </div>
</template>

<script>
export default{
    name:"queS3",
    data(){
        return{
            today : new Date(),
        }
    },
    methods:{
    func(){
       setInterval(()=>{
            setTimeout(()=>{
    
            console.log(this.today)},1000)},5000)
    }
    
    }
}
</script>

  

