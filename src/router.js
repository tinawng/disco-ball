import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'

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
    path: '/brute',
    component: () => import(/* webpackChunkName: "brute" */ '@/views/Brute.vue')
  },
  {
    path: '/resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/views/Resume.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
