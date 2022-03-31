<template>
 <div>
     <h3>startsWith</h3>
     <p>{{str}}</p>
     <p>{{newStr}}</p>
     <button @click="func()">ClickforStartsWith</button>
 </div>
</template>

<script>

export default{
    name:'startsWith',
    data(){
        return{
            str:'ruksanashaik',
            newStr:''
        }
    },
    methods:{
        func(){
            this.newStr=this.str.startsWith('s');
        },
        func1(){
            this.new=this.str.endsWith('k')
        }
    }
}
</script>