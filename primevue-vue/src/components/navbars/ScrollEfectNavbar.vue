<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Menubar from 'primevue/menubar'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const items = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <Menubar :model="items" :class="['scroll-navbar', { scrolled }]" />
</template>

<style scoped>
.scroll-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #42b883;
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 1000;
  height: 70px;
}

.scroll-navbar.scrolled {
  background: #369f6b;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.scroll-navbar .p-menuitem-link {
  color: white !important;
}
</style>
