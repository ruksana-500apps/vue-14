<template>
    <div>
        <h2>ErrorHandling </h2>
        <button @click="errorHandle()">clcik</button>
    </div>
</template>

<script>
export default{
    name:"queS10",
    methods:{
        errorHandle(){
            try{
                this.count = this.count * 5;
                console.log("printing count",this.count);
            }
            catch{
                console.log("ERROR CAUGTH");
            }
        }
    }
}

</script>
