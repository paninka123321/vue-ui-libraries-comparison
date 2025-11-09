<script setup>
const members = [
  { name: 'Jan Kowalski', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Ola Nowak', role: 'Designer', avatar: 'https://i.pravatar.cc/40?img=5' },
  { name: 'Piotr Wiśniewski', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/40?img=7' },
  { name: 'Anna Kaczmarek', role: 'Project Manager', avatar: 'https://i.pravatar.cc/40?img=8' }
]
</script>

<template>
  <ul class="avatar-list">
    <li v-for="m in members" :key="m.name">
      <img :src="m.avatar" alt="avatar" class="avatar" />
      <div class="info">
        <div class="name">{{ m.name }}</div>
        <div class="role">{{ m.role }}</div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.avatar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.avatar-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid #eee;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.name {
  font-weight: 600;
}
.role {
  font-size: 0.85rem;
  color: #777;
}
</style>
