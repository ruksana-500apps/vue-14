<template>

<div>

<Index1/>
<filters/>
<maps/>
<foreach/>

</div>

</template>

<script>

import Index1 from '@/components/indexof.vue'
import filters from '../src/components/filter.vue'
import maps from './components/maps.vue'
import foreach from './components/foreach.vue'


export default {

components:{

Index1,
filters,
maps,
foreach

},

}

</script>






