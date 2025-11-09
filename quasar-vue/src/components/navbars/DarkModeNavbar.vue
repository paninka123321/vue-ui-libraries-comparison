<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const dark = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Tables', to: '/tables' },
  { label: 'Forms', to: '/forms' },
  { label: 'Login', to: '/login' },
]
</script>

<template>
  <q-toolbar :class="dark ? 'bg-dark text-white' : 'bg-green text-white'">
    <q-toolbar-title>MyApp</q-toolbar-title>

    <q-btn
      v-for="link in links"
      :key="link.to"
      flat
      label="link.label"
      class="text-white"
      @click="router.push(link.to)"
    />

    <q-btn
      flat
      icon="light_mode"
      :label="dark ? 'Light' : 'Dark'"
      class="text-white"
      @click="dark = !dark"
    />
  </q-toolbar>
</template>

<style scoped>
.bg-dark {
  background-color: #1f1f1f;
}
</style>
