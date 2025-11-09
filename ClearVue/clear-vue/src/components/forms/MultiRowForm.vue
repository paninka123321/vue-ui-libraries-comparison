<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  gender: '',
  age: null
})

const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!form.value.firstName) errors.value.firstName = 'Imię jest wymagane'
  if (!form.value.lastName) errors.value.lastName = 'Nazwisko jest wymagane'
  if (!form.value.gender) errors.value.gender = 'Wybierz płeć'
  if (!form.value.age || form.value.age < 1) errors.value.age = 'Podaj poprawny wiek'
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert(`Wysłano formularz:\n${JSON.stringify(form.value, null, 2)}`)
    form.value = { firstName: '', lastName: '', gender: '', age: null }
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Dane osobowe</h2>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="form-group">
          <label>Imię:</label>
          <input v-model="form.firstName" type="text" />
          <span class="error" v-if="errors.firstName">{{ errors.firstName }}</span>
        </div>
        <div class="form-group">
          <label>Nazwisko:</label>
          <input v-model="form.lastName" type="text" />
          <span class="error" v-if="errors.lastName">{{ errors.lastName }}</span>
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label>Płeć:</label>
          <select v-model="form.gender">
            <option value="">Wybierz</option>
            <option value="Kobieta">Kobieta</option>
            <option value="Mężczyzna">Mężczyzna</option>
            <option value="Inna">Inna</option>
          </select>
          <span class="error" v-if="errors.gender">{{ errors.gender }}</span>
        </div>

        <div class="form-group">
          <label>Wiek:</label>
          <input v-model.number="form.age" type="number" min="1" />
          <span class="error" v-if="errors.age">{{ errors.age }}</span>
        </div>
      </div>

      <button type="submit">Zapisz</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.row {
  display: flex;
  gap: 1em;
}
.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}
input, select {
  padding: 0.5em;
}
.error {
  color: red;
  font-size: 0.85em;
}
button {
  margin-top: 1em;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6em 1.2em;
  cursor: pointer;
}
button:hover {
  background: #369870;
}
</style>
