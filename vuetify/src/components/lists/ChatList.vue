<template>
  <v-container class="pa-4">
    <v-list>
      <v-list-item
        v-for="message in messages"
        :key="message.id"
        :title="message.name"
        :subtitle="message.text"
      >
        <template v-slot:prepend>
          <v-avatar>
            <v-img :src="message.avatar"></v-img>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-badge
            v-if="message.unread"
            dot
            color="primary"
          ></v-badge>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
const message = [
  { id: 1, name: 'Alice', text: 'Hey, are we meeting today?', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', unread: true },
  { id: 2, name: 'Bob', text: 'Project update: Done!', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', unread: false },
  { id: 3, name: 'Charlie', text: 'Let’s catch up later.', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', unread: true }
]
</script>
