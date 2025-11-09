<script setup>
import { useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'

const route = useRoute()

const items = [
    { label: 'Home', to: '/' },
    { 
      label: 'Tables', 
      items: [
        { label: 'Basic', to: '/tables/basic' },
        { label: 'Advanced', to: '/tables/advanced' }
      ] 
    },
    { label: 'Forms', to: '/forms' },
    { label: 'Login', to: '/login' }
]
</script>

<template>
  <Menubar :model="items" class="dropdown-navbar" />
</template>

<style scoped>
.dropdown-navbar {
  background-color: #42b883;
}

.dropdown-navbar .p-menuitem-link {
  color: white !important;
}

.dropdown-navbar .p-menuitem-link.p-menuitem-active {
  text-decoration: underline;
}
</style>
