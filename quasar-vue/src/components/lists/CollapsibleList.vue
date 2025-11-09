<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Collapsible List (Quasar)</div>
    </q-card-section>

    <q-list bordered padding>
      <q-expansion-item
        v-for="section in sections"
        :key="section.title"
        :label="section.title"
        :expand-separator="true"
      >
        {{ section.content }}
      </q-expansion-item>
    </q-list>
  </q-card>
</template>

<script setup>
const sections = [
  { title: 'Konto', content: 'Zarządzaj swoim kontem użytkownika.' },
  { title: 'Powiadomienia', content: 'Ustawienia e-maili i alertów.' },
  { title: 'Prywatność', content: 'Kontrola udostępniania danych.' }
]
</script>

<style scoped>
.my-card { max-width: 500px; margin: 1rem auto; }
</style>
