import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import destination from '../views/destination.vue'
import crew from '../views/crew.vue'
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
    },
    {
      path: '/crew',
      name: 'crew',
      component: crew
    }
  ]
})

export default router
