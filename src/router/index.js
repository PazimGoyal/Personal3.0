import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
const routes = [
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
