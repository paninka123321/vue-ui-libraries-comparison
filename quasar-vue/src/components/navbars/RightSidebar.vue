<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Tables', path: '/tables' },
  { name: 'Forms', path: '/forms' },
  { name: 'Login', path: '/login' }
]
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Top Navbar -->
    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-toolbar-title>MyApp</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Right Sidebar always visible -->
    <q-drawer
      side="right"
      bordered
      elevated
      :width="250"
      show-if-above
      :model-value="true"   
    >
      <div class="q-pa-md">
        <h3>Menu</h3>
        <q-list>
          <q-item
            v-for="link in links"
            :key="link.path"
            clickable
            @click="router.push(link.path)"
          >
            <q-item-section>{{ link.name }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Page content -->
    <q-page-container>
      <q-page class="q-pa-md">
        <p>Main content goes here.</p>
        <p>The right sidebar is always visible on large screens.</p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
h3 {
  color: #42b883;
  margin-bottom: 1rem;
}
</style>
