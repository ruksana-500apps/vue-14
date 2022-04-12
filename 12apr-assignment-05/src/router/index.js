import Vue from 'vue'
import Router from 'vue-router'

import ques1 from '../components/question1'
import ques1c from '../components/question1c'
import ques2a from '../components/question2a.vue'







Vue.use(Router)
const routes =[
    {
        path:"/ques1",
        name:"ques1",
        component:ques1
    },
    {
        path:"/ques1c",
        name:"ques1c",
        component:ques1c
    },
    {
        path:"/ques2a",
        name:"ques2a",
        component:ques2a

    }
    
]

let router =  new Router({routes})
export default router
