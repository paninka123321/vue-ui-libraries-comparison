<!-- src/components/lists/BasicList.vue -->
<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Basic List (Quasar)</div>
    </q-card-section>
    <q-list bordered padding>
      <q-item v-for="student in students" :key="student.name">
        <q-item-section>{{ student.name }} – {{ student.age }} lat</q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
const students = [
  { name: 'Jan Kowalski', age: 16 },
  { name: 'Ola Nowak', age: 17 },
  { name: 'Piotr Wiśniewski', age: 16 },
  { name: 'Anna Kaczmarek', age: 18 }
]
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 1rem auto;
}
</style>
