<template>
    <div>
       <center><input type="text" name="search" id="search" v-on:keyup="search()" ></center>
       <center> <table  id="mytable">
            <tr >
              <td>{{list[0]}}</td> 
            </tr>
            <tr>
                <td>{{list[1]}}</td>  
            </tr>
            <tr>
                <td>{{list[2]}}</td>
            </tr>
            <tr>
                <td>{{list[3]}}</td>
            </tr>
            <tr>
                <td>{{list[4]}}</td>
            </tr>
        </table></center>

    </div>
</template>

<script>
export default{
    name:'queS12',
    data(){
        return{
            list : [ 'orange', 'red', 'blue', 'black', 'white' ]
        }
    },
    methods:{
         search() {
               var searchbar, filter, table, tr, td, i, txt;
               searchbar = document.getElementById("search");
               filter =searchbar.value.toUpperCase();
               table = document.getElementById("mytable");
               tr = table.getElementsByTagName("tr");
               for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName("td")[0];
                  if (td) {
                      txt = td.textContent || td.innerText;
                  if (txt.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display= "";
                   } else {
                     tr[i].style.display = "none";
                   }
                }       
             }
        }

    }
}
</script>
