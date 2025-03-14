import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFound from '@/views/NotFound.vue'
import { useAuthStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {requiresAuth: false},
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {requiresAuth: false},
    },
    {
      path: '/:pathMatch(.*)*',
      // redirect: { name: 'home' },
      name: 'not-found',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' })
  } else if ((to.name === 'login' || to.name === 'register') && authStore.isLoggedIn) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
