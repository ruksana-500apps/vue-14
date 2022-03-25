import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import formS from '@/components/form.vue'
import sampleV from '../components/sample.vue'
import formValid from '../components/form-validation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sample',
      name: 'sample',
      component: sampleV
    },
    {
      path: '/form',
      name: 'form',
      component: formS
    },
    {
      path: 'form-valid',
      name: 'form-valid',
      component: formValid
    }
  ]
})
