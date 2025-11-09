<template>
  <v-card class="mx-auto my-4" max-width="320" elevation="8">
    <v-card-title class="justify-center">Login</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          :error-messages="errors.email"
          outlined
          dense
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :error-messages="errors.password"
          outlined
          dense
        />
        <v-btn color="success" type="submit" block class="mt-4">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!email.value) errors.value.email = ['Email is required']
  if (!password.value) errors.value.password = ['Password is required']
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