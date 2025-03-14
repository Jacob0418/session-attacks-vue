<template>
  <div class="flex flex-col items-center justify-center m-[5%]">
    <form
      @submit="onSubmit"
      class="rounded-md w-[500px] flex p-5 items-center justify-center shadow-2xl flex-col"
    >
      <img src="../assets/logo.svg" alt="logo" class="w-20 h-20 mb-5" />
      <p class="text-2xl font-semibold my-2.5 text-[#31475e]">Login</p>
      <div class="w-[400px] outline-none">
        <v-text-field
          v-model="email"
          v-bind="emailAttrs"
          hide-details="auto"
          label="Correo"
          outlined
          dense
          color="primary"
          base-color="lineinput"
        ></v-text-field>
        <span class="text-red-500 text-sm">{{ errors.email }}</span>
        <br />

        <v-text-field
          type="password"
          v-model="password"
          v-bind="passwordAttrs"
          label="Contraseña"
          hide-details="auto"
          outlined
          dense
          color="primary"
          base-color="lineinput"
        ></v-text-field>
        <span class="text-red-500 text-sm">{{ errors.password }}</span>
        <br />

        <button
          type="submit"
          class="bg-[#3FB984] text-white px-4 py-2 rounded-md cursor-pointer hover:scale-95 w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/user'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email('Correo inválido').required('Correo es requerido'),
      password: yup.string().min(6, 'Mínimo 6 carácteres').required('Contraseña es requerida'),
    }),
  ),
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  try {
    await authStore.login(values.email, values.password)
    console.log('Login exitoso')

    setTimeout(() => {
      console.log('Verificando estado después del login:', authStore.isLoggedIn)

      if (authStore.isLoggedIn) {
        alert('Login exitoso')
        router.push('/')
      } else {
        console.error('El login falló, estado de isLoggedIn:', authStore.isLoggedIn)
        alert('Hubo un error al iniciar sesión')
      }
    }, 300)
  } catch (error) {
    console.error('Error en el login:', error)
    alert('Hubo un error al iniciar sesión')
  }
})


</script>
