<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0.35;
  right: 0.35;
  background: #42b883;
  padding: 1em;
  transition: box-shadow 0.3s, background 0.3s;
  
}
.scrolled {
  background: #369f6b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
a {
  color: white;
  margin-right: 1em;
  text-decoration: none;
}
</style>
