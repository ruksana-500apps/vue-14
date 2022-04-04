import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'  
import 'bootstrap-vue/dist/bootstrap-vue.css'  
import axios from 'Axios'

Vue.config.productionTip = false

Vue.use(axios)


new Vue({
  render: h => h(App),
}).$mount('#app')
