<template>
<div>
  <h3>Filter:{{filterdata}}</h3>
  <button @click='filterss()'>clickFilter</button>
</div>
  
</template>

<script>
export default{
  name:"filterS",
  data()
  {
    return{
      users:[ { id: 20, name: 'Captain Piett' },

             { id: 24, name: 'General Veers' },

             { id: 56, name:'Admiral Ozzel' },

             { id: 88, name: 'Commander Jerjerrod' } ],
            filterdata: ' '
    }
  },
  methods:{
    filterss(){
      this.filterdata= this.users.filter(x => { return x.name=="General Veers"});
    }
  }
}
</script>