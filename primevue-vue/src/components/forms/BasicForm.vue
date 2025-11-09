<template>
  <div class="card p-5 shadow-2 border-round-lg max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4 text-primary text-center">Basic Form</h2>

    <form @submit.prevent="handleSubmit" class="flex flex-column gap-4">
      <div class="field">
        <label for="name" class="font-medium mb-2 block">Name</label>
        <InputText id="name" v-model="form.name" placeholder="Enter your name" class="w-full" />
        <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
      </div>

      <div class="field">
        <label for="email" class="font-medium mb-2 block">Email</label>
        <InputText id="email" v-model="form.email" placeholder="Enter your email" class="w-full" />
        <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
      </div>

      <div class="field">
        <label for="role" class="font-medium mb-2 block">Role</label>
        <Dropdown
          id="role"
          v-model="form.role"
          :options="roles"
          placeholder="Select role"
          class="w-full"
        />
        <small v-if="errors.role" class="p-error">{{ errors.role }}</small>
      </div>

      <div class="flex justify-content-end mt-3">
        <Button label="Submit" type="submit" class="p-button-success px-5 py-2" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const form = ref({ name: '', email: '', role: '' })
const errors = ref({})
const roles = ['Admin', 'User', 'Guest']

const validate = () => {
  const e = {}
  if (!form.value.name) e.name = 'Name is required'
  if (!form.value.email) e.email = 'Email is required'
  if (!form.value.role) e.role = 'Role is required'
  errors.value = e
  return Object.keys(e).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert(`Submitted:\n${JSON.stringify(form.value, null, 2)}`)
    form.value = { name: '', email: '', role: '' }
  }
}
</script>

<style scoped>
.max-w-md {
  max-width: 450px;
}
.mx-auto {
  margin: 0 auto;
}
</style>
