import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mine_wrap',
      component: Mine
    }
  ]
})
