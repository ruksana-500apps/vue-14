<template>
  <div>
    <h2>Function</h2>
    <p>We used arrow functions to minimize the code </p>
     <p>In Normal functions we used function keyword<br> But in Arrow functions we don't need to use function keyword</p>
     <p>In Normal functions we used function body{}  for single line arguments also  <br> But in Arrow functions for single line arguments we don't need of function body{}</p>
     <p>In Normal funnction we can't access this keyword<br>But in Arrow functions we can eaisly access this keyword</p>
    

    <button @click="func()">Normal</button>
    <button @click='x()'>Arrow</button>

  </div>
</template>

<script>
export default{
  name:"queS7",
  data(){
     return{
        x:(param2=5)=>{
          if(param2%2==0){
            console.log("it is  a even number");
          }
          else{
            console.log("It is a odd number");
          }
        }
     }
  },
  methods:{
    func(param1=2){
        if(param1%2==0){
          console.log("It is a Even Number");
        }
        else
        {
          console.log("It is a odd Number");
        }
    },
}
}
</script>
