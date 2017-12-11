// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mine from './Mine.vue'
import router from './router/mine.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import axios from 'axios'

Vue.use(MintUI)

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Mine/>',
  components: { Mine }
})
