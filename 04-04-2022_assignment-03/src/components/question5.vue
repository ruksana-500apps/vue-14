<template>
    <div>
     <button @click="errorshandling()">catch</button>
    </div>
</template>
<script>
export default{
name:"queS5",
methods:{
      errorshandling() {
        try{
            this.test =this. val * 45;
            console.log("test",this.val);
            }
        catch{console.log("Error caugth")}
      
      
    }
}
}

</script>
