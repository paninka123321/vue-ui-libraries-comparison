<template>
  <div class="card">
    <h3>Chat-style list (PrimeVue)</h3>
    <Listbox :options="messages" optionLabel="name" :style="{ width: '25rem' }">
      <template #option="slotProps">
        <div class="flex justify-between align-items-center">
          <div class="flex align-items-center gap-3">
            <Avatar :image="slotProps.option.avatar" shape="circle" />
            <div>
              <div class="font-medium">{{ slotProps.option.name }}</div>
              <div class="text-sm text-gray-500">{{ slotProps.option.text }}</div>
            </div>
          </div>
          <Badge v-if="slotProps.option.unread" value="New" severity="info" />
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup>
import Listbox from 'primevue/listbox'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const messages = [
  { id: 1, name: 'Alice', text: 'Hey, are we meeting today?', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', unread: true },
  { id: 2, name: 'Bob', text: 'Project update: Done!', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', unread: false },
  { id: 3, name: 'Charlie', text: 'Let’s catch up later.', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', unread: true },
]
</script>
