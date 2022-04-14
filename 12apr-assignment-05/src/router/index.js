import Vue from 'vue'
import Router from 'vue-router'

import ques1co from '../components/question1o'
import ques1c from '../components/question1c'
import ques2a from '../components/question2a.vue'
import ques2b from '../components/question2b.vue'
import ques3b from '../components/question3b.vue'
import ques1 from '../components/question1.vue'
import ques2c from '../components/question2c.vue'
import ques1n from '../components/newques1.vue'







Vue.use(Router)
const routes =[
    {
        path:"/ques1co",
        name:"ques1co",
        component:ques1co
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

    },
    {
        path:"/ques2b",
        name:"ques2b",
        component:ques2b
    },
    {
        path:"/ques3b",
        name:"ques3b",
        component:ques3b
    },
    {
        path:"/ques1",
        name:"ques1",
        component:ques1
    },
    {
        path:"/ques2c",
        name:"ques2c",
        component:ques2c
    },
    {
        path:"/ques1n",
        name:"ques1n",
        component:ques1n
    }

    
]

let router =  new Router({routes})
export default router
