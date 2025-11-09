<script setup>
import { useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'

const route = useRoute()

const items = [
    { label: 'Home', to: '/' },
    { label: 'Tables', to: '/tables' },
    { label: 'Forms', to: '/forms' },
    { label: 'Login', to: '/login' },
]
</script>

<template>
  <Menubar :model="items" start="<div class='logo'>MyApp</div>" class="embellished-navbar" />
</template>

<style scoped>
.embellished-navbar {
  background: linear-gradient(90deg, #41b883, #35495e);
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.embellished-navbar .p-menuitem-link {
  color: white !important;
}

.embellished-navbar .p-menuitem-link.p-menuitem-active::after {
  content: '';
  display: block;
  height: 2px;
  background: white;
  margin-top: 2px;
}
</style>
