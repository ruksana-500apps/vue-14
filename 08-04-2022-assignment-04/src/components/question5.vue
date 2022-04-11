<template>
  <div>
    <b-form-input  v-model="text" placeholder="Enter country" required>
    </b-form-input>
     <button @click='getData()' >Submit</button>
   <!--<b-table striped hover :items="posts" :fields="fields">
    </b-table>-->
    <b-container class="bv-example-row">
    <b-card  >
       <b-card-text v-for="data1 in posts" :key="data1.id">
      <b-card>  <b-row>
           <b-col cols="2.5">University Name:{{data1.name}}</b-col></b-row>
           <b-row>
           <b-col cols="1.5" >Domains:{{data1.domains}}</b-col>
           <b-col cols="9" >Website :{{data1.web_pages[0]}}</b-col>
           </b-row></b-card>
       </b-card-text>
    </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
    name:"queS4",
  data() {
    return {
      posts:' ',
      //fields:["name","domains","state-province","web_pages","country"]
      
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

</script>