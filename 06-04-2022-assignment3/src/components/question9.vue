<template>
  <div>
    <b-form @submit="onSubmit"  v-if="show">
        <b-form-group id="input-group-1"  label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-4"  label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.contact"
          placeholder="Enter contact"
          required
        ></b-form-input>
      </b-form-group>
       


      <b-button type="submit" variant="primary">Save</b-button>
    </b-form>

    <p id='id'></p>
  </div>
</template>

<script>
  export default {
      name:"queS9",
    data() {
      return {
        form: {
          name: '',
          email: '',
          age:'',
          contact:''
         
        },
        show: true
      }
    },
    methods: {
     onSubmit() {
        document.getElementById('id').innerHTML=(JSON.stringify(this.form))
      }
    }
  }
</script>