<template>
  <ul>
    <li v-for="student in students" :key="student.id">
      {{ student.name }} – {{ student.age }} lat
    </li>
  </ul>
</template>

<script setup>
const students = [
  { id: 1, name: "Jan Kowalski", age: 16 },
  { id: 2, name: "Ola Nowak", age: 17 },
  { id: 3, name: "Piotr Wiśniewski", age: 16 },
  { id: 4, name: "Anna Kaczmarek", age: 18 }
]
</script>
