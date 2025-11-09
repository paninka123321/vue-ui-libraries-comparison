<template>
  <div class="card">
    <h3>List with Avatars and Subtitles (PrimeVue)</h3>
    <Listbox :options="users" optionLabel="name" :style="{ width: '25rem' }">
      <template #option="slotProps">
        <div class="flex justify-center items-center gap-3 w-full">
          <Avatar :image="slotProps.option.avatar" shape="circle" />
          <div class="flex flex-col items-center justify-center">
            <div class="font-bold">{{ slotProps.option.name }}</div>
            <div class="text-sm text-gray-500">{{ slotProps.option.role }}</div>
          </div>
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup>
import Listbox from 'primevue/listbox'
import Avatar from 'primevue/avatar'

const users = [
  { name: 'Alice', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Bob', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Charlie', role: 'Project Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
]
</script>
