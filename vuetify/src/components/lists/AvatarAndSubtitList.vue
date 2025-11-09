<template>
  <v-container class="pa-4">
    <v-card elevation="3" class="rounded-xl">
      <v-card-title>Team Members</v-card-title>
      <v-list>
        <v-list-item
          v-for="user in users"
          :key="user.name"
          :title="user.name"
          :subtitle="user.role"
        >
          <template #prepend>
            <v-avatar>
              <v-img :src="user.avatar" />
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
const users = [
  { name: 'Alice', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Bob', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Charlie', role: 'Project Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
]
</script>
