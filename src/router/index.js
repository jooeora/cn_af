// router/index

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
  routes
})

export default router
