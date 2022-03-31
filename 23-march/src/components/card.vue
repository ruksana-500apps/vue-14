<template>
<div>
<h1>Card</h1>
<h4>Name :{{name}}</h4>
<h4>Mail :{{mail}}</h4>
<h4>Phone:{{phone}}</h4>
</div>
</template>

<script>
export default  {
    name : 'CardCreate',
    props : {
      name : String,
      mail : String,
      phone : Number
    }

}

</script>