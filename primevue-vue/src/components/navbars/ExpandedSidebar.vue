<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Button from 'primevue/button'

const route = useRoute()
const sidebarOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' }
]
</script>

<template>
  <div class="app-layout">
    <!-- 🔹 Pasek górny -->
    <div class="mini-topbar">
      <Button
        icon="pi pi-bars"
        class="p-button-text p-button-lg hamburger"
        @click="sidebarOpen = !sidebarOpen"
      />
      <span class="logo">MyApp</span>
    </div>

    <!-- 🔹 Sidebar -->
    <Transition name="slide">
      <aside v-if="sidebarOpen" class="sidebar">
        <div class="sidebar-header">
          <h2>Menu</h2>
          <Button icon="pi pi-times" class="p-button-text close" @click="sidebarOpen = false" />
        </div>

        <ul>
          <li v-for="link in links" :key="link.path">
            <RouterLink
              :to="link.path"
              @click="sidebarOpen = false"
              :class="{ active: route.path === link.path }"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </aside>
    </Transition>

    <!-- 🔹 Główna treść -->
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

/* Pasek górny */
.mini-topbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #42b883;
  color: white;
  padding: 0.6em 0.8em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  width: 240px;
}

.logo {
  font-size: 1.1rem;
  font-weight: bold;
}

/* Hamburger */
.hamburger {
  color: white !important;
  font-size: 1.4rem;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  background: #2c2c2c;
  color: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  border-right: 3px solid #42b883;
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
  color: #42b883;
}

.close {
  color: white !important;
}

/* Linki */
ul {
  list-style: none;
  padding: 0 1rem;
  margin: 0;
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

/* Główna zawartość */
main {
  flex: 1;
  transition: margin-left 0.3s ease;
  padding: 2rem;
}

main.shifted {
  margin-left: 240px;
}

/* 🔹 Animacja otwierania/zamykania */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
