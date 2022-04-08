import Vue from 'vue'
import Router from 'vue-router'

import ques7 from '../components/question7.vue'
import ques8 from '../components/question8.vue'
import ques10 from '../components/question10.vue'
import ques9 from '../components/question9.vue'
import ques5 from '../components/question5.vue'
import ques3 from '../components/question3.vue'
import ques1 from '../components/question1.vue'
import parent from '../components/parent6.vue'
import ques4 from '../components/question4.vue'
import fetchs from '../components/fetch.vue'
import sample from '../components/sample'
import side from '../components/sidebar.vue'


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
      path:"/ques3",
      name:"ques3",
      component:ques3
    },
    {
      path:"/ques5",
      name:"ques5",
      component:ques5
    },
    {
      path:"/ques1",
      name:"ques1",
      component:ques1
    },
    {
      path:"/ques6",
      name:"ques6",
      component:parent
    },
   {
      path:"/ques4",
      name:"ques4",
      component:ques4
    },
    {
      path:"/fetchs",
      name:"fetch",
      component:fetchs
    },
    {
      path:"/sample",
      name:"sample",
      component:sample
    },
    {
      path:'/side',
      name:"side",
      component:side
    }
  
    
  ]

let router =  new Router({routes})
export default router





