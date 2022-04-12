<template>
  <div>
    <b-form-input  v-model="text" placeholder="Enter country" required>
    </b-form-input>
     <button @click='getData()' >Submit</button>
    <center><input type="text" name="search" id="search" v-on:keyup="search()" placeholder="search .."></center>
     
   <!-- <input type="text" v-model="name" placeholder="Filter By Name"/><br>
     <input type="text" v-model="domains" placeholder="Filter By Domains"/><br>
     <input type="text" v-model="web_pages" placeholder="Filter By Webpages"/>

     <ul>
            <li v-for="post in filterData" :key="post.name">University Name : {{posts.name}} -Domains : {{posts.domains}} -Webpages : ({{posts.web_pages}})</li>
    </ul> -->
   <center> <table id="mytable" border="2px">
        <thead>
            <tr>
                <th>name</th>
                <th>domains</th>
                <th>web_pages</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data1 in posts" :key="data1.id">
                <td>{{data1.name}}</td>
                <td>{{data1.domains}}</td>
                <td> {{data1.web_pages}}</td>
            </tr>
        </tbody>
    </table></center>
  </div>
</template>

<script>
export default {
    name:"queS1",
  data() {
    return {
      posts:' ',
      name:'',
      domains:'',
      web_pages:"",
      fields:["name","domains","state-province","web_pages","country"]
      
    }
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country="+this.text);
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
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
  },
  computed: {
            filterData: function(){
                return this.byWebpages(this.byDomains(this.byName(this.posts)))
            }
        },
         byName: function(posts) {
                return posts.filter(posts => !posts.name.indexOf(this.name))
            },
            byDomains: function(posts){
                return posts.filter(posts => !posts.domains.indexOf(this.domains))
            },
             byWebpages: function(posts){
                return posts.filter(posts => !posts.web_pages.indexOf(this.web_pages))
            },
 /*mounted() {
   axios
      .get("http://www.json-generator.com/api/json/get/bSldINskRK")
      .then(response=>(this.posts=response))

  }*/

  created() {
    this.getData();
  },
  
}
}
</script>

