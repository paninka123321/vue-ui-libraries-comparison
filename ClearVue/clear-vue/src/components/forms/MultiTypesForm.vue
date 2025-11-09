<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  password: '',
  birthdate: '',
  gender: '',
  newsletter: false
})

const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!form.value.username) errors.value.username = 'Podaj nazwę użytkownika'
  if (!form.value.password || form.value.password.length < 6)
    errors.value.password = 'Hasło musi mieć min. 6 znaków'
  if (!form.value.birthdate) errors.value.birthdate = 'Podaj datę urodzenia'
  if (!form.value.gender) errors.value.gender = 'Wybierz płeć'
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert('Zarejestrowano użytkownika:\n' + JSON.stringify(form.value, null, 2))
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Rejestracja</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Nazwa użytkownika</label>
        <input v-model="form.username" type="text" />
        <span class="error" v-if="errors.username">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label>Hasło</label>
        <input v-model="form.password" type="password" />
        <span class="error" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label>Data urodzenia</label>
        <input v-model="form.birthdate" type="date" />
        <span class="error" v-if="errors.birthdate">{{ errors.birthdate }}</span>
      </div>

      <div class="form-group">
        <label>Płeć</label>
        <div class="inline-group">
          <label><input type="radio" value="Kobieta" v-model="form.gender" /> Kobieta</label>
          <label><input type="radio" value="Mężczyzna" v-model="form.gender" /> Mężczyzna</label>
          <label><input type="radio" value="Inna" v-model="form.gender" /> Inna</label>
        </div>
        <span class="error" v-if="errors.gender">{{ errors.gender }}</span>
      </div>

      <div class="form-group">
        <label><input type="checkbox" v-model="form.newsletter" /> Zapisz mnie do newslettera</label>
      </div>

      <button type="submit">Zarejestruj</button>
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
.inline-group {
  display: flex;
  gap: 1em;
}
.error {
  color: red;
  font-size: 0.85em;
}
button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
}
</style>
