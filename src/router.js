import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'
import MicroFreak from '@/views/MicroFreak.vue'
import SoloDisco from '@/views/SoloDisco.vue'
import DanceFloor from '@/views/DanceFloor.vue'
import Bartender from '@/views/Bartender.vue'
import Primes from '@/views/Primes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/microfreak',
    component: MicroFreak
  },
  {
    path: '/solodisco',
    component: SoloDisco
  },
  {
    path: '/dancefloor',
    component: DanceFloor
  },
  {
    path: '/bartender',
    component: Bartender
  },
  {
    path: '/primes',
    component: Primes
  }
]

const router = new VueRouter({
  routes
})

export default router
