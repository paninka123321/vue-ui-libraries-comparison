<script setup>
const students = [
  { name: 'Jan Kowalski', age: 16 },
  { name: 'Ola Nowak', age: 17 },
  { name: 'Piotr Wiśniewski', age: 16 },
  { name: 'Anna Kaczmarek', age: 18 }
]
</script>

<template>
  <ul class="basic-list">
    <li v-for="s in students" :key="s.name">
      {{ s.name }} – {{ s.age }} lat
    </li>
  </ul>
</template>

<style scoped>
.basic-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  margin: 1rem auto;
}
.basic-list li {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #eee;
}
.basic-list li:last-child {
  border-bottom: none;
}
</style>
