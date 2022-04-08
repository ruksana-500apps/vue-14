import Vue from 'vue'
import Router from 'vue-router'

import ques4 from '../components/question4.vue'
import ques1 from '../components/question1.vue'
import ques3 from '../components/question3.vue'
import ques5 from '../components/question5.vue'




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

]

let router =  new Router({routes})
export default router
