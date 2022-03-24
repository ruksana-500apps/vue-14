<template>
    <div>
     <b-form @submit="onSubmit" v-if="show">
         <b-form-group
              id="input1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
         >
            <b-form-input
                 id="input-1"
                 v-model="form.email"
                 type="email"
                 placeholder="Enter email"
                 required
            ></b-form-input>
         </b-form-group>
         <b-button type="submit" variant="primary" >submit</b-button>
     </b-form>
    </div>
</template>

<script>
export default{
  data () {
    return {
      form:
                {
                  email: ''
                }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
