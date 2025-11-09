<script setup>
import { ref } from 'vue'

// Dane formularza
const form = ref({
  name: '',
  email: '',
  role: ''
})

// Prosta walidacja
const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!form.value.name) errors.value.name = 'Name is required'
  if (!form.value.email) errors.value.email = 'Email is required'
  if (!form.value.role) errors.value.role = 'Role is required'
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert(`Form submitted!\nName: ${form.value.name}\nEmail: ${form.value.email}\nRole: ${form.value.role}`)
    // Reset formularza
    form.value = { name: '', email: '', role: '' }
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Example Vue Form</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="form.name" type="text" placeholder="Enter your name" />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" placeholder="Enter your email" />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="role">Role:</label>
        <select id="role" v-model="form.role">
          <option value="" disabled>Select role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
        <span class="error" v-if="errors.role">{{ errors.role }}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.3em;
}

input, select {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  padding: 0.6em 1.2em;
  background-color: #42b883;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.error {
  color: red;
  font-size: 0.9em;
}
</style>
