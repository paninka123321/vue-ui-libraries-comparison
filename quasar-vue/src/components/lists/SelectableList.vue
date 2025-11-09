<!-- src/components/lists/SelectableList.vue -->
<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Selectable List (Quasar)</div>
    </q-card-section>

    <q-list bordered padding>
      <q-item v-for="task in tasks" :key="task.id" clickable @click="task.done = !task.done">
        <q-item-section side>
          <q-checkbox v-model="task.done" />
        </q-item-section>
        <q-item-section>
          <span :class="{ 'text-strike': task.done }">{{ task.label }}</span>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const tasks = reactive([
  { id: 1, label: 'Finish report', done: false },
  { id: 2, label: 'Reply to emails', done: false },
  { id: 3, label: 'Plan weekend trip', done: false }
])
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 1rem auto;
}
.text-strike {
  text-decoration: line-through;
  color: #999;
}
</style>
