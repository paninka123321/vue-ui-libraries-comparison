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
  <q-card class="login-card">
    <q-card-section>
      <div class="text-h6">Login</div>
      <q-form @submit.prevent="handleLogin">
        <q-input
          filled
          v-model="email"
          label="Email"
          type="email"
          :error="!!errors.email"
          :error-message="errors.email"
          class="q-mb-md"
        />

        <q-input
          filled
          v-model="password"
          label="Password"
          type="password"
          :error="!!errors.password"
          :error-message="errors.password"
          class="q-mb-md"
        />

        <q-btn label="Login" type="submit" color="primary" class="full-width" />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.login-card {
  width: 320px;
  margin: 2em auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  padding: 2em;
}
</style>
