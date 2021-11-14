import Vue from 'vue'
import App from './App.vue'
import RemoteJs from './remote-js'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.component('remote-js', RemoteJs)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
