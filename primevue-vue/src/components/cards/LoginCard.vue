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
  <Card class="login-card">
    <template #title>Login</template>
    <template #content>
      <form @submit.prevent="handleLogin" class="p-fluid">
        <div class="field">
          <label for="email">Email</label>
          <InputText id="email" v-model="email" placeholder="Enter your email" class="input-field" />
          <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
        </div>

        <div class="field">
          <label for="password">Password</label>
          <Password
            id="password"
            v-model="password"
            placeholder="Enter your password"
            toggleMask
            inputClass="input-field"
            promptLabel="Enter a password"
            weakLabel="Weak"
            mediumLabel="Medium"
            strongLabel="Strong"
          />
          <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
        </div>

        <Button label="Login" class="p-mt-3 w-full" type="submit" />
      </form>
    </template>
  </Card>
</template>

<style scoped>
.login-card {
  width: 320px;
  margin: 2em auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  padding: 2em;
  color: #333;
}

.field {
  margin-bottom: 1.2em;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4em;
}

/* Ujednolicenie szerokości pól */
.input-field {
  width: 100% !important;
  box-sizing: border-box;
}

/* Wyrównanie Password i InputText */
:deep(.p-password) {
  width: 100%;
}
:deep(.p-password-input) {
  width: 100% !important;
}

/* 🔧 Styl dla okienka siły hasła */
:deep(.p-password-panel) {
  font-size: 0.8rem;
  padding: 0.5em 0.8em !important;
  width: 100% !important;
  max-width: 280px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Pasek siły hasła – mniejszy i bardziej subtelny */
:deep(.p-password-meter) {
  height: 6px !important;
  border-radius: 3px;
}

/* Przyciski */
.p-button {
  border-radius: 6px;
  font-weight: 600;
}
</style>
