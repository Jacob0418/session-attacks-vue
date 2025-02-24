import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#f5f5f5',
          primary: '#3FB984',
          error: '#FF4C4C',
          lineinput: '#31475e',
        },
      },
    },
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(vuetify)
