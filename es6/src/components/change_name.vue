<template>
<div>
    <h3>ChangeName</h3>
    <p>{{name}}</p>
<button @click="func()" >ClicktoChange</button>
</div>
</template>

<script>
export default{
    name:'changE',
    data(){
        return{
            name:"mantra"
        }
    },
    methods:{
        func(){
             this.name='Mantra@500apps.com';
        }
       
    }
}
</script>