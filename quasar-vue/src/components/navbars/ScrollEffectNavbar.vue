<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const scrolled = ref(false)

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Scroll-sensitive Navbar -->
  <q-toolbar :class="['scroll-navbar', { scrolled }]">
    <q-toolbar-title>MyApp</q-toolbar-title>

    <div class="q-gutter-sm">
      <q-btn
        v-for="link in links"
        :key="link.path"
        flat
        :label="link.label"
        class="text-white"
        @click="router.push(link.path)"
      />
    </div>
  </q-toolbar>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.scroll-navbar.scrolled {
  background: #369f6b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.scroll-navbar .q-btn {
  color: white;
  font-weight: bold;
}
</style>
