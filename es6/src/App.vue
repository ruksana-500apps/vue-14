<template>

<div>

<indexof/>
<filters/>
<maps/>
<foreach/>
<strliteral/>
<change/>
<starts/>

</div>

</template>

<script>

import indexof from '../src/components/indexof.vue'
import filters from '../src/components/filter.vue'
import maps from './components/maps.vue'
import foreach from './components/foreach.vue'
import strliteral from './components/includes.vue'
import change from './components/change_name.vue'
import starts from './components/startWith.vue'


export default {

components:{

filters,
maps,
foreach,
strliteral,
indexof,
change,
starts

},

}

</script>






