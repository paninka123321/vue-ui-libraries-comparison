<script setup>
import { ref } from 'vue'
const leftDrawer = ref(false)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title>Expanded Sidebar Example</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" bordered elevated width="250">
      <q-list>
        <q-item clickable><q-item-section>Home</q-item-section></q-item>
        <q-item clickable><q-item-section>Tables</q-item-section></q-item>
        <q-item clickable><q-item-section>Forms</q-item-section></q-item>
        <q-item clickable><q-item-section>Login</q-item-section></q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <p>Main content goes here</p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
