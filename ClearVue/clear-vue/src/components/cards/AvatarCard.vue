<template>
  <div class="profile-card">
    <img src="https://i.pravatar.cc/100" alt="Avatar" class="avatar" />
    <h3>Jane Doe</h3>
    <p>Frontend Developer</p>
    <button>Follow</button>
  </div>
</template>

<style scoped>
.profile-card {
  width: 280px;
  padding: 1.5em;
  margin: 1em auto;
  text-align: center;
  background: grey;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.12);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1em;
  border: 2px solid #42b883;
}

button {
  padding: 0.5em 1em;
  margin-top: 1em;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}
</style>
