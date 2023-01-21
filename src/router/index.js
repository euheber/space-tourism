import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import destination from '../views/destination.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },  
    {
      path: '/destination',
      name: 'destination',
      component: destination
    }
  ]
})

export default router
