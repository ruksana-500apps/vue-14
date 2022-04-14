<template>
<div>
    <div>
       <button @click="getData()">click</button> {{posts}}
    </div>
    <div class="container" id="app">
  
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    <ul class="list-group" id="infinite-list">
      <li class="list-group-item" v-for="item in items" v-text="item" :key="item.id"></li>
    </ul>
  </div>
  
</div>
</div>
</template>

<script>
export default{
    name:"queS2b",
    data(){
        return{
            posts:''
        }
    },
     methods: {
    async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
     created() {
    this.getData();
  },
}
}
</script>
