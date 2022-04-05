import Vue from 'vue'

import Router from 'vue-router'

import res from '@/components/res'

import sample from '../components/sample'

Vue.use(Router)

const routes=[{
    path:'/',
    name:"res",
    component:res
},
{
  path:"/sam",
  name:"sample",
  component:sample
}
]

let router = new Router({routes})
export default router
/*import Vue from 'vue'
import Router from 'vue-router'
import train from '../components/'


Vue.use(Router)
const  routes= [
    {
      path: '/train',
      name: 'trains',
      component: train
    }
  ]

let router =  new Router({routes})
export default router*/