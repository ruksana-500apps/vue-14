<template>
<div>
 <b-form @Submit="onSubmit" v-if="show">
  <b-form-group id="group1" label="Email Address:" labelfor="input1"></b-form-group>
      <b-form-input id="input1" v-model="form.email" type="email" placeholder="enter Email:" required>
  </b-form-input>

 <b-button type="submit" variant="primary">submit</b-button>
 </b-form>
 <b-card class="mt-3" header="Form Data Result">
     <pre class='m-0' >{{form}}</pre>
 </b-card>
</div>
</template>

<script>
export default{
  data () {
    return {
      form: {
        email: ''
      }

    }
  },
  methods: {
    onsubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}

</script>
