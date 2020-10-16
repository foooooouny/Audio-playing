import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/home')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BABEL_URL),
  routes
})

export default router