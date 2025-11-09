<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sidebarOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' },
]
</script>

<template>
  <div class="app-layout">
    <!-- Mały pasek w lewym górnym rogu -->
    <div class="mini-topbar">
      <button class="hamburger" @click="sidebarOpen = !sidebarOpen">☰</button>
      <span class="logo">MyApp</span>
    </div>

    <!-- Sidebar -->
    <aside :class="{ open: sidebarOpen }" class="sidebar">
      <div class="sidebar-header">
        <h2>Menu</h2>
        <button class="close" @click="sidebarOpen = false">×</button>
      </div>
      <ul>
        <li v-for="link in links" :key="link.path">
          <router-link
            :to="link.path"
            :class="{ active: route.path === link.path }"
            @click="sidebarOpen = false"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Zawartość -->
    <main :class="{ shifted: sidebarOpen }">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

/* 🔹 Mały pasek po lewej u góry */
.mini-topbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem; /* odstęp między ☰ i logo */
  background: rgba(66, 184, 131, 0.9);
  color: white;
  padding: 0.4em 0.8em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  width: 215px;
}

.logo {
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
}

/* 🔹 Hamburger */
.hamburger {
  background: none;
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.hamburger:hover {
  opacity: 0.85;
}

/* 🔹 Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background: #2c2c2c;
  color: white;
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
}

.sidebar.open {
  width: 240px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.sidebar-header h2 {
  margin: 0;
}

.close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 🔹 Linki */
ul {
  list-style: none;
  padding: 0 1rem;
}

li {
  margin: 0.8em 0;
}

a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.4em 0.6em;
  border-radius: 4px;
  transition: background 0.2s;
}

a:hover,
a.active {
  background: #42b883;
}

/* 🔹 Zawartość */
main {
  flex: 1;
  transition: margin-left 0.3s;
  padding: 2rem;
}

main.shifted {
  margin-left: 240px;
}
</style>
