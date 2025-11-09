<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <h2>Linki do stron:</h2>
  <ul>
    <li>
      <router-link to="/tables">Tables</router-link>
    </li>
    <li>
      <router-link to="/cards">Cards</router-link>
    </li>
    <li>
      <router-link to="/lists">Lists</router-link>
    </li>
    <li>
      <router-link to="/navbar">Navbar</router-link>
    </li>
    <li>
      <router-link to="/forms">Forms</router-link>
    </li> 
  </ul>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
