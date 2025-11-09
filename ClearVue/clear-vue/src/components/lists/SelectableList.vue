<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, label: 'Finish report', done: false },
  { id: 2, label: 'Reply to emails', done: false },
  { id: 3, label: 'Plan weekend trip', done: false }
])
</script>

<template>
  <ul class="selectable-list">
    <li
      v-for="task in tasks"
      :key="task.id"
      :class="{ done: task.done }"
      @click="task.done = !task.done"
    >
      <input type="checkbox" v-model="task.done" />
      <span>{{ task.label }}</span>
    </li>
  </ul>
</template>

<style scoped>
.selectable-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.selectable-list li {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}
.selectable-list li:hover {
  background: #f7f7f7;
}
.selectable-list li.done span {
  text-decoration: line-through;
  color: #999;
}
input[type='checkbox'] {
  margin-right: 0.6rem;
}
</style>
