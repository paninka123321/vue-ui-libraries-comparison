<template>
  <nav class="navbar">
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
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #41b883, #35495e);
  padding: 0.8em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
  position: relative;
}

a.active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

a:hover {
  opacity: 0.8;
}
</style>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' },
]
</script>
