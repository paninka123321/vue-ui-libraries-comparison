<template>
  <div class="card">
    <h3>Selectable list (PrimeVue)</h3>
    <DataTable :value="tasks" tableStyle="width: 25rem">
      <Column field="done" header="Done" style="width: 5rem">
        <template #body="{ data }">
          <Checkbox v-model="data.done" :binary="true" />
        </template>
      </Column>
      <Column field="title" header="Task" />
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'
import { ref } from 'vue'

const tasks = ref([
  { title: 'Finish report', done: false },
  { title: 'Reply to emails', done: true },
  { title: 'Plan weekend trip', done: false },
])
</script>
