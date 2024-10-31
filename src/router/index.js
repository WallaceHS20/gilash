import { createRouter, createWebHistory } from 'vue-router/auto'

import UserFormLayout from '@/layouts/UserFormLayout.vue'
import HomeLayout from '@/layouts/HomeLayout.vue'

const manualPages = [
  {
    path: '/login',
    component: UserFormLayout,
    children: [
      {
        path: "",
        name: 'Login',
        component: () => import('@/pages/User/LoginPage.vue') // Corrigido
      }
    ]
  },
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: "",
        name: 'Home',
        component: () => import('@/pages/Home/HomePage.vue') // Corrigido
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: manualPages,
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
