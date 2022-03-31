<template>
<div>
<h2>Ref Keyword </h2>
<p>using ref keyword to access data</p>
<p>{{address}}</p>
</div>

</template>

<script>

export default {
    name : "referenCe",
props:{
    address :{Default : "Guntur",type :String}
}
}

</script>