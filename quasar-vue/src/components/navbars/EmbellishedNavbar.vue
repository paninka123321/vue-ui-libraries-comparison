<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Tables', to: '/tables' },
  { label: 'Forms', to: '/forms' },
  { label: 'Login', to: '/login' },
]
</script>

<template>
  <q-toolbar class="embellished-navbar text-white">
    <q-toolbar-title>MyApp</q-toolbar-title>

    <q-btn
      v-for="link in links"
      :key="link.to"
      flat
      label="link.label"
      class="text-white"
      @click="router.push(link.to)"
    />
  </q-toolbar>
</template>

<style scoped>
.embellished-navbar {
  background: linear-gradient(90deg, #41b883, #35495e);
}

.q-btn:hover {
  text-decoration: underline;
}
</style>
