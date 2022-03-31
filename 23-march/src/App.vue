<template>
<div>
  <card name="RuksanaShaik" mail="ruksanashaik19" phone="123456789" />
  <dynamic :sname="sname" :smail="smail" :sphone="sphone"></dynamic>

  <list ref="address" address="Guntur">{{address}}</list>

</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import card from './components/card.vue'
import dynamic from './components/dynamic.vue'
import list from './components/reference.vue'

export default {
  name: 'App',
  components: {
    card,
    dynamic,
    list
  },

    data(){
      return{
        sname : "karishma",
        smail : "karishmashaik",
        sphone : 987654321,
      }
    },
    mounted:function() {
         this.$refs.list.address
    }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
