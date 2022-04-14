<template>
  <div id="app">
   
      <div
         class="user"
         v-for="user in users"
         :key="user.id"
      >
     
      <div class="user-details">
        <h2 class="user-name">
          {{ user.name}}
          {{ user.domains }}
        </h2>
        <ul>
          <li><strong>Birthday:</strong> {{ formatDate(user.dob.date) }}</li>
          <li><strong>Location:</strong> {{ user.location.city }}, {{ user.location.state }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name:"ques1C",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    formatDate(dateString) {
      let convertedDate = new Date(dateString);
      return convertedDate.toDateString();
    },
    getInitialUsers() {
      axios.get(`http://universities.hipolabs.com/search?country`).then((response) => {
        this.users = response.data;
      });
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          axios.get(`http://universities.hipolabs.com/search?country`).then(response => {
            this.users.push(response.data);
          });
        }
      }
    }
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUser();
  }
}
</script>