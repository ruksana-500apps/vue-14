<template>
<div>
<h1>Dynamic</h1>
<p>Sname:{{sname}}</p>
<p>Smail :{{smail}}</p>
<p>Sphone{{sphone}}</p>
</div>
</template>

<script>
export default {
    name : "dynamicData",
    props :{
        sname :String,
        smail :String,
        sphone :Number
    }

}

</script>