<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const route = useRoute()
const dark = ref(false)

const items = [
    { label: 'Home', to: '/' },
    { label: 'Tables', to: '/tables' },
    { label: 'Forms', to: '/forms' },
    { label: 'Login', to: '/login' }
]
</script>

<template>
  <Menubar :model="items" class="dark-navbar" start="<div class='logo'>MyApp</div>">
    <template #end>
      <Button 
        :label="dark ? '☀️ Jasny' : '🌙 Ciemny'" 
        class="p-button-text" 
        @click="dark = !dark"
      />
    </template>
  </Menubar>
</template>

<style scoped>
.dark-navbar {
  background-color: #42b883;
  transition: background 0.3s, color 0.3s;
}

.dark-navbar.dark {
  background-color: #1f1f1f;
}

.dark-navbar .p-menuitem-link {
  color: white !important;
}

.dark-navbar.dark .p-menuitem-link {
  color: #eee !important;
}

.logo {
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}
</style>
