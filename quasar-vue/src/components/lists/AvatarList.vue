<!-- src/components/lists/AvatarList.vue -->
<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">List with Avatars (Quasar)</div>
    </q-card-section>
    <q-list bordered padding>
      <q-item v-for="m in members" :key="m.name">
        <q-item-section side>
          <q-avatar :src="m.avatar" />
        </q-item-section>
        <q-item-section>
          <div class="text-subtitle2">{{ m.name }}</div>
          <div class="text-caption text-grey">{{ m.role }}</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
const members = [
  { name: 'Jan Kowalski', role: 'Frontend', avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Ola Nowak', role: 'Designer', avatar: 'https://i.pravatar.cc/40?img=5' },
  { name: 'Piotr Wiśniewski', role: 'Backend', avatar: 'https://i.pravatar.cc/40?img=7' },
  { name: 'Anna Kaczmarek', role: 'PM', avatar: 'https://i.pravatar.cc/40?img=8' }
]
</script>

<style scoped>
.my-card {
  max-width: 500px;
  margin: 1rem auto;
}
</style>
