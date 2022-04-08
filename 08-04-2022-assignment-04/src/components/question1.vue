<template>
    <div>
         <button @click="func()">Alphabatical</button>
         

         <button @click="func()">Reverse</button>
    
        
         
         <p id='id'></p>
    </div>
</template>

<script>

export default{
    name:"queS1",
    data(){
        return{
            users :
                    [{name:"500apps",id:1},{name:"Technologies",id:2},{name:"Agile",id:3},{name:"Mantra",id:4},{name:"Clockly",id:5},
                    {name:"CRM",id:6},{name:"500apps",id:7}],
            field:'name'
             
        }
    },
    methods:
    {
        func(){
           this.so = this.users.sort((a,b) => (a[this.field] ||"").toString().localeCompare((b[this.field] || "").toString()))
        }

            
            //document.getElementById('id').innerHTML=this.rev
    }
}
</script>
