import Vue from 'vue'
import Router from 'vue-router'

import ques7 from '../components/question7.vue'
import ques8 from '../components/question8.vue'
import ques10 from '../components/question10.vue'
import ques9 from '../components/question9.vue'
import ques5 from '../components/question5.vue'
import ques3 from '../components/question3.vue'


Vue.use(Router)
const  routes= [
    {
      path:"/ques7",
      name:"ques7",
      component:ques7
    },
    {
      path:"/ques10",
      name:"ques10",
      component:ques10
    },
    {
      path:"/ques8",
      name:"ques8",
      component:ques8
    },
    {
      path:"/ques9",
      name:"ques9",
      component:ques9
    },
    {
      path:"/ques5",
      name:"ques5",
      component:ques5
    },
    {
      path:"/ques3",
      name:"ques3",
      component:ques3
    },
    {
      path:"/ques5",
      name:"ques5",
      component:ques5
    },
  
    
  ]

let router =  new Router({routes})
export default router





