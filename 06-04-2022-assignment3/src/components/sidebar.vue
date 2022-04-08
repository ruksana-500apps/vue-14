<template>
  <div>
    <b-button v-b-toggle.sidebar-right>click</b-button>
    <b-sidebar id="sidebar-right" title="SIDEBAR"  shadow>
      <div class="px-3 py-2">
        <p>
          This is used for sidebar 
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default{
    name:"sideBar"
}
</script>
