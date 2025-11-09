<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

const route = useRoute()
const showMenu = ref(false)

const links = [
    { name: 'Home', path: '/' },
    { name: 'Tables', path: '/tables' },
    { name: 'Forms', path: '/forms' },
    { name: 'Login', path: '/login' },
]
</script>

<template>
  <nav class="hamburger-navbar">
    <div class="logo">MyApp</div>
    <Button icon="pi pi-bars" class="p-button-text" @click="showMenu = true" />
    
    <Sidebar :visible="showMenu" position="right" @hide="showMenu = false">
      <ul class="sidebar-links">
        <li v-for="link in links" :key="link.path">
          <RouterLink :to="link.path" @click.native="showMenu = false">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </Sidebar>
  </nav>
</template>

<style scoped>
.hamburger-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b883;
  padding: 0.8em 1em;
  color: white;
}

.logo {
  font-weight: bold;
}

.sidebar-links {
  list-style: none;
  padding: 0;
}

.sidebar-links li {
  margin-bottom: 1rem;
}

.sidebar-links a {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}
</style>
