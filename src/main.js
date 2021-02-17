import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import utils from './mixins/utils'
import BootstrapVue from 'bootstrap-vue'    // ネイティブコマンドを使うためのadd
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)    // ネイティブコマンドを使うためのadd
// Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
Vue.config.productionTip = false

Vue.mixin(utils)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
