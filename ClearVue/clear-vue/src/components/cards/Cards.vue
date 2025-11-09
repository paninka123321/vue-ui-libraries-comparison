<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!email.value) errors.value.email = 'Email is required'
  if (!password.value) errors.value.password = 'Password is required'
  return Object.keys(errors.value).length === 0
}

const handleLogin = () => {
  if (validate()) {
    alert(`Logging in with:\nEmail: ${email.value}\nPassword: ${password.value}`)
    email.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="login-card">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="Enter your email" />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" placeholder="Enter your password" />
        <span class="error" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-card {
  width: 320px;
  margin: 2em auto;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background-color: grey;
  text-align: center;
}

h2 {
  margin-bottom: 1.5em;
  color: #42b883;
}

.form-group {
  margin-bottom: 1em;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.3em;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.6em;
  margin-top: 1em;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.error {
  color: red;
  font-size: 0.85em;
}
</style>
