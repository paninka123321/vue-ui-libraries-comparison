/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // ← bardzo ważne!

// Theme setup (opcjonalne)
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark', // <--- Enable dark mode globally
    themes: {
      dark: {
        colors: {
          primary: '#1e88e5',
          secondary: '#ff4081',
          background: '#121212',
        },
      },
    },
  },
})

const app = createApp(App)

registerPlugins(app)

app
.use(vuetify)
.mount('#app')
