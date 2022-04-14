import Vue from 'vue'

import App from './App'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue'
/*import JwPagination from 'jw-vue-pagination';

import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

Vue.component('jw-pagination', JwPagination);*/





Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(Router)


let vueRoute=new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')


export default vueRoute
