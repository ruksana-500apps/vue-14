<template>
  <div >
  <ques6 ref="name" name="Mantra Technologies">{{name}}</ques6>
  </div>
</template>


<script>
import ques6 from '../components/question6.vue'

export default {
  name: 'parenT',
  components: {
    ques6 
  },
  mounted:function() {
         this.$refs.ques6.name
    }
  }
</script>