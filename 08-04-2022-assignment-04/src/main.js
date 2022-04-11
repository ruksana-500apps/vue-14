import Vue from 'vue'

import App from './App'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue'





Vue.config.productionTip = false
Vue.use(BootstrapVue)


let vueRoute=new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')


export default vueRoute
