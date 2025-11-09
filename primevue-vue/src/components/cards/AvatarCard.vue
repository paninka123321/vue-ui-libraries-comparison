<template>
  <Card class="profile-card">
    <template #header>
      <img src="https://i.pravatar.cc/100" alt="Avatar" class="avatar" />
    </template>

    <template #content>
      <h3>Jane Doe</h3>
      <p>Frontend Developer</p>
      <Button label="Follow" class="p-button-success p-mt-2" />
    </template>
  </Card>
</template>

<style scoped>
.profile-card {
  width: 280px;
  margin: 2em auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  text-align: center;
  padding: 1.5em;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #42b883;
  margin: 1em auto 0.5em;
  display: block;
}

h3 {
  margin-top: 0.5em;
  color: #333;
}

p {
  color: #666;
  margin-bottom: 1em;
}
</style>
