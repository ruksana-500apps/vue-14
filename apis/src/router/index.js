import Vue from 'vue'
import Router from 'vue-router'
import train from '../components/trains'


Vue.use(Router)
const  routes= [
    {
      path: '/',
      name: 'trains',
      component: train
    }
  ]

let router =  new Router({routes})
export default router