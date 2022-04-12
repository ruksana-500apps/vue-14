<template>
  <div id="app">
   
      <div
         class="user"
         v-for="user in users"
         :key="user.first"
      >
     
      <div class="user-details">
        <h2 class="user-name">
          {{ user.name.first }}
          {{ user.name.last }}
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
      axios.get(`https://randomuser.me/api/?results=5`).then((response) => {
        this.users = response.data.results;
      });
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`).then(response => {
            this.users.push(response.data.results[0]);
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