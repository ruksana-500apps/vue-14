import Vue from 'vue'
import Router from 'vue-router'
import train from '../components/trains'
import trains_table from '@/components/trains_table'


Vue.use(Router)
const  routes= [
    {
      path: '/train',
      name: 'trains',
      component: train
    },
    {
      path: '/tt',
      name: 'train_table',
      component:trains_table
    }
  ]

let router =  new Router({routes})
export default router