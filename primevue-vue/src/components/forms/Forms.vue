<script setup>
import BasicForm from './BasicForm.vue';
import MultiRowForm from './MultiRowForm.vue';
import DynamicForm from './DynamicForm.vue';
import MultiTypesForm from './MultiTypesForm.vue';
</script>

<template>
  <div class="lists-page p-4 flex flex-column gap-6">
    <p>Basic form (PrimeVue)</p>
    <BasicForm />
    <p>Multi-row form (PrimeVue)</p>
    <MultiRowForm />
    <p> Dynamic form (PrimeVue)</p>
    <DynamicForm />
    <p> Multi-types form (PrimeVue)</p>
    <MultiTypesForm />
  </div>
</template>
