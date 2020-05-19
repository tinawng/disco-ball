import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import { discopuzzle } from 'disco-puzzle'

Vue.config.productionTip = false
Vue.use(discopuzzle);

new Vue({
  vuetify,
  router,
  Vuex,
  render: h => h(App)
}).$mount('#app')
