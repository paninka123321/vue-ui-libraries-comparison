<template>
  <q-card class="my-card p-4">
    <div class="text-h6 mb-4">Basic Form (Quasar)</div>
    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Name" :error="!!errors.name" :error-message="errors.name" />
      <q-input filled v-model="form.email" label="Email" type="email" :error="!!errors.email" :error-message="errors.email" />
      <q-select filled v-model="form.role" label="Role" :options="roles" :error="!!errors.role" :error-message="errors.role" />
      <q-btn label="Submit" type="submit" color="primary" class="full-width" />
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', role: '' })
const errors = reactive({})
const roles = ['Admin', 'User', 'Guest']

const validate = () => {
  errors.name = form.name ? '' : 'Name required'
  errors.email = form.email ? '' : 'Email required'
  errors.role = form.role ? '' : 'Role required'
  return !errors.name && !errors.email && !errors.role
}

const handleSubmit = () => {
  if (validate()) alert(JSON.stringify(form, null, 2))
}
</script>

<style scoped>
.my-card { max-width: 400px; margin: 1rem auto; }
</style>
