<script setup>
import { ref } from 'vue'

const sections = ref([
  { title: 'Konto', content: 'Zarządzaj swoim kontem użytkownika.', open: false },
  { title: 'Powiadomienia', content: 'Ustawienia e-maili i alertów.', open: false },
  { title: 'Prywatność', content: 'Kontrola udostępniania danych.', open: false }
])

const toggle = (s) => (s.open = !s.open)
</script>

<template>
  <ul class="collapsible-list">
    <li v-for="section in sections" :key="section.title">
      <div class="header" @click="toggle(section)">
        <span>{{ section.title }}</span>
        <span>{{ section.open ? '−' : '+' }}</span>
      </div>
      <div v-if="section.open" class="content">
        {{ section.content }}
      </div>
    </li>
  </ul>
</template>

<style scoped>
.collapsible-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  color: black;
}
.header:hover {
  background: #e6e6e6;
}
.content {
  padding: 0.8rem 1rem;
  border-left: 2px solid #42b883;
  margin-top: 0.4rem;
  background: #fafafa;
  border-radius: 4px;
  color: #000;
}
</style>
