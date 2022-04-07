<template>
    <div>
        <button @click="func()">click</button>
    </div>
</template>

<script>
var axios = require("axios").default;
export default{
    name:"samPle",
    methods:{
        func(){
            
          const getData = () => {     // return promise object when function is executed    
           return new Promise((resolve, reject) => {         // Using axios to fetch API URL        
            axios             
           .get("https://api.publicapis.org/entries")             
           .then((response) => {                 // resolve when response is received                
            resolve(response.data);             
            }).catch((error) => {                 // reject when error is occured                
             reject(error);             
             });     
             }); 
             } // Hit API and fetch data through function 
             var response = getData() 
             response.then((data) => {     
                 console.log("response", data) }).catch((err) => {    
                      console.log(err.toJSON().message) })
        
        }
    }
}
</script>
