<template>
  <div>

    <div>
      <b-form-input v-model="text" placeholder="Enter country"></b-form-input>
    </div>

    <b-button @click="getData()">Click Me!</b-button>

    <div>
      <!--{{ searchData }}-->
    </div>
    <div>
       <center> <table border=2px>
            
            <tr>
                <th>Name</th>
                <th>Domains</th>
                <th>Country</th>
                <th>web_pages</th>
            </tr>
            <tbody>
                <tr  v-for="data in searchData.data " :key="data.id">
                    <td>{{data.name}}</td>
                    <td>{{data.domains}}</td>
                    <td>{{data.country}}</td>
                    <td>{{data.web_pages}}</td>
                </tr>
            </tbody>

        </table></center>

   </div>
  </div>
</template>

<script>
var axios = require("axios").default;

export default {
  name: "sampleApis",

  data() {
    return {
      options: {

        url: "http://universities.hipolabs.com/search?country",

        data: { search: "" },
      },

      text: "",

      searchData: '',
    };
  },

  methods: {
    async getData() {
      this.options.data.search = this.text;

      this.searchData = await axios.request(this.options);
    },
  },
};
</script>



