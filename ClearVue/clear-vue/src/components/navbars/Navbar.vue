//basic navbar
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

<template>
  <nav class="navbar">
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
  background-color: #42b883;
  padding: 0.8em 1em;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin-right: 1.2em;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.active {
  text-decoration: underline;
}

.navbar a:hover {
  opacity: 0.8;
}
</style>
