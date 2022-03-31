<template>
  <div class="course-list-row">
    <tr v-for="train in trains" :key="train.id">
        <td>{{ train.TrainNo }}</td>
        <td>{{ train.TrainName }}</td>
        <td>{{ train.TrainTime }}</td>
    </tr>
  </div>
</template>

<script>
  var axios = require("axios").default;
  export default {
    name: 'train-list-row',
    mounted: function () {
      this.getDetails()
      console.log('mounted: got here')
    },
    data: function () {
      return {
        message: 'Train List Row',
        trains: []
      }
    },
    methods: {
       getDetails: function () {
       var self = this
       const url = 'https://trains.p.rapidapi.com/'
       axios.get(url, {
       dataType: 'json',
       headers: {
           "X-RapidAPI-Host": "trains.p.rapidapi.com",

          "X-RapidAPI-Key":
            "0030c715ecmsh58180c0530cc6e6p188880jsncda365dc0d9f",
       },
       mode: 'no-cors',
       credentials: 'include'
       })
      .then(function (response) {
       console.log(JSON.stringify(response.data))
       self.courses = response.data
      })
      .catch(function (error) {
      console.log(error)
    })
  }
 }
}