<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { name: '🏠 Home', path: '/' },
  { name: '🥇 Tables', path: '/tables' },
  { name: '✎ Forms', path: '/forms' },
  { name: '🔑 Login', path: '/login' },
]
</script>

<template>
  <aside class="sidebar">
    <h3>Panel boczny</h3>
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
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 240px;
  background-color: #2c2c2c;
  color: white;
  border-left: 3px solid #42b883;
  padding: 1.5rem 1rem;
  overflow-y: auto;
  z-index: 900;
}

.sidebar h3 {
  margin-top: 0;
  color: #42b883;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.sidebar li:hover {
  background: #42b883;
}
</style>
