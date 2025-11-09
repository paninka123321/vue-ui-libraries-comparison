<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Tables', dropdown: [
      { label: 'Basic', to: '/tables/basic' },
      { label: 'Advanced', to: '/tables/advanced' }
    ]
  },
  { label: 'Forms', to: '/forms' },
  { label: 'Login', to: '/login' },
]
</script>

<template>
  <q-toolbar class="bg-green text-white">
    <q-toolbar-title>MyApp</q-toolbar-title>

    <div class="row q-gutter-sm">
      <template v-for="link in links">
        <q-btn
          v-if="!link.dropdown"
          :key="link.to"
          flat
          label="link.label"
          class="text-white"
          @click="router.push(link.to)"
        />
        <q-btn-dropdown
          v-else
          flat
          :label="link.label"
          class="text-white"
          auto-close
        >
          <q-list>
            <q-item
              v-for="item in link.dropdown"
              :key="item.to"
              clickable
              @click="router.push(item.to)"
            >
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
    </div>
  </q-toolbar>
</template>
