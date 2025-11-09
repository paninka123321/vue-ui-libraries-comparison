<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dark = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' },
]
</script>

<template>
  <nav :class="['navbar', { dark }]">
    <div class="logo">MyApp</div>

    <ul>
      <li v-for="link in links" :key="link.path">
        <router-link
          :to="link.path"
          :class="{ active: route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
    
    <button class="theme-toggle" @click="dark = !dark">
      {{ dark ? '☀️ Jasny' : '🌙 Ciemny' }}
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #42b883;
  padding: 0.8em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  gap: 1rem;
}

.logo {
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

/* lista linków */
ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
  position: relative;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
}

a.active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
}

/* Przycisk zmiany motywu */
.theme-toggle {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.4em 0.8em;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.theme-toggle:hover {
  background: white;
  color: #42b883;
}

/* 🌙 Tryb ciemny */
.dark {
  background-color: #1f1f1f;
  color: #eee;
}

.dark .logo {
  color: #eee;
}

.dark a {
  color: #eee;
}

.dark .theme-toggle {
  border-color: #eee;
  color: #eee;
}

.dark .theme-toggle:hover {
  background: #eee;
  color: #1f1f1f;
}

.dark a.active::after {
  background: #eee;
}
</style>
