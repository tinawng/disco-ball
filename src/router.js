import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'
// import MicroFreak from '@/views/MicroFreak.vue'
// import SoloDisco from '@/views/SoloDisco.vue'
// import DanceFloor from '@/views/DanceFloor.vue'
// import Bartender from '@/views/Bartender.vue'
// import Primes from '@/views/Primes.vue'
// import Airy from '@/views/Airy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/microfreak',
    component: () => import(/* webpackChunkName: "microfreak" */ '@/views/MicroFreak.vue')
  },
  {
    path: '/solodisco',
    component: () => import(/* webpackChunkName: "solodisco" */ '@/views/SoloDisco.vue')
  },
  {
    path: '/dancefloor',
    component: () => import(/* webpackChunkName: "dancefloor" */ '@/views/DanceFloor.vue')
  },
  {
    path: '/bartender',
    component: () => import(/* webpackChunkName: "bartender" */ '@/views/Bartender.vue')
  },
  {
    path: '/primes',
    component: () => import(/* webpackChunkName: "primes" */ '@/views/Primes.vue')
  },
  {
    path: '/airy',
    component: () => import(/* webpackChunkName: "airy" */ '@/views/Airy.vue')
  }

  // {
  //   path: '/microfreak',
  //   component: MicroFreak
  // },
  // {
  //   path: '/solodisco',
  //   component: SoloDisco
  // },
  // {
  //   path: '/dancefloor',
  //   component: DanceFloor
  // },
  // {
  //   path: '/bartender',
  //   component: Bartender
  // },
  // {
  //   path: '/primes',
  //   component: Primes
  // },
  // {
  //   path: '/airy',
  //   component: Airy
  // }
]

const router = new VueRouter({
  routes
})

export default router
