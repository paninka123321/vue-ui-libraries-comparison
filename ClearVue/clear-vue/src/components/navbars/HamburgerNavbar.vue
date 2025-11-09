<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

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
  <nav class="navbar">
    <div class="logo">MyApp</div>

    <button class="burger" @click="showMenu = !showMenu">
      ☰
    </button>

    <ul :class="{ open: showMenu }">
      <li v-for="link in links" :key="link.path">
        <router-link
          :to="link.path"
          :class="{ active: route.path === link.path }"
          @click="showMenu = false"
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
  color: white;
  padding: 0.8em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger {
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

ul {
  list-style: none;
  display: flex;
  gap: 1em;
}

a {
  color: white;
  text-decoration: none;
}

a.active {
  text-decoration: underline;
}

/* --- RESPONSYWNOŚĆ --- */
@media (max-width: 768px) {
  .burger {
    display: block;
  }
  ul {
    display: none;
    flex-direction: column;
    background: #42b883;
    position: absolute;
    top: 3.5em;
    right: 1em;
    padding: 1em;
    border-radius: 0.5em;
  }
  ul.open {
    display: flex;
  }
}
</style>
