import Vue from 'vue'
import Router from 'vue-router'

import ques4 from '../components/question4.vue'
import ques1 from '../components/question1.vue'
import ques3 from '../components/question3.vue'
import ques5 from '../components/question5.vue'
import ques6 from '../components/question6.vue'
import ques66 from '../components/question66.vue'
import ques7 from '../components/question7.js'




Vue.use(Router)
const routes =[
    {
      path:'/ques4',
      name:'ques4',
      component:ques4
    },
    {
      path:'/ques1',
      name:'ques1',
      component:ques1
    },
    {
      path:'/ques3',
      name:'ques3',
      component:ques3
    },
    {
      path:'/ques5',
      name:'ques5',
      component:ques5
    },
    {
      path:'/ques6',
      name:"ques6",
      component:ques6
    },
    {
      path:'/ques66',
      name:"ques66",
      component:ques66
    },
    
    {
      path:'/ques7',
      name:"ques7",
      component:ques7
    }

]

let router =  new Router({routes})
export default router
