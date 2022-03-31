<template>
 <div>
     <h3>ToCheck</h3>
     <p>String:{{str}}</p>
     <p>checking for u </p>
     <p>{{str1}}</p>
     <button @click='functest()'>Clicktocheck</button>
 </div>
</template>

<script>
export default{
    name:'strLiterals',
    data(){
        return {
            str:"abcdefug",
            str1:''
        }
    },
    methods: {
        functest(){
         this.str1= this.str.includes('u');
        }
    }
}

</script>