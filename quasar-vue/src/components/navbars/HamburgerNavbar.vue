<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)  // controls drawer visibility

// Links to your example pages
const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' }
]
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Top toolbar -->
    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <!-- Hamburger button -->
        <q-btn flat dense round icon="menu" @click="drawer = true" />

        <q-toolbar-title>Navbar Examples</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Right drawer -->
    <q-drawer
      v-model="drawer"
      side="right"
      bordered
      elevated
      :width="250"
      modal
    >
      <div class="q-pa-md">
        <h3>Examples Menu</h3>
        <q-list>
          <q-item
            v-for="link in links"
            :key="link.path"
            clickable
            @click="router.push(link.path); drawer = false"
          >
            <q-item-section>{{ link.name }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Main content -->
    <q-page-container>
      <q-page class="q-pa-md">
        <p>Click the hamburger to open the menu with example pages.</p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
h3 {
  color: #42b883;
  margin-bottom: 1rem;
}
.q-toolbar {
  font-weight: bold;
}
</style>
