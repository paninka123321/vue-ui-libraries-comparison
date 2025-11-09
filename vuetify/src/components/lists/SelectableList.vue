<template>
  <v-container class="pa-4">
    <v-card elevation="3" class="rounded-xl">
      <v-card-title>Tasks</v-card-title>
      <v-list>
        <v-list-item
          v-for="task in tasks"
          :key="task.title"
        >
          <template #prepend>
            <v-checkbox v-model="task.done" />
          </template>
          <v-list-item-title :class="task.done ? 'text-grey' : ''">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { title: 'Finish report', done: false },
  { title: 'Reply to emails', done: true },
  { title: 'Plan weekend trip', done: false },
])
</script>
