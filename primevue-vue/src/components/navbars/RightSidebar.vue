<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const visible = ref(false)

const links = [
  { name: '🏠 Home', path: '/' },
  { name: '🥇 Tables', path: '/tables' },
  { name: '✎ Forms', path: '/forms' },
  { name: '🔑 Login', path: '/login' }
]
</script>

<template>
  <!-- 🔹 przycisk otwierający panel -->
  <Button 
    icon="pi pi-arrow-left" 
    label="Pokaż panel"
    class="p-button-success"
    @click="visible = true" 
  />

  <!-- 🔹 sidebar PrimeVue -->
  <Sidebar 
    v-model:visible="visible"
    position="right"
    modal
    showCloseIcon
    class="right-sidebar"
  >
    <h3>Panel boczny</h3>

    <ul>
      <li v-for="link in links" :key="link.path">
        <RouterLink 
          :to="link.path"
          :class="{ active: route.path === link.path }"
          @click.native="visible = false"
        >
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </Sidebar>
</template>

<style scoped>
.right-sidebar {
  width: 240px;
  background-color: #2c2c2c;
  color: white;
  border-left: 3px solid #42b883;
  padding: 1rem;
}

.right-sidebar h3 {
  color: #42b883;
  margin-bottom: 1rem;
}

.right-sidebar ul {
  list-style: none;
  padding: 0;
}

.right-sidebar li {
  margin: 0.6rem 0;
}

.right-sidebar a {
  color: white;
  text-decoration: none;
}

.right-sidebar a.active {
  font-weight: bold;
}
</style>
