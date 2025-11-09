<template>
  <div class="card" style="padding:1rem; max-width:28rem;">
    <h3 style="margin:0 0 0.5rem 0;">Basic list (PrimeVue)</h3>

    <!-- Listbox: options as array, custom option slot -->
    <Listbox
      :options="students"
      optionLabel="name"
      :style="{ width: '100%' }"
      :filter="false"
      :multiple="false"
    >
      <!-- scoped slot: rozpakowujemy { option, index } -->
      <template #option="{ option, index }">
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0.5rem;
            gap:1rem;
          "
>
          <span >{{ option.name }}</span>
          <small style="color: #6b7280;"> {{ option.age }} lat</small>
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup>
import Listbox from 'primevue/listbox'

const students = [
  { name: 'Jan Kowalski', age: 16 },
  { name: 'Ola Nowak', age: 17 },
  { name: 'Piotr Wiśniewski', age: 16 },
  { name: 'Anna Kaczmarek', age: 18 },
]
</script>

<style scoped>
/* opcjonalne drobne poprawki wyglądu listy */
.p-listbox .p-listbox-list .p-listbox-item {
  padding: 0; /* usuwamy domyły padding, bo sami go ustawiamy w slotcie */
}
</style>
