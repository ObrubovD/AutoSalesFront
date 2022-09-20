import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import router from "./router/router.js"
Vue.use(NavbarPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
   router,
   store
}).$mount('#app')
