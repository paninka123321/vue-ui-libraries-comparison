<script setup>
import BasicForm from '../components/forms/BasicForm.vue'
import MultiRowForm from '../components/forms/MultiRowForm.vue'
import DynamicForm from '../components/forms/DynamicForm.vue'
import MultiTypesForm from '../components/forms/MultiTypesForm.vue'
</script>

<template>
  <q-page padding>
    <div class="q-gutter-y-lg">
      <BasicForm />
      <MultiRowForm />
      <DynamicForm />
      <MultiTypesForm />
    </div>
  </q-page>
</template>
