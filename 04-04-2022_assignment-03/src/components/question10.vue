<template>
    <div>
    <p>FirstName:{{first_name}}</p>
    <p>LastName:{{last_name}}</p>
    <h3>FullName:{{fullname}}</h3>
    <button @click="fullnames()">click</button>
    </div>
</template>

<script>
export default{
    name:"quesT10",
    data(){
        return{
            first_name : "500apps",
            last_name:"infinity",
            fullname:''
        }
    },
    methods:{
        fullnames(){
            this.fullname=this.first_name+ this.last_name
        }
    }
}
</script>
