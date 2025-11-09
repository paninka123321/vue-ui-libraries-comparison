<template>
  <q-card class="profile-card">
    <q-card-section class="q-pa-none">
      <q-avatar size="90px" class="avatar">
        <img src="https://i.pravatar.cc/100" alt="Avatar"/>
      </q-avatar>
    </q-card-section>

    <q-card-section>
      <div class="text-h6">Jane Doe</div>
      <p>Frontend Developer</p>
      <q-btn label="Follow" color="green" class="q-mt-sm" />
    </q-card-section>
  </q-card>
</template>

<style scoped>
.profile-card {
  width: 280px;
  margin: 2em auto;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  text-align: center;
  padding: 1.5em;
}

.avatar {
  border: 3px solid #42b883;
  margin: 1em auto 0.5em;
}

p {
  color: #666;
  margin-bottom: 1em;
}
</style>
