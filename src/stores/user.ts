import type { User } from '@/interfaces/User'
import { logService } from '@/services/LogService'
import { LoginService, LogoutService, RegisterService } from '@/services/userService'
import { email } from '@vee-validate/rules'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as User)
  const token = useStorage('token', '')
  const isLoggedIn = computed(
    () => token.value !== "" && token.value !== undefined,
  );

  async function login(email: string, password: string) {
    try {
      const response = await LoginService(email, password)

      if (response.token) {
        user.value = response
        token.value = response.token
        await nextTick();
      } else {
        console.error('Error: No se encontró un token en la respuesta', response)
        return
      }

      router.push('/')
    } catch (error: any) {
      console.error('Error durante el login:', error)
      await logService.log('error', 'Error durante el login', { error, email })
    }
  }

  async function register(email: string, password: string) {
    try {
      const response = await RegisterService(email, password)
      if (response.status === 200) {
        user.value = response.data
        token.value = user.value.token
      }
    } catch (error: any) {
      const errorMessage = 'Error during registration'
      console.error(errorMessage, error)
      await logService.log('error', errorMessage, { error, email })
    }
  }

  async function logout() {
    try {
      const response = await LogoutService();
      if (!response.token) {
        user.value = {} as User;
        token.value = null;
      }
      console.log('Logout exitoso', token.value);
    } catch (error: any) {
      const errorMessage = 'Error during logout';
      console.error(errorMessage, error);
      await logService.log('error', errorMessage, { error });
    }
  }



  return { login, register, logout, isLoggedIn, token }
})
