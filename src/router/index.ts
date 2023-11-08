// Composables
import { createRouter, createWebHistory } from 'vue-router'

//layout
import TheDefaultLayout from '@/layouts/TheDefaultLayout.vue'
import TheLayout2 from "@/layouts/TheLayout2.vue"

const routes = [
  {
    path:'/',
    name:'Home',
    component: () => import('@/pages/Home.vue'),
    meta:{
      layout:TheDefaultLayout
    }
  },
  {
    path:'/about',
    name:'About',
    component: () => import('@/pages/About.vue'),
    meta:{
      layout:TheLayout2
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
