<template>
  <div>
   <p>{{arr}}</p>
    <button @click="func()">click</button>
  </div>
</template>

<script>

export default {
  name:"queS1",
  data(){
    return{
      arr:[1,2,3,6,7,8,9,10]
    }
  },
  methods:{
    func(){
     this.arr.splice(5,0,4,5)
     
    
    
    }
  }
}
</script>
