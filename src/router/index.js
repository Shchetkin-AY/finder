import Vue from 'vue'
import VueRouter from 'vue-router'

import Finder from '@/components/finder'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Finder
  }
]

const router = new VueRouter({
  routes
})

export default router
