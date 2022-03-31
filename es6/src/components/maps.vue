<template>
<div>
  <h3>Maps:{{mapsdata}}</h3>
  <button @click="mapsfun()">clickmaps</button>
</div>
</template>

<script>

export default{
    name:"mapS",
    data(){
        return{
              officers:[ { id: 20, name: 'Captain Piett' }, 
                         { id: 24, name: 'General Veers' }, 
                         { id: 56, name: 'Admiral Ozzel' }, 
                        { id: 88, name: 'Commander Jerjerrod' } ],
               mapsdata :' '
    }
    },
    methods:{
        mapsfun()
        {
             this.mapsdata = this.officers.map(x => { return( x.id==56)});
        }
    }
}

</script>