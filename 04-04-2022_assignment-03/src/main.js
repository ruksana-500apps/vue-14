import Vue from 'vue'

import App from './App'
import Router from './router'
import{BootstrapVue} from 'bootstrap-vue'



Vue.config.productionTip = false
Vue.use(BootstrapVue)

let vueRoute=new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')


export default vueRoute
