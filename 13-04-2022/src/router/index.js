import Vue from 'vue'
import Router from 'vue-router'


import ques1 from '../components/question1.vue'







Vue.use(Router)
const routes =[
    {
        path:"/ques1",
        name:"ques1",
        component:ques1
    },
    

    
]

let router =  new Router({routes})
export default router
